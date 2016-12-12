var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});

app.get('/reddit/xbox', function(request, res) {

    //https://www.reddit.com/r/rocketleagueexchange/new.json?sort=new
    var request = require('request');
    request('https://www.reddit.com/r/rocketleagueexchange/new.json?sort=new', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var json = JSON.parse(body);

            var posts = [];
            json.data.children.forEach(function(post) {
                if(post.data.title.indexOf("[Xbox]" !== -1)) {
                    posts.push(post);
                }
            });

            res.render('pages/reddit', {posts: posts});
        }
    });
});

app.get('/reddit', function(request, res) {

    //https://www.reddit.com/r/rocketleagueexchange/new.json?sort=new
    var request = require('request');
    request('https://www.reddit.com/r/rocketleagueexchange/new.json?sort=new', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var json = JSON.parse(body);

            json.data.children.forEach(function(post) {
                console.log(post.data.title);
            });

            //console.log(JSON.stringify(json.data.children));

            res.render('pages/reddit', {posts: json.data.children});
        }
    });



});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
