module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
        //console.log(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        if (tableNumber === '103' && topValue === '600' && leftValue === '400' && width === '260') {
                db.thalerhofTables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.width": "130",
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
                                    "department": "Bar",
                                    "number": "130",
                                    "topValue": "600",
                                    "leftValue": "560",
                                    "isOccupied": "false",
                                    "bgColor": "#ffffff",
                                    "placeholder": "true",
                                    "border": "solid 3px #f3efe4",
                                    "width": "130",
                                    "height": "55"
                                }],
                                $sort: {number: 1}
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
                    });
            } else if (tableNumber === '130' && topValue === '500' && leftValue === '600' && height === '110') {
                db.thalerhofTables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.topValue": "600",
                            "tables.$.height": "55",
                            "tables.$.width": "130",
                            "tables.$.leftValue": "560",
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
                                    "department": "Bar",
                                    "number": "131",
                                    "topValue": "500",
                                    "leftValue": "600",
                                    "isOccupied": "false",
                                    "bgColor": "#ffffff",
                                    "placeholder": "true",
                                    "border": "solid 3px #f3efe4",
                                    "width": "50",
                                    "height": "70"
                                }],
                                $sort: {number: 1}
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
                    });
        } else if (tableNumber === '130' && topValue === '140' && leftValue === '600' && height === '310') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "250",
                        "tables.$.height": "260",
                        "tables.$.width": "100",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "135",
                                "topValue": "140",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '130' && topValue === '250' && leftValue === '600' && height === '260') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "340",
                        "tables.$.height": "210",
                        "tables.$.width": "100",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "134",
                                "topValue": "250",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '130' && topValue === '340' && leftValue === '600' && height === '210') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "420",
                        "tables.$.height": "160",
                        "tables.$.width": "100",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "133",
                                "topValue": "340",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '130' && topValue === '420' && leftValue === '600' && height === '160') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "500",
                        "tables.$.height": "110",
                        "tables.$.width": "90",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "132",
                                "topValue": "420",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '131' && topValue === '420' && leftValue === '600' && height === '140') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "500",
                        "tables.$.height": "70",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "132",
                                "topValue": "420",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '131' && topValue === '340' && leftValue === '600' && height === '210') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "420",
                        "tables.$.height": "140",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "133",
                                "topValue": "340",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '131' && topValue === '250' && leftValue === '600' && height === '280') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "340",
                        "tables.$.height": "210",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "134",
                                "topValue": "250",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '131' && topValue === '140' && leftValue === '600' && height === '350') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "250",
                        "tables.$.height": "280",
                        "tables.$.leftValue": "600",
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
                            $each: [ {
                                "arrayIndex": "0",
                                "department": "Bar",
                                "number": "135",
                                "topValue": "140",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '132' && topValue === '340' && leftValue === '600' && height === '140') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "420",
                        "tables.$.height": "70",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "133",
                                "topValue": "340",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '132' && topValue === '250' && leftValue === '600' && height === '210') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "340",
                        "tables.$.height": "140",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "134",
                                "topValue": "250",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '132' && topValue === '140' && leftValue === '600' && height === '290') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "250",
                        "tables.$.height": "210",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "135",
                                "topValue": "140",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '133' && topValue === '250' && leftValue === '600' && height === '140') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "340",
                        "tables.$.height": "70",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "134",
                                "topValue": "250",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '133' && topValue === '140' && leftValue === '600' && height === '210') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "250",
                        "tables.$.height": "140",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "135",
                                "topValue": "140",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '134' && topValue === '140' && leftValue === '600' && height === '140') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "250",
                        "tables.$.height": "70",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "135",
                                "topValue": "140",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '136' && topValue === '150' && leftValue === '330' && height === '130') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
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
                                "department": "Bar",
                                "number": "137",
                                "topValue": "230",
                                "leftValue": "330",
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
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '135' && topValue === '140' && leftValue === '550' && width === '100') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "50",
                        "tables.$.leftValue": "600",
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
                                "department": "Bar",
                                "number": "136",
                                "topValue": "150",
                                "leftValue": "330",
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
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '138' && topValue === '340' && leftValue === '550' && width === '100') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "65",
                        "tables.$.leftValue": "330",
                        "tables.$.topValue": "370",
                        "tables.$.height": "85",
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
                            $each: [      {
                                "arrayIndex": "0",
                                "department": "Bar",
                                "number": "133",
                                "topValue": "340",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        } else if (tableNumber === '137' && topValue === '250' && leftValue === '550' && width === '100') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "65",
                        "tables.$.leftValue": "330",
                        "tables.$.topValue": "230",
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
                            $each: [      {
                                "arrayIndex": "0",
                                "department": "Bar",
                                "number": "134",
                                "topValue": "250",
                                "leftValue": "600",
                                "isOccupied": "false",
                                "bgColor": "#ffffff",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "70"
                            }],
                            $sort: {number: 1}
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
                });
        }
    }
};