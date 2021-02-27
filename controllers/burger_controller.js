var express = require("express");

var router = express.Router();

//Import burger.js
const burger = require("../models/burger");


// route to get all burger

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

router.post("/api/burger", function (req, res){
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

router.put("/api/burger", function(req,res){
    var condition = "id = " + req.params.id

    burger.update({
        isDevoured: req.body.isDevoured,
    }, condition, function(result){
        if (result.changedRows == 0){
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

// Route to delete burger entry

router.delete("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id

    burger.delete(condition, function(result){
        if (result.affectedRows == 0){
            return res.status(404).end()
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router