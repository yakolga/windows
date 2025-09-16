import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";

document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    let modalState = {};

    modals();
    tabs();
    changeModalState(modalState);
    forms(modalState);
});