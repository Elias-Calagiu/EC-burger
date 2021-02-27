const express = require("express")

var PORT = process.env.PORT || 8080;

var app = express();

// serve content from the public directory 
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// import routes and give the server access to them
var routes = require("./controllers/burger_controller.js");

app.use(routes);

// start the server to listen for client requests
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});