import { state } from "../../src/state/state";

export function initResultsPage(params) {

    const ganarImg = require("url:./../../img/ganaste.png");
    const perderImg = require("url:./../../img/perdiste.png");
    const empateImg = require("url:./../../img/empate.png");

    // Traer los puntajes del State 
    const currentState = state.getState();
    const playerScore = currentState.playHistory.player;
    const computerScore = currentState.playHistory.computer;
    const result = currentState.playHistory.result;

    const div = document.createElement('div');
    div.className = "results-section"
    div.innerHTML = `
    <div class="results">
        <img class="ganar-img" src="${ganarImg}">
        <img class="perder-img" src="${perderImg}">
        <img class="empate-img" src="${empateImg}">
        <div class="score-container">
             <h2 class="score-title">Score</h2>
             <h4 class="player-score">Tú: ${playerScore}</h4>
             <h4 class="computer-score">Máquina: ${computerScore}</h4>
        </div>
        <div class="buttons-container">
            <custom-button class="back-button">Volver a jugar</custom-button>
            <custom-button class="exit-button">Salir</custom-button>
        </div>
    </div>
    `;

    const style = document.createElement('style');
    style.innerHTML = `
        .results-section{
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .results{
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .ganar-img{
            display: none;
            height: 200px;
        }

        .perder-img{
            display: none;
            height: 200px;
        }

        .empate-img{
            display: none;
            height: 200px;
        }
    
        .score-container{
            height: 145px;
            width: 229px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 34px;
            border-radius: 29px;
            font-family: 'Baloo 2', cursive;
            background-color: #FAFAFA;
        }

        .score-title{
            margin: 0px;
            text-align: center;
            font-size: 27px;
        }

        .player-score{
            margin: 5px 0px 0px 28px;
            font-size: 20px;
        }

        .computer-score{
            margin: 0px 0px 5px 28px;
            font-size: 20px;
        }

        .buttons-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }
      `;

    div.appendChild(style);

    const results = div.querySelector('.results') as any;
    const winImg = div.querySelector('.ganar-img') as any;
    const loseImg = div.querySelector('.perder-img') as any;
    const tieImg = div.querySelector('.empate-img') as any;

    if (result == "Ganaste") {
        winImg.style.display = 'flex';
        results.style.backgroundColor = '#328383';

    } else if (result == "Perdiste") {
        loseImg.style.display = 'flex';
        results.style.backgroundColor = '#A73E3A';

    } else if (result == "Empataste") {
        tieImg.style.display = "flex"
        results.style.backgroundColor = '#384298';
    };

    const playAgainButtonEl = div.querySelector('.back-button') as any;
    playAgainButtonEl.addEventListener('click', () => {
        params.goTo('/instructions');
    });

    const exitButton = div.querySelector('.exit-button') as any;
    exitButton.addEventListener('click', () => {
        state.setState({
            ...currentState,
            playHistory: {
                player: 0,
                computer: 0,
                result: "",
            },
        });
        params.goTo('/welcome');
    });

    return div;
};