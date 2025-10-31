// the actual function that colours the usernames of twitter users

const red = "#FF0000"; 
const handle = "noritar0"; 
const h = handle.toLowerCase().replace(/^@/, "");

const selectors = [
  `a[href^="/${h}"]`,
  `a[href^="https://x.com/${h}"]`,
  `a[href^="/https://twitter.com/${h}"]`,
];

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

highlightAntiUsername();