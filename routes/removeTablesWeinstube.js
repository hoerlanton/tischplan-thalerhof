/**
 * Created by antonhorl on 06.01.18.
 */

module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
        if (tableNumber === '201' && topValue === '470' && leftValue === '450' && width === '130') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.leftValue": "350",
                        "tables.$.width": "65",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "0",
                                "department": "Weinstube",
                                "number": "202",
                                "topValue": "450",
                                "leftValue": "570",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "65",
                                "height": "65"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '202' && topValue === '330' && leftValue === '570' && height === '130') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "450",
                        "tables.$.height": "65",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "0",
                                "department": "Weinstube",
                                "number": "203",
                                "topValue": "330",
                                "leftValue": "570",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "65",
                                "height": "65"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '202' && topValue === '180' && leftValue === '570' && height === '195') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "330",
                        "tables.$.height": "130",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "0",
                                "department": "Weinstube",
                                "number": "204",
                                "topValue": "180",
                                "leftValue": "570",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "65",
                                "height": "65",
                                "transformValue": "rotate(30deg)"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '203' && topValue === '180' && leftValue === '570' && height === '130') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "330",
                        "tables.$.height": "65",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "0",
                                "department": "Weinstube",
                                "number": "204",
                                "topValue": "180",
                                "leftValue": "570",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "65",
                                "height": "65",
                                "transformValue": "rotate(30deg)"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '204' && topValue === '180' && leftValue === '425' && width === '130') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.leftValue": "570",
                        "tables.$.width": "65",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "0",
                                "department": "Weinstube",
                                "number": "244",
                                "topValue": "180",
                                "leftValue": "425",
                                "isOccupied": "true",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "65",
                                "height": "65"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        }
    }
};