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
    } else if (tableNumber === '116' && topValue === '300' && leftValue === '390' && width === '140') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "70",
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
                            "number": "117",
                            "topValue": "320",
                            "leftValue": "550",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "70",
                            "height": "70"
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
    } else if (tableNumber === '110' && topValue === '120' && leftValue === '640' && width === '140') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "70",
                    "tables.$.transformValue": "rotate(30deg)",
                    "tables.$.leftValue": "760",

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
                            "number": "111",
                            "topValue": "140",
                            "leftValue": "640",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "75",
                            "height": "70"
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
    } else if (tableNumber === '110' && topValue === '120' && leftValue === '475' && width === '265') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "140",
                    "tables.$.leftValue": "640",

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
                            "number": "121",
                            "topValue": "140",
                            "leftValue": "475",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "125",
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
    } else if (tableNumber === '111' && topValue === '140' && leftValue === '475' && width === '200') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "75",
                    "tables.$.leftValue": "640",

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
                            "number": "121",
                            "topValue": "140",
                            "leftValue": "475",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "125",
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
    } else if (tableNumber === '112' && topValue === '140' && leftValue === '50' && width === '215') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "90",
                    "tables.$.leftValue": "270",

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
                            "number": "113",
                            "topValue": "140",
                            "leftValue": "50",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "125",
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
    } else if (tableNumber === '113' && topValue === '140' && leftValue === '50' && height === '180') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
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
                            "number": "114",
                            "topValue": "300",
                            "leftValue": "50",
                            "isOccupied": "true",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "80",
                            "height": "100"
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
    } else if (tableNumber === '113' && topValue === '140' && leftValue === '50' && height === '260') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "180",
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
                            "number": "115",
                            "topValue": "550",
                            "leftValue": "50",
                            "isOccupied": "false",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "125",
                            "height": "75"
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
    } else if (tableNumber === '114' && topValue === '300' && leftValue === '50' && height === '180') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "100",
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
                            "number": "115",
                            "topValue": "550",
                            "leftValue": "50",
                            "isOccupied": "false",
                            "bgColor": "#ffffff",
                            "placeholder": "true",
                            "border": "solid 3px #f3efe4",
                            "width": "125",
                            "height": "75"
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
    } else if (tableNumber === '107' && topValue === '540' && leftValue === '510' && width === '145') {
        db.thalerhofTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "85",
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

    }
    }
};