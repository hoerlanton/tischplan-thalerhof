/**
 * Created by antonhorl on 11.01.18.
 */

const
    moveTablesPanorama60s = require('./moveTablesPanorama60s.js'),
    moveTablesPanorama70s = require('./moveTablesPanorama70s.js'),
    moveTablesPanorama80s = require('./moveTablesPanorama80s.js'),
    moveTablesSonnbergZirbn = require('./moveTablesSonnbergZirbn.js'),
    moveTablesWintergarten = require('./moveTablesWintergarten.js'),
    moveTablesRestaurant1024 = require('./moveTablesRestaurant10-24.js'),
    moveTablesRestaurant110 = require('./moveTablesRestaurant1-10.js');


module.exports = {
    getTable: function (req, res, db) {

        console.log("tables get called");
        //Get guests from Mongo DB
        db.tables.find(function (err, tables) {
            if (err) {
                res.send(err);
            }
            res.json(tables);
        });
    },

    moveTable: function (req, res, db) {

        console.log("moveTable request made to /moveTable");

        let data = JSON.stringify(req.body);
        let splitted = data.split(",");
        let tableNumberBefore = splitted[2];
        let departmentValueBefore = splitted[1];
        let topValueBefore = splitted[3];
        let leftValueBefore = splitted[4];
        let widthValueBefore = splitted[9];
        let heightValueBefore = splitted[10];

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
        let heightArray = splitted7[1].toString().match(/\d+/);
        let height = heightArray[0];

        console.log('data -> ' + data);
        console.log('tableNumberBefore: ' + tableNumberBefore);
        console.log('departmentValueBefore: ' + departmentValueBefore);
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
        moveTablesRestaurant110.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        moveTablesRestaurant1024.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);

        setTimeout(function () {
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
    },

    occupyTable: function (req, res, db) {


        console.log("occupyTable request made to /occupyTable");
        //JSON string is parsed to a JSON object
        let departmentValueDB = "";
        let departmentValue = "";
        let tableValue = "";
        let data = JSON.stringify(req.body);
        let splitted = data.split("\\");
        let informationElements2 = [];

        for (let s = 0; s < splitted.length; s++) {
            informationElements2.push(splitted[s].split(":"));
        }

        //console.log(JSON.stringify(req.body));
        //console.log(splitted);
        //console.log(informationElements2);

        if (informationElements2.length >= 10) {
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

        if (departmentValue === "SonnbergZirbn") {
            departmentValueDB = "Sonnberg-Zirbn";
        }
        else if (departmentValue === "Panorama") {
            departmentValueDB = "Panorama";
        }
        else if (departmentValue === "Restaurant") {
            departmentValueDB = "Restaurant";
        }
        else if (departmentValue === "Wintergarten") {
            departmentValueDB = "Wintergarten";
        }

        db.tables.update(
            {
                department: departmentValueDB,
                "tables.number": tableValue[0]
            },
            {
                $set: {
                    "tables.$.bgColor": "#b7b7b7",
                    "tables.$.isBesetzt": "true"
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("occupyTable Update successful");
            });

        setTimeout(function () {
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
    },
    dispenseTable: function (req, res, db) {


        console.log("dispenseTable request made to /dispenseTable");

        //JSON string is parsed to a JSON object
        let dispenseTable = req.body;

        //console.log("dispenseTable" + JSON.stringify(dispenseTable));

        db.tables.findAndModify({
            query: {department: dispenseTable.department, "tables.number": dispenseTable.number},
            update: {
                $set: {
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
                    "tables.$.nameValue4": 1,
                    "tables.$.spracheValue4": 1,
                    "tables.$.zimmernummerValue4": 1,
                    "tables.$.preistypValue4": 1,
                    "tables.$.anreiseValue4": 1,
                    "tables.$.abreiseValue4": 1,
                    "tables.$.personenAnzahlValue4": 1,
                    "tables.$.rbsouValue4": 1,
                    "tables.$.notiz2Value4": 1,
                    "tables.$.trace4": 1,
                    "tables.$.nameValue5": 1,
                    "tables.$.spracheValue5": 1,
                    "tables.$.zimmernummerValue5": 1,
                    "tables.$.preistypValue5": 1,
                    "tables.$.anreiseValue5": 1,
                    "tables.$.abreiseValue5": 1,
                    "tables.$.personenAnzahlValue5": 1,
                    "tables.$.rbsouValue5": 1,
                    "tables.$.notiz2Value5": 1,
                    "tables.$.trace5": 1,
                    "tables.$.nameValue6": 1,
                    "tables.$.spracheValue6": 1,
                    "tables.$.zimmernummerValue6": 1,
                    "tables.$.preistypValue6": 1,
                    "tables.$.anreiseValue6": 1,
                    "tables.$.abreiseValue6": 1,
                    "tables.$.personenAnzahlValue6": 1,
                    "tables.$.rbsouValue6": 1,
                    "tables.$.notiz2Value6": 1,
                    "tables.$.trace6": 1,
                    "tables.$.nameValue7": 1,
                    "tables.$.spracheValue7": 1,
                    "tables.$.zimmernummerValue7": 1,
                    "tables.$.preistypValue7": 1,
                    "tables.$.anreiseValue7": 1,
                    "tables.$.abreiseValue7": 1,
                    "tables.$.personenAnzahlValue7": 1,
                    "tables.$.rbsouValue7": 1,
                    "tables.$.notiz2Value7": 1,
                    "tables.$.trace7": 1,
                    "tables.$.nameValue8": 1,
                    "tables.$.spracheValue8": 1,
                    "tables.$.zimmernummerValue8": 1,
                    "tables.$.preistypValue8": 1,
                    "tables.$.anreiseValue8": 1,
                    "tables.$.abreiseValue8": 1,
                    "tables.$.personenAnzahlValue8": 1,
                    "tables.$.rbsouValue8": 1,
                    "tables.$.notiz2Value8": 1,
                    "tables.$.trace8": 1,
                    "tables.$.nameValue9": 1,
                    "tables.$.spracheValue9": 1,
                    "tables.$.zimmernummerValue9": 1,
                    "tables.$.preistypValue9": 1,
                    "tables.$.anreiseValue9": 1,
                    "tables.$.abreiseValue9": 1,
                    "tables.$.personenAnzahlValue9": 1,
                    "tables.$.rbsouValue9": 1,
                    "tables.$.notiz2Value9": 1,
                    "tables.$.trace9": 1,
                    "tables.$.nameValue10": 1,
                    "tables.$.spracheValue10": 1,
                    "tables.$.zimmernummerValue10": 1,
                    "tables.$.preistypValue10": 1,
                    "tables.$.anreiseValue10": 1,
                    "tables.$.abreiseValue10": 1,
                    "tables.$.personenAnzahlValue10": 1,
                    "tables.$.rbsouValue10": 1,
                    "tables.$.notiz2Value10": 1,
                    "tables.$.trace10": 1,
                    "tables.$.nameValue11": 1,
                    "tables.$.spracheValue11": 1,
                    "tables.$.zimmernummerValue11": 1,
                    "tables.$.preistypValue11": 1,
                    "tables.$.anreiseValue11": 1,
                    "tables.$.abreiseValue11": 1,
                    "tables.$.personenAnzahlValue11": 1,
                    "tables.$.rbsouValue11": 1,
                    "tables.$.notiz2Value11": 1,
                    "tables.$.trace11": 1,
                    "tables.$.nameValue12": 1,
                    "tables.$.spracheValue12": 1,
                    "tables.$.zimmernummerValue12": 1,
                    "tables.$.preistypValue12": 1,
                    "tables.$.anreiseValue12": 1,
                    "tables.$.abreiseValue12": 1,
                    "tables.$.personenAnzahlValue12": 1,
                    "tables.$.rbsouValue12": 1,
                    "tables.$.notiz2Value12": 1,
                    "tables.$.trace12": 1,
                    "tables.$.nameValue13": 1,
                    "tables.$.spracheValue13": 1,
                    "tables.$.zimmernummerValue13": 1,
                    "tables.$.preistypValue13": 1,
                    "tables.$.anreiseValue13": 1,
                    "tables.$.abreiseValue13": 1,
                    "tables.$.personenAnzahlValue13": 1,
                    "tables.$.rbsouValue13": 1,
                    "tables.$.notiz2Value13": 1,
                    "tables.$.trace13": 1,
                    "tables.$.nameValue14": 1,
                    "tables.$.spracheValue14": 1,
                    "tables.$.zimmernummerValue14": 1,
                    "tables.$.preistypValue14": 1,
                    "tables.$.anreiseValue14": 1,
                    "tables.$.abreiseValue14": 1,
                    "tables.$.personenAnzahlValue14": 1,
                    "tables.$.rbsouValue14": 1,
                    "tables.$.notiz2Value14": 1,
                    "tables.$.trace14": 1,
                    "tables.$.nameValue15": 1,
                    "tables.$.spracheValue15": 1,
                    "tables.$.zimmernummerValue15": 1,
                    "tables.$.preistypValue15": 1,
                    "tables.$.anreiseValue15": 1,
                    "tables.$.abreiseValue15": 1,
                    "tables.$.personenAnzahlValue15": 1,
                    "tables.$.rbsouValue15": 1,
                    "tables.$.notiz2Value15": 1,
                    "tables.$.trace15": 1,
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
                }
            },
            new: false
        }, function (err, tables) {
            if (err) {
                console.log("Error");
            }
            console.log("No Error");
        });

        setTimeout(function () {
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
    },

    addInformationToTable: function (req, res, db) {

        console.log("addInformationToTable request made to /addInformationToTable");

        //JSON string is parsed to a JSON object

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
        let tableValueArray = [];
        let value = "nAnreise";


        for (let s = 0; s < splitted.length; s++) {
            informationElements2.push(splitted[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = splitted[s]
            }
        }

        let infoElementString = JSON.stringify(splitted);

        console.log('infoElementString: ' + infoElementString);

        //console.log(JSON.stringify("req.body: " + req.body));
        console.log("informationElements2:");
        console.log(informationElements2);

        if (infoElementString.indexOf(value) != -1 && infoElementString.indexOf('nTrace') === -1) {
            console.log("Im Haus Liste gedropped / Anreise Liste ");
            nameValue = informationElements2[0].substring(1, informationElements2[0].length);
            zimmernummerValue = informationElements2[1].substring(1, informationElements2[1].length);
            anreiseValue = informationElements2[2].substring(1, informationElements2[2].length);
            abreiseValue = informationElements2[3].substring(1, informationElements2[3].length);
            personenAnzahlValue = informationElements2[4].substring(1, informationElements2[4].length);
            notiz2Value = informationElements2[5].substring(1, informationElements2[5].length);
            departmentValue = informationElements2[6].substring(1, informationElements2[6].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[6].toString().match(/\d+/);
            tableValue = tableValueArray[0];

        } else if (infoElementString.indexOf('nTrace') != -1) {
            console.log("Trace Liste gedropped");
            zimmernummerValue = informationElements2[0].substring(1, informationElements2[0].length);
            nameValue = informationElements2[1].substring(1, informationElements2[1].length);
            preistypValue = informationElements2[2].substring(1, informationElements2[2].length);
            anreiseValue = informationElements2[3].substring(1, informationElements2[3].length);
            abreiseValue = informationElements2[4].substring(1, informationElements2[4].length);
            trace = informationElements2[5].substring(1, informationElements2[5].length);
            departmentValue = informationElements2[informationElements2.length - 1].substring(1, informationElements2[informationElements2.length - 1].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1].toString().match(/\d+/);
            tableValue = tableValueArray[0];
        }

        if (departmentValue === "SonnbergZirbn") {
            departmentValueDB = "Sonnberg-Zirbn";
        }
        else if (departmentValue === "Panorama") {
            departmentValueDB = "Panorama";
        }
        else if (departmentValue === "Restaurant") {
            departmentValueDB = "Restaurant";
        }
        else if (departmentValue === "Wintergarten") {
            departmentValueDB = "Wintergarten";
        }

        console.log("nameValue: " + nameValue + " spracheValue: " + spracheValue + " zimmernummerValue: " + zimmernummerValue + " preistypValue: " + preistypValue + " anreiseValue: " + anreiseValue + " abreiseValue: " + abreiseValue + " personenAnzahlValue: " + personenAnzahlValue + " rbsouValue: " + rbsouValue + " notiz2Value: " + notiz2Value + " departmentValue: " + departmentValue + " tableValue: " + tableValue);
        //console.log(departmentValueDB);
        //console.log(tableValue);

        setTimeout(function () {
            db.tables.findOne(
                {
                    department: departmentValueDB,
                    "tables.number": tableValue
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
                                "tables.number": tableValue
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
                                "tables.number": tableValue
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
                                "tables.number": tableValue
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
                    } else if (!("nameValue4" in tablesfirst.tables[0])) {

                        db.tables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue4": nameValue,
                                    "tables.$.spracheValue4": spracheValue,
                                    "tables.$.zimmernummerValue4": zimmernummerValue,
                                    "tables.$.preistypValue4": preistypValue,
                                    "tables.$.anreiseValue4": anreiseValue,
                                    "tables.$.abreiseValue4": abreiseValue,
                                    "tables.$.personenAnzahlValue4": personenAnzahlValue,
                                    "tables.$.rbsouValue4": rbsouValue,
                                    "tables.$.notiz2Value4": notiz2Value,
                                    "tables.$.trace4": trace,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
            } else if (!("nameValue5" in tablesfirst.tables[0])) {

                        db.tables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue5": nameValue,
                                    "tables.$.spracheValue5": spracheValue,
                                    "tables.$.zimmernummerValue5": zimmernummerValue,
                                    "tables.$.preistypValue5": preistypValue,
                                    "tables.$.anreiseValue5": anreiseValue,
                                    "tables.$.abreiseValue5": abreiseValue,
                                    "tables.$.personenAnzahlValue5": personenAnzahlValue,
                                    "tables.$.rbsouValue5": rbsouValue,
                                    "tables.$.notiz2Value5": notiz2Value,
                                    "tables.$.trace5": trace,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue6" in tablesfirst.tables[0])) {

                        db.tables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue6": nameValue,
                                    "tables.$.spracheValue6": spracheValue,
                                    "tables.$.zimmernummerValue6": zimmernummerValue,
                                    "tables.$.preistypValue6": preistypValue,
                                    "tables.$.anreiseValue6": anreiseValue,
                                    "tables.$.abreiseValue6": abreiseValue,
                                    "tables.$.personenAnzahlValue6": personenAnzahlValue,
                                    "tables.$.rbsouValue6": rbsouValue,
                                    "tables.$.notiz2Value6": notiz2Value,
                                    "tables.$.trace6": trace,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue7" in tablesfirst.tables[0])) {

                        db.tables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue7": nameValue,
                                    "tables.$.spracheValue7": spracheValue,
                                    "tables.$.zimmernummerValue7": zimmernummerValue,
                                    "tables.$.preistypValue7": preistypValue,
                                    "tables.$.anreiseValue7": anreiseValue,
                                    "tables.$.abreiseValue7": abreiseValue,
                                    "tables.$.personenAnzahlValue7": personenAnzahlValue,
                                    "tables.$.rbsouValue7": rbsouValue,
                                    "tables.$.notiz2Value7": notiz2Value,
                                    "tables.$.trace7": trace,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });

                    } else if (!("nameValue8" in tablesfirst.tables[0])) {

                            db.tables.update(
                                {
                                    department: departmentValueDB,
                                    "tables.number": tableValue
                                },
                                {
                                    $set: {
                                        "tables.$.nameValue8": nameValue,
                                        "tables.$.spracheValue8": spracheValue,
                                        "tables.$.zimmernummerValue8": zimmernummerValue,
                                        "tables.$.preistypValue8": preistypValue,
                                        "tables.$.anreiseValue8": anreiseValue,
                                        "tables.$.abreiseValue8": abreiseValue,
                                        "tables.$.personenAnzahlValue8": personenAnzahlValue,
                                        "tables.$.rbsouValue8": rbsouValue,
                                        "tables.$.notiz2Value8": notiz2Value,
                                        "tables.$.trace8": trace,
                                    }
                                }, function (err, tables) {
                                    if (err) {
                                        console.log("Error");
                                    }
                                    console.log("addInformationToTable updated successfully");
                                });
                        }
                    else if (!("nameValue9" in tablesfirst.tables[0])) {

                        db.tables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue9": nameValue,
                                    "tables.$.spracheValue9": spracheValue,
                                    "tables.$.zimmernummerValue9": zimmernummerValue,
                                    "tables.$.preistypValue9": preistypValue,
                                    "tables.$.anreiseValue9": anreiseValue,
                                    "tables.$.abreiseValue9": abreiseValue,
                                    "tables.$.personenAnzahlValue9": personenAnzahlValue,
                                    "tables.$.rbsouValue9": rbsouValue,
                                    "tables.$.notiz2Value9": notiz2Value,
                                    "tables.$.trace9": trace,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    }
                    else if (!("nameValue10" in tablesfirst.tables[0])) {

                        db.tables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue10": nameValue,
                                    "tables.$.spracheValue10": spracheValue,
                                    "tables.$.zimmernummerValue10": zimmernummerValue,
                                    "tables.$.preistypValue10": preistypValue,
                                    "tables.$.anreiseValue10": anreiseValue,
                                    "tables.$.abreiseValue10": abreiseValue,
                                    "tables.$.personenAnzahlValue10": personenAnzahlValue,
                                    "tables.$.rbsouValue10": rbsouValue,
                                    "tables.$.notiz2Value10": notiz2Value,
                                    "tables.$.trace10": trace,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue11" in tablesfirst.tables[0])) {

                        db.tables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue11": nameValue,
                                    "tables.$.spracheValue11": spracheValue,
                                    "tables.$.zimmernummerValue11": zimmernummerValue,
                                    "tables.$.preistypValue11": preistypValue,
                                    "tables.$.anreiseValue11": anreiseValue,
                                    "tables.$.abreiseValue11": abreiseValue,
                                    "tables.$.personenAnzahlValue11": personenAnzahlValue,
                                    "tables.$.rbsouValue11": rbsouValue,
                                    "tables.$.notiz2Value11": notiz2Value,
                                    "tables.$.trace11": trace,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    }

                    else if (!("nameValue12" in tablesfirst.tables[0])) {

                        db.tables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue12": nameValue,
                                    "tables.$.spracheValue12": spracheValue,
                                    "tables.$.zimmernummerValue12": zimmernummerValue,
                                    "tables.$.preistypValue12": preistypValue,
                                    "tables.$.anreiseValue12": anreiseValue,
                                    "tables.$.abreiseValue12": abreiseValue,
                                    "tables.$.personenAnzahlValue12": personenAnzahlValue,
                                    "tables.$.rbsouValue12": rbsouValue,
                                    "tables.$.notiz2Value12": notiz2Value,
                                    "tables.$.trace12": trace,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue13" in tablesfirst.tables[0])) {

                        db.tables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue13": nameValue,
                                    "tables.$.spracheValue13": spracheValue,
                                    "tables.$.zimmernummerValue13": zimmernummerValue,
                                    "tables.$.preistypValue13": preistypValue,
                                    "tables.$.anreiseValue13": anreiseValue,
                                    "tables.$.abreiseValue13": abreiseValue,
                                    "tables.$.personenAnzahlValue13": personenAnzahlValue,
                                    "tables.$.rbsouValue13": rbsouValue,
                                    "tables.$.notiz2Value13": notiz2Value,
                                    "tables.$.trace13": trace,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue14" in tablesfirst.tables[0])) {

                        db.tables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue14": nameValue,
                                    "tables.$.spracheValue14": spracheValue,
                                    "tables.$.zimmernummerValue14": zimmernummerValue,
                                    "tables.$.preistypValue14": preistypValue,
                                    "tables.$.anreiseValue14": anreiseValue,
                                    "tables.$.abreiseValue14": abreiseValue,
                                    "tables.$.personenAnzahlValue14": personenAnzahlValue,
                                    "tables.$.rbsouValue14": rbsouValue,
                                    "tables.$.notiz2Value14": notiz2Value,
                                    "tables.$.trace14": trace,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    }
                    else if (!("nameValue15" in tablesfirst.tables[0])) {

                        db.tables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue15": nameValue,
                                    "tables.$.spracheValue15": spracheValue,
                                    "tables.$.zimmernummerValue15": zimmernummerValue,
                                    "tables.$.preistypValue15": preistypValue,
                                    "tables.$.anreiseValue15": anreiseValue,
                                    "tables.$.abreiseValue15": abreiseValue,
                                    "tables.$.personenAnzahlValue15": personenAnzahlValue,
                                    "tables.$.rbsouValue15": rbsouValue,
                                    "tables.$.notiz2Value15": notiz2Value,
                                    "tables.$.trace15": trace,
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

        setTimeout(function () {
            db.tables.findOne(
                {
                    department: departmentValueDB,
                    "tables.number": tableValue
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
    }
};