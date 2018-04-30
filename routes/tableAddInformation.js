/**
 * Created by antonhorl on 08.02.18.
 */

module.exports = {
    addInformationToTable: function (req, res, db) {
        console.log("addInformationToTable request made to /addInformationToTable");
        console.log(JSON.stringify(req.body));

        let data = JSON.stringify(req.body),
            splitted = data.split("\\"),
            informationElements2 = [],
            departmentValueDB = "",
            nameValue = [],
            roomNumberValue = [],
            nationValue = [],
            categoryValue = [],
            typeOfPriceValue = [],
            sourceValue = [],
            languageValue = [],
            arrivalValue = [],
            departureValue = [],
            numberOfPersonsValue = [],
            note2Value = [],
            note1Value = [],
            departmentValue = "",
            tableValue = "",
            tableValueArray = [],
            traceValue = [],
            commentValue = [],
            newTraceText = [],
            newTraceRoomNumber = [],
            newTraceName = [],
            newTraceEmployee = [],
            newTraceDate = [],
            newTraceTableNumber = [];

        for (let s = 0; s < splitted.length; s++) {
            informationElements2.push(splitted[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = splitted[s]
            }
        }

        console.log('informationElements2 length: -> ' + informationElements2.length);
        console.log(informationElements2);

        if (informationElements2.length > 12) {
            console.log("Liste dropped");

            nameValue.push(informationElements2[0].substring(1, informationElements2[0].length));
            nationValue.push(informationElements2[1].substring(1, informationElements2[1].length));
            languageValue.push(informationElements2[2].substring(1, informationElements2[2].length));
            categoryValue.push(informationElements2[3].substring(1, informationElements2[3].length));
            roomNumberValue.push(informationElements2[4].substring(1, informationElements2[4].length));
            typeOfPriceValue.push(informationElements2[5].substring(1, informationElements2[5].length));
            arrivalValue.push(informationElements2[6].substring(1, informationElements2[6].length));
            departureValue.push(informationElements2[7].substring(1, informationElements2[7].length));
            numberOfPersonsValue.push(informationElements2[8].substring(1, informationElements2[8].length));
            sourceValue.push(informationElements2[9].substring(1, informationElements2[9].length));
            //note1Value.push(informationElements2[10].substring(1, informationElements2[10].length));
            note2Value.push(informationElements2[11].substring(1, informationElements2[11].length));
            traceValue.push(informationElements2[informationElements2.length - 2].substring(1, informationElements2[informationElements2.length - 2].length));
            //commentValue.push(informationElements2[informationElements2.length - 1].substring(1, informationElements2[informationElements2.length - 1].length));
            departmentValue = informationElements2[informationElements2.length - 1].substring(1, informationElements2[informationElements2.length - 1].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1].toString().match(/\d+/);
            tableValue = tableValueArray[0];

            console.log(nameValue[0]);
            console.log(tableValue + " " + departmentValue);


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
            setTimeout(function () {

                db.thalerhofTables.update(
                    {
                        department: departmentValueDB,
                        "tables.number": tableValue
                    },
                    {
                        $push: {
                            "tables.$.groups": {
                                "nameValue": nameValue[0],
                                "roomNumberValue": roomNumberValue[0],
                                "arrivalValue": arrivalValue[0],
                                "departureValue": departureValue[0],
                                "numberOfPersonsValue": numberOfPersonsValue[0],
                                "note2Value": note2Value[0],
                                "note1Value": note1Value[0],
                                "nationValue": nationValue[0],
                                "categoryValue": categoryValue[0],
                                "typeOfPriceValue": typeOfPriceValue[0],
                                "sourceValue": sourceValue[0],
                                "languageValue": languageValue[0],
                                "traceValue": traceValue[0],
                                "commentValue": commentValue[0],
                            }
                        }
                    }, function (err, tables) {
                        if (err) {
                            console.log(err);
                        }
                        console.log("addInformationToTable updated successfully");
                    });
            }, 200);

        } else {
            console.log("reseat addInformationToTable");
            let reseat = JSON.parse(data);
            console.log("reseat");
            console.log(reseat);
                for (let i = 0; i < reseat[0].groups.length; i++) {
                    roomNumberValue.push(reseat[0].groups[i].roomNumberValue);
                    nameValue.push(reseat[0].groups[i].nameValue);
                    numberOfPersonsValue.push(reseat[0].groups[i].numberOfPersonsValue);
                    arrivalValue.push(reseat[0].groups[i].arrivalValue);
                    departureValue.push(reseat[0].groups[i].departureValue);
                    traceValue.push(reseat[0].groups[i].traceValue);
                    note2Value.push(reseat[0].groups[i].note2Value);
                    note1Value.push(reseat[0].groups[i].note1Value);
                    commentValue.push(reseat[0].groups[i].commentValue);
                    nationValue.push(reseat[0].groups[i].nationValue);
                    categoryValue.push(reseat[0].groups[i].categoryValue);
                    typeOfPriceValue.push(reseat[0].groups[i].typeOfPriceValue);
                    sourceValue.push(reseat[0].groups[i].sourceValue);
                    languageValue.push(reseat[0].groups[i].languageValue);
                    newTraceText.push(reseat[0].groups[i].newTraceName);
                    newTraceRoomNumber.push(reseat[0].groups[i].newTraceRoomNumber);
                    newTraceName.push(reseat[0].groups[i].newTraceName);
                    newTraceEmployee.push(reseat[0].groups[i].newTraceEmployee);
                    newTraceDate.push(reseat[0].groups[i].newTraceDate);
                    newTraceTableNumber.push(reseat[0].groups[i].newTraceTableNumber);
                    departmentValueDB = reseat[1].targetDepartment;
                    tableValue = reseat[1].targetTable;
                    reseat[0].department = reseat[1].targetDepartment;
                }

            //console.log(" nameValue " + nameValue + " roomNumberValue " + roomNumberValue + " arrivalValue " + arrivalValue + " departureValue " + departureValue + " numberOfPersonsValue " + numberOfPersonsValue + " note1Value " + note1Value + " note2Value " + note2Value + " commentValue " + commentValue + "tableValue" + tableValue + "departmentvalue" + departmentValue);

            setTimeout(function () {
                db.thalerhofTables.findOne(
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
                            console.log(tablesfirst);
                            return;
                        }
                        console.log("Länge tables firstplace" + JSON.stringify(tablesfirst.tables[0]).length);
                        for (let i = 0; i < reseat[0].groups.length; i++) {
                            if (nameValue[i]) {
                                db.thalerhofTables.update(
                                {
                                    department: departmentValueDB,
                                    "tables.number": tableValue
                                },
                                {
                                    $push: {
                                        "tables.$.groups": {
                                            "nameValue": nameValue[i],
                                            "roomNumberValue": roomNumberValue[i],
                                            "arrivalValue": arrivalValue[i],
                                            "departureValue": departureValue[i],
                                            "numberOfPersonsValue": numberOfPersonsValue[i],
                                            "note2Value": note2Value[i],
                                            "note1Value": note1Value[i],
                                            "nationValue": nationValue[i],
                                            "categoryValue": categoryValue[i],
                                            "typeOfPriceValue": typeOfPriceValue[i],
                                            "sourceValue": sourceValue[i],
                                            "languageValue": languageValue[i],
                                            "traceValue": traceValue[i],
                                            "commentValue": commentValue[i],
                                        }
                                    }
                                }, function (err, tables) {
                                    if (err) {
                                        console.log("Error");
                                    }
                                    console.log("addInformationToTable updated successfully");
                                });
                        } else {
                                db.thalerhofTables.update(
                                    {
                                        department: departmentValueDB,
                                        "tables.number": tableValue
                                    },
                                    {
                                        $push: {
                                            "tables.$.groups": {
                                                "newTraceText" : newTraceText[i],
                                                "newTraceRoomNumber": newTraceRoomNumber[i],
                                                "newTraceName": newTraceName[i],
                                                "newTraceEmployee": newTraceEmployee[i],
                                                "newTraceDate": newTraceDate[i],
                                                "newTraceTableNumber": newTraceTableNumber[i]
                                            }
                                        }
                                    }, function (err, tables) {
                                        if (err) {
                                            console.log("Error");
                                        }
                                        console.log("addInformationToTable updated successfully");
                                    });

                            }
                        }
                    });
            }, 200);
        }
        setTimeout(function () {
            db.thalerhofTables.find(
                {
                    department: departmentValueDB,
                    "tables.number": tableValue
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log("Add information to table response");
                    console.log(JSON.stringify(tables));
                });
        }, 1000);
    }
};