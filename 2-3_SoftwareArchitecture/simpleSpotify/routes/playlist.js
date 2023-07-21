const express = require('express');
const router = express.Router();
const controller = require('../controller/playlist')

router.post('/playlist', controller.addSong);
router.get('/playlist/:id/play', controller.playSong);
router.get('/playlist', controller.getListOfSong);

module.exports = router;