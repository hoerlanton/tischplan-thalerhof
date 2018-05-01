const
    express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    mongojs = require('mongojs'),
    cors = require('cors'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    config = require('../config/database'),
    User = require('../models/user'),
    db = mongojs('mongodb://anton:b2d4f6h8@ds127132.mlab.com:27132/servicio', ['thalerhofList', 'thalerhofTables', 'thalerhofNewInformation', 'thalerhofNotes', 'thalerhofNewInformationToEmployee']),
    list = require('./list.js'),
    information = require('./information.js'),
    note = require('./note.js'),
    placeholder = require('./placeholder.js'),
    table = require('./table.js'),
    users = require('./users.js'),
    tableAddInformation = require('./tableAddInformation.js');

//Bodyparser middleware
router.use(bodyParser.urlencoded({ extended: false}));

router.use(bodyParser.json());

//Cors middleware
router.use(cors());

//----->DB API<------//

//Save ImHausListe
router.post('/saveImHausList', function(req, res, next) {
list.saveImHausList(req, res, db)});
//Update ImHausListe
router.post('/updateImHausListElement', function(req, res, next) {
list.updateImHausList(req, res, db)});
//Get imHausListe
router.get('/getImHausList', function(req, res, next) {
list.getImHausList(req, res, db)});
//Get Information
router.get('/information', function(req, res, next) {
information.getInformation(req, res, db)});
//Delete Information Element
router.post('/deleteInformationElement', function(req, res, next) {
information.deleteInformation(req, res, db)});
//Post New Information to Box
router.post('/newInformationToBox', function(req, res, next) {
information.newInformationToBox(req, res, db)});
//Post New Information to Table
router.post('/newInformationToTables', function(req, res, next) {
information.newInformationToTable(req, res, db)});
//removePlaceholder
router.post('/removePlaceholder', function(req, res, next) {
placeholder.removePlaceholder(req, res, db)});
//addPlaceholder
router.post('/addPlaceholder', function(req, res, next) {
placeholder.addPlaceholder(req, res, db)});
//Get Tables
router.get('/tables', function(req, res, next) {
table.getTable(req, res, db)});
//removeTable
router.post('/removeTable', function(req, res, next) {
table.removeTable(req, res, db)});
//addTable
router.post('/addTable', function(req, res, next) {
table.addTable(req, res, db)});
//occupyTable
router.post('/occupyTable', function(req, res, next) {
table.occupyTable(req, res, db)});
//dispenseTable
router.post('/dispenseTable', function(req, res, next) {
table.dispenseTable(req, res, db)});
//addInformationToTable
router.post('/addInformationToTable', function(req, res, next) {
tableAddInformation.addInformationToTable(req, res, db)});
//addInformationToTable
router.get('/getNote', function(req, res, next) {
note.getNote(req, res, db)});
//addInformationToTable
router.post('/newNote', function(req, res, next) {
note.newNote(req, res, db)});
//GetInformation Employees
router.get('/informationEmployees', function(req, res, next) {
information.getInformationEmployees(req, res, db)});
//GetInformation Employees
router.post('/authenticate', function(req, res, next) {
users.authenticate(req, res, db)});
//GetInformation Employees
router.post('/register', function(req, res, next) {
users.register(req, res, db)});
//GetInformation Employees
router.get('/profile', passport.authenticate('jwt', {session:false}), function(req, res, next) {
users.profile(req, res, db)});

module.exports = router;