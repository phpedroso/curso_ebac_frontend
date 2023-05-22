$(document).ready(function () {
    const endpoint = `http://api.github.com/users/phpedroso`;

    fetch(endpoint)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function(json) {
            $('#name').text(json.name);
            $('#username').text(json.login);
            $('#avatar').attr('src',json.avatar_url);
            $('#following').text(json.following);
            $('#followers').text(json.followers);
            $('#repos').text(json.public_repos);
            $('#link').attr('href',json.html_url);
    })
})