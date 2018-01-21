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
    function TableplanComponent() {
    }
    TableplanComponent.prototype.ngOnInit = function () {
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
TableplanComponent = __decorate([
    core_1.Component({
        selector: 'app-tableplan',
        templateUrl: 'tableplan.component.html',
        styleUrls: ['../tischplan.component.css']
    })
], TableplanComponent);
exports.TableplanComponent = TableplanComponent;
