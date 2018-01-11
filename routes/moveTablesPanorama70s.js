/**
 * Created by antonhorl on 06.01.18.
 */

module.exports = {
    moveTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {

        if (tableNumber === '71' && topValue === '160' && leftValue === '460' && height === '30') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "160",
                        "tables.$.height": "60",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "72",
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
        else if (tableNumber === '71' && topValue === '160' && leftValue === '460' && height === '60') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "160",
                        "tables.$.height": "90",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "73",
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
        } else if (tableNumber === '71' && topValue === '160' && leftValue === '460' && height === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "160",
                        "tables.$.height": "120",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "74",
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
        } else if (tableNumber === '71' && topValue === '160' && leftValue === '460' && height === '120') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "160",
                        "tables.$.height": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "12",
                                "department": "Panorama",
                                "number": "72",
                                "topValue": "220",
                                "leftValue": "460",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "13",
                                "department": "Panorama",
                                "number": "73",
                                "topValue": "280",
                                "leftValue": "460",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "14",
                                "department": "Panorama",
                                "number": "74",
                                "topValue": "340",
                                "leftValue": "460",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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

        } else if (tableNumber === '72' && topValue === '220' && leftValue === '460' && height === '30') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "60",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "73",
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
        } else if (tableNumber === '72' && topValue === '220' && leftValue === '460' && height === '60') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "90",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "74",
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


        } else if (tableNumber === '72' && topValue === '220' && leftValue === '460' && height === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "13",
                                "department": "Panorama",
                                "number": "73",
                                "topValue": "280",
                                "leftValue": "460",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "14",
                                "department": "Panorama",
                                "number": "74",
                                "topValue": "340",
                                "leftValue": "460",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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
        } else if (tableNumber === '73' && topValue === '280' && leftValue === '460' && height === '30') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "60",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "74",
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
        } else if (tableNumber === '73' && topValue === '280' && leftValue === '460' && height === '60') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "14",
                                "department": "Panorama",
                                "number": "74",
                                "topValue": "340",
                                "leftValue": "460",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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

        } else if (tableNumber === '75' && topValue === '340' && leftValue === '340' && height === '30') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "60",
                        "tables.$.topValue": "310",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "76",
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
        } else if (tableNumber === '75' && topValue === '310' && leftValue === '340' && height === '60') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "90",
                        "tables.$.topValue": "280",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "77",
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
        } else if (tableNumber === '75' && topValue === '280' && leftValue === '340' && height === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "120",
                        "tables.$.topValue": "250",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "78",
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
        } else if (tableNumber === '75' && topValue === '250' && leftValue === '340' && height === '120') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "30",
                        "tables.$.topValue": "340",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "16",
                                "department": "Panorama",
                                "number": "76",
                                "topValue": "280",
                                "leftValue": "340",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "17",
                                "department": "Panorama",
                                "number": "77",
                                "topValue": "220",
                                "leftValue": "340",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "18",
                                "department": "Panorama",
                                "number": "78",
                                "topValue": "160",
                                "leftValue": "340",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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
        } else if (tableNumber === '76' && topValue === '280' && leftValue === '340' && height === '30') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "250",
                        "tables.$.height": "60",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "77",
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
        } else if (tableNumber === '76' && topValue === '250' && leftValue === '340' && height === '60') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "220",
                        "tables.$.height": "90",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "78",
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
        } else if (tableNumber === '76' && topValue === '220' && leftValue === '340' && height === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "280",
                        "tables.$.height": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "17",
                                "department": "Panorama",
                                "number": "77",
                                "topValue": "220",
                                "leftValue": "340",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "18",
                                "department": "Panorama",
                                "number": "78",
                                "topValue": "160",
                                "leftValue": "340",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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

        } else if (tableNumber === '77' && topValue === '220' && leftValue === '340' && height === '30') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "190",
                        "tables.$.height": "60",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "78",
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
        } else if (tableNumber === '77' && topValue === '190' && leftValue === '340' && height === '60') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "220",
                        "tables.$.height": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "18",
                                "department": "Panorama",
                                "number": "78",
                                "topValue": "160",
                                "leftValue": "340",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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

        } else if (tableNumber === '79' && topValue === '340' && leftValue === '220' && height === '30') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "60",
                        "tables.$.topValue": "310",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "80",
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
        } else if (tableNumber === '79' && topValue === '310' && leftValue === '220' && height === '60') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "90",
                        "tables.$.topValue": "280",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "81",
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
        } else if (tableNumber === '79' && topValue === '280' && leftValue === '220' && height === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "120",
                        "tables.$.topValue": "250",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "82",
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
        } else if (tableNumber === '79' && topValue === '250' && leftValue === '220' && height === '120') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "30",
                        "tables.$.topValue": "340",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "20",
                                "department": "Panorama",
                                "number": "80",
                                "topValue": "280",
                                "leftValue": "220",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "21",
                                "department": "Panorama",
                                "number": "81",
                                "topValue": "220",
                                "leftValue": "220",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "22",
                                "department": "Panorama",
                                "number": "82",
                                "topValue": "160",
                                "leftValue": "220",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
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