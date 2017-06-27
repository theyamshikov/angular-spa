'use strict';

var outerHTML = function (node) {
    // if IE, Chrome take the internal method otherwise build one
    return node.outerHTML || (function (n) {
            var div = document.createElement('div'), h;
            div.appendChild(n);
            h = div.innerHTML;
            div = null;
            return h;
        })(node);
};

var addTag = function (name, attributes, sync) {
    var headEl = document.getElementsByTagName('head')[0];
    var el = document.createElement(name);
    for (var attrName in attributes) {
        el.setAttribute(attrName, attributes[attrName]);
    }
    sync ? document.write(outerHTML(el)) : headEl.appendChild(el);
};

var include = function (name) {
    addTag('script', {src: name}, true);
};
