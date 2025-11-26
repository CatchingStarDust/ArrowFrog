// checks usernames on twitter and sees if any usernames on the current page matches anyone that is in the Anti database.

const red = "#FF0000"; 
const handle = "noritar0"; 
const h = handle.toLowerCase().replace(/^@/, "");

//array so the highlighter catches every variant of twitter's dumb url names
const selectors = [
  `a[href^="/${h}"]`,
  `a[href^="https://x.com/${h}"]`,
  `a[href^="/https://twitter.com/${h}"]`,
];

//function that actually colours the anti's usernames
function highlightAntiUsername(root = document) {
    root.querySelectorAll(selectors.join(",")).forEach(link => {
        link.style.setProperty("color", red, "important");
        link.style.setProperty ("text-decoration", "none", "important");
        link.querySelectorAll("*").forEach(child => {
            child.style.setProperty("color", red, "important");
            child.style.setProperty("text-decoration", "none", "important");
  });
});
}

//observer so the highlighter sees fresh tweets and will work as the user scrolls
const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
        for (const node of m.addedNodes) {
            if (node.nodeType === 1) {
                highlightAntiUsername(node);
            }
        }
    }
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
});

highlightAntiUsername();