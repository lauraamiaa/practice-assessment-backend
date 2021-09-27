const express = require("express");
const { Router } = express;

const Story = require("../models").story;
const Space = require("../models").space;

const router = new Router();

router.get("/:id", async (req, res, next) => {
  try {
    const spaceId = parseInt(req.params.id);
    const space = await Space.findByPk(spaceId, { include: [Story] });
    if (space) {
      res.send(space);
    } else {
      res.status(404).send("Space not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
