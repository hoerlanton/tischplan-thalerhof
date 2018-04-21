"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var wintergarten_component_1 = require("./wintergarten/wintergarten.component");
var all_component_1 = require("./all/all.component");
var panorama_component_1 = require("./panorama/panorama.component");
var restaurant_component_1 = require("./restaurant/restaurant.component");
var sonnberg_zirbn_component_1 = require("./sonnberg-zirbn/sonnberg-zirbn.component");
var DepartmentsComponent = (function () {
    function DepartmentsComponent(mainService) {
        this.mainService = mainService;
        this.dispensedSonnbergZirbn = new core_1.EventEmitter();
        this.dispensedRestaurant = new core_1.EventEmitter();
        this.dispensedWintergarten = new core_1.EventEmitter();
        this.dispensedPanorama = new core_1.EventEmitter();
        this.updateAzList = new core_1.EventEmitter();
        this.updateImHausListElement = new core_1.EventEmitter();
        this.parts = [];
        this.date = [];
        this.parsedDate = [];
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
    };
    DepartmentsComponent.prototype.occupied = function (table) {
        console.log("table.j");
        console.log(table.j);
        console.log("table.table");
        console.log(table.table);
        this.occupy(table.table, table.j);
    };
    DepartmentsComponent.prototype.occupy = function (table, j) {
        var _this = this;
        this.mainService.dispenseTable(table).subscribe(function (response) {
            console.log("Dispense Table:");
            console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
            console.log("isOccupied:" + JSON.stringify(response[0].tables[j].isOccupied));
            console.log(JSON.stringify(response));
            if (response === null || typeof response[0].tables[j].groups == null) {
                return;
            }
            else {
                response[0].tables.sort(function (a, b) {
                    if (Number(a.number) < Number(b.number))
                        return -1;
                    if (Number(a.number) > Number(b.number))
                        return 1;
                    return 0;
                });
                if (response[0].tables[j].department === "Sonnberg-Zirbn") {
                    _this.dispensedSonnbergZirbn.emit(response[0].tables);
                }
                else if (response[0].tables[j].department === "Panorama") {
                    _this.dispensedPanorama.emit(response[0].tables);
                }
                else if (response[0].tables[j].department === "Restaurant") {
                    _this.dispensedRestaurant.emit(response[0].tables);
                }
                else if (response[0].tables[j].department === "Wintergarten") {
                    _this.dispensedWintergarten.emit(response[0].tables);
                    console.log("Wintergarten" + JSON.stringify(response[0].tables));
                }
            }
        }, function (error) { return console.log("Error: ", error); }, function () {
            console.log(table);
            _this.updateAzList.emit();
            if (table.length > 1) {
                for (var i = 0; i < table.length; i++) {
                    _this.updateImHausListElement.emit(table[i].table);
                }
            }
            else {
                if (table.constructor === Array) {
                    console.log("isarray");
                    _this.updateImHausListElement.emit(table[0].table);
                }
                else {
                    _this.updateImHausListElement.emit(table);
                }
            }
        });
        this.mainService.addPlaceholder(table).subscribe(function (response) {
            console.log("Add placeholder!");
            //console.log(this.tablesSonnbergZirbn[j].placeholder);
            console.log("placeholder:" + JSON.stringify(response));
        });
    };
    DepartmentsComponent.prototype.addInformationToTable = function (dataString, arrayIndex) {
        var _this = this;
        console.log("dataString");
        console.log(dataString);
        this.mainService.addInformationToTable(dataString)
            .subscribe(function (response) {
            // let arrayIndex = response[1];
            console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
            if (response === null) {
                return;
            }
            else {
                if (response[0].department === "Sonnberg-Zirbn") {
                    _this.dispensedSonnbergZirbn.emit(response[0].tables);
                }
                else if (response[0].department === "Panorama") {
                    _this.dispensedPanorama.emit(response[0].tables);
                }
                else if (response[0].department === "Restaurant") {
                    _this.dispensedRestaurant.emit(response[0].tables);
                }
                else if (response[0].department === "Wintergarten") {
                    _this.dispensedWintergarten.emit(response[0].tables);
                }
            }
        }
        // console.log(this.tablesSonnbergZirbn[arrayIndex]);
        );
    };
    ;
    DepartmentsComponent.prototype.occupyTableOnDrop = function (dataString, arrayIndex) {
        var _this = this;
        console.log("Occupy Table!");
        console.log(dataString);
        this.mainService.occupyTable(dataString)
            .subscribe(function (response) {
            //let arrayIndex = response[1];
            //console.log("arrayIndex:" + arrayIndex);
            //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
            console.log("Response occupyTable:" + JSON.stringify(response));
            if (response === null) {
                return;
            }
            else {
                if (response.tables[0].department === "Sonnberg-Zirbn") {
                    _this.tablesSonnbergZirbn[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Panorama") {
                    _this.tablesPanorama[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Restaurant") {
                    _this.tablesRestaurant[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Wintergarten") {
                    _this.tablesWintergarten[arrayIndex] = response.tables[0];
                }
            }
            _this.updateAzList.emit();
        });
    };
    DepartmentsComponent.prototype.changeBgColorIfAnreise = function () {
        var _this = this;
        setTimeout(function () {
            _this.tablesChangeBgColorIfAnreise = _this.tablesTempDeparture;
            //console.log('changeBgColorIfAnreise calld');
            //console.log(this.tablesChangeBgColorIfAnreise);
            _this.dateTodayGenerated = new Date();
            _this.parts = [];
            _this.parsedDate = [];
            _this.date = [];
            for (var a = 0; a < _this.tablesChangeBgColorIfAnreise.length; a++) {
                for (var b = 0; b < _this.tablesChangeBgColorIfAnreise[a].tables.length; b++) {
                    if (_this.tablesChangeBgColorIfAnreise[a].tables[b].groups) {
                        for (var c = 0; c < _this.tablesChangeBgColorIfAnreise[a].tables[b].groups.length; c++) {
                            if (_this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue) {
                                //console.log('tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue: ' + c + " " + this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue);
                                _this.parts[0] = _this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue.match(/(\d+)/g);
                            }
                            else {
                                _this.parts[0] = "undefined";
                            }
                            if (_this.parts[0]) {
                                _this.date[0] = new Date(2018, _this.parts[0][1] - 1, _this.parts[0][0]);
                                _this.parsedDate[0] = String(_this.date[0]).substring(0, 15);
                            }
                            // note parts[1]-1
                            // console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
                            // Mon May 31 2010 00:00:00
                            // this.tablesRestaurant[j].anreiseValue
                            var dateToday = String(_this.dateTodayGenerated).substring(0, 15);
                            //console.log('Parsed Date --->: ' + this.parsedDate[0]);
                            //console.log('this.dateGenerated --->: ' + dateToday);
                            if (dateToday.indexOf(_this.parsedDate[0]) !== -1) {
                                if (_this.tablesChangeBgColorIfAnreise[a].department === "Panorama") {
                                    //console.log(this.tablesPanorama);
                                    if (_this.tablesPanorama[b]) {
                                        //console.log(this.tablesPanorama[b]);
                                        _this.tablesPanorama[b].bgColor = "#0a7a74";
                                    }
                                }
                                else if (_this.tablesChangeBgColorIfAnreise[a].department === "Wintergarten") {
                                    if (_this.tablesWintergarten[b]) {
                                        _this.tablesWintergarten[b].bgColor = "#0a7a74";
                                    }
                                }
                                else if (_this.tablesChangeBgColorIfAnreise[a].department === "Sonnberg-Zirbn") {
                                    if (_this.tablesSonnbergZirbn[b]) {
                                        _this.tablesSonnbergZirbn[b].bgColor = "#0a7a74";
                                    }
                                }
                                else if (_this.tablesChangeBgColorIfAnreise[a].department === "Restaurant") {
                                    if (_this.tablesRestaurant[b]) {
                                        _this.tablesRestaurant[b].bgColor = "#0a7a74";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, 1000);
    };
    DepartmentsComponent.prototype.transform = function (term) {
        if (this.showPanoramaBool) {
            this.panoramaComponent.transform(this.tablesPanorama, term);
        }
        else if (this.showRestaurantBool) {
            this.restaurantComponent.transform(this.tablesRestaurant, term);
        }
        else if (this.showWintergartenBool) {
            this.wintergartenComponent.transform(this.tablesWintergarten, term);
        }
        else if (this.showSonnbergZirbnBool) {
            this.sonnbergZirbnComponent.transform(this.tablesSonnbergZirbn, term);
        }
        else if (this.showAllBool) {
            this.allComponent.transform(this.tables, term);
        }
    };
    return DepartmentsComponent;
}());
__decorate([
    core_1.Input('tablesWintergarten')
], DepartmentsComponent.prototype, "tablesWintergarten", void 0);
__decorate([
    core_1.Input('showWintergartenBool')
], DepartmentsComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    core_1.Input('tablesSonnbergZirbn')
], DepartmentsComponent.prototype, "tablesSonnbergZirbn", void 0);
__decorate([
    core_1.Input('showSonnbergZirbnBool')
], DepartmentsComponent.prototype, "showSonnbergZirbnBool", void 0);
__decorate([
    core_1.Input()
], DepartmentsComponent.prototype, "tablesPanorama", void 0);
__decorate([
    core_1.Input('tables')
], DepartmentsComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('showPanoramaBool')
], DepartmentsComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    core_1.Input('tablesRestaurant')
], DepartmentsComponent.prototype, "tablesRestaurant", void 0);
__decorate([
    core_1.Input('showRestaurantBool')
], DepartmentsComponent.prototype, "showRestaurantBool", void 0);
__decorate([
    core_1.Input('showAllBool')
], DepartmentsComponent.prototype, "showAllBool", void 0);
__decorate([
    core_1.Input()
], DepartmentsComponent.prototype, "tablesTempDeparture", void 0);
__decorate([
    core_1.Input('term')
], DepartmentsComponent.prototype, "term", void 0);
__decorate([
    core_1.ViewChild(all_component_1.AllComponent)
], DepartmentsComponent.prototype, "allComponent", void 0);
__decorate([
    core_1.ViewChild(panorama_component_1.PanoramaComponent)
], DepartmentsComponent.prototype, "panoramaComponent", void 0);
__decorate([
    core_1.ViewChild(restaurant_component_1.RestaurantComponent)
], DepartmentsComponent.prototype, "restaurantComponent", void 0);
__decorate([
    core_1.ViewChild(wintergarten_component_1.WintergartenComponent)
], DepartmentsComponent.prototype, "wintergartenComponent", void 0);
__decorate([
    core_1.ViewChild(sonnberg_zirbn_component_1.SonnbergZirbnComponent)
], DepartmentsComponent.prototype, "sonnbergZirbnComponent", void 0);
__decorate([
    core_1.Output()
], DepartmentsComponent.prototype, "dispensedSonnbergZirbn", void 0);
__decorate([
    core_1.Output()
], DepartmentsComponent.prototype, "dispensedRestaurant", void 0);
__decorate([
    core_1.Output()
], DepartmentsComponent.prototype, "dispensedWintergarten", void 0);
__decorate([
    core_1.Output()
], DepartmentsComponent.prototype, "dispensedPanorama", void 0);
__decorate([
    core_1.Output()
], DepartmentsComponent.prototype, "updateAzList", void 0);
__decorate([
    core_1.Output()
], DepartmentsComponent.prototype, "updateImHausListElement", void 0);
DepartmentsComponent = __decorate([
    core_1.Component({
        selector: 'app-departments',
        templateUrl: 'departments.component.html',
        styleUrls: ['../main.component.css']
    })
], DepartmentsComponent);
exports.DepartmentsComponent = DepartmentsComponent;
