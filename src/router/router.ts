import { initWelcomePage } from "../../pages/welcome-page"
import { initInstructionsPage } from "../../pages/instructions-page"
import { initPlayPage } from "../../pages/play-page"
import { initResultsPage } from "../../pages/results-page"

const BASE_PATH = "/desafio-m5";

function isGithubPages() {
    return location.host.includes("github.io");
};

const routes = [
    {
        path: /\/welcome/,
        component: initWelcomePage,
    },
    {
        path: /\/instructions/,
        component: initInstructionsPage,
    },
    {
        path: /\/play/,
        component: initPlayPage,
    },
    {
        path: /\/results/,
        component: initResultsPage,
    }
];

export function initRouter(container: Element) {

    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    };

    function handleRoute(route) {
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

        for (const r of routes) {
            if (r.path.test(newRoute)) {
                const el = r.component({ goTo: goTo });

                if (container.firstChild) {
                    container.firstChild.remove();
                }
                container.appendChild(el)
            };
        };
    };

    if (location.pathname == "/" || location.pathname == "/desafio-final-mod-5/") {
        goTo("/welcome")
    } else {
        handleRoute(location.pathname)
    };

    window.onpopstate = function () {
        handleRoute(location.pathname);
    };
};