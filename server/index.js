const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const httpPort = process.env.PORT || 8080;
const router = require("./api");

//custom middlewares
const corsHeaders = [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization'
];

const setOrigin = () => (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`, `GET, PUT, POST, DELETE, OPTIONS`);
    res.header(`Access-Control-Allow-Headers`, corsHeaders.join(`, `));
    res.header(`Access-Control-Allow-Credentials`, `true`);
    (`OPTIONS` === req.method) ? res.sendStatus(200) : next();
};

function setContentType() {
    return function (req, res, next) {
        res.contentType('application/json');
        next();
    };
}


//use custom & third-party middlewares
router.use(setContentType());
app.use(setOrigin());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);
app.listen(httpPort,() => {
    console.log(`app ready on  ${httpPort}  port`);
});