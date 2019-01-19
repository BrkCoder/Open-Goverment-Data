const app = require("express")();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const httpPort = process.env.PORT || 8080;
const router = require("./api");

//custom middlewares


//use custom & third-party middlewares

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);
app.listen(httpPort,() => {
    console.log(`app ready on  ${httpPort}  port`);
});