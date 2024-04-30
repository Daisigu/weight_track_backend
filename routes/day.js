const express = require('express');
const router = express.Router();
const dayController = require('../controllers/day.js');

router.post('/day', dayController.createDay);
router.get('/day', dayController.getDays);
router.put('/day', dayController.updateDay);

module.exports = router;
