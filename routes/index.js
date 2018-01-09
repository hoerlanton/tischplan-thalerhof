const   express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    mongojs = require('mongojs'),
    cors = require('cors'),
    db = mongojs('mongodb://anton:b2d4f6h8@ds127132.mlab.com:27132/servicio', ['tracesListe', 'anreiseListe', 'imHausListe', 'tables', 'newInformation']),
    moveTablesPanorama60s = require('./moveTablesPanorama60s.js'),
    moveTablesPanorama70s = require('./moveTablesPanorama70s.js'),
    moveTablesPanorama80s = require('./moveTablesPanorama80s.js'),
    moveTablesSonnbergZirbn = require('./moveTablesSonnbergZirbn.js'),
    moveTablesWintergarten = require('./moveTablesWintergarten.js'),
    moveTablesRestaurant = require('./moveTablesRestaurant.js');

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

    setTimeout(function() {
        db.anreiseListe.save(anreiseListe, function(err, anreiseListe) {
            if (err) {
                res.send(err);
            }
            res.json(anreiseListe);
            console.log(anreiseListe);
            console.log("anreiseListe save called");
        });
    }, 100);
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
    setTimeout(function() {
        db.imHausListe.save(imHausListe, function (err, imHausListe) {
            if (err) {
                res.send(err);
            }
            res.json(imHausListe);
            console.log("imHausListe save called");
        });
    }, 100);
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
    setTimeout(function() {
        db.tracesListe.save(tracesListe, function(err, tracesListe) {
            if (err) {
                res.send(err);
            }
            res.json(tracesListe);
            console.log("tracesListe save called");
        });
    }, 100);
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

//Get Information
router.get('/information', function(req, res, next) {
    console.log("tables get called");
    //Get guests from Mongo DB
    db.newInformation.find(function(err, information){
        if (err){
            res.send(err);
        }
        res.json(information);
    });
});

//Delete scheduled message
router.post('/deleteInformationElement', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("Delete request made to /deleteInformationElement");
    let informationElementToDelete = req.body;
    console.log(JSON.stringify(informationElementToDelete));
    db.newInformation.remove({

            roomNumber: informationElementToDelete.roomNumber
        },
        {
            justOne: true,
        });
    res.json(informationElementToDelete);
});

//moveTable
router.post('/moveTable', function(req, res, next) {
    console.log("moveTable request made to /moveTable");

    let tableValue = "";
    let data = JSON.stringify(req.body);
    console.log('data -> ' + data);
    let splitted = data.split(",");
    let tableNumberBefore = splitted[2];
    let departmentValueBefore = splitted[1];
    let topValueBefore = splitted[3];
    let leftValueBefore = splitted[4];
    let widthValueBefore = splitted[9];
    let heightValueBefore = splitted[10];
    console.log('tableNumberBefore: ' + tableNumberBefore);
    console.log('departmentValueBefore: ' + departmentValueBefore);
    let splitted2 = tableNumberBefore.split(":");
    let splitted3 = departmentValueBefore.split(":");
    let splitted4 = topValueBefore.split(":");
    let splitted5 = leftValueBefore.split(":");
    let splitted6 = widthValueBefore.split(":");
    let splitted7 = heightValueBefore.split(":");

    let tableNumber = splitted2[1].substring(1, splitted2[1].length - 1);
    let departmentValue = splitted3[1].substring(1, splitted3[1].length - 1);
    let topValue = splitted4[1].substring(1, splitted4[1].length - 1);
    let leftValue = splitted5[1].substring(1, splitted5[1].length - 1);
    let width = splitted6[1].substring(1, splitted6[1].length - 1);
    let height = splitted7[1].substring(1, splitted7[1].length - 2);

    console.log('height: ' + height);
    console.log('width: ' + width);
    console.log('tableNumber: ' + tableNumber);
    console.log('departmentValue: ' + departmentValue);
    console.log('topValue: ' + topValue);
    console.log('leftValue: ' + leftValue);

    moveTablesPanorama60s.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
    moveTablesPanorama70s.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
    moveTablesPanorama80s.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
    moveTablesSonnbergZirbn.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
    moveTablesWintergarten.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
    moveTablesRestaurant.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);

    setTimeout(function() {
        db.tables.find(
            {
                "department": departmentValue,
            },
            function (err, tables) {
                if (err) {
                    res.send(err);
                }
                res.json(tables);
                console.log('response tables ->' + JSON.stringify(tables));
            });
    }, 400);
});



