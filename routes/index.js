const   express = require('express'),
        router = express.Router(),
        bodyParser = require('body-parser'),
        mongojs = require('mongojs'),
        cors = require('cors'),
        db = mongojs('mongodb://anton:b2d4f6h8@ds127132.mlab.com:27132/servicio', ['tracesListe', 'anreiseListe', 'imHausListe', 'tables']);

//Bodyparser middleware
router.use(bodyParser.urlencoded({ extended: false}));

router.use(bodyParser.json());

//Cors middleware
router.use(cors());

//----->REST-FUL API<------//

//Save AnreiseListe
router.post('/anreiseListe', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("Post request made to /anreiseListe");
    let anreiseListe = {
        data: "",};
    anreiseListe.data = req.body;

    db.anreiseListe.remove({});

    db.anreiseListe.save(anreiseListe, setTimeout(function (err, anreiseListe) {
        if (err) {
            res.send(err);
        }
        res.json(anreiseListe);
        console.log(anreiseListe);
        console.log("anreiseListe save called");
    }, 10000));
});

//Save ImHausListe
router.post('/imHausListe', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("Post request made to /imHausListe");
    let imHausListe = {
        data: "",
    };
    imHausListe.data = req.body;

    db.imHausListe.remove({});

    db.imHausListe.save(imHausListe, setTimeout(function (err, imHausListe) {
        if (err) {
            res.send(err);
        }
        res.json(imHausListe);
        console.log("imHausListe save called");
    }, 10000));
});

//Save TracesListe
router.post('/tracesListe', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("Post request made to /tracesListe");
    let tracesListe = {
        data: "",
    };
    tracesListe.data = req.body;

    db.tracesListe.remove({});

    db.tracesListe.save(tracesListe, setTimeout(function (err, tracesListe) {
        if (err) {
            res.send(err);
        }
        res.json(tracesListe);
        console.log("tracesListe save called");
        }, 10000));
});

//Get anreiseListe
router.get('/anreiseListe', function(req, res, next) {
    console.log("anreiseListe get called");
    //Get guests from Mongo DB
    db.anreiseListe.find(function(err, anreiseListe){
        if (err){
            res.send(err);
        }
        res.json(anreiseListe);
    });
});

//Get imHausListe
router.get('/imHausListe', function(req, res, next) {
    console.log("imHausListe get called");
    //Get guests from Mongo DB
    db.imHausListe.find(function(err, imHausListe){
        if (err){
            res.send(err);
        }
        res.json(imHausListe);
    });
});

//Get TracesListe
router.get('/tracesListe', function(req, res, next) {
    console.log("tracesListe get called");
    //Get guests from Mongo DB
    db.tracesListe.find(function(err, tracesListe){
        if (err){
            res.send(err);
        }
        res.json(tracesListe);
    });
});

//Get Tables
router.get('/tables', function(req, res, next) {
    console.log("tables get called");
    //Get guests from Mongo DB
    db.tables.find(function(err, tables){
        if (err){
            res.send(err);
        }
        res.json(tables);
    });
});

//occupyTable
router.post('/occupyTable', function(req, res, next) {
//JSON string is parsed to a JSON object
    console.log("occupyTable request made to /occupyTable");
    console.log(JSON.stringify(req.body));
    let data = JSON.stringify(req.body);
    let splitted = data.split("\\");
    console.log(splitted);
    let informationElements2 = [];
    for (let s = 0; s < splitted.length; s++){
        informationElements2.push(splitted[s].split(":"));
    }

    let departmentValue = informationElements2[9][0].substring(1, informationElements2[9][0].length - 4);
    let tableValue = informationElements2[9][0].substring(informationElements2[9][0].length - 4, informationElements2[9][0].length - 2);

    let departmentValueDB = "";
    if(departmentValue === "SonnbergZirbn") {
        departmentValueDB = "Sonnberg-Zirbn";
    }
    console.log(departmentValueDB);
    console.log(tableValue);

    //console.log(occupyTable);
    let arrayElement = 0;
    db.tables.update(
        {department: departmentValueDB,
            "tables.number": tableValue},
        {$set: {
            "tables.$.bgColor": "#0a7a74",
            "tables.$.isBesetzt": "true"
        }}, function (err, tables) {
            if (err) {
                console.log("Error");
            }
            arrayElement = tables.nModified;
            console.log("UPDATED OCCUPY " + arrayElement)
        });

        setTimeout(function() {
            db.tables.find(
                {
                    department: departmentValueDB,
                    "tables.number": tableValue
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    tables.push(arrayElement);
                    res.json(tables);
                    console.log(JSON.stringify("TABLES occupytable" + tables));
                });
        }, 100);
});

