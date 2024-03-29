import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoute(app);
let port = process.env.port || 6969;
app.listen(port, () => {
    console.log("BE run port " + port);
})