const express = require("express");
const router = express.Router();

router.get("/api/ping", (req, res) => {
    res.send({message: "pong"});
});

router.get("/api/transportation/general_trends", (req, res) => {
    const json = require("../data/json/general_trends.json");
    res.send({...json, unit: 'K'});
});

router.get("/api/transportation/cameras", (req, res) => {
    res.send(require("../data/json/cameras.json"));
});


module.exports = router;