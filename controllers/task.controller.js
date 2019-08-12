const Task = require('../models/task.model');

exports.task_create = function(req, res) {
    let task = new Task(
        {
            name: req.body.name,
            desc: req.body.desc
        }
    );

    task.save(function (err, task) {
        if (err) {
            return next(err);
        }
        res.send(task)
    })
}

exports.task_details = function (req, res) {
    Task.findById(req.params.id, function (err, task) {
        if (err) return next(err);
        res.send(task);
    })
};


exports.task_list = function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) return next(err);
        res.send(tasks);
    })
};

exports.task_update = function (req, res) {
    Task.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true }, function (err, task) {
        if (err) return next(err);
        res.send(task);
    });
};

exports.task_delete = function (req, res) {
    Task.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};