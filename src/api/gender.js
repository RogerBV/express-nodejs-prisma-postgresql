const express = require('express');
const router = express.Router();

const genderController = require("../controllers/genderController");

router.route('/getGenders')
    .get(genderController.getGenders)

router.route('/getGenderById')
    .get(genderController.getGenderById)

router.route('/insertGender')
    .put(genderController.insertGender)

router.route('/updateGender')
    .post(genderController.updateGender)

module.exports = router