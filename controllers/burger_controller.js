var express = require("express");

var router = express.Router();

//Import burger.js
const burger = require("../models/burger.js");


// route to get all burgers

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render(("index", hbsObject))
    })
})

// Route to add burger 

router.post("/api/burgers", function (req, res){
    burger.create([
        "burger_name", "isDevoured"
    ], [
        req.body.burger_name, req.body.isDevoured
    ], function (result){
        res.json({
            id: result.insertid
        })
    })
})

// Route to update burger entry

router.put