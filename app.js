
async function main() {
    let term = location.hash.slice(1);

    if (term) {
        let search = await (await fetch(browser.i18n.getMessage("apiUrl", term))).json();

        let selectEl = document.querySelector("#articles");

        if (search.query.searchinfo.totalhits > 0) {
            search.query.search.forEach(result => {
                let option = document.createElement("option");
                option.value = browser.i18n.getMessage("articleUrl", result.pageid);
                option.innerText = result.title;
                selectEl.appendChild(option);
            })

            document.querySelector("#wikipedia-frame").src = browser.i18n.getMessage("articleUrl", search.query.search[0].pageid);

            selectEl.addEventListener("change", (ev) => {
                document.querySelector("#wikipedia-frame").src = ev.target.value;
            })
        }
    }


}

document.querySelector("#header-label").innerText = browser.i18n.getMessage("headerLabel");

main();