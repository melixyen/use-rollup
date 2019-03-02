import ELEMENT from './element-ui.js';
//import css from './element-css.js';


if(typeof(window)!='undefined'){
    var head = document.head || document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.type = 'text/css';
    s.innerHTML = css;
    head.insertBefore(s, head.firstChild);
}
// Test write a comment
export default ELEMENT;