const Task = require('../models/task.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.task_create = function(req, res) {
    let task = new Task(
        {
            name: req.body.name,
            desc: req.body.desc
        }
    );

    task.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('task Created successfully')
    })
}

exports.task_details = function (req, res) {
    Task.findById(req.params.id, function (err, task) {
        if (err) return next(err);
        res.send(task);
    })
};

exports.task_update = function (req, res) {
    Task.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, task) {
        if (err) return next(err);
        res.send('task udpated.');
    });
};

exports.task_delete = function (req, res) {
    Task.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};