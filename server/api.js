const express = require("express");
const router = express.Router();

router.get("/api/ping", (req, res) => {
    res.send({message: "pong"});
});

router.get("/api/cameras", (req, res) => {
    res.send(require("../data/json/cameras.json"));
});

router.get("/api/camera/:id", (req, res) => {
    res.send({message: "[TODO]: Enable fetching single camera"});
});

module.exports = router;