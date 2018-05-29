module.exports = {
    addTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
        //console.log(db, tableNumber, departmentValue, topValue, leftValue, height, width);

        if (tableNumber === '201' && topValue === '470' && leftValue === '350' && width === '65') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.leftValue": "450",
                        "tables.$.width": "130",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.thalerhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "202",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '202' && topValue === '450' && leftValue === '570' && height === '65') {
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
                    {}, {
                        $pull: {
                            tables: {
                                "number": "203",
                            }
                        }
                    },
                    {
                        multi: true
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("addTable Update successful");
                        console.log(tables);
                    });
        } else if (tableNumber === '202' && topValue === '330' && leftValue === '570' && height === '130') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "180",
                        "tables.$.height": "195",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.thalerhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "204",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '203' && topValue === '330' && leftValue === '570' && height === '65') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "180",
                        "tables.$.height": "130",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.thalerhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "204",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '204' && topValue === '180' && leftValue === '570' && width === '65') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.leftValue": "425",
                        "tables.$.width": "130",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.thalerhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "244",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                    console.log(tables);
                });
        }
    }
};