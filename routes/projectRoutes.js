const express = require('express');
const router = express.Router();
const Project = require('./../controllers/projectController');

router
    .route('/forkify')
    .get((req, res) => res.render('forkify/index.ejs'));

router
    .route('/pig_dice')
    .get((req, res) => res.render('pig_dice/index.ejs'));

router
    .route('/pig_dice/rules')
    .get((req, res) => res.render('pig_dice/rules/index.ejs'));

router
    .route('/budgety')
    .get((req, res) => res.render('budgety/index.ejs'));

router
    .route('/all')
    .get(Project.getAllProjects)

router
    .route('/javascript')
    .get(Project.getJavascriptProjects);

router
    .route('/node')
    .get(Project.getNodeProjects);

router
    .route('/html_css')
    .get(Project.getHTMLProjects);

router
    .route('/featured')
    .get(Project.getFeaturedProjects);

module.exports = router;