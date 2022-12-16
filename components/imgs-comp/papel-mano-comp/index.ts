export function initPaperHandComponent() {

    const paperImg = require("url:../../../img/papelito.png");

    class Paper extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "paper";
            div.innerHTML = `
              <img class="paper-img" src="${paperImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `

            .paper{
                display: flex;
            }

            .paper-img{
                height: 145px;
                width: 61px;
                object-position: 0px 40px;
            }
            @media (min-width: 769px){
                .paper-img{
                    height: 168px;
                    width: 69px;
                    object-position: 0px 60px;
                }
              }
          `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-paper', Paper);
};