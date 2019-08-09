const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

var client_id = 0;
var client_secret = 0;

$.getJSON( "/client_token.json", function(json) {
    client_id = json.client_id;
    client_secret = json.client_secret;
});
