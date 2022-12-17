export function initInstructionsPage(params) {

    const div = document.createElement('div');
    div.className = "instructions-section"
    div.innerHTML = `
        <custom-instructions>
           Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 5 segundos.
        </custom-instructions>
        <custom-button class="start-button">¡Jugar!</custom-button>
        <div class="hands-comp">
            <custom-scissors class="lala"></custom-scissors>
            <custom-rock></custom-rock>
            <custom-paper></custom-paper>
        </div>
    `;

    const style = document.createElement('style');
    style.innerHTML = `
        .instructions-section{
            height: 100vh;
            padding-top: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: #562F6F;
        }
        @media (min-width: 769px){
            .instructions-section{
                padding-top: 20px;
            }
          }

        .hands-comp{
            display: flex;
            align-items: end;
            gap: 55px;
        }
      `;

    div.appendChild(style);

    const startButtonEl = div.querySelector('.start-button') as any;
    startButtonEl.addEventListener('click', () => {
        params.goTo("/play")
    });

    return div;
};