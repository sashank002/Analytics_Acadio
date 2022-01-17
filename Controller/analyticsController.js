const mongoose = require("mongoose");

const Analytics = require("../Models/AnalyticsModel");

exports.createOne = async (req, res) => {
  try {
    // console.log("paramas", req.params);

    // console.log("body", req.body);

    const NewUser = await Analytics.create({ uid: req.body.uid });

    res.status(200).json({
      status: "sucess",
      data: NewUser,
    });
  } catch (err) {
    console.log(err);
  }
};
