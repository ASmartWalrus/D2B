// import { CONVERSIONS } from "unit-modules/index.mjs";
// import { local_settings } from "settings.js";

const regex = /\b([0-9,]+(\.[0-9]+)*)\b/g
function handleText(textNode) {
    let text = textNode.nodeValue;

    textNode.nodeValue = text.replaceAll(regex, "CHEESE");
}

// walk(node) goes through running the conversion code on every text element
// function sourced from: https://stackoverflow.com/questions/5904914/javascript-regex-to-replace-text-not-in-html-attributes/5904945#5904945
function walk(node) {
    let child;
    let next;

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
        while (child) {
            next = child.nextSibling;
            walk(child);
            child = next;
        }
        break;

        case 3: // Text node
            handleText(node);
            break;
        default:
            break;
    }
}

walk(document.body)