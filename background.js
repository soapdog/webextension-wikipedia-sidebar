browser.contextMenus.create({
    id: "search-wikipedia",
    title: browser.i18n.getMessage("searchLabel"),
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
        case "search-wikipedia":
            let term = info.selectionText;
            browser.sidebarAction.setPanel({
                panel: `/index.html#${term}`
            });
            browser.sidebarAction.open();
            break;
    }
})