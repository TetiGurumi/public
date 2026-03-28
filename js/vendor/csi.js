/**
 * Client Side Includes — vendored local copy
 *
 * Source:  https://github.com/jasoncartwright/clientsideinclude
 * Version: 1.0.0
 * Commit:  e10f4c1fb9adff535d00becadb47d72c6f765775  (2026-02-26)
 * License: MIT
 *
 * HOW TO UPDATE
 * -------------
 * 1. Visit https://github.com/jasoncartwright/clientsideinclude
 * 2. Copy the raw source from clientsideinclude.js on the desired commit
 * 3. Replace the code below (keep this header)
 * 4. Update the Version/Commit/Date fields above
 * 5. Verify the site still works
 *
 * NOTE: This site uses build-time Jinja2 rendering for nav/footer partials,
 * so CSI is NOT currently used in production. This file is vendored in case
 * runtime includes are ever needed (e.g. for a CMS preview or live editing).
 * Never reference the CDN version directly — always use this local copy.
 */
document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("*[data-include]").forEach((element) => {
        const url = element.getAttribute("data-include");
        const updateTime = element.getAttribute("data-update");
        const stopWhen = element.getAttribute("data-stop-when");

        const loadContent = () => {
            fetch(url).then((response) => {
                response.text().then((text) => {
                    element.innerHTML = text;
                });
            });
        };

        loadContent();

        if (updateTime) {
            const interval = setInterval(() => {
                if (stopWhen && document.querySelector(stopWhen)) {
                    clearInterval(interval);
                } else {
                    loadContent();
                }
            }, updateTime * 1000);
        }
    });
});
