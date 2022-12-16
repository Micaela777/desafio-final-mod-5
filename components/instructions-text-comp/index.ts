export function initInstructionsTextComponent() {

    class Instructions extends HTMLElement {
        constructor() {
            super();
            this.render()
        };
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const h4 = document.createElement('h4');
            h4.className = "instructions"

            const style = document.createElement('style');

            style.innerHTML = `
              .instructions{
                  max-width: 293px;
                  margin: 65px 0px 42px 0px;
                  text-align: center;
                  font-size: 30px;
                  font-family: 'Baloo 2', cursive;
                  color: #FFEE96;
              }
        `;

            h4.textContent = this.textContent;
            shadow.appendChild(h4);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-instructions', Instructions);
};