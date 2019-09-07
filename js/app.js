$(document).ready(() => {
    // Read client_id & client_secret form hidden file client_tokens.json
    $.getJSON( "/client_tokens.json", function(json) {
        const client_id = json.client_id;
        const client_secret = json.client_secret;

        // Make call to GitHub API
        const fetchUser = async (user) => {
            const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
            const data = api_call.json();
            return data;    // equivalent to return {data: data}
        };

        // Fetch user data when search button is clicked
        $('.searchButton').click(() => {
            fetchUser($('#search').val()).then((res) => {
                console.log(res);
                
                $('.main__profile-name').html(`Name: <span class="main__profile-value">${res.name}</span>`);
            });
        });
    });
});