//dispenseTable
router.post('/dispenseTable', function(req, res, next) {
//JSON string is parsed to a JSON object
    console.log("dispenseTable request made to /dispenseTable");
    let dispenseTable = req.body;
    //console.log(dispenseTable);

    db.tables.findAndModify({
            query: {department: dispenseTable.department, "tables.number": dispenseTable.number},
            update: {$set: {
                "tables.$.bgColor": "#ffffff",
                "tables.$.isBesetzt": "false"
            } },
            new: false
        }, function (err, tables) {
        if (err) {
            console.log("Error");
        }
        console.log("No Error");
    });

    setTimeout(function() {
        db.tables.find(
            {
                department: dispenseTable.department,
                "tables.number": dispenseTable.number
            }, function (err, tables) {
                if (err) {
                    res.send(err);
                }
                res.json(tables);
                console.log(JSON.stringify(tables));
            });
    }, 100);
});

//removePlaceholder
router.post('/removePlaceholder', function(req, res, next) {
//JSON string is parsed to a JSON object
    console.log("removePlaceholder request made to /removePlaceholder");
    console.log(JSON.stringify(req.body));
    let data = JSON.stringify(req.body);
    let splitted = data.split("\\");
    console.log(splitted);
    let informationElements2 = [];
    for (let s = 0; s < splitted.length; s++){
        informationElements2.push(splitted[s].split(":"));
    }

    let departmentValue = informationElements2[9][0].substring(1, informationElements2[9][0].length - 4);
    let tableValue = informationElements2[9][0].substring(informationElements2[9][0].length - 4, informationElements2[9][0].length - 2);

    let departmentValueDB = "";
    if(departmentValue === "SonnbergZirbn") {
        departmentValueDB = "Sonnberg-Zirbn";
    }
    console.log(departmentValueDB);
    console.log(tableValue);

    //console.log(occupyTable);
    let arrayElement = 0;
    db.tables.update(
        {
            department: departmentValueDB,
            "tables.number": tableValue
        },
        {$set: {
            "tables.$.placeholder": "false",
        }}, function (err, tables) {
            if (err) {
                console.log("Error");
            }
            arrayElement = tables.nModified;
        });

    setTimeout(function() {
        db.tables.find(
            {
                department: departmentValueDB,
                "tables.number": tableValue
            }, function (err, tables) {
                if (err) {
                    res.send(err);
                }
                tables.push(arrayElement);
                res.json(tables);
                console.log(JSON.stringify("TABLES removePlaceholder" + tables));
            });
    }, 100);
});

//addPlaceholder
router.post('/addPlaceholder', function(req, res, next) {
//JSON string is parsed to a JSON object
    console.log("addPlaceholder request made to /addPlaceholder");
    let addPlaceholder = req.body;
    //console.log(occupyTable);

    db.tables.update(
        {department: addPlaceholder.department,
            "tables.number": addPlaceholder.number} ,
        {$set: {
            "tables.$.placeholder": "true",
        }}, function (err, tables) {
            if (err) {
                console.log("Error");
            }
            console.log("No Error");
        });

    setTimeout(function() {
        db.tables.find(
            {
                department: addPlaceholder.department,
                "tables.number": addPlaceholder.number
            }, function (err, tables) {
                if (err) {
                    res.send(err);
                }
                res.json(tables);
                console.log(JSON.stringify(tables));
            });
    }, 100);
});


