const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const task_controller = require('../controllers/task.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', task_controller.test);

router.get('/:id', task_controller.task_details);

router.post('/create', task_controller.task_create);

router.put('/:id/update', task_controller.task_update);

router.delete('/:id/delete', task_controller.task_delete);

module.exports = router;