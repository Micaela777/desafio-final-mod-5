export function initTitleComponent() {

    class Titulo extends HTMLElement {
        constructor() {
            super();
            this.render()
        };
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.innerHTML = `
              <h1 class="titulo"> Piedra Papel <span class="letraO">ó</span> Tijera </h1>
            `;

            const style = document.createElement('style');

            style.innerHTML = `
              .titulo{
                  max-width: 275px;
                  font-size: 63px;
                  font-weight: 400;
                  font-family: 'Faster One', cursive;
                  color: #F5DB50; 
              }
              @media (min-width: 769px){
                .titulo{
                    padding-top: 18px;
                }
              }

               .letraO {
                  opacity: 0.5;
              }
        `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-title', Titulo);
};