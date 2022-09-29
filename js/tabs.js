$( document ).ready(function() {
    console.log( 'Document loaded' );

    // select the first tab
    $(".defaultOpen").click();
});

const tabContents = $('.tab-content');
const tabs = $('.tab');

function displayTabContent(event, content) {
    console.log(`Displaying tab : ${content}`)
    // loop on tab contents and hide them from view
    for (let elt of tabContents) {
        elt.style.display = "none";
    }
    // remove active class from tabs
    for (let elt of tabs) {
        elt.className.replace("active", "");
    }

    // show the selected tab content
    const tabId = "#"+content
    console.log(tabId)
    $(tabId).css("display", "flex")
    // change class current tab to active for coloring
    $(event.target).addClass("active");

}