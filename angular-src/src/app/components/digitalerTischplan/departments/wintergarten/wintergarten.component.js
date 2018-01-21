"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WintergartenComponent = (function () {
    function WintergartenComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.occupied = new core_1.EventEmitter();
    }
    WintergartenComponent.prototype.ngOnInit = function () {
    };
    WintergartenComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    return WintergartenComponent;
}());
__decorate([
    core_1.Input('tablesWintergarten')
], WintergartenComponent.prototype, "tablesWintergarten", void 0);
__decorate([
    core_1.Input('showWintergartenBool')
], WintergartenComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    core_1.Output()
], WintergartenComponent.prototype, "occupied", void 0);
WintergartenComponent = __decorate([
    core_1.Component({
        selector: 'app-wintergarten',
        templateUrl: 'wintergarten.component.html',
        styleUrls: ['../../tischplan.component.css']
    })
], WintergartenComponent);
exports.WintergartenComponent = WintergartenComponent;
