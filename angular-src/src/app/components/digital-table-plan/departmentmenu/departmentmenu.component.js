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
        this.showAllBoolChange = new core_1.EventEmitter();
        this.showNoteFormBoolChange = new core_1.EventEmitter();
        this.showInfoFormBoolChange = new core_1.EventEmitter();
        this.showTablePlanBoolChange = new core_1.EventEmitter();
        this.showDepartments = true;
        this.buttonBgColorShowTablePlan = "0a7a74";
        this.buttonBgColorInfoForm = "0a7a74";
        this.buttonBgColorNoteForm = "0a7a74";
        this.buttonBgColorDropdownToggle = "0a7a74";
    }
    DepartmentmenuComponent.prototype.ngOnInit = function () {
    };
    DepartmentmenuComponent.prototype.ngAfterViewInit = function () {
    };
    DepartmentmenuComponent.prototype.showSonnbergZirbn = function () {
        //console.log("showSonnbergZirbn!");
        this.showSonnbergZirbnBool = true;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        this.showAllBool = false;
        this.showDepartments = false;
        if (this.buttonBgColor1 === "154846") {
            this.buttonBgColor1 = "0d2f2e";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
        }
        else {
            this.buttonBgColor1 = "0a7a74";
        }
        if (this.fontColor1 === "f3efe4") {
            this.fontColor1 = "0a7a74";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
            this.fontColor5 = "f3efe4";
        }
        else {
            this.fontColor1 = "f3efe4";
        }
        this.showSonnbergZirbnBoolChange.emit(this.showSonnbergZirbnBool);
        this.showRestaurantBoolChange.emit(this.showRestaurantBool);
        this.showPanoramaBoolChange.emit(this.showPanoramaBool);
        this.showWintergartenBoolChange.emit(this.showWintergartenBool);
        this.showAllBoolChange.emit(this.showAllBool);
    };
    DepartmentmenuComponent.prototype.showPanorama = function () {
        //console.log("showPanorama!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = true;
        //console.log(this.showPanoramaBool);
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        this.showAllBool = false;
        this.showDepartments = false;
        if (this.buttonBgColor2 === "154846") {
            this.buttonBgColor2 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
        }
        else {
            this.buttonBgColor2 = "0a7a74";
        }
        if (this.fontColor2 === "f3efe4") {
            this.fontColor2 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
            this.fontColor5 = "f3efe4";
        }
        else {
            this.fontColor2 = "f3efe4";
        }
        this.showPanoramaBoolChange.emit(this.showPanoramaBool);
        this.showSonnbergZirbnBoolChange.emit(this.showSonnbergZirbnBool);
        this.showRestaurantBoolChange.emit(this.showRestaurantBool);
        this.showWintergartenBoolChange.emit(this.showWintergartenBool);
        this.showAllBoolChange.emit(this.showAllBool);
    };
    DepartmentmenuComponent.prototype.showRestaurant = function () {
        //console.log("showRestaurant!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = true;
        this.showWintergartenBool = false;
        this.showAllBool = false;
        this.showDepartments = false;
        if (this.buttonBgColor3 === "154846") {
            this.buttonBgColor3 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
        }
        else {
            this.buttonBgColor3 = "0a7a74";
        }
        if (this.fontColor3 === "f3efe4") {
            this.fontColor3 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor4 = "f3efe4";
            this.fontColor5 = "f3efe4";
        }
        else {
            this.fontColor3 = "f3efe4";
        }
        this.showRestaurantBoolChange.emit(this.showRestaurantBool);
        this.showSonnbergZirbnBoolChange.emit(this.showSonnbergZirbnBool);
        this.showPanoramaBoolChange.emit(this.showPanoramaBool);
        this.showWintergartenBoolChange.emit(this.showWintergartenBool);
        this.showAllBoolChange.emit(this.showAllBool);
    };
    DepartmentmenuComponent.prototype.showWintergarten = function () {
        //console.log("showWintergarten!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = true;
        this.showAllBool = false;
        this.showDepartments = false;
        if (this.buttonBgColor4 === "154846") {
            this.buttonBgColor4 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
        }
        else {
            this.buttonBgColor4 = "0a7a74";
        }
        if (this.fontColor4 === "f3efe4") {
            this.fontColor4 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor5 = "f3efe4";
        }
        else {
            this.fontColor4 = "f3efe4";
        }
        this.showWintergartenBoolChange.emit(this.showWintergartenBool);
        this.showSonnbergZirbnBoolChange.emit(this.showSonnbergZirbnBool);
        this.showRestaurantBoolChange.emit(this.showRestaurantBool);
        this.showPanoramaBoolChange.emit(this.showPanoramaBool);
        this.showAllBoolChange.emit(this.showAllBool);
    };
    DepartmentmenuComponent.prototype.showAll = function () {
        //console.log("showAll!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        this.showAllBool = true;
        this.showDepartments = false;
        if (this.buttonBgColor5 === "154846") {
            this.buttonBgColor5 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
        }
        else {
            this.buttonBgColor5 = "0a7a74";
        }
        if (this.fontColor5 === "f3efe4") {
            this.fontColor5 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
        }
        else {
            this.fontColor5 = "f3efe4";
        }
        this.showWintergartenBoolChange.emit(this.showWintergartenBool);
        this.showSonnbergZirbnBoolChange.emit(this.showSonnbergZirbnBool);
        this.showRestaurantBoolChange.emit(this.showRestaurantBool);
        this.showPanoramaBoolChange.emit(this.showPanoramaBool);
        this.showAllBoolChange.emit(this.showAllBool);
    };
    DepartmentmenuComponent.prototype.showInfoForm = function () {
        console.log("showTraceForm!");
        this.showNoteFormBool = false;
        this.showInfoFormBool = true;
        this.showTablePlanBool = false;
        if (this.buttonBgColorInfoForm === "154846") {
            this.buttonBgColorInfoForm = "0d2f2e";
            this.buttonBgColorNoteForm = "0a7a74";
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
        else {
            this.buttonBgColorInfoForm = "0a7a74";
        }
        if (this.fontColorInfoForm === "f3efe4") {
            this.fontColorInfoForm = "0a7a74";
            this.fontColorNoteForm = "f3efe4";
            this.fontColorShowTablePlan = "f3efe4";
        }
        else {
            this.fontColorInfoForm = "f3efe4";
        }
        this.showNoteFormBoolChange.emit(this.showNoteFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
        this.showTablePlanBoolChange.emit(this.showTablePlanBool);
    };
    DepartmentmenuComponent.prototype.showNoteForm = function () {
        //console.log("showNoteForm!");
        this.showNoteFormBool = true;
        this.showTablePlanBool = false;
        this.showInfoFormBool = false;
        if (this.buttonBgColorNoteForm === "154846") {
            this.buttonBgColorNoteForm = "0d2f2e";
            this.buttonBgColorInfoForm = "0a7a74";
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
        else {
            this.buttonBgColorNoteForm = "0a7a74";
        }
        if (this.fontColorNoteForm === "f3efe4") {
            this.fontColorNoteForm = "0a7a74";
            this.fontColorInfoForm = "f3efe4";
            this.fontColorShowTablePlan = "f3efe4";
        }
        else {
            this.fontColorNoteForm = "f3efe4";
        }
        this.showNoteFormBoolChange.emit(this.showNoteFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
        this.showTablePlanBoolChange.emit(this.showTablePlanBool);
    };
    DepartmentmenuComponent.prototype.showTablePlan = function () {
        //console.log("showTablePlan!");
        this.showNoteFormBool = false;
        this.showTablePlanBool = true;
        this.showInfoFormBool = false;
        if (this.buttonBgColorShowTablePlan = "154846") {
            this.buttonBgColorShowTablePlan = "0d2f2e";
            this.buttonBgColorNoteForm = "0a7a74";
            this.buttonBgColorInfoForm = "0a7a74";
        }
        else {
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
        if (this.fontColorShowTablePlan = "f3efe4") {
            this.fontColorShowTablePlan = "0a7a74";
            this.fontColorNoteForm = "f3efe4";
            this.fontColorInfoForm = "f3efe4";
        }
        else {
            this.fontColorShowTablePlan = "0a7a74";
        }
        this.showNoteFormBoolChange.emit(this.showNoteFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
        this.showTablePlanBoolChange.emit(this.showTablePlanBool);
    };
    DepartmentmenuComponent.prototype.mouseEnterShowInfoForm = function () {
        //console.log("mouse enter : ");
        if (this.buttonBgColorInfoForm === "0a7a74") {
            //console.log('mouse enter1 :');
            this.buttonBgColorInfoForm = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowInfoForm = function () {
        if (this.buttonBgColorInfoForm === "0a7a74") {
            //console.log('mouse leave1 :');
            this.buttonBgColorInfoForm = "154846";
        }
        else if (this.buttonBgColorInfoForm === "154846") {
            //console.log('mouse leave2 :');
            this.buttonBgColorInfoForm = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterShowNoteForm = function () {
        //console.log("mouse enter : ");
        if (this.buttonBgColorNoteForm === "0a7a74") {
            //console.log('mouse enter1 :');
            this.buttonBgColorNoteForm = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowNoteForm = function () {
        if (this.buttonBgColorNoteForm === "0a7a74") {
            //console.log('mouse leave1 :');
            this.buttonBgColorNoteForm = "154846";
        }
        else if (this.buttonBgColorNoteForm === "154846") {
            //console.log('mouse leave2 :');
            this.buttonBgColorNoteForm = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterShowTablePlan = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColorShowTablePlan === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowTablePlan = function () {
        if (this.buttonBgColorShowTablePlan === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "154846";
        }
        else if (this.buttonBgColorShowTablePlan === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterDropdownToggle = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColorDropdownToggle === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveDropdownToggle = function () {
        if (this.buttonBgColorDropdownToggle === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "154846";
        }
        else if (this.buttonBgColorDropdownToggle === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterSonnbergZirbn = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor1 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor1 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveSonnbergZirbn = function () {
        if (this.buttonBgColor1 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor1 = "154846";
        }
        else if (this.buttonBgColor1 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor1 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterPanorama = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor2 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeavePanorama = function () {
        if (this.buttonBgColor2 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "154846";
        }
        else if (this.buttonBgColor2 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterRestaurant = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor3 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveRestaurant = function () {
        if (this.buttonBgColor3 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "154846";
        }
        else if (this.buttonBgColor3 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterWintergarten = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor4 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveWintergarten = function () {
        if (this.buttonBgColor4 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "154846";
        }
        else if (this.buttonBgColor4 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterAll = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor5 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveAll = function () {
        if (this.buttonBgColor5 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "154846";
        }
        else if (this.buttonBgColor5 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "0a7a74";
        }
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
    core_1.Input('buttonBgColor5')
], DepartmentmenuComponent.prototype, "buttonBgColor5", void 0);
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
    core_1.Input('fontColor5')
], DepartmentmenuComponent.prototype, "fontColor5", void 0);
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
    core_1.Input('showAllBool')
], DepartmentmenuComponent.prototype, "showAllBool", void 0);
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
__decorate([
    core_1.Output()
], DepartmentmenuComponent.prototype, "showAllBoolChange", void 0);
__decorate([
    core_1.Input('buttonBgColorInfoForm')
], DepartmentmenuComponent.prototype, "buttonBgColorInfoForm", void 0);
__decorate([
    core_1.Input('fontColorInfoForm')
], DepartmentmenuComponent.prototype, "fontColorInfoForm", void 0);
__decorate([
    core_1.Input('fontColorNoteForm')
], DepartmentmenuComponent.prototype, "fontColorNoteForm", void 0);
__decorate([
    core_1.Input('buttonBgColorNoteForm')
], DepartmentmenuComponent.prototype, "buttonBgColorNoteForm", void 0);
__decorate([
    core_1.Input('buttonBgColorShowTablePlan')
], DepartmentmenuComponent.prototype, "buttonBgColorShowTablePlan", void 0);
__decorate([
    core_1.Input('fontColorShowTablePlan')
], DepartmentmenuComponent.prototype, "fontColorShowTablePlan", void 0);
__decorate([
    core_1.Input('showNoteFormBool')
], DepartmentmenuComponent.prototype, "showNoteFormBool", void 0);
__decorate([
    core_1.Input('showInfoFormBool')
], DepartmentmenuComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    core_1.Input('showTablePlanBool')
], DepartmentmenuComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    core_1.Output()
], DepartmentmenuComponent.prototype, "showNoteFormBoolChange", void 0);
__decorate([
    core_1.Output()
], DepartmentmenuComponent.prototype, "showInfoFormBoolChange", void 0);
__decorate([
    core_1.Output()
], DepartmentmenuComponent.prototype, "showTablePlanBoolChange", void 0);
DepartmentmenuComponent = __decorate([
    core_1.Component({
        selector: 'app-departmentmenu',
        templateUrl: 'departmentmenu.component.html',
        styleUrls: ['departmentmenu.component.css']
    })
], DepartmentmenuComponent);
exports.DepartmentmenuComponent = DepartmentmenuComponent;
