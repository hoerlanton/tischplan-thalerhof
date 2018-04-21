"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TableplanComponent = (function () {
    function TableplanComponent(mainService) {
        this.mainService = mainService;
        this.movedSonnbergZirbn = new core_1.EventEmitter();
        this.movedRestaurant = new core_1.EventEmitter();
        this.movedWintergarten = new core_1.EventEmitter();
        this.movedPanorama = new core_1.EventEmitter();
        this.changeBgColorIfAnreise = new core_1.EventEmitter();
        this.childWintergartenExport = new core_1.EventEmitter();
        this.adultWintergartenExport = new core_1.EventEmitter();
        this.adultRestaurantExport = new core_1.EventEmitter();
        this.childRestaurantExport = new core_1.EventEmitter();
        this.adultPanoramaExport = new core_1.EventEmitter();
        this.childPanoramaExport = new core_1.EventEmitter();
        this.adultSonnbergZirbnExport = new core_1.EventEmitter();
        this.childSonnbergZirbnExport = new core_1.EventEmitter();
        this.adultSonnbergZirbn = [];
        this.childSonnbergZirbn = [];
        this.adultPanorama = [];
        this.childPanorama = [];
        this.adultRestaurant = [];
        this.childRestaurant = [];
        this.adultWintergarten = [];
        this.childWintergarten = [];
        this.buttonMoveTable = "ff0000";
        this.buttonInfo = "ffffff";
        this.buttonHinzufuegen = "ffffff";
        this.buttonEntfernen = "ffffff";
        this.trace = false;
    }
    TableplanComponent.prototype.ngAfterViewInit = function () {
    };
    TableplanComponent.prototype.addTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table :' + table.number + 'j' + j);
        this.mainService.addTable(table).subscribe(function (response) {
            for (var a = 0; a < response[0].tables.length; a++) {
                response[0].tables.sort(function (a, b) {
                    if (Number(a.number) < Number(b.number))
                        return -1;
                    if (Number(a.number) > Number(b.number))
                        return 1;
                    return 0;
                });
            }
            console.log('Response:' + JSON.stringify(response));
            //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
            console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
            console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
            console.log("response[0].tables.department" + response[0].tables[j].department);
            if (response === null) {
                return;
            }
            else {
                if (response[0].tables[j].department === "Sonnberg-Zirbn") {
                    _this.movedSonnbergZirbn.emit(response[0].tables);
                    //this.tablesSonnbergZirbn = response[0].tables;
                }
                else if (response[0].tables[j].department === "Panorama") {
                    _this.movedPanorama.emit(response[0].tables);
                    //this.tablesPanorama = response[0].tables;
                    //this._navService.changeNav(response[0].tables);
                }
                else if (response[0].tables[j].department === "Restaurant") {
                    _this.movedRestaurant.emit(response[0].tables);
                    //this.tablesRestaurant = response[0].tables;
                }
                else if (response[0].tables[j].department === "Wintergarten") {
                    _this.movedWintergarten.emit(response[0].tables);
                    //this.tablesWintergarten = response[0].tables;
                }
            }
            _this.changeBgColorIfAnreise.emit();
        });
    };
    TableplanComponent.prototype.removeTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table :' + table.number + 'j' + j);
        this.mainService.removeTable(table).subscribe(function (response) {
            for (var a = 0; a < response[0].tables.length; a++) {
                response[0].tables.sort(function (a, b) {
                    if (Number(a.number) < Number(b.number))
                        return -1;
                    if (Number(a.number) > Number(b.number))
                        return 1;
                    return 0;
                });
            }
            console.log('Response:' + JSON.stringify(response));
            //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
            console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
            console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
            console.log("response[0].tables.department" + response[0].tables[j].department);
            if (response === null) {
                return;
            }
            else {
                if (response[0].tables[j].department === "Sonnberg-Zirbn") {
                    _this.movedSonnbergZirbn.emit(response[0].tables);
                    //this.tablesSonnbergZirbn = response[0].tables;
                }
                else if (response[0].tables[j].department === "Panorama") {
                    _this.movedPanorama.emit(response[0].tables);
                    //this.tablesPanorama = response[0].tables;
                    //this._navService.changeNav(response[0].tables);
                }
                else if (response[0].tables[j].department === "Restaurant") {
                    _this.movedRestaurant.emit(response[0].tables);
                    //this.tablesRestaurant = response[0].tables;
                }
                else if (response[0].tables[j].department === "Wintergarten") {
                    _this.movedWintergarten.emit(response[0].tables);
                    //this.tablesWintergarten = response[0].tables;
                }
            }
            _this.changeBgColorIfAnreise.emit();
        });
    };
    TableplanComponent.prototype.getStyle = function (a) {
        //console.log("a");
        //console.log(a);
        if (typeof a === "undefined") {
            return "solid 3px rgb(243, 239, 228)";
        }
        else {
            for (var b = 0; b < a.length; b++) {
                //console.log("LOOOOOOOOOOOOOOP");
                //console.log(a[b].traceValue);
                if (a[b].traceValue != "-" || a[b].newTraceText) {
                    this.trace = true;
                }
            }
            if (this.trace) {
                this.trace = false;
                return "solid 3px red";
            }
            else {
                return "solid 3px rgb(243, 239, 228)";
            }
        }
    };
    TableplanComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    TableplanComponent.prototype.mouseEnterMoveTableButton = function () {
        console.log("mouse enter : ");
        if (this.buttonMoveTable === "ff0000") {
            console.log('mouse enter1 :');
            this.buttonMoveTable = "bc0000";
        }
    };
    TableplanComponent.prototype.mouseLeaveMoveTableButton = function () {
        if (this.buttonMoveTable === "bc0000") {
            console.log('mouse leave1 :');
            this.buttonMoveTable = "ff0000";
        }
    };
    TableplanComponent.prototype.mouseEnterInfoButton = function () {
        console.log("mouse enter : ");
        if (this.buttonInfo === "ffffff") {
            console.log('mouse enter1 :');
            this.buttonInfo = "cfcfcf";
        }
    };
    TableplanComponent.prototype.mouseLeaveInfoButton = function () {
        if (this.buttonInfo === "cfcfcf") {
            console.log('mouse leave1 :');
            this.buttonInfo = "ffffff";
        }
    };
    TableplanComponent.prototype.mouseEnterHinzufuegenButton = function () {
        console.log("mouse enter : ");
        if (this.buttonHinzufuegen === "ffffff") {
            console.log('mouse enter1 :');
            this.buttonHinzufuegen = "cfcfcf";
        }
    };
    TableplanComponent.prototype.mouseLeaveHinzufuegenButton = function () {
        if (this.buttonHinzufuegen === "cfcfcf") {
            console.log('mouse leave1 :');
            this.buttonHinzufuegen = "ffffff";
        }
    };
    TableplanComponent.prototype.mouseEnterEntfernenButton = function () {
        console.log("mouse enter : ");
        if (this.buttonEntfernen === "ffffff") {
            console.log('mouse enter1 :');
            this.buttonEntfernen = "cfcfcf";
        }
    };
    TableplanComponent.prototype.mouseLeaveEntfernenButton = function () {
        if (this.buttonEntfernen === "cfcfcf") {
            console.log('mouse leave1 :');
            this.buttonEntfernen = "ffffff";
        }
    };
    TableplanComponent.prototype.getStyleTrace = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    TableplanComponent.prototype.sumUpPersonenAnzahl = function () {
        console.log("sumUpPersonenAnzahl calld");
        if (this.tablesSonnbergZirbn) {
            for (var p = 0; p < this.tablesSonnbergZirbn.length; p++) {
                this.adultSonnbergZirbn[p] = 0;
                this.childSonnbergZirbn[p] = 0;
                if (this.tablesSonnbergZirbn[p].groups) {
                    for (var g = 0; g < this.tablesSonnbergZirbn[p].groups.length; g++) {
                        if (this.tablesSonnbergZirbn[p].groups[g].numberOfPersonsValue) {
                            var adult = this.tablesSonnbergZirbn[p].groups[g].numberOfPersonsValue.match(/\d+/g);
                            if (adult != null) {
                                //console.log(adult);
                                this.adultSonnbergZirbn[p] = this.adultSonnbergZirbn[p] + Number(adult[0]);
                                //console.log(this.adult[p]);
                            }
                            if (adult != null) {
                                //console.log(adult);
                                this.childSonnbergZirbn[p] = this.childSonnbergZirbn[p] + Number(adult[1]);
                                //console.log(this.child[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesPanorama) {
            for (var p = 0; p < this.tablesPanorama.length; p++) {
                this.adultPanorama[p] = 0;
                this.childPanorama[p] = 0;
                if (this.tablesPanorama[p].groups) {
                    for (var g = 0; g < this.tablesPanorama[p].groups.length; g++) {
                        if (this.tablesPanorama[p].groups[g].numberOfPersonsValue) {
                            var adult = this.tablesPanorama[p].groups[g].numberOfPersonsValue.match(/\d+/g);
                            if (adult != null) {
                                //console.log(adult);
                                this.adultPanorama[p] = this.adultPanorama[p] + Number(adult[0]);
                                //console.log(this.adult[p]);
                            }
                            if (adult != null) {
                                //console.log(adult);
                                this.childPanorama[p] = this.childPanorama[p] + Number(adult[1]);
                                //console.log(this.child[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesRestaurant) {
            for (var p = 0; p < this.tablesRestaurant.length; p++) {
                this.adultRestaurant[p] = 0;
                this.childRestaurant[p] = 0;
                if (this.tablesRestaurant[p].groups) {
                    for (var g = 0; g < this.tablesRestaurant[p].groups.length; g++) {
                        if (this.tablesRestaurant[p].groups[g].numberOfPersonsValue) {
                            var adult = this.tablesRestaurant[p].groups[g].numberOfPersonsValue.match(/\d+/g);
                            if (adult != null) {
                                //console.log(adult);
                                this.adultRestaurant[p] = this.adultRestaurant[p] + Number(adult[0]);
                                //console.log(this.adult[p]);
                            }
                            if (adult != null) {
                                //console.log(adult);
                                this.childRestaurant[p] = this.childRestaurant[p] + Number(adult[1]);
                                //console.log(this.child[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesWintergarten) {
            for (var p = 0; p < this.tablesWintergarten.length; p++) {
                this.adultWintergarten[p] = 0;
                this.childWintergarten[p] = 0;
                if (this.tablesWintergarten[p].groups) {
                    for (var g = 0; g < this.tablesWintergarten[p].groups.length; g++) {
                        if (this.tablesWintergarten[p].groups[g].numberOfPersonsValue) {
                            var adult = this.tablesWintergarten[p].groups[g].numberOfPersonsValue.match(/\d+/g);
                            if (adult != null) {
                                //console.log(adult);
                                this.adultWintergarten[p] = this.adultWintergarten[p] + Number(adult[0]);
                                //console.log(this.adult[p]);
                            }
                            if (adult != null) {
                                //console.log(adult);
                                this.childWintergarten[p] = this.childWintergarten[p] + Number(adult[1]);
                                //console.log(this.child[p]);
                            }
                        }
                    }
                }
            }
        }
        this.childWintergartenExport.emit(this.childWintergarten);
        this.adultWintergartenExport.emit(this.adultWintergarten);
        this.adultRestaurantExport.emit(this.adultRestaurant);
        this.childRestaurantExport.emit(this.childRestaurant);
        this.adultPanoramaExport.emit(this.adultPanorama);
        this.childPanoramaExport.emit(this.childPanorama);
        this.adultSonnbergZirbnExport.emit(this.adultSonnbergZirbn);
        this.childSonnbergZirbnExport.emit(this.childSonnbergZirbn);
    };
    return TableplanComponent;
}());
__decorate([
    core_1.Input('tablesWintergarten')
], TableplanComponent.prototype, "tablesWintergarten", void 0);
__decorate([
    core_1.Input('showWintergartenBool')
], TableplanComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    core_1.Input('tablesSonnbergZirbn')
], TableplanComponent.prototype, "tablesSonnbergZirbn", void 0);
__decorate([
    core_1.Input('showSonnbergZirbnBool')
], TableplanComponent.prototype, "showSonnbergZirbnBool", void 0);
__decorate([
    core_1.Input('tablesPanorama')
], TableplanComponent.prototype, "tablesPanorama", void 0);
__decorate([
    core_1.Input('showPanoramaBool')
], TableplanComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    core_1.Input('tablesRestaurant')
], TableplanComponent.prototype, "tablesRestaurant", void 0);
__decorate([
    core_1.Input('showRestaurantBool')
], TableplanComponent.prototype, "showRestaurantBool", void 0);
__decorate([
    core_1.Input('showAllBool')
], TableplanComponent.prototype, "showAllBool", void 0);
__decorate([
    core_1.Input('showTablePlanBool')
], TableplanComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "movedSonnbergZirbn", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "movedRestaurant", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "movedWintergarten", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "movedPanorama", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "changeBgColorIfAnreise", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "childWintergartenExport", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "adultWintergartenExport", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "adultRestaurantExport", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "childRestaurantExport", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "adultPanoramaExport", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "childPanoramaExport", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "adultSonnbergZirbnExport", void 0);
__decorate([
    core_1.Output()
], TableplanComponent.prototype, "childSonnbergZirbnExport", void 0);
TableplanComponent = __decorate([
    core_1.Component({
        selector: 'app-tableplan',
        templateUrl: 'tableplan.component.html',
        styleUrls: ['../main.component.css']
    })
], TableplanComponent);
exports.TableplanComponent = TableplanComponent;
