function fetchGitHubInformation(event) {
    var username = $("#gh-username").val(); // this targets the id gh-username value in the html
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`) // if username is empty, this will be displayed gh-user-data div
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..."/>
        </div>`
    )
    
}