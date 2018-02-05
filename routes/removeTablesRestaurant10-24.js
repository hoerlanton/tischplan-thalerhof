module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
     if (tableNumber === '12' && topValue === '200' && leftValue === '30' && width === '90') {
        db.tables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "60",
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
                             "department": "Restaurant",
                             "number": "13",
                             "topValue": "200",
                             "leftValue": "110",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "60",
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
    } else if (tableNumber === '12' && topValue === '200' && leftValue === '30' && width === '120') {
        db.tables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "90",
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
                             "department": "Restaurant",
                             "number": "14",
                             "topValue": "200",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "60",
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
    } else if (tableNumber === '12' && topValue === '200' && leftValue === '30' && width === '150') {
                db.tables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.width": "120",
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
                                    "department": "Restaurant",
                                    "number": "15",
                                    "topValue": "200",
                                    "leftValue": "230",
                                    "bgColor": "#ffffff",
                                    "isBesetzt": "false",
                                    "placeholder": "true",
                                    "border": "solid 3px #f3efe4",
                                    "width": "30",
                                    "height": "60"
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
     } else if (tableNumber === '13' && topValue === '200' && leftValue === '110' && width === '60') {
         db.tables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "30",
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
                             "department": "Restaurant",
                             "number": "14",
                             "topValue": "200",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "60",
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
     } else if (tableNumber === '13' && topValue === '200' && leftValue === '110' && width === '90') {
         db.tables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "60",
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
                             "department": "Restaurant",
                             "number": "15",
                             "topValue": "200",
                             "leftValue": "230",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "60"
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
        } else if (tableNumber === '13' && topValue === '200' && leftValue === '110' && width === '120') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "90",
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
                                "arrayIndex": "15",
                                "department": "Restaurant",
                                "number": "16",
                                "topValue": "200",
                                "leftValue": "290",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "30",
                                "height": "60",
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

     } else if (tableNumber === '14' && topValue === '200' && leftValue === '170' && width === '60') {
         db.tables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "30",
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
                             "department": "Restaurant",
                             "number": "15",
                             "topValue": "200",
                             "leftValue": "230",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "60"
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
        } else if (tableNumber === '14' && topValue === '200' && leftValue === '170' && width === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "60",
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
                                "arrayIndex": "15",
                                "department": "Restaurant",
                                "number": "16",
                                "topValue": "200",
                                "leftValue": "290",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "30",
                                "height": "60",
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

        } else if (tableNumber === '15' && topValue === '200' && leftValue === '230' && width === '60') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "30",
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
                                "arrayIndex": "15",
                                "department": "Restaurant",
                                "number": "16",
                                "topValue": "200",
                                "leftValue": "290",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "30",
                                "height": "60",
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
        } else if (tableNumber === '17' && topValue === '200' && leftValue === '350' && width === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "30",
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
                                "department": "Restaurant",
                                "number": "18",
                                "topValue": "200",
                                "leftValue": "410",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "50"
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
     } else if (tableNumber === '19' && topValue === '200' && leftValue === '550' && width === '60') {
         db.tables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.topValue": "200",
                     "tables.$.leftValue": "550",
                     "tables.$.width": "30",
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
                             "arrayIndex": "19",
                             "department": "Restaurant",
                             "number": "20",
                             "topValue": "200",
                             "leftValue": "610",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "60"
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
            } else if (tableNumber === '19' && topValue === '200' && leftValue === '580' && width === '90') {
                db.tables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.topValue": "200",
                            "tables.$.leftValue": "550",
                            "tables.$.width": "60",
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
                             "department": "Restaurant",
                             "number": "21",
                             "topValue": "200",
                             "leftValue": "670",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "60"
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

            } else if (tableNumber === '20' && topValue === '200' && leftValue === '640') {
                db.tables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.topValue": "200",
                            "tables.$.leftValue": "610",
                            "tables.$.width": "30",
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
                                    "department": "Restaurant",
                                    "number": "21",
                                    "topValue": "200",
                                    "leftValue": "670",
                                    "bgColor": "#ffffff",
                                    "isBesetzt": "false",
                                    "placeholder": "true",
                                    "border": "solid 3px #f3efe4",
                                    "width": "30",
                                    "height": "60"
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
        } else if (tableNumber === '23' && topValue === '370' && leftValue === '550'  && width === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "370",
                        "tables.$.leftValue": "640",
                        "tables.$.width": "60",
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
                                "arrayIndex": "23",
                                "department": "Restaurant",
                                "number": "24",
                                "topValue": "370",
                                "leftValue": "550",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "30",
                                "height": "60",
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