//addPlaceholder
router.post('/addInformationToTable', function(req, res, next) {
//JSON string is parsed to a JSON object
    //console.log("addInformationToTable request made to /addInformationToTable");
    //console.log(JSON.stringify(req.body));
    let data = JSON.stringify(req.body);
    let splitted = data.split("\\");
    //console.log(splitted);
    let informationElements2 = [];
    for (let s = 0; s < splitted.length; s++){
      informationElements2.push(splitted[s].split(":"));
    }
    //console.log(informationElements2);
    //console.log(informationElements2[0][0]);
    //console.log(informationElements2[1][0]);
    //console.log(informationElements2[2][0]);
    //console.log(informationElements2[3][0]);
    //console.log(informationElements2[4][0]);
    //console.log(informationElements2[5][0]);
    //console.log(informationElements2[6][0]);
    //console.log(informationElements2[7][0]);
    //console.log(informationElements2[8][0]);
    //console.log(informationElements2[9][0]);

    let nameValue = informationElements2[0][1].substring(1, informationElements2[0][1].length);
    let spracheValue = informationElements2[1][1].substring(1, informationElements2[1][1].length);
    let zimmernummerValue = informationElements2[2][1].substring(3, informationElements2[2][1].length);
    let preistypValue = informationElements2[3][1].substring(1, informationElements2[3][1].length);
    let anreiseValue = informationElements2[4][1].substring(1, informationElements2[4][1].length);
    let abreiseValue = informationElements2[5][1].substring(1, informationElements2[5][1].length);
    let personenAnzahlValue = informationElements2[6][1].substring(1, informationElements2[6][1].length);
    let rbsouValue = informationElements2[7][1].substring(1, informationElements2[7][1].length);
    let notiz2Value = informationElements2[8][1].substring(1, informationElements2[8][1].length);
    let departmentValue = informationElements2[9][0].substring(1, informationElements2[9][0].length - 4);
    let tableValue = informationElements2[9][0].substring(informationElements2[9][0].length - 4, informationElements2[9][0].length - 2);

    //console.log(" nameValue " + nameValue + " spracheValue " + spracheValue + " zimmernummerValue " + zimmernummerValue + " preistypValue " + preistypValue + " anreiseValue " + anreiseValue + " abreiseValue " + abreiseValue + " personenAnzahlValue " + personenAnzahlValue + " rbsouValue " + rbsouValue + " notiz2Value " + notiz2Value + " departmentValue " + departmentValue + " tableValue " + tableValue);

    let departmentValueDB = "";
    if(departmentValue === "SonnbergZirbn") {
        departmentValueDB = "Sonnberg-Zirbn";
    }
    //console.log(departmentValueDB);
    let arrayElement = 0;

    db.tables.update(
        {department: departmentValueDB,
            "tables.number": tableValue} ,
        {$set: {
            "tables.$.nameValue": nameValue,
            "tables.$.spracheValue": spracheValue,
            "tables.$.zimmernummerValue": zimmernummerValue,
            "tables.$.preistypValue": preistypValue,
            "tables.$.anreiseValue": anreiseValue,
            "tables.$.abreiseValue": abreiseValue,
            "tables.$.personenAnzahlValue": personenAnzahlValue,
            "tables.$.rbsouValue": rbsouValue,
            "tables.$.notiz2Value": notiz2Value,

        }}, function (err, tables) {
            if (err) {
                console.log("Error");
            }
            arrayElement = tables.nModified;
        });

    setTimeout(function() {
        db.tables.find(
            {
                department: departmentValueDB,
                "tables.number": tableValue
            }, function (err, tables) {
                if (err) {
                    res.send(err);
                }
                tables.push(arrayElement);
                res.json(tables);
      //          console.log(JSON.stringify("TABLES addInformationToTable" + tables));
            });
    }, 100);
});


module.exports = router;