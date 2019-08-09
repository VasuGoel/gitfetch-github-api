const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

$(document).ready(() => {
    $.getJSON( "/client_token.json", function(json) {
        const client_id = json.client_id;
        const client_secret = json.client_secret;

        // $('.searchButton').click(() => {
            const fetchUser = async (user) => {
                const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
            }
        // })

    });
})
