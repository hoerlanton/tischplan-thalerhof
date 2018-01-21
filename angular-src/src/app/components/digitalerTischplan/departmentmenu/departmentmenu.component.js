"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DepartmentmenuComponent = (function () {
    function DepartmentmenuComponent() {
        this.showSonnbergZirbnBoolChange = new core_1.EventEmitter();
        this.showPanoramaBoolChange = new core_1.EventEmitter();
        this.showRestaurantBoolChange = new core_1.EventEmitter();
        this.showWintergartenBoolChange = new core_1.EventEmitter();
    }
    DepartmentmenuComponent.prototype.ngOnInit = function () {
    };
    DepartmentmenuComponent.prototype.ngAfterViewInit = function () {
    };
    DepartmentmenuComponent.prototype.showSonnbergZirbn = function () {
        console.log("showSonnbergZirbn!");
        this.showSonnbergZirbnBool = true;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        if (this.buttonBgColor1 === "0a7a74") {
            this.buttonBgColor1 = "f3efe4";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
        }
        else {
            this.buttonBgColor1 = "0a7a74";
        }
        if (this.fontColor1 === "f3efe4") {
            this.fontColor1 = "0a7a74";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
        }
        else {
            this.fontColor1 = "f3efe4";
        }
        this.showSonnbergZirbnBoolChange.emit(this.showSonnbergZirbnBool);
    };
    DepartmentmenuComponent.prototype.showPanorama = function () {
        console.log("showPanorama!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = true;
        console.log(this.showPanoramaBool);
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        if (this.buttonBgColor2 === "0a7a74") {
            this.buttonBgColor2 = "f3efe4";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
        }
        else {
            this.buttonBgColor2 = "0a7a74";
        }
        if (this.fontColor2 === "f3efe4") {
            this.fontColor2 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
        }
        else {
            this.fontColor2 = "f3efe4";
        }
        this.showPanoramaBoolChange.emit(this.showPanoramaBool);
    };
    DepartmentmenuComponent.prototype.showRestaurant = function () {
        console.log("showRestaurant!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = true;
        this.showWintergartenBool = false;
        if (this.buttonBgColor3 === "0a7a74") {
            this.buttonBgColor3 = "f3efe4";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
        }
        else {
            this.buttonBgColor3 = "0a7a74";
        }
        if (this.fontColor3 === "f3efe4") {
            this.fontColor3 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor4 = "f3efe4";
        }
        else {
            this.fontColor3 = "f3efe4";
        }
        this.showRestaurantBoolChange.emit(this.showRestaurantBool);
    };
    DepartmentmenuComponent.prototype.showWintergarten = function () {
        console.log("showWintergarten!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = true;
        if (this.buttonBgColor4 === "0a7a74") {
            this.buttonBgColor4 = "f3efe4";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
        }
        else {
            this.buttonBgColor4 = "0a7a74";
        }
        if (this.fontColor4 === "f3efe4") {
            this.fontColor4 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
        }
        else {
            this.fontColor4 = "f3efe4";
        }
        this.showWintergartenBoolChange.emit(this.showWintergartenBool);
    };
    return DepartmentmenuComponent;
}());
__decorate([
    core_1.Input('buttonBgColor1')
], DepartmentmenuComponent.prototype, "buttonBgColor1", void 0);
__decorate([
    core_1.Input('buttonBgColor2')
], DepartmentmenuComponent.prototype, "buttonBgColor2", void 0);
__decorate([
    core_1.Input('buttonBgColor3')
], DepartmentmenuComponent.prototype, "buttonBgColor3", void 0);
__decorate([
    core_1.Input('buttonBgColor4')
], DepartmentmenuComponent.prototype, "buttonBgColor4", void 0);
__decorate([
    core_1.Input('fontColor1')
], DepartmentmenuComponent.prototype, "fontColor1", void 0);
__decorate([
    core_1.Input('fontColor2')
], DepartmentmenuComponent.prototype, "fontColor2", void 0);
__decorate([
    core_1.Input('fontColor3')
], DepartmentmenuComponent.prototype, "fontColor3", void 0);
__decorate([
    core_1.Input('fontColor4')
], DepartmentmenuComponent.prototype, "fontColor4", void 0);
__decorate([
    core_1.Input('showPanoramaBool')
], DepartmentmenuComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    core_1.Input('showRestaurantBool')
], DepartmentmenuComponent.prototype, "showRestaurantBool", void 0);
__decorate([
    core_1.Input('showSonnbergZirbnBool')
], DepartmentmenuComponent.prototype, "showSonnbergZirbnBool", void 0);
__decorate([
    core_1.Input('showWintergartenBool')
], DepartmentmenuComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    core_1.Output()
], DepartmentmenuComponent.prototype, "showSonnbergZirbnBoolChange", void 0);
__decorate([
    core_1.Output()
], DepartmentmenuComponent.prototype, "showPanoramaBoolChange", void 0);
__decorate([
    core_1.Output()
], DepartmentmenuComponent.prototype, "showRestaurantBoolChange", void 0);
__decorate([
    core_1.Output()
], DepartmentmenuComponent.prototype, "showWintergartenBoolChange", void 0);
DepartmentmenuComponent = __decorate([
    core_1.Component({
        selector: 'app-departmentmenu',
        templateUrl: 'departmentmenu.component.html',
        styleUrls: ['../tischplan.component.css']
    })
], DepartmentmenuComponent);
exports.DepartmentmenuComponent = DepartmentmenuComponent;
