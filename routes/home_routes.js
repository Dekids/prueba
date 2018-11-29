const express = require('express');

let SkillsController =  require('../controllers/showSkills');
let router = express.Router();


router.route('/home').get(SkillsController.show);

module.exports = router;
