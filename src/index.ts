
import { initTitleComponent } from "../components/title-comp";
import { initInstructionsTextComponent } from "../components/instructions-text-comp"
import { initCountdownComponent } from "../components/countdown-comp";
import { initScissorsHandComponent } from "../components/imgs-comp/tijera-mano-comp";
import { initRockHandComponent } from "../components/imgs-comp/piedra-mano-comp";
import { initPaperHandComponent } from "../components/imgs-comp/papel-mano-comp";
import { initBotonComponent } from "../components/boton-comp";
import { initRouter } from "./router/router";

(function () {

    const root = document.querySelector(".root");
    initRouter(root);

    initTitleComponent();
    initInstructionsTextComponent();
    initCountdownComponent();
    initScissorsHandComponent();
    initRockHandComponent()
    initPaperHandComponent();
    initBotonComponent();
})();


