const express = require("express");
const AnalyticsController = require("../Controller/analyticsController");

const route = express.Router();

route.post("/create", AnalyticsController.createOne);

module.exports = route;