//occupyTable
router.post('/occupyTable', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("occupyTable request made to /occupyTable");
    //console.log(JSON.stringify(req.body));
    let departmentValueDB = "";
    let departmentValue = "";
    let tableValue = "";
    let data = JSON.stringify(req.body);
    let splitted = data.split("\\");
    //console.log(splitted);
    let informationElements2 = [];
    for (let s = 0; s < splitted.length; s++){
        informationElements2.push(splitted[s].split(":"));
    }
    //console.log(informationElements2);

    if(informationElements2.length >= 10) {
        console.log("Im-Haus-Liste");
        departmentValue = informationElements2[9][0].substring(1, informationElements2[9][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValue = informationElements2[9][0].toString().match(/\d+/);
        //console.log(departmentValueDB);
        //console.log(tableValue);
        //console.log(occupyTable);
    } else if (informationElements2.length === 9) {
        console.log("Anreise");
        departmentValue = informationElements2[8][0].substring(1, informationElements2[8][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValue = informationElements2[8][0].toString().match(/\d+/);
    } else {
        console.log("Trace");
        departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValue = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
    }

    if(departmentValue === "SonnbergZirbn") {
        departmentValueDB = "Sonnberg-Zirbn";
    }
    else if(departmentValue === "Panorama") {
        departmentValueDB = "Panorama";
    }
    else if(departmentValue === "Restaurant") {
        departmentValueDB = "Restaurant";
    }
    else if(departmentValue === "Wintergarten") {
        departmentValueDB = "Wintergarten";
    }

    db.tables.update(
        {department: departmentValueDB,
            "tables.number": tableValue[0]},
        {$set: {
            "tables.$.bgColor": "#0a7a74",
            "tables.$.isBesetzt": "true"
        }}, function (err, tables) {
            if (err) {
                console.log("Error");
            }
            console.log("occupyTable Update successful");
        });

    setTimeout(function() {
        db.tables.findOne(
            {
                "department": departmentValueDB,
                "tables.number": tableValue[0]
            },
            {
                "tables.$": 1,
            },
            function (err, tables) {
                if (err) {
                    res.send(err);
                }
                res.json(tables);
                console.log(JSON.stringify(tables));
            });
    }, 100);
});

//dispenseTable
router.post('/dispenseTable', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("dispenseTable request made to /dispenseTable");
    let dispenseTable = req.body;
    console.log("dispenseTable" + JSON.stringify(dispenseTable));
    db.tables.findAndModify({
        query: {department: dispenseTable.department, "tables.number": dispenseTable.number},
        update: {$set: {
            "tables.$.bgColor": "#ffffff",
            "tables.$.isBesetzt": "false",
        }, $unset: {
            "tables.$.nameValue": 1,
            "tables.$.spracheValue": 1,
            "tables.$.zimmernummerValue": 1,
            "tables.$.preistypValue": 1,
            "tables.$.anreiseValue": 1,
            "tables.$.abreiseValue": 1,
            "tables.$.personenAnzahlValue": 1,
            "tables.$.rbsouValue": 1,
            "tables.$.notiz2Value": 1,
            "tables.$.trace": 1,
            "tables.$.newInformation": 1,
            "tables.$.newInformation1": 1,
            "tables.$.newInformation2": 1,
            "tables.$.nameValue2": 1,
            "tables.$.spracheValue2": 1,
            "tables.$.zimmernummerValue2": 1,
            "tables.$.preistypValue2": 1,
            "tables.$.anreiseValue2": 1,
            "tables.$.abreiseValue2": 1,
            "tables.$.personenAnzahlValue2": 1,
            "tables.$.rbsouValue2": 1,
            "tables.$.notiz2Value2": 1,
            "tables.$.trace2": 1,
            "tables.$.nameValue3": 1,
            "tables.$.spracheValue3": 1,
            "tables.$.zimmernummerValue3": 1,
            "tables.$.preistypValue3": 1,
            "tables.$.anreiseValue3": 1,
            "tables.$.abreiseValue3": 1,
            "tables.$.personenAnzahlValue3": 1,
            "tables.$.rbsouValue3": 1,
            "tables.$.notiz2Value3": 1,
            "tables.$.trace3": 1,
            "tables.$.newTraceDate": 1,
            "tables.$.newTraceText": 1,
            "tables.$.newTraceRoomNumber": 1,
            "tables.$.newTraceName": 1,
            "tables.$.newTraceEmployee": 1,
            "tables.$.newTraceText1": 1,
            "tables.$.newTraceRoomNumber1": 1,
            "tables.$.newTraceName1": 1,
            "tables.$.newTraceEmployee1": 1,
            "tables.$.newTraceDate1": 1,
            "tables.$.newTraceText2": 1,
            "tables.$.newTraceRoomNumber2": 1,
            "tables.$.newTraceName2": 1,
            "tables.$.newTraceEmployee2": 1,
            "tables.$.newTraceDate2": 1,
            "tables.$.newTraceTableNumber": 1,
            "tables.$.newTraceTableNumber1": 1,
            "tables.$.newTraceTableNumber2": 1
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
                console.log("Dispense Table: " + JSON.stringify(tables));
            });
    }, 100);
});

//removePlaceholder
router.post('/removePlaceholder', function(req, res, next) {
//JSON string is parsed to a JSON object
    //console.log("removePlaceholder request made to /removePlaceholder");
    //console.log(JSON.stringify(req.body));
    let data = JSON.stringify(req.body);
    let splitted = data.split("\\");
    let departmentValue = "";
    let tableValue = "";
    let departmentValueDB = "";
    //console.log(splitted);
    let informationElements2 = [];
    for (let s = 0; s < splitted.length; s++){
        informationElements2.push(splitted[s].split(":"));
    }

    if(informationElements2.length >= 10) {
        console.log("Im-Haus-Liste");
        departmentValue = informationElements2[9][0].substring(1, informationElements2[9][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValue = informationElements2[9][0].toString().match(/\d+/);
    } else if (informationElements2.length === 9) {
        console.log("Anreise");
        departmentValue = informationElements2[8][0].substring(1, informationElements2[8][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValue = informationElements2[8][0].toString().match(/\d+/);
    } else {
        console.log("Trace");
        departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValue = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
    }


    if(departmentValue === "SonnbergZirbn") {
        departmentValueDB = "Sonnberg-Zirbn";
    }
    else if(departmentValue === "Panorama") {
        departmentValueDB = "Panorama";
    }
    else if(departmentValue === "Restaurant") {
        departmentValueDB = "Restaurant";
    }
    else if(departmentValue === "Wintergarten") {
        departmentValueDB = "Wintergarten";
    }

    //console.log(departmentValueDB);
    //console.log(tableValue);

    //console.log(occupyTable);
    db.tables.update(
        {
            department: departmentValueDB,
            "tables.number": tableValue[0]
        },
        {$set: {
            "tables.$.placeholder": "false",
        }}, function (err, tables) {
            if (err) {
                console.log("Error");
            }
            console.log("Updated successfully removePlaceholder");
        });

    setTimeout(function() {
        db.tables.findOne(
            {
                department: departmentValueDB,
                "tables.number": tableValue[0]
            },{
                "tables.$": 1,
            }, function (err, tables) {
                if (err) {
                    res.send(err);
                }
                res.json(tables);
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


//addInformationToTable
router.post('/addInformationToTable', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("addInformationToTable request made to /addInformationToTable");
    console.log(JSON.stringify("-------->" + req.body));
    let data = JSON.stringify(req.body);
    let splitted = data.split("\\");
    let informationElements2 = [];
    let departmentValueDB = "";
    let nameValue = "";
    let spracheValue = "";
    let zimmernummerValue = "";
    let preistypValue = "";
    let anreiseValue = "";
    let abreiseValue = "";
    let personenAnzahlValue = "";
    let rbsouValue = "";
    let notiz2Value = "";
    let departmentValue = "";
    let tableValue = "";
    let trace = "";

    for (let s = 0; s < splitted.length; s++) {
        informationElements2.push(splitted[s].split(/:(.+)/)[1]);
        if (informationElements2[s] === undefined) {
            informationElements2[s] = splitted[s]
        }
    }

    console.log("informationElements2:");
    console.log(informationElements2);
    if(informationElements2.length >= 10) {
        console.log("Im Haus Liste gedropped");
        nameValue = informationElements2[0].substring(1, informationElements2[0].length);
        spracheValue = informationElements2[1].substring(1, informationElements2[1].length);
        zimmernummerValue = informationElements2[2].substring(1, informationElements2[2].length);
        preistypValue = informationElements2[3].substring(1, informationElements2[3].length);
        anreiseValue = informationElements2[4].substring(1, informationElements2[4].length);
        abreiseValue = informationElements2[5].substring(1, informationElements2[5].length);
        personenAnzahlValue = informationElements2[6].substring(1, informationElements2[6].length);
        rbsouValue = informationElements2[7].substring(1, informationElements2[7].length);
        notiz2Value = informationElements2[8].substring(1, informationElements2[8].length);
        departmentValue = informationElements2[9].substring(1, informationElements2[9].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValue = informationElements2[9].toString().match(/\d+/);

    } else if (informationElements2.length === 9) {
        console.log("Anreise Liste gedropped");
        nameValue = informationElements2[0].substring(1, informationElements2[0].length);
        zimmernummerValue = informationElements2[1].substring(1, informationElements2[1].length);
        preistypValue = informationElements2[2].substring(1, informationElements2[2].length);
        anreiseValue = informationElements2[3].substring(1, informationElements2[3].length);
        abreiseValue = informationElements2[4].substring(1, informationElements2[4].length);
        personenAnzahlValue = informationElements2[5].substring(1, informationElements2[5].length);
        rbsouValue = informationElements2[6].substring(1, informationElements2[6].length);
        notiz2Value = informationElements2[7].substring(1, informationElements2[7].length);
        departmentValue = informationElements2[8].substring(1, informationElements2[8].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValue = informationElements2[8].toString().match(/\d+/);
    } else {
        console.log("Trace Liste gedropped");
        zimmernummerValue = informationElements2[0].substring(1, informationElements2[0].length);
        nameValue = informationElements2[1].substring(1, informationElements2[1].length);
        preistypValue = informationElements2[2].substring(1, informationElements2[2].length);
        anreiseValue = informationElements2[3].substring(1, informationElements2[3].length);
        abreiseValue = informationElements2[4].substring(1, informationElements2[4].length);
        trace = informationElements2[5].substring(1, informationElements2[5].length);
        departmentValue = informationElements2[informationElements2.length - 1].substring(1, informationElements2[informationElements2.length - 1].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValue = informationElements2[informationElements2.length - 1].toString().match(/\d+/);
    }


    console.log(" nameValue " + nameValue + " spracheValue " + spracheValue + " zimmernummerValue " + zimmernummerValue + " preistypValue " + preistypValue + " anreiseValue " + anreiseValue + " abreiseValue " + abreiseValue + " personenAnzahlValue " + personenAnzahlValue + " rbsouValue " + rbsouValue + " notiz2Value " + notiz2Value + " departmentValue " + departmentValue + " tableValue " + tableValue);


    if(departmentValue === "SonnbergZirbn") {
        departmentValueDB = "Sonnberg-Zirbn";
    }
    else if(departmentValue === "Panorama") {
        departmentValueDB = "Panorama";
    }
    else if(departmentValue === "Restaurant") {
        departmentValueDB = "Restaurant";
    }
    else if(departmentValue === "Wintergarten") {
        departmentValueDB = "Wintergarten";
    }
    console.log(departmentValueDB);
    console.log(tableValue[0]);
    setTimeout(function() {
        db.tables.findOne(
            {
                department: departmentValueDB,
                "tables.number": tableValue[0]
            },
            {
                "tables.$": 1,
            },
            function (err, tablesfirst) {
                if (err) {
                    res.send(err);
                }
                if (tablesfirst === null) {
                    console.log("tablesfirst is null");
                    return;
                }
                console.log("Länge tables firstplace" + JSON.stringify(tablesfirst.tables[0]).length);
                if (!("nameValue" in tablesfirst.tables[0])) {
                    db.tables.update(
                        {
                            department: departmentValueDB,
                            "tables.number": tableValue[0]
                        },
                        {
                            $set: {
                                "tables.$.nameValue": nameValue,
                                "tables.$.spracheValue": spracheValue,
                                "tables.$.zimmernummerValue": zimmernummerValue,
                                "tables.$.preistypValue": preistypValue,
                                "tables.$.anreiseValue": anreiseValue,
                                "tables.$.abreiseValue": abreiseValue,
                                "tables.$.personenAnzahlValue": personenAnzahlValue,
                                "tables.$.rbsouValue": rbsouValue,
                                "tables.$.notiz2Value": notiz2Value,
                                "tables.$.trace": trace,

                            }
                        }, function (err, tables) {
                            if (err) {
                                console.log("Error");
                            }
                            console.log("addInformationToTable updated successfully");
                        });
                } else if (!("nameValue2" in tablesfirst.tables[0])) {

                    db.tables.update(
                        {
                            department: departmentValueDB,
                            "tables.number": tableValue[0]
                        },
                        {
                            $set: {
                                "tables.$.nameValue2": nameValue,
                                "tables.$.spracheValue2": spracheValue,
                                "tables.$.zimmernummerValue2": zimmernummerValue,
                                "tables.$.preistypValue2": preistypValue,
                                "tables.$.anreiseValue2": anreiseValue,
                                "tables.$.abreiseValue2": abreiseValue,
                                "tables.$.personenAnzahlValue2": personenAnzahlValue,
                                "tables.$.rbsouValue2": rbsouValue,
                                "tables.$.notiz2Value2": notiz2Value,
                                "tables.$.trace2": trace,
                            }
                        }, function (err, tables) {
                            if (err) {
                                console.log("Error");
                            }
                            console.log("addInformationToTable updated successfully");
                        });
                } else if (!("nameValue3" in tablesfirst.tables[0])) {

                    db.tables.update(
                        {
                            department: departmentValueDB,
                            "tables.number": tableValue[0]
                        },
                        {
                            $set: {
                                "tables.$.nameValue3": nameValue,
                                "tables.$.spracheValue3": spracheValue,
                                "tables.$.zimmernummerValue3": zimmernummerValue,
                                "tables.$.preistypValue3": preistypValue,
                                "tables.$.anreiseValue3": anreiseValue,
                                "tables.$.abreiseValue3": abreiseValue,
                                "tables.$.personenAnzahlValue3": personenAnzahlValue,
                                "tables.$.rbsouValue3": rbsouValue,
                                "tables.$.notiz2Value3": notiz2Value,
                                "tables.$.trace3": trace,
                            }
                        }, function (err, tables) {
                            if (err) {
                                console.log("Error");
                            }
                            console.log("addInformationToTable updated successfully");
                        });
                }
            });
    }, 300);

    setTimeout(function() {
        db.tables.findOne(
            {
                department: departmentValueDB,
                "tables.number": tableValue[0]
            },
            {
                "tables.$": 1,
            },
            function (err, tables) {
                if (err) {
                    res.send(err);
                }
                res.json(tables);
                console.log(JSON.stringify(tables));
            });
    }, 500);
});

router.post('/newInformationToTables', function(req, res, next) {
    console.log("newInformationToTables post called");
    //Get guests from Mongo DB

    console.log(req.body);
    let newInformation = req.body;



    setTimeout(function() {
        db.tables.findOne(
            {
                "tables.number": newInformation.tableNumber
            },
            {
                "tables.$": 1,
            },
            function (err, tablesfirst) {
                if (err) {
                    res.send(err);
                }
                if (tablesfirst === null) {
                    console.log("tablesfirst is null");
                    return;
                }
                console.log("Länge tables firstplace" + JSON.stringify(tablesfirst.tables[0]).length);
                if (!("newTraceText" in tablesfirst.tables[0])) {
                    db.tables.update(
                        {
                            "tables.number": newInformation.tableNumber,
                        },
                        {
                            $set: {
                                "tables.$.newTraceText": newInformation.text,
                                "tables.$.newTraceRoomNumber": newInformation.roomNumber,
                                "tables.$.newTraceName": newInformation.name,
                                "tables.$.newTraceEmployee": newInformation.employee,
                                "tables.$.newTraceDate": newInformation.date,
                                "tables.$.newTraceTableNumber": newInformation.tableNumber
                            }
                        }, function (err, tables) {
                            if (err) {
                                console.log("Error");
                            }
                            console.log("addInformationToTable updated successfully");
                        });
                } else if (!("newTraceText1" in tablesfirst.tables[0])) {

                    db.tables.update(
                        {
                            "tables.number": newInformation.tableNumber,
                        },
                        {
                            $set: {
                                "tables.$.newTraceText1": newInformation.text,
                                "tables.$.newTraceRoomNumber1": newInformation.roomNumber,
                                "tables.$.newTraceName1": newInformation.name,
                                "tables.$.newTraceEmployee1": newInformation.employee,
                                "tables.$.newTraceDate1": newInformation.date,
                                "tables.$.newTraceTableNumber1": newInformation.tableNumber
                            }
                        }, function (err, tables) {
                            if (err) {
                                console.log("Error");
                            }
                            console.log("addInformationToTable updated successfully");
                        });
                } else if (!("newTraceText2" in tablesfirst.tables[0])) {

                    db.tables.update(
                        {
                            "tables.number": newInformation.tableNumber,
                        },
                        {
                            $set: {
                                "tables.$.newTraceText2": newInformation.text,
                                "tables.$.newTraceRoomNumber2": newInformation.roomNumber,
                                "tables.$.newTraceName2": newInformation.name,
                                "tables.$.newTraceEmployee2": newInformation.employee,
                                "tables.$.newTraceDate2": newInformation.date,
                                "tables.$.newTraceTableNumber2": newInformation.tableNumber

                            }
                        }, function (err, tables) {
                            if (err) {
                                console.log("Error");
                            }
                            console.log("addInformationToTable updated successfully");
                        });
                }
            });
    }, 300);

    setTimeout(function() {
        db.tables.findOne(
            {
                "tables.number": newInformation.tableNumber
            },
            {
                "tables.$": 1,
            },
            function (err, tables) {
                if (err) {
                    res.send(err);
                }
                res.json(tables);
                console.log(JSON.stringify(tables));
            });
    }, 500);
});


router.post('/newInformationToBox', function(req, res, next) {
    console.log("newInformationToBox post called");
    //Get guests from Mongo DB

    console.log(req.body);
    let newInformation = req.body;


    db.newInformation.save(newInformation, function(err, newInformation) {
        if (err) {
            res.send(err);
        }
        res.json(newInformation);
    });
});

module.exports = router;