const express = require("express");
const router = express.Router();

const editorialController = require("../controllers/editorialController")

router.route('/getEditorials')
    .get(editorialController.getEditorials)

router.route('/getEditorialById')
    .get(editorialController.getEditorialById)

router.route('/insertEditorial')
    .put(editorialController.insertEditorial)

router.route('/updateEditorial')
    .post(editorialController.updateEditorial)

module.exports = router