import 'regenerator-runtime';
import './style/style.scss';

import 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './script/component/menubar.js';
import './script/component/titlesection.js';

import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);