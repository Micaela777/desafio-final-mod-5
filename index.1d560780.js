function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},o=t.parcelRequire7d1f;function r(){class e extends HTMLElement{constructor(){super(),this.render()}render(){var e=this.attachShadow({mode:"open"});const t=document.createElement("div");t.innerHTML='\n              <h1 class="titulo"> Piedra Papel <span class="letraO">ó</span> Tijera </h1>\n            ';const n=document.createElement("style");n.innerHTML="\n              .titulo{\n                  max-width: 275px;\n                  font-size: 63px;\n                  font-weight: 400;\n                  font-family: 'Faster One', cursive;\n                  color: #F5DB50; \n              }\n              @media (min-width: 769px){\n                .titulo{\n                    padding-top: 18px;\n                }\n              }\n\n               .letraO {\n                  opacity: 0.5;\n              }\n        ",e.appendChild(t),e.appendChild(n)}}customElements.define("custom-title",e)}function i(){class e extends HTMLElement{constructor(){super(),this.render()}render(){var e=this.attachShadow({mode:"open"});const t=document.createElement("h4");t.className="instructions";const n=document.createElement("style");n.innerHTML="\n              .instructions{\n                  max-width: 293px;\n                  margin: 65px 0px 42px 0px;\n                  text-align: center;\n                  font-size: 30px;\n                  font-family: 'Baloo 2', cursive;\n                  color: #FFEE96;\n              }\n        ",t.textContent=this.textContent,e.appendChild(t),e.appendChild(n)}}customElements.define("custom-instructions",e)}function a(){class e extends HTMLElement{constructor(){super(),this.render()}render(){var e=this.attachShadow({mode:"open"});e.innerHTML='\n      <div class="countdown">\n          <div class="countdown-number"></div>\n          <svg class="svg">\n              <circle class="svg-circle" r="90" cx="140" cy="140"></circle>\n          </svg>\n      </div>\n    ';let t=5;var n=e.querySelector(".countdown-number");n.textContent=t;const s=setInterval((()=>{t--,t<2&&clearInterval(s),n.textContent=t}),1e3),o=document.createElement("style");o.innerHTML="\n\n      .countdown{\n        margin: 0 auto;\n      }\n\n      .countdown-number {\n        position: relative;\n        top: 169px;\n        font-weight: 400;\n        font-size: 72px;\n        text-align: center;\n        font-family: 'Faster One', cursive;\n        color: #F5DB50;\n      }\n      \n      .svg {\n        width: 260px;\n        height: 280px;\n        transform: rotateY(-180deg) rotateZ(-90deg);\n      }\n      \n      .svg-circle {\n        stroke-dasharray: 570px;\n        stroke-dashoffset: 0px;\n        stroke-linecap: round;\n        stroke-width: 19px;\n        stroke: #F5DB50;\n        fill: none;\n        animation: countdown 5s linear infinite forwards;\n      }\n      \n      @keyframes countdown {\n        from {\n          stroke-dashoffset: 0px;\n        }\n        to {\n          stroke-dashoffset: 580px;\n        }\n      }\n    ",e.appendChild(o)}}customElements.define("custom-countdown",e)}null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},t.parcelRequire7d1f=o),o.register("27Lyk",(function(t,n){var s,o;e(t.exports,"register",(()=>s),(e=>s=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var r={};s=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("67RYE",(function(e,t){e.exports=new URL(o("27Lyk").resolve("aLriC"),import.meta.url).toString()})),o.register("ihsFl",(function(e,t){e.exports=new URL(o("27Lyk").resolve("fxz4j"),import.meta.url).toString()})),o.register("b4VC4",(function(e,t){e.exports=new URL(o("27Lyk").resolve("mF33W"),import.meta.url).toString()})),o.register("bqoMe",(function(e,t){e.exports=new URL(o("27Lyk").resolve("7fSng"),import.meta.url).toString()})),o.register("kuBOM",(function(e,t){e.exports=new URL(o("27Lyk").resolve("jF8gK"),import.meta.url).toString()})),o.register("fFNX8",(function(e,t){e.exports=new URL(o("27Lyk").resolve("kg3g2"),import.meta.url).toString()})),o("27Lyk").register(JSON.parse('{"dZpbI":"index.1d560780.js","aLriC":"tijerita.66529c50.png","fxz4j":"piedrita.37a01fca.png","mF33W":"papelito.40f16915.png","7fSng":"ganaste.a2ba52eb.png","jF8gK":"perdiste.64ec9fc6.png","kg3g2":"empate.acf78768.png"}'));const c={data:{currentGame:{computerPlay:"",myPlay:""},playHistory:{player:0,computer:0,result:""}},init(){const e=localStorage.getItem("saved-play");e&&this.setState(JSON.parse(e))},aleatoryMoveForComputer:()=>["piedra","papel","tijeras"][Math.floor(3*Math.random())],setMove(e){const t=this.getState(),n=this.aleatoryMoveForComputer();t.currentGame.myPlay=e,t.currentGame.computerPlay=n,this.whoWins(e,n)},whoWins(e,t){if(["piedra"==e&&"tijeras"==t,"papel"==e&&"piedra"==t,"tijeras"==e&&"papel"==t].includes(!0))return this.pushToHistory("Juego ganado");if(["tijeras"==e&&"piedra"==t,"piedra"==e&&"papel"==t,"papel"==e&&"tijeras"==t].includes(!0))return this.pushToHistory("Juego perdido");return["tijeras"==e&&"tijeras"==t,"piedra"==e&&"piedra"==t,"papel"==e&&"papel"==t].includes(!0)?this.pushToHistory("Juego empatado"):void 0},pushToHistory(e){const t=this.getState(),n=t.playHistory.player,s=t.playHistory.computer;"Juego ganado"==e&&this.setState({...t,playHistory:{player:n+1,computer:s,result:"Ganaste"}}),"Juego perdido"==e&&this.setState({...t,playHistory:{player:n,computer:s+1,result:"Perdiste"}}),"Juego empatado"==e&&this.setState({...t,playHistory:{player:n,computer:s,result:"Empataste"}})},getState(){return this.data},setState(e){this.data=e,localStorage.setItem("saved-play",JSON.stringify(e))}};function l(){const e=o("67RYE");class t extends HTMLElement{constructor(){super(),this.render()}render(){var t=this.attachShadow({mode:"open"});const n=document.createElement("div");n.className="scissors",n.innerHTML=`\n              <img class="scissors-img" src="${e}">\n            `;const s=document.createElement("style");s.innerHTML="\n\n            .scissors{\n                display: flex;\n            }\n\n            .scissors-img{\n                height: 159px;\n                width: 53px;\n                object-position: 0px 50px;\n            }\n            @media (min-width: 769px){\n                .scissors-img{\n                    height: 185px;\n                    width: 60px;\n                    object-position: 0px 70px;\n                }\n              }\n          ",t.appendChild(n),t.appendChild(s)}}customElements.define("custom-scissors",t)}function p(){const e=o("ihsFl");class t extends HTMLElement{constructor(){super(),this.render()}render(){var t=this.attachShadow({mode:"open"});const n=document.createElement("div");n.className="rock",n.innerHTML=`\n              <img class="rock-img" src="${e}">\n            `;const s=document.createElement("style");s.innerHTML="\n\n            .rock{\n                display: flex;\n            }\n\n            .rock-img{\n                height: 148px;\n                width: 52px;\n                object-position: 0px 50px;\n            }\n            @media (min-width: 769px){\n                .rock-img{\n                    height: 169px;\n                    width: 62px;\n                    object-position: 0px 70px;\n                }\n              }\n          ",t.appendChild(n),t.appendChild(s)}}customElements.define("custom-rock",t)}function d(){const e=o("b4VC4");class t extends HTMLElement{constructor(){super(),this.render()}render(){var t=this.attachShadow({mode:"open"});const n=document.createElement("div");n.className="paper",n.innerHTML=`\n              <img class="paper-img" src="${e}">\n            `;const s=document.createElement("style");s.innerHTML="\n\n            .paper{\n                display: flex;\n            }\n\n            .paper-img{\n                height: 145px;\n                width: 61px;\n                object-position: 0px 40px;\n            }\n            @media (min-width: 769px){\n                .paper-img{\n                    height: 168px;\n                    width: 69px;\n                    object-position: 0px 60px;\n                }\n              }\n          ",t.appendChild(n),t.appendChild(s)}}customElements.define("custom-paper",t)}function u(){class e extends HTMLElement{constructor(){super(),this.render()}render(){var e=this.attachShadow({mode:"open"});const t=document.createElement("button");t.className="boton",t.textContent=this.textContent;const n=document.createElement("style");n.innerHTML="\n            .boton{\n                padding: 8px 87px;\n                font-size: 27px;\n                border: none;\n                border-radius: 50px;\n                font-family: 'Baloo 2', cursive;\n                color: #FFFFFF;\n                background-color: #0B1125;\n            }\n\n            .boton:active{\n                background-color: #0a0820;\n            }\n            \n            @media (min-width: 769px){\n                .boton:hover{\n                    cursor: pointer;\n                    background-color: #0a0820;\n                }\n              }\n          ",e.appendChild(t),e.appendChild(n)}}customElements.define("custom-button",e)}function m(){return location.host.includes("micaela777.github.io")}const y=[{path:/\/welcome/,component:function(e){const t=document.createElement("div");t.className="welcome-section",t.innerHTML='\n        <custom-title></custom-title>\n        <custom-button class="start-button">Empezar</custom-button>\n        <div class="hands-comp">\n            <custom-scissors></custom-scissors>\n            <custom-rock></custom-rock>\n            <custom-paper></custom-paper>\n        </div>\n    ';const n=document.createElement("style");return n.innerHTML="\n      .welcome-section{\n          height: 100vh;\n          padding-top: 30px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: space-between;\n          overflow: auto;\n          background-color: #562F6F;\n      }\n      @media (min-width: 769px){\n        .welcome-section{\n          padding-top: 15px;\n        }\n      }\n\n      .hands-comp{\n          display: flex;\n          align-items: end;\n          gap: 55px;\n    }\n    ",t.appendChild(n),t.querySelector(".start-button").addEventListener("click",(()=>{e.goTo("/instructions")})),t}},{path:/\/instructions/,component:function(e){const t=document.createElement("div");t.className="instructions-section",t.innerHTML='\n        <custom-instructions>\n           Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 5 segundos.\n        </custom-instructions>\n        <custom-button class="start-button">¡Jugar!</custom-button>\n        <div class="hands-comp">\n            <custom-scissors class="lala"></custom-scissors>\n            <custom-rock></custom-rock>\n            <custom-paper></custom-paper>\n        </div>\n    ';const n=document.createElement("style");return n.innerHTML="\n        .instructions-section{\n            height: 100vh;\n            padding-top: 16px;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: space-between;\n            background-color: #562F6F;\n        }\n        @media (min-width: 769px){\n            .instructions-section{\n                padding-top: 20px;\n            }\n          }\n\n        .hands-comp{\n            display: flex;\n            align-items: end;\n            gap: 55px;\n        }\n      ",t.appendChild(n),t.querySelector(".start-button").addEventListener("click",(()=>{e.goTo("/play")})),t}},{path:/\/play/,component:function(e){let t=5;const n=setInterval((()=>{t--,t<1&&(clearInterval(n),e.goTo("/instructions"))}),1e3),s=document.createElement("div");s.className="play-section",s.innerHTML='\n       <div class="computer-hands-comp">\n           <custom-scissors class="computer-scissors"></custom-scissors>\n           <custom-rock class="computer-rock"></custom-rock>\n           <custom-paper class="computer-paper"></custom-paper>\n       </div>\n\n       <custom-countdown class="countdown"></custom-countdown>\n\n       <div class="player-hands-comp">\n           <custom-scissors class="player-scissors"></custom-scissors>\n           <custom-rock class="player-rock"></custom-rock>\n           <custom-paper class="player-paper"></custom-paper>\n       </div>\n    ';const o=document.createElement("style");o.innerHTML="\n        .play-section{\n            height: 100vh;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            align-items: center;\n            background-color: #562F6F;\n        }\n\n        .computer-scissors{\n            display: none;\n            align-items: start;\n            transform: rotate(180deg);\n        }\n\n        .computer-rock{\n            display: none;\n            align-items: start;\n            transform: rotate(180deg);\n        }\n\n        .computer-paper{\n            display: none;\n            align-items: start;\n            transform: rotate(180deg);\n        }\n\n        .player-hands-comp{\n            display: flex;\n            align-items: end;\n            overflow: auto;\n            gap: 55px;\n        }\n\n        .player-scissors:hover{\n            cursor: pointer;\n            transform: translateY(-1px);\n            transition: all 0.1s;\n        }\n\n        .player-rock:hover{\n            cursor: pointer;\n            transform: translateY(-1px);\n            transition: all 0.1s;\n        }\n\n        .player-paper:hover{\n            cursor: pointer;\n            transform: translateY(-1px);\n            transition: all 0.1s;\n        }\n      ",s.appendChild(o);const r=s.querySelector(".countdown"),i=s.querySelector(".computer-scissors"),a=i.shadowRoot.querySelector(".scissors-img");a.style.height="279px",a.style.width="87px",a.style.objectPosition="0px 43px";const l=s.querySelector(".computer-rock"),p=l.shadowRoot.querySelector(".rock-img");p.style.height="279px",p.style.width="98px",p.style.objectPosition="0px 43px";const d=s.querySelector(".computer-paper"),u=d.shadowRoot.querySelector(".paper-img");u.style.height="279px",u.style.width="110px",u.style.objectPosition="0px 43px";const m=s.querySelector(".player-scissors"),y=m.shadowRoot.querySelector(".scissors-img");y.style.height="229px",y.style.width="74px";const h=()=>{c.setMove("tijeras"),y.style.objectPosition="0px 43px",y.style.transition="all 0.2s ease-out",x.style.opacity="0.4",v.style.opacity="0.4",setTimeout((()=>{"tijeras"==c.data.currentGame.computerPlay?i.style.display="flex":"piedra"==c.data.currentGame.computerPlay?l.style.display="flex":"papel"==c.data.currentGame.computerPlay&&(d.style.display="flex"),r.style.display="none",x.style.display="none",v.style.display="none",y.style.height="279px",y.style.width="87px"}),800),clearInterval(n),setTimeout((()=>{e.goTo("/results")}),2500),y.removeEventListener("click",h),m.style.cursor="default",m.style.transform="unset",g.removeEventListener("click",f),x.style.cursor="default",x.style.transform="unset",w.removeEventListener("click",b),v.style.cursor="default",v.style.transform="unset"};y.addEventListener("click",h);const x=s.querySelector(".player-rock"),g=x.shadowRoot.querySelector(".rock-img");g.style.height="211px",g.style.width="78px";const f=()=>{c.setMove("piedra"),g.style.objectPosition="0px 43px",g.style.transition="all 0.2s ease-out",m.style.opacity="0.4",v.style.opacity="0.4",setTimeout((()=>{"tijeras"==c.data.currentGame.computerPlay?i.style.display="flex":"piedra"==c.data.currentGame.computerPlay?l.style.display="flex":"papel"==c.data.currentGame.computerPlay&&(d.style.display="flex"),r.style.display="none",m.style.display="none",v.style.display="none",g.style.height="279px",g.style.width="98px"}),800),clearInterval(n),setTimeout((()=>{e.goTo("/results")}),2500),g.removeEventListener("click",f),x.style.cursor="default",x.style.transform="unset",y.removeEventListener("click",h),m.style.cursor="default",m.style.transform="unset",w.removeEventListener("click",b),v.style.cursor="default",v.style.transform="unset"};g.addEventListener("click",f);const v=s.querySelector(".player-paper"),w=v.shadowRoot.querySelector(".paper-img");w.style.height="211px",w.style.width="86px";const b=()=>{c.setMove("papel"),w.style.objectPosition="0px 32px",w.style.transition="all 0.2s ease-out",m.style.opacity="0.4",x.style.opacity="0.4",setTimeout((()=>{"tijeras"==c.data.currentGame.computerPlay?i.style.display="flex":"piedra"==c.data.currentGame.computerPlay?l.style.display="flex":"papel"==c.data.currentGame.computerPlay&&(d.style.display="flex"),r.style.display="none",m.style.display="none",x.style.display="none",w.style.height="279px",w.style.width="110px"}),800),clearInterval(n),setTimeout((()=>{e.goTo("/results")}),2500),w.removeEventListener("click",b),v.style.cursor="default",v.style.transform="unset",y.removeEventListener("click",h),m.style.cursor="default",m.style.transform="unset",g.removeEventListener("click",f),x.style.cursor="default",x.style.transform="unset"};return w.addEventListener("click",b),s}},{path:/\/results/,component:function(e){const t=o("bqoMe"),n=o("kuBOM"),s=o("fFNX8"),r=c.getState(),i=r.playHistory.player,a=r.playHistory.computer,l=r.playHistory.result,p=document.createElement("div");p.className="results-section",p.innerHTML=`\n    <div class="results">\n        <img class="ganar-img" src="${t}">\n        <img class="perder-img" src="${n}">\n        <img class="empate-img" src="${s}">\n        <div class="score-container">\n             <h2 class="score-title">Score</h2>\n             <h4 class="player-score">Tú: ${i}</h4>\n             <h4 class="computer-score">Máquina: ${a}</h4>\n        </div>\n        <div class="buttons-container">\n            <custom-button class="back-button">Volver a jugar</custom-button>\n            <custom-button class="exit-button">Salir</custom-button>\n        </div>\n    </div>\n    `;const d=document.createElement("style");d.innerHTML="\n        .results-section{\n            height: 100vh;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .results{\n            height: 100%;\n            width: 100%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .ganar-img{\n            display: none;\n            height: 200px;\n        }\n\n        .perder-img{\n            display: none;\n            height: 200px;\n        }\n\n        .empate-img{\n            display: none;\n            height: 200px;\n        }\n    \n        .score-container{\n            height: 145px;\n            width: 229px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            margin: 34px;\n            border-radius: 29px;\n            font-family: 'Baloo 2', cursive;\n            background-color: #FAFAFA;\n        }\n\n        .score-title{\n            margin: 0px;\n            text-align: center;\n            font-size: 27px;\n        }\n\n        .player-score{\n            margin: 5px 0px 0px 28px;\n            font-size: 20px;\n        }\n\n        .computer-score{\n            margin: 0px 0px 5px 28px;\n            font-size: 20px;\n        }\n\n        .buttons-container{\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 12px;\n        }\n      ",p.appendChild(d);const u=p.querySelector(".results"),m=p.querySelector(".ganar-img"),y=p.querySelector(".perder-img"),h=p.querySelector(".empate-img");return"Ganaste"==l?(m.style.display="flex",u.style.backgroundColor="#328383"):"Perdiste"==l?(y.style.display="flex",u.style.backgroundColor="#A73E3A"):"Empataste"==l&&(h.style.display="flex",u.style.backgroundColor="#384298"),p.querySelector(".back-button").addEventListener("click",(()=>{e.goTo("/instructions")})),p.querySelector(".exit-button").addEventListener("click",(()=>{c.setState({...r,playHistory:{player:0,computer:0,result:""}}),e.goTo("/welcome")})),p}}];function h(e){function t(e){const t=m()?"/desafio-m5"+e:e;history.pushState({},"",t),n(t)}function n(n){const s=m()?n.replace("/desafio-m5",""):n;for(const n of y)if(n.path.test(s)){const s=n.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(s)}}"/"==location.pathname||"/desafio-final-mod-5/"==location.pathname?t("/welcome"):n(location.pathname),window.onpopstate=function(){n(location.pathname)}}!function(){c.init();h(document.querySelector(".root")),r(),i(),a(),l(),p(),d(),u()}();
//# sourceMappingURL=index.1d560780.js.map
