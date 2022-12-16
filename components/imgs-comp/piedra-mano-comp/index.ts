export function initRockHandComponent() {

    const rockImg = require("url:../../../img/piedrita.png");

    class Rock extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "rock";
            div.innerHTML = `
              <img class="rock-img" src="${rockImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `

            .rock{
                display: flex;
            }

            .rock-img{
                height: 148px;
                width: 52px;
                object-position: 0px 50px;
            }
            @media (min-width: 769px){
                .rock-img{
                    height: 169px;
                    width: 62px;
                    object-position: 0px 70px;
                }
              }
          `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-rock', Rock);
};