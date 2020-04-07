
async function main() {
    let term = location.hash.slice(1);

    if (term) {
        let search = await (await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${term}&origin=*`)).json()

        let selectEl = document.querySelector("#articles");

        if (search.query.searchinfo.totalhits > 0) {
            search.query.search.forEach(result => {
                let option = document.createElement("option");
                option.value = `https://en.m.wikipedia.org/?curid=${result.pageid}`;
                option.innerText = result.title;
                selectEl.appendChild(option);
            })

            document.querySelector("#wikipedia-frame").src = `https://en.m.wikipedia.org/?curid=${search.query.search[0].pageid}`;

            selectEl.addEventListener("change", (ev) => {
                document.querySelector("#wikipedia-frame").src = ev.target.value;
            })
        }
    }


}

main();