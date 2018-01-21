"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DepartmentsComponent = (function () {
    function DepartmentsComponent(tischplanService) {
        this.tischplanService = tischplanService;
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
    };
    DepartmentsComponent.prototype.occupied = function (table) {
        console.log("table.j");
        console.log(table.j);
        console.log("table");
        console.log(table);
        this.occupy(table.table, table.j);
    };
    DepartmentsComponent.prototype.occupy = function (table, j) {
        var _this = this;
        this.tischplanService.dispenseTable(table).subscribe(function (response) {
            console.log("Dispense Table:");
            console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
            console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
            if (response === null) {
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
                if (response[0].tables.department === "Sonnberg-Zirbn") {
                    _this.tablesSonnbergZirbn = response[0].tables;
                }
                else if (response[0].tables.department === "Panorama") {
                    _this.tablesPanorama = response[0].tables;
                }
                else if (response[0].tables.department === "Restaurant") {
                    _this.tablesRestaurant = response[0].tables;
                }
                else if (response[0].tables.department === "Wintergarten") {
                    _this.tablesWintergarten = response[0].tables;
                }
            }
        });
        this.tischplanService.addPlaceholder(table).subscribe(function (response) {
            console.log("Add placeholder!");
            console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
            //console.log(this.tablesSonnbergZirbn[j].placeholder);
            if (response === null) {
                return;
            }
            else {
                {
                    if (response[0].tables[j].department === "Sonnberg-Zirbn") {
                        _this.tablesSonnbergZirbn[j].placeholder = response[0].tables[j].placeholder;
                    }
                    else if (response[0].tables[j].department === "Panorama") {
                        _this.tablesPanorama[j].placeholder = response[0].tables[j].placeholder;
                    }
                    else if (response[0].tables[j].department === "Restaurant") {
                        _this.tablesRestaurant[j].placeholder = response[0].tables[j].placeholder;
                    }
                    else if (response[0].tables[j].department === "Wintergarten") {
                        _this.tablesWintergarten[j].placeholder = response[0].tables[j].placeholder;
                    }
                }
            }
        });
    };
    DepartmentsComponent.prototype.addInformationToTable = function (dataString, arrayIndex) {
        var _this = this;
        this.tischplanService.addInformationToTable(dataString)
            .subscribe(function (response) {
            // let arrayIndex = response[1];
            console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
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
        }
        // console.log(this.tablesSonnbergZirbn[arrayIndex]);
        );
    };
    ;
    DepartmentsComponent.prototype.occupyTableOnDrop = function (dataString, arrayIndex) {
        var _this = this;
        console.log("Occupy Table!");
        this.tischplanService.occupyTable(dataString)
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
        });
    };
    DepartmentsComponent.prototype.moveTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table :' + table.number + 'j' + j);
        this.tischplanService.moveTable(table).subscribe(function (response) {
            console.log('Response:' + JSON.stringify(response));
            //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
            console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
            console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
            if (response === null) {
                return;
            }
            else {
                if (response[0].tables.department === "Sonnberg-Zirbn") {
                    _this.tablesSonnbergZirbn = response[0].tables;
                }
                else if (response[0].tables.department === "Panorama") {
                    _this.tablesPanorama = response[0].tables;
                }
                else if (response[0].tables.department === "Restaurant") {
                    _this.tablesRestaurant = response[0].tables;
                }
                else if (response[0].tables.department === "Wintergarten") {
                    _this.tablesWintergarten = response[0].tables;
                }
            }
        });
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
    core_1.Input('tablesPanorama')
], DepartmentsComponent.prototype, "tablesPanorama", void 0);
__decorate([
    core_1.Input('showPanoramaBool')
], DepartmentsComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    core_1.Input('tablesRestaurant')
], DepartmentsComponent.prototype, "tablesRestaurant", void 0);
__decorate([
    core_1.Input('showRestaurantBool')
], DepartmentsComponent.prototype, "showRestaurantBool", void 0);
DepartmentsComponent = __decorate([
    core_1.Component({
        selector: 'app-departments',
        templateUrl: 'departments.component.html',
        styleUrls: ['../tischplan.component.css']
    })
], DepartmentsComponent);
exports.DepartmentsComponent = DepartmentsComponent;
