const express = require("express");
const { Router } = express;

const Space = require("../models").space;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allSpaces = await Space.findAll();
    res.send(allSpaces);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
