
type Jugada = "piedra" | "papel" | "tijeras";

const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: "",
        },
        playHistory: {
            player: 0,
            computer: 0,
            result: ""

        },
    },

    init() {
        const localData: any = localStorage.getItem("saved-play");
        if (!localData) {
            return;
        };
        this.setState(JSON.parse(localData));
    },

    aleatoryMoveForComputer() {
        const moves = ["piedra", "papel", "tijeras"];
        const randomMove = Math.floor(Math.random() * 3);
        return moves[randomMove];
    },

    setMove(move: Jugada) {
        const currentState = this.getState();

        const computerAleatoryMovements = this.aleatoryMoveForComputer();

        currentState.currentGame.myPlay = move;
        currentState.currentGame.computerPlay = computerAleatoryMovements;

        this.whoWins(move, computerAleatoryMovements);
    },

    whoWins(myPlay: Jugada, computerPlay: Jugada) {

        const jugadasGanadas = [
            myPlay == "piedra" && computerPlay == "tijeras",
            myPlay == "papel" && computerPlay == "piedra",
            myPlay == "tijeras" && computerPlay == "papel",
        ];
        if (jugadasGanadas.includes(true)) {
            return this.pushToHistory("Juego ganado");
        };

        const jugadasPerdidas = [
            myPlay == "tijeras" && computerPlay == "piedra",
            myPlay == "piedra" && computerPlay == "papel",
            myPlay == "papel" && computerPlay == "tijeras",
        ];
        if (jugadasPerdidas.includes(true)) {
            return this.pushToHistory("Juego perdido");
        };

        const jugadasEmpatadas = [
            myPlay == "tijeras" && computerPlay == "tijeras",
            myPlay == "piedra" && computerPlay == "piedra",
            myPlay == "papel" && computerPlay == "papel",
        ];
        if (jugadasEmpatadas.includes(true)) {
            return this.pushToHistory("Juego empatado");
        };
    },

    pushToHistory(jugada) {
        const currentState = this.getState();
        const playerScore = currentState.playHistory.player;
        const computerScore = currentState.playHistory.computer;

        if (jugada == "Juego ganado") {
            this.setState({
                ...currentState,
                playHistory: {
                    player: playerScore + 1,
                    computer: computerScore,
                    result: "Ganaste",
                },
            });
        };

        if (jugada == "Juego perdido") {
            this.setState({
                ...currentState,
                playHistory: {
                    player: playerScore,
                    computer: computerScore + 1,
                    result: "Perdiste",
                },
            });
        };

        if (jugada == "Juego empatado") {
            this.setState({
                ...currentState,
                playHistory: {
                    player: playerScore,
                    computer: computerScore,
                    result: "Empataste",
                },
            });
        };
    },

    getState() {
        return this.data;
    },

    setState(newState) {
        this.data = newState;
        localStorage.setItem("saved-play", JSON.stringify(newState));
    },
};

export { state };