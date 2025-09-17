import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    let modalState = {};

    modals();
    tabs();
    changeModalState(modalState);
    forms(modalState);
    timer('#timer', '2025-09-20');
    images();
});