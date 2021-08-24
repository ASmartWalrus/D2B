function convertToBinary(match) {
    match.replaceAll(",", "");
    match = Number(match).toString(2);
    console.log(match)
    return match
}

const regex = /\b[+-]?(\d+|\d{1,3}(,\d{3})*)(.\d+)?\b/g
function handleText(textNode) {
    let text = textNode.nodeValue;

    textNode.nodeValue = text.replaceAll(regex, convertToBinary)
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