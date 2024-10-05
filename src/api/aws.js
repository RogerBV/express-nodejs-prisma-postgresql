const awsController = require("../controllers/awsController")

const express = require("express")
const router = express.Router()

router.route("/getBuckets")
    .get(awsController.getBuckets)

router.route("/getObjectsByBucket")
    .get(awsController.getObjectsByBucket)

module.exports = router