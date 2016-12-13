console.log("Up and running");
console.log(window.location.href);
httpGetAsync("https://www.reddit.com/r/rocketleagueexchange/new.json?sort=new", addDataToDOM);

function addDataToDOM(data) {

    var posts = JSON.parse(data).data.children;

    posts.forEach(function(post) {

        if(window.location.href.includes("xbox")) {
            if(post.data.title.toLowerCase().includes("[xbox]")) {
                document.getElementById('posts').innerHTML += '<div class="col-xs-12 col-sm-6 col-md-3"> <h5> <a href = ' +post.data.url + '>' +post.data.title + '</a> </h5> <h6> <a href = "https://www.reddit.com/u/' + post.data.author + '"><i>' +post.data.author + '</i></a> </h6> <a href="https://www.reddit.com/message/compose/?to=' + post.data.author+ '"> <button type="button" class="btn btn-default halfwide"> <span class="glyphicon glyphicon-send"></span> Message </button> </a> <a href="' + post.data.url + '"> <button type="button" class="btn btn-default halfwide"> <span class="glyphicon glyphicon-comment"></span> Comment </button> </a> </div>';
            }
        } else if(window.location.href.includes("ps4")) {
            if(post.data.title.toLowerCase().includes("[ps4]")) {
                document.getElementById('posts').innerHTML += '<div class="col-xs-12 col-sm-6 col-md-3"> <h5> <a href = ' +post.data.url + '>' +post.data.title + '</a> </h5> <h6> <a href = "https://www.reddit.com/u/' + post.data.author + '"><i>' +post.data.author + '</i></a> </h6> <a href="https://www.reddit.com/message/compose/?to=' + post.data.author+ '"> <button type="button" class="btn btn-default halfwide"> <span class="glyphicon glyphicon-send"></span> Message </button> </a> <a href="' + post.data.url + '"> <button type="button" class="btn btn-default halfwide"> <span class="glyphicon glyphicon-comment"></span> Comment </button> </a> </div>';
            }
        } else if(window.location.href.includes("pc")) {
            if(post.data.title.toLowerCase().includes("[pc]")) {
                document.getElementById('posts').innerHTML += '<div class="col-xs-12 col-sm-6 col-md-3"> <h5> <a href = ' +post.data.url + '>' +post.data.title + '</a> </h5> <h6> <a href = "https://www.reddit.com/u/' + post.data.author + '"><i>' +post.data.author + '</i></a> </h6> <a href="https://www.reddit.com/message/compose/?to=' + post.data.author+ '"> <button type="button" class="btn btn-default halfwide"> <span class="glyphicon glyphicon-send"></span> Message </button> </a> <a href="' + post.data.url + '"> <button type="button" class="btn btn-default halfwide"> <span class="glyphicon glyphicon-comment"></span> Comment </button> </a> </div>';
            }
        } else {
            document.getElementById('posts').innerHTML += '<div class="col-xs-12 col-sm-6 col-md-3"> <h5> <a href = ' +post.data.url + '>' +post.data.title + '</a> </h5> <h6> <a href = "https://www.reddit.com/u/' + post.data.author + '"><i>' +post.data.author + '</i></a> </h6> <a href="https://www.reddit.com/message/compose/?to=' + post.data.author+ '"> <button type="button" class="btn btn-default halfwide"> <span class="glyphicon glyphicon-send"></span> Message </button> </a> <a href="' + post.data.url + '"> <button type="button" class="btn btn-default halfwide"> <span class="glyphicon glyphicon-comment"></span> Comment </button> </a> </div>';
        }
    });

    document.getElementById('refreshButton').innerHTML += '<button class = "btn btn-default wide" onclick="refreshPage();">  <span class="glyphicon glyphicon-refresh"></span> </button>';
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function refreshPage() {
    window.location.reload();
}
