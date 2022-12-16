export function initBotonComponent() {

    class Boton extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const button = document.createElement('button');
            button.className = "boton";
            button.textContent = this.textContent;

            const style = document.createElement('style');

            style.innerHTML = `
            .boton{
                padding: 8px 87px;
                font-size: 27px;
                border: none;
                border-radius: 50px;
                font-family: 'Baloo 2', cursive;
                color: #FFFFFF;
                background-color: #0B1125;
            }

            .boton:active{
                background-color: #0a0820;
            }
            
            @media (min-width: 769px){
                .boton:hover{
                    cursor: pointer;
                    background-color: #0a0820;
                }
              }
          `;

            shadow.appendChild(button);
            shadow.appendChild(style);

        };
    };
    customElements.define('custom-button', Boton);
};