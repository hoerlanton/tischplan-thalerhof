module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
    if (tableNumber === '106' && topValue === '540' && leftValue === '375' && width === '160') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "75",
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
                            "department": "Speisesaal",
                            "number": "107",
                            "topValue": "540",
                            "leftValue": "510",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "85",
                            "height": "55"
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
    } else if (tableNumber === '106' && topValue === '540' && leftValue === '375' && width === '220') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "160",
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
                             "department": "Speisesaal",
                             "number": "108",
                             "topValue": "540",
                             "leftValue": "630",
                             "isOccupied": "true",
                             "bgColor": "#ffffff",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "60",
                             "height": "55"
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
    } else if (tableNumber === '109' && topValue === '390' && leftValue === '760' && height === '160') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "510",
                    "tables.$.height": "60",
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
                            "department": "Speisesaal",
                            "number": "119",
                            "topValue": "390",
                            "leftValue": "760",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "70",
                            "height": "80"
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
    } else if (tableNumber === '109' && topValue === '240' && leftValue === '760' && height === '220') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "390",
                    "tables.$.height": "160",
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
                            "department": "Speisesaal",
                            "number": "129",
                            "topValue": "240",
                            "leftValue": "760",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "70",
                            "height": "80"
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
    } else if (tableNumber === '109' && topValue === '120' && leftValue === '760' && height === '300') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "240",
                    "tables.$.height": "220",
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
                            "department": "Speisesaal",
                            "number": "110",
                            "topValue": "120",
                            "leftValue": "760",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "70",
                            "height": "80",
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
    } else if (tableNumber === '119' && topValue === '240' && leftValue === '760' && height === '160') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "390",
                    "tables.$.height": "80",
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
                            "department": "Speisesaal",
                            "number": "129",
                            "topValue": "240",
                            "leftValue": "760",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "70",
                            "height": "80"
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
    } else if (tableNumber === '119' && topValue === '120' && leftValue === '760' && height === '240') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "240",
                    "tables.$.height": "160",
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
                            "department": "Speisesaal",
                            "number": "110",
                            "topValue": "120",
                            "leftValue": "760",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "70",
                            "height": "80",
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
    } else if (tableNumber === '109' && topValue === '120' && leftValue === '760' && height === '220') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "240",
                    "tables.$.height": "160",
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
                            "department": "Speisesaal",
                            "number": "110",
                            "topValue": "120",
                            "leftValue": "760",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "70",
                            "height": "80",
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
    } else if (tableNumber === '129' && topValue === '120' && leftValue === '760' && height === '160') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "240",
                    "tables.$.height": "80",
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
                            "department": "Speisesaal",
                            "number": "110",
                            "topValue": "120",
                            "leftValue": "760",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "70",
                            "height": "80",
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
        }
    }
};