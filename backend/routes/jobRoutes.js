const express = require("express");
const { fetchAllJobs } = require("../controller/jobController");
const router = express.Router();

// find all the jobs 
router.route('/findJobs').get(fetchAllJobs)

module.exports = router;
