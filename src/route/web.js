import express from "express";

let route = express.Router();

let initWebRoute = (app) => {

    return app.use("/", route);
}

module.exports = initWebRoute;