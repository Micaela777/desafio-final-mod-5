export function initWelcomePage(params) {

  const div = document.createElement('div');
  div.className = "welcome-section"
  div.innerHTML = `
        <custom-title></custom-title>
        <custom-button class="start-button">Empezar</custom-button>
        <div class="hands-comp">
            <custom-scissors></custom-scissors>
            <custom-rock></custom-rock>
            <custom-paper></custom-paper>
        </div>
    `;

  const style = document.createElement('style')
  style.innerHTML = `
      .welcome-section{
          height: 100vh;
          padding-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          overflow: auto;
          background-color: #562F6F;
      }
      @media (min-width: 769px){
        .welcome-section{
          padding-top: 15px;
        }
      }

      .hands-comp{
          display: flex;
          align-items: end;
          gap: 55px;
    }
    `;

  div.appendChild(style);

  const startButtonEl = div.querySelector('.start-button')
  startButtonEl.addEventListener('click', () => {
    params.goTo("/instructions")
  });

  return div;
}