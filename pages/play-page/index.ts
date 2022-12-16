
import { state } from "../../src/state/state";

export function initPlayPage(params) {

    let counter = 5;

    const intervalId = setInterval(() => {
        counter--;
        if (counter < 1) {
            clearInterval(intervalId);
            params.goTo('/instructions');
        };
    }, 1000);

    const div = document.createElement('div');
    div.className = "play-section";
    div.innerHTML = `
       <div class="computer-hands-comp">
           <custom-scissors class="computer-scissors"></custom-scissors>
           <custom-rock class="computer-rock"></custom-rock>
           <custom-paper class="computer-paper"></custom-paper>
       </div>

       <custom-countdown class="countdown"></custom-countdown>

       <div class="player-hands-comp">
           <custom-scissors class="player-scissors"></custom-scissors>
           <custom-rock class="player-rock"></custom-rock>
           <custom-paper class="player-paper"></custom-paper>
       </div>
    `;

    const style = document.createElement('style');
    style.innerHTML = `
        .play-section{
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-color: #562F6F;
        }

        .computer-scissors{
            display: none;
            align-items: start;
            transform: rotate(180deg);
        }

        .computer-rock{
            display: none;
            align-items: start;
            transform: rotate(180deg);
        }

        .computer-paper{
            display: none;
            align-items: start;
            transform: rotate(180deg);
        }

        .player-hands-comp{
            display: flex;
            align-items: end;
            overflow: auto;
            gap: 55px;
        }

        .player-scissors:hover{
            cursor: pointer;
            transform: translateY(-1px);
            transition: all 0.1s;
        }

        .player-rock:hover{
            cursor: pointer;
            transform: translateY(-1px);
            transition: all 0.1s;
        }

        .player-paper:hover{
            cursor: pointer;
            transform: translateY(-1px);
            transition: all 0.1s;
        }
      `;

    div.appendChild(style);

    const countdownComponent = div.querySelector('.countdown') as HTMLElement;

    const computerScissorsComponent = div.querySelector('.computer-scissors') as HTMLElement;
    const computerScissorsComponentImg = computerScissorsComponent.shadowRoot.querySelector('.scissors-img') as HTMLElement;
    computerScissorsComponentImg.style.height = '279px';
    computerScissorsComponentImg.style.width = '87px';
    computerScissorsComponentImg.style.objectPosition = '0px 43px';

    const computerRockComponent = div.querySelector('.computer-rock') as HTMLElement;
    const computerRockComponentImg = computerRockComponent.shadowRoot.querySelector('.rock-img') as HTMLElement;
    computerRockComponentImg.style.height = '279px';
    computerRockComponentImg.style.width = '98px';
    computerRockComponentImg.style.objectPosition = '0px 43px';

    const computerPaperComponent = div.querySelector('.computer-paper') as HTMLElement;
    const computerPaperComponentImg = computerPaperComponent.shadowRoot.querySelector('.paper-img') as HTMLElement;
    computerPaperComponentImg.style.height = '279px';
    computerPaperComponentImg.style.width = '110px';
    computerPaperComponentImg.style.objectPosition = '0px 43px';


    // Estilos para el componente -- Tijeras --
    const scissorsComponent = div.querySelector('.player-scissors') as HTMLElement;
    const scissorsComponentImg = scissorsComponent.shadowRoot.querySelector('.scissors-img') as HTMLElement;
    scissorsComponentImg.style.height = '229px';
    scissorsComponentImg.style.width = '74px';

    const removeScissorsClick = () => {
        state.setMove("tijeras");
        scissorsComponentImg.style.objectPosition = '0px 43px';
        scissorsComponentImg.style.transition = 'all 0.2s ease-out';

        // Acá se le baja opacidad a los elementos no elegidos
        rockComponent.style.opacity = '0.4';
        paperComponent.style.opacity = '0.4';

        setTimeout(() => {
            if (state.data.currentGame.computerPlay == "tijeras") {
                computerScissorsComponent.style.display = 'flex';
            } else if (state.data.currentGame.computerPlay == "piedra") {
                computerRockComponent.style.display = 'flex';
            } else if (state.data.currentGame.computerPlay == "papel") {
                computerPaperComponent.style.display = 'flex';
            };

            countdownComponent.style.display = 'none';
            rockComponent.style.display = 'none';
            paperComponent.style.display = 'none';

            scissorsComponentImg.style.height = '279px';
            scissorsComponentImg.style.width = '87px';
        }, 800);

        clearInterval(intervalId);
        setTimeout(() => {
            params.goTo('/results');
        }, 2500);
        scissorsComponentImg.removeEventListener('click', removeScissorsClick);
        scissorsComponent.style.cursor = 'default';
        scissorsComponent.style.transform = 'unset';
        rockComponentImg.removeEventListener("click", removeRockClick);
        rockComponent.style.cursor = 'default';
        rockComponent.style.transform = 'unset';
        paperComponentImg.removeEventListener('click', removePaperClick);
        paperComponent.style.cursor = 'default';
        paperComponent.style.transform = 'unset';
    }
    scissorsComponentImg.addEventListener('click', removeScissorsClick);


    // Estilos para el componente -- Piedra --
    const rockComponent = div.querySelector('.player-rock') as HTMLElement;
    const rockComponentImg = rockComponent.shadowRoot.querySelector('.rock-img') as HTMLElement;
    rockComponentImg.style.height = '211px';
    rockComponentImg.style.width = '78px';

    const removeRockClick = () => {
        state.setMove("piedra");
        rockComponentImg.style.objectPosition = '0px 43px';
        rockComponentImg.style.transition = 'all 0.2s ease-out';

        // Acá se le baja opacidad a los elementos no elegidos
        scissorsComponent.style.opacity = '0.4';
        paperComponent.style.opacity = '0.4';

        setTimeout(() => {
            if (state.data.currentGame.computerPlay == "tijeras") {
                computerScissorsComponent.style.display = 'flex';
            } else if (state.data.currentGame.computerPlay == "piedra") {
                computerRockComponent.style.display = 'flex';
            } else if (state.data.currentGame.computerPlay == "papel") {
                computerPaperComponent.style.display = 'flex';
            };

            countdownComponent.style.display = 'none';
            scissorsComponent.style.display = 'none';
            paperComponent.style.display = 'none';

            rockComponentImg.style.height = '279px';
            rockComponentImg.style.width = '98px';
        }, 800);
        clearInterval(intervalId);
        setTimeout(() => {
            params.goTo('/results');
        }, 2500);
        rockComponentImg.removeEventListener('click', removeRockClick);
        rockComponent.style.cursor = 'default';
        rockComponent.style.transform = 'unset';
        scissorsComponentImg.removeEventListener('click', removeScissorsClick);
        scissorsComponent.style.cursor = 'default';
        scissorsComponent.style.transform = 'unset';
        paperComponentImg.removeEventListener('click', removePaperClick);
        paperComponent.style.cursor = 'default';
        paperComponent.style.transform = 'unset';
    };
    rockComponentImg.addEventListener('click', removeRockClick);

    // Estilos para el componente -- Papel --
    const paperComponent = div.querySelector('.player-paper') as HTMLElement;
    const paperComponentImg = paperComponent.shadowRoot.querySelector('.paper-img') as HTMLElement;
    paperComponentImg.style.height = '211px';
    paperComponentImg.style.width = '86px';

    const removePaperClick = () => {
        state.setMove("papel");
        paperComponentImg.style.objectPosition = '0px 32px';
        paperComponentImg.style.transition = 'all 0.2s ease-out';

        // Acá se le baja opacidad a los elementos no elegidos
        scissorsComponent.style.opacity = '0.4';
        rockComponent.style.opacity = '0.4';

        setTimeout(() => {
            if (state.data.currentGame.computerPlay == "tijeras") {
                computerScissorsComponent.style.display = 'flex';
            } else if (state.data.currentGame.computerPlay == "piedra") {
                computerRockComponent.style.display = 'flex';
            } else if (state.data.currentGame.computerPlay == "papel") {
                computerPaperComponent.style.display = 'flex';
            };

            countdownComponent.style.display = 'none';
            scissorsComponent.style.display = 'none';
            rockComponent.style.display = 'none';

            paperComponentImg.style.height = '279px';
            paperComponentImg.style.width = '110px';
        }, 800);
        clearInterval(intervalId);
        setTimeout(() => {
            params.goTo('/results');
        }, 2500);
        paperComponentImg.removeEventListener('click', removePaperClick);
        paperComponent.style.cursor = 'default';
        paperComponent.style.transform = 'unset';
        scissorsComponentImg.removeEventListener('click', removeScissorsClick);
        scissorsComponent.style.cursor = 'default';
        scissorsComponent.style.transform = 'unset';
        rockComponentImg.removeEventListener("click", removeRockClick);
        rockComponent.style.cursor = 'default';
        rockComponent.style.transform = 'unset';
    };
    paperComponentImg.addEventListener('click', removePaperClick);

    return div;
};