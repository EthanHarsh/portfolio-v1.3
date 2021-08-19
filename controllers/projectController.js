const Project = require('./../models/projectModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');


exports.getAllProjects = catchAsync(async (req, res, next) => {
    const projects = await Project.find().sort([['createDate', -1]]).exec();

    //SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: projects.length, //tours is an array
        data: {
            projects
        }
    });
});

exports.getProject = catchAsync(async (req, res, next) => {
    const project = await Project.findById(req.params.id);

    if (!project) {
        return next(new AppError('No tour found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            project
        }
    });
});

exports.getJavascriptProjects = catchAsync(async (req, res, next) => {
    const projects = await Project.find({ type: 'javascript' }).sort([['createDate', -1]]).exec();
    if (!projects) {
        return next(new AppError('No javascript projects found', 404));
    }

    res.status(200).json({
        status: 'success',
        results: projects.length,
        data: {
            projects
        }
    });

})

exports.getNodeProjects = catchAsync(async (req, res, next) => {
    const projects = await Project.find({ type: 'Node.js' }).sort([['createDate', -1]]).exec();
    if (!projects) {
        return next(new AppError('No Node.JS Projects Found', 404));
    }

    res.status(200).json({
        status: 'success',
        results: projects.length,
        data: {
            projects
        }
    });

})

exports.getHTMLProjects = catchAsync(async (req, res, next) => {
    const projects = await Project.find({ type: 'HTML/CSS' }).sort([['createDate', -1]]).exec();
    if (!projects) {
        return next(new AppError('No HTML/CSS Projects Found', 404));
    }

    res.status(200).json({
        status: 'success',
        results: projects.length,
        data: {
            projects
        }
    });

})

exports.getFeaturedProjects = catchAsync(async (req, res, next) => {
    const projects = await Project.find({ featured: '1' }).sort([['createDate', -1]]).exec();
    if (!projects) {
        return next(new AppError('No HTML/CSS Projects Found', 404));
    }

    res.status(200).json({
        status: 'success',
        results: projects.length,
        data: {
            projects
        }
    });

})