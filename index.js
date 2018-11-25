//importing
const express = require("express")
const app = express()
var mustacheExpress = require('mustache-express');
//const sqlite3 = require('sqlite3').verbose();
//let db = new sqlite3.Database(':memory:');
//setings
app.use(express.static('views'))
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
//routing
app.get("/", function(req, res){
    const json = require("./database/articles.json")
    res.render("index.mustache", {artists: json.artists.toString(), titles: json.names.toString()})
})
app.get("/article", function(req, res){
    const id = parseInt(req.query.id)
    const json = require("./database/articles.json")
    var text = json.text[id]
    var creator = json.artists[id]
    var title = json.names[id]
    res.render("article.mustache", {text: text, artist: creator, title: title})
})
app.get("/")
app.listen(800)