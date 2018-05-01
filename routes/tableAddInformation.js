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
            arrivalValue = [],
            departureValue = [],
            numberOfPersonsValue = [],
            departmentValue = "",
            tableValue = "",
            tableValueArray = [],
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

        if (informationElements2.length > 5) {
            console.log("Liste dropped");

            nameValue.push(informationElements2[0].substring(1, informationElements2[0].length));
            nationValue.push(informationElements2[1].substring(1, informationElements2[1].length));
            roomNumberValue.push(informationElements2[2].substring(1, informationElements2[2].length));
            arrivalValue.push(informationElements2[3].substring(1, informationElements2[3].length));
            departureValue.push(informationElements2[4].substring(1, informationElements2[4].length));
            numberOfPersonsValue.push(informationElements2[5].substring(1, informationElements2[5].length));
            departmentValue = informationElements2[informationElements2.length - 1].substring(1, informationElements2[informationElements2.length - 1].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1].toString().match(/\d+/);
            tableValue = tableValueArray[0];

            console.log(nameValue[0]);
            console.log(tableValue + " " + departmentValue);


            if (departmentValue === "Terasse") {
                departmentValueDB = "Terasse";
            }
            else if (departmentValue === "Weinstube") {
                departmentValueDB = "Weinstube";
            }
            else if (departmentValue === "Bar") {
                departmentValueDB = "Bar";
            }
            else if (departmentValue === "Speisesaal") {
                departmentValueDB = "Speisesaal";
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
                                "nationValue": nationValue[0],
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
                    nationValue.push(reseat[0].groups[i].nationValue);
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
                                            "nationValue": nationValue[i],
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