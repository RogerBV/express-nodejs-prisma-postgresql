const authorController = require("../controllers/authorController");

const express = require("express");
const router = express.Router();

router.route("/getAuthors")
    .get(authorController.getAuthors)

router.route("/getAuthorById")
    .get(authorController.getAuthorById)

router.route("/insertAuthor")
    .put(authorController.insertAuthor)

router.route("/updateAuthor")
    .post(authorController.updateAuthor)

module.exports = router;