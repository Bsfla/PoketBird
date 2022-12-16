const express = require("express");
const { Op } = require("sequelize");

const { Post, User, Comment, Image, Hashtag } = require("../models");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const where = {};
    const lastId = parseInt(req.query.lastId, 10);

    if (lastId) {
      where.id = { [Op.lt]: lastId };
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ],
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: Image,
          attributes: ["src"],
        },
        {
          model: Hashtag,
          attributes: ["name"],
        },
        {
          model: User,
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
