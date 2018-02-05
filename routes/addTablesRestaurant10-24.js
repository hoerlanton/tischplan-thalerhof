module.exports = {
    addTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
        if (tableNumber === '12' && topValue === '200' && leftValue === '30' && width === '60') {
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
                    {}, {
                        $pull: {
                            tables: {
                                "number": "13",
                            }
                        }
                    },
                    {
                        multi: true
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("removeTable Update successful");
                        console.log(tables);
                    });
        } else if (tableNumber === '12' && topValue === '200' && leftValue === '30' && width === '90') {
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
                    {}, {
                        $pull: {
                            tables: {
                                "number": "14",
                            }
                        }
                    },
                    {
                        multi: true
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("removeTable Update successful");
                        console.log(tables);
                    });
        } else if (tableNumber === '12' && topValue === '200' && leftValue === '30' && width === '120') {
                db.tables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.width": "150",
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
                                "number": "15",
                            }
                        }
                    },
                    {
                        multi: true
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("removeTable Update successful");
                        console.log(tables);
                    });
        } else if (tableNumber === '13' && topValue === '200' && leftValue === '110' && width === '30') {
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "14",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '13' && topValue === '200' && leftValue === '110' && width === '60') {
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "15",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '13' && topValue === '200' && leftValue === '110' && width === '90') {
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "16",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '14' && topValue === '200' && leftValue === '170' && width === '30') {
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "15",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '14' && topValue === '200' && leftValue === '170' && width === '60') {
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "16",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '15' && topValue === '200' && leftValue === '230' && width === '30') {
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "16",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '17' && topValue === '200' && leftValue === '350' && width === '30') {
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "18",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '19' && topValue === '200' && leftValue === '580' && width === '60') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "200",
                        "tables.$.leftValue": "580",
                        "tables.$.width": "90",
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
                            "number": "21",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '19' && topValue === '200' && leftValue === '550') {
                db.tables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.topValue": "200",
                            "tables.$.leftValue": "580",
                            "tables.$.width": "60",
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
                                "number": "20",
                            }
                        }
                    },
                    {
                        multi: true
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("removeTable Update successful");
                        console.log(tables);
                    });
            } else if (tableNumber === '19' && topValue === '200' && leftValue === '580' && width === '60') {
                db.tables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.topValue": "200",
                            "tables.$.leftValue": "580",
                            "tables.$.width": "90",
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
                                "number": "21",
                            }
                        }
                    },
                    {
                        multi: true
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("removeTable Update successful");
                        console.log(tables);
                    });
            } else if (tableNumber === '20' && topValue === '200' && leftValue === '610') {
                db.tables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.topValue": "200",
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
                    {}, {
                        $pull: {
                            tables: {
                                "number": "21",
                            }
                        }
                    },
                    {
                        multi: true
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("removeTable Update successful");
                        console.log(tables);
                    });
        } else if (tableNumber === '23' && topValue === '370' && leftValue === '640' && width === '30') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "370",
                        "tables.$.leftValue": "550",
                        "tables.$.width": "90",
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
                            "number": "24",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        }
    }
};