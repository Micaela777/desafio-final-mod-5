import { } from "../../../src/state/state"

export function initScissorsHandComponent() {

    const scissorsImg = require("url:../../../img/tijerita.png");

    class Scissors extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "scissors";
            div.innerHTML = `
              <img class="scissors-img" src="${scissorsImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `

            .scissors{
                display: flex;
            }

            .scissors-img{
                height: 159px;
                width: 53px;
                object-position: 0px 50px;
            }
            @media (min-width: 769px){
                .scissors-img{
                    height: 185px;
                    width: 60px;
                    object-position: 0px 70px;
                }
              }
          `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-scissors', Scissors);
};