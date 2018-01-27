webpackJsonp(["main"],{

/***/ "../../../../../Table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
var Table = (function () {
    function Table() {
    }
    return Table;
}());

//# sourceMappingURL=Table.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\n<tischplan></tischplan>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_digitalerTischplan_tischplan_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_digitalerTischplan_print_print_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/print/print.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_tables_service__ = __webpack_require__("../../../../../src/app/services/tables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_digitalerTischplan_departments_wintergarten_wintergarten_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/wintergarten/wintergarten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_digitalerTischplan_departments_restaurant_restaurant_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/restaurant/restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_digitalerTischplan_departments_panorama_panorama_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/panorama/panorama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_digitalerTischplan_departments_sonnberg_zirbn_sonnberg_zirbn_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/sonnberg-zirbn/sonnberg-zirbn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_digitalerTischplan_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_digitalerTischplan_form_form_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_digitalerTischplan_tableplan_tableplan_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_digitalerTischplan_departmentmenu_departmentmenu_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_digitalerTischplan_upload_upload_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_digitalerTischplan_im_haus_liste_im_haus_liste_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_digitalerTischplan_anreise_liste_anreise_liste_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/anreise-liste/anreise-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_digitalerTischplan_traces_liste_traces_liste_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/traces-liste/traces-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_digitalerTischplan_departments_departments_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_digitalerTischplan_form_menu_form_menu_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/form-menu/form-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_digitalerTischplan_notiz_notiz_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/notiz/notiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_digitalerTischplan_departments_alle_alle_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_digitalerTischplan_search_search_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__components_digitalerTischplan_tischplan_component__["a" /* TischplanComponent */], __WEBPACK_IMPORTED_MODULE_6__components_digitalerTischplan_print_print_component__["a" /* PrintComponent */], __WEBPACK_IMPORTED_MODULE_11__components_digitalerTischplan_departments_wintergarten_wintergarten_component__["a" /* WintergartenComponent */], __WEBPACK_IMPORTED_MODULE_12__components_digitalerTischplan_departments_restaurant_restaurant_component__["a" /* RestaurantComponent */], __WEBPACK_IMPORTED_MODULE_13__components_digitalerTischplan_departments_panorama_panorama_component__["a" /* PanoramaComponent */], __WEBPACK_IMPORTED_MODULE_14__components_digitalerTischplan_departments_sonnberg_zirbn_sonnberg_zirbn_component__["a" /* SonnbergZirbnComponent */], __WEBPACK_IMPORTED_MODULE_15__components_digitalerTischplan_navigation_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_16__components_digitalerTischplan_form_form_component__["a" /* FormComponent */], __WEBPACK_IMPORTED_MODULE_17__components_digitalerTischplan_tableplan_tableplan_component__["a" /* TableplanComponent */], __WEBPACK_IMPORTED_MODULE_18__components_digitalerTischplan_departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */], __WEBPACK_IMPORTED_MODULE_19__components_digitalerTischplan_upload_upload_component__["a" /* UploadComponent */], __WEBPACK_IMPORTED_MODULE_20__components_digitalerTischplan_im_haus_liste_im_haus_liste_component__["a" /* ImHausListeComponent */], __WEBPACK_IMPORTED_MODULE_21__components_digitalerTischplan_anreise_liste_anreise_liste_component__["a" /* AnreiseListeComponent */], __WEBPACK_IMPORTED_MODULE_22__components_digitalerTischplan_traces_liste_traces_liste_component__["a" /* TracesListeComponent */], __WEBPACK_IMPORTED_MODULE_23__components_digitalerTischplan_departments_departments_component__["a" /* DepartmentsComponent */], __WEBPACK_IMPORTED_MODULE_24__components_digitalerTischplan_form_menu_form_menu_component__["a" /* FormMenuComponent */], __WEBPACK_IMPORTED_MODULE_25__components_digitalerTischplan_notiz_notiz_component__["a" /* NotizComponent */], __WEBPACK_IMPORTED_MODULE_26__components_digitalerTischplan_departments_alle_alle_component__["a" /* AlleComponent */], __WEBPACK_IMPORTED_MODULE_27__components_digitalerTischplan_search_search_component__["a" /* SearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_9_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_28_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_29__angular_common__["CommonModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_tables_service__["a" /* NavService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/anreise-liste/anreise-liste.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let anreiseListeElement of anreiseListeElemente\">\n      <div class='cards-container' id='container2' [dragula]='\"evented-bag\"'>\n        <div class=\"card\" id=\"card2\" [ngStyle]=\"{'background-color': '#' + anreiseListeElement.bgColor}\">\n          <p> <b>Name:</b> {{anreiseListeElement.name}}<br>\n            <b>Zimmernummer:</b> {{anreiseListeElement.zimmernummer}}<br>\n            <b>Anreise:</b> {{anreiseListeElement.anreise}}<br>\n            <b>Abreise:</b> {{anreiseListeElement.abreise}}<br>\n            <b>Personen Anzahl:</b> {{anreiseListeElement.personenAnzahl}}<br>\n            <b>Notiz2:</b> {{anreiseListeElement.notiz2}}<br>\n          </p>\n          <div *ngIf=\"anreiseListeElement.bgColor === '0a7a74'\">\n            <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/anreise-liste/anreise-liste.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnreiseListeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnreiseListeComponent = (function () {
    function AnreiseListeComponent(tischplanService) {
        this.tischplanService = tischplanService;
    }
    AnreiseListeComponent.prototype.ngOnInit = function () {
    };
    AnreiseListeComponent.prototype.updateAnreiseListeElement = function (informationElements2) {
        this.tischplanService.updateAnreiseListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateAnreiseListeElement response: ');
            console.log(response);
        });
    };
    return AnreiseListeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('anreiseListeElemente'),
    __metadata("design:type", Array)
], AnreiseListeComponent.prototype, "anreiseListeElemente", void 0);
AnreiseListeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-anreise-liste',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/anreise-liste/anreise-liste.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _a || Object])
], AnreiseListeComponent);

var _a;
//# sourceMappingURL=anreise-liste.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row4\">\n  <div class=\"col-md-2 col-xs-2\" style=\"height: 40px; width: 20%;\" (click)=\"showSonnbergZirbn()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor1}\">\n    <h6 [ngStyle]=\"{'color': '#' + fontColor1}\">Sonnberg-Zirbn</h6>\n  </div>\n  <div class=\"col-md-2 col-xs-2\" style=\"height: 40px; width: 20%;\" (click)=\"showPanorama()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor2}\">\n    <h6 [ngStyle]=\"{'color': '#' + fontColor2}\">Panorama</h6>\n  </div>\n  <div class=\"col-md-2 col-xs-2\" style=\"height: 40px; width: 20%;\" (click)=\"showRestaurant()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor3}\">\n    <h6 [ngStyle]=\"{'color': '#' + fontColor3}\">Restaurant</h6>\n  </div>\n  <div class=\"col-md-2 col-xs-2\" style=\"height: 40px; width: 20%;\" (click)=\"showWintergarten()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor4}\">\n    <h6 [ngStyle]=\"{'color': '#' + fontColor4}\">Wintergarten</h6>\n  </div>\n  <div class=\"col-md-2 col-xs-2\" style=\"height: 40px; width: 20%;\" (click)=\"showAlle()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor5}\">\n    <h6 [ngStyle]=\"{'color': '#' + fontColor5}\">Alle</h6>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DepartmentmenuComponent = (function () {
    function DepartmentmenuComponent() {
        this.showSonnbergZirbnBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showPanoramaBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showRestaurantBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showWintergartenBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showAlleBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        this.showAlleBool = false;
        if (this.buttonBgColor1 === "0a7a74") {
            this.buttonBgColor1 = "f3efe4";
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
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showPanorama = function () {
        console.log("showPanorama!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = true;
        console.log(this.showPanoramaBool);
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        this.showAlleBool = false;
        if (this.buttonBgColor2 === "0a7a74") {
            this.buttonBgColor2 = "f3efe4";
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
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showRestaurant = function () {
        console.log("showRestaurant!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = true;
        this.showWintergartenBool = false;
        this.showAlleBool = false;
        if (this.buttonBgColor3 === "0a7a74") {
            this.buttonBgColor3 = "f3efe4";
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
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showWintergarten = function () {
        console.log("showWintergarten!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = true;
        this.showAlleBool = false;
        if (this.buttonBgColor4 === "0a7a74") {
            this.buttonBgColor4 = "f3efe4";
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
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showAlle = function () {
        console.log("showAlle!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        this.showAlleBool = true;
        if (this.buttonBgColor5 === "0a7a74") {
            this.buttonBgColor5 = "f3efe4";
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
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    return DepartmentmenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor1'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor2'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor3'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor4'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor4", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor5'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor5", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor1'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor2'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor3'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor4'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor4", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor5'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor5", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showPanoramaBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showRestaurantBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showRestaurantBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showSonnbergZirbnBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showSonnbergZirbnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWintergartenBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAlleBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showAlleBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DepartmentmenuComponent.prototype, "showSonnbergZirbnBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], DepartmentmenuComponent.prototype, "showPanoramaBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], DepartmentmenuComponent.prototype, "showRestaurantBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], DepartmentmenuComponent.prototype, "showWintergartenBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], DepartmentmenuComponent.prototype, "showAlleBoolChange", void 0);
DepartmentmenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-departmentmenu',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DepartmentmenuComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=departmentmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showAlleBool\">\n  <div *ngFor=\"let tablePanorama of tablesPanorama | filter:term; let j = index;\">\n    <div *ngIf=\"tablesPanorama[j] !== tablesPanorama[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tablePanorama, j)\">{{tablePanorama.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch: {{tablePanorama.number}}</b> </h4><br>\n      <div class='cards-container' id='containerPanorama' [ngStyle]=\"{'background-color': + tablePanorama.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tablePanorama.bgColor}\">\n          <div *ngIf=\"tablePanorama.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesPanorama[j].trace)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value}}<br>\n                <b> Trace:</b> {{tablePanorama.trace}}<br>\n              </p>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue2\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace2)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tablePanorama.nameValue2}}<br>\n                  <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue2}}<br>\n                  <b> Anreise Datum:</b> {{tablePanorama.anreiseValue2}}<br>\n                  <b> Abreise Datum:</b> {{tablePanorama.abreiseValue2}}<br>\n                  <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue2}}<br>\n                  <b> Notiz2:</b> {{tablePanorama.notiz2Value2}}<br>\n                  <b> Trace:</b> {{tablePanorama.trace2}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue3\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace3)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tablePanorama.nameValue3}}<br>\n                  <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue3}}<br>\n                  <b> Anreise Datum:</b> {{tablePanorama.anreiseValue3}}<br>\n                  <b> Abreise Datum:</b> {{tablePanorama.abreiseValue3}}<br>\n                  <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue3}}<br>\n                  <b> Notiz2:</b> {{tablePanorama.notiz2Value3}}<br>\n                  <b> Trace:</b> {{tablePanorama.trace3}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue4\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace4)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tablePanorama.nameValue4}}<br>\n                  <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue4}}<br>\n                  <b> Anreise Datum:</b> {{tablePanorama.anreiseValue4}}<br>\n                  <b> Abreise Datum:</b> {{tablePanorama.abreiseValue4}}<br>\n                  <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue4}}<br>\n                  <b> Notiz2:</b> {{tablePanorama.notiz2Value4}}<br>\n                  <b> Trace:</b> {{tablePanorama.trace4}}<br>\n                </p>\n              </div>\n              <div *ngIf=\"tablePanorama.nameValue5\">\n                <div [style.border]=\"getStyle(tablesPanorama[j].trace5)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tablePanorama.nameValue5}}<br>\n                    <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue5}}<br>\n                    <b> Anreise Datum:</b> {{tablePanorama.anreiseValue5}}<br>\n                    <b> Abreise Datum:</b> {{tablePanorama.abreiseValue5}}<br>\n                    <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue5}}<br>\n                    <b> Notiz2:</b> {{tablePanorama.notiz2Value5}}<br>\n                    <b> Trace:</b> {{tablePanorama.trace5}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tablePanorama.nameValue6\">\n                <div [style.border]=\"getStyle(tablesPanorama[j].trace6)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tablePanorama.nameValue6}}<br>\n                    <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue6}}<br>\n                    <b> Anreise Datum:</b> {{tablePanorama.anreiseValue6}}<br>\n                    <b> Abreise Datum:</b> {{tablePanorama.abreiseValue6}}<br>\n                    <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue6}}<br>\n                    <b> Notiz2:</b> {{tablePanorama.notiz2Value6}}<br>\n                    <b> Trace:</b> {{tablePanorama.trace6}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tablePanorama.nameValue7\">\n                <div [style.border]=\"getStyle(tablesPanorama[j].trace7)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tablePanorama.nameValue7}}<br>\n                    <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue7}}<br>\n                    <b> Anreise Datum:</b> {{tablePanorama.anreiseValue7}}<br>\n                    <b> Abreise Datum:</b> {{tablePanorama.abreiseValue7}}<br>\n                    <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue7}}<br>\n                    <b> Notiz2:</b> {{tablePanorama.notiz2Value7}}<br>\n                    <b> Trace:</b> {{tablePanorama.trace7}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tablePanorama.nameValue8\">\n                <div [style.border]=\"getStyle(tablesPanorama[j].trace8)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tablePanorama.nameValue8}}<br>\n                    <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue8}}<br>\n                    <b> Anreise Datum:</b> {{tablePanorama.anreiseValue8}}<br>\n                    <b> Abreise Datum:</b> {{tablePanorama.abreiseValue8}}<br>\n                    <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue8}}<br>\n                    <b> Notiz2:</b> {{tablePanorama.notiz2Value8}}<br>\n                    <b> Trace:</b> {{tablePanorama.trace8}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tablePanorama.nameValue9\">\n                <div [style.border]=\"getStyle(tablesPanorama[j].trace9)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tablePanorama.nameValue9}}<br>\n                    <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue9}}<br>\n                    <b> Anreise Datum:</b> {{tablePanorama.anreiseValue9}}<br>\n                    <b> Abreise Datum:</b> {{tablePanorama.abreiseValue9}}<br>\n                    <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue9}}<br>\n                    <b> Notiz2:</b> {{tablePanorama.notiz2Value9}}<br>\n                    <b> Trace:</b> {{tablePanorama.trace9}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tablePanorama.nameValue10\">\n                <div [style.border]=\"getStyle(tablesPanorama[j].trace10)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tablePanorama.nameValue10}}<br>\n                    <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue10}}<br>\n                    <b> Anreise Datum:</b> {{tablePanorama.anreiseValue10}}<br>\n                    <b> Abreise Datum:</b> {{tablePanorama.abreiseValue10}}<br>\n                    <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue10}}<br>\n                    <b> Notiz2:</b> {{tablePanorama.notiz2Value10}}<br>\n                    <b> Trace:</b> {{tablePanorama.trace10}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tablePanorama.nameValue11\">\n                <div [style.border]=\"getStyle(tablesPanorama[j].trace11)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tablePanorama.nameValue11}}<br>\n                    <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue11}}<br>\n                    <b> Anreise Datum:</b> {{tablePanorama.anreiseValue11}}<br>\n                    <b> Abreise Datum:</b> {{tablePanorama.abreiseValue11}}<br>\n                    <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue11}}<br>\n                    <b> Notiz2:</b> {{tablePanorama.notiz2Value11}}<br>\n                    <b> Trace:</b> {{tablePanorama.trace11}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tablePanorama.nameValue12\">\n                <div [style.border]=\"getStyle(tablesPanorama[j].trace12)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tablePanorama.nameValue12}}<br>\n                    <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue12}}<br>\n                    <b> Anreise Datum:</b> {{tablePanorama.anreiseValue12}}<br>\n                    <b> Abreise Datum:</b> {{tablePanorama.abreiseValue12}}<br>\n                    <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue12}}<br>\n                    <b> Notiz2:</b> {{tablePanorama.notiz2Value12}}<br>\n                    <b> Trace:</b> {{tablePanorama.trace12}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tablePanorama.nameValue13\">\n                <div [style.border]=\"getStyle(tablesPanorama[j].trace13)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tablePanorama.nameValue13}}<br>\n                    <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue13}}<br>\n                    <b> Anreise Datum:</b> {{tablePanorama.anreiseValue13}}<br>\n                    <b> Abreise Datum:</b> {{tablePanorama.abreiseValue13}}<br>\n                    <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue13}}<br>\n                    <b> Notiz2:</b> {{tablePanorama.notiz2Value13}}<br>\n                    <b> Trace:</b> {{tablePanorama.trace13}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tablePanorama.nameValue14\">\n                <div [style.border]=\"getStyle(tablesPanorama[j].trace14)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tablePanorama.nameValue14}}<br>\n                    <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue14}}<br>\n                    <b> Anreise Datum:</b> {{tablePanorama.anreiseValue14}}<br>\n                    <b> Abreise Datum:</b> {{tablePanorama.abreiseValue14}}<br>\n                    <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue14}}<br>\n                    <b> Notiz2:</b> {{tablePanorama.notiz2Value14}}<br>\n                    <b> Trace:</b> {{tablePanorama.trace14}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tablePanorama.nameValue15\">\n                <div [style.border]=\"getStyle(tablesPanorama[j].trace15)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tablePanorama.nameValue15}}<br>\n                    <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue15}}<br>\n                    <b> Anreise Datum:</b> {{tablePanorama.anreiseValue15}}<br>\n                    <b> Abreise Datum:</b> {{tablePanorama.abreiseValue15}}<br>\n                    <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue15}}<br>\n                    <b> Notiz2:</b> {{tablePanorama.notiz2Value15}}<br>\n                    <b> Trace:</b> {{tablePanorama.trace15}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tablePanorama.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{tablePanorama.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tablePanorama.newTraceText}} <br> <b> Tischnummer: </b>{{tablePanorama.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tablePanorama.newTraceEmployee}} <br> <b> Name: </b>{{tablePanorama.newTraceName}} <br> <b> Datum: </b>{{tablePanorama.newTraceDate}}\n                </p>\n              </div>\n              <div *ngIf=\"tablePanorama.newTraceText1\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{tablePanorama.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tablePanorama.newTraceText1}} <br> <b> Tischnummer: </b>{{tablePanorama.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tablePanorama.newTraceEmployee1}} <br> <b> Name: </b>{{tablePanorama.newTraceName1}} <br> <b> Datum: </b>{{tablePanorama.newTraceDate1}}\n                </p>\n              </div>\n              <div *ngIf=\"tablePanorama.newTraceText2\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{tablePanorama.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tablePanorama.newTraceText2}} <br> <b> Tischnummer: </b>{{tablePanorama.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tablePanorama.newTraceEmployee2}} <br> <b> Name: </b>{{tablePanorama.newTraceName2}} <br> <b> Datum: </b>{{tablePanorama.newTraceDate2}}\n                </p>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"tablePanorama.placeholder === 'true'\">\n            <p [dragula]='\"evented-bag\"' id=\"Panorama\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!  {{tablePanorama.number}} {{tablePanorama.department}} {{j}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngFor=\"let tableRestaurant of tablesRestaurant | filter:term; let j = index;\">\n    <div *ngIf=\"tablesRestaurant[j] !== tablesRestaurant[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableRestaurant, j)\">{{tableRestaurant.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch: {{tableRestaurant.number}}</b> </h4><br>\n      <div class='cards-container' id='containerRestaurant' [ngStyle]=\"{'background-color': + tableRestaurant.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableRestaurant.bgColor}\">\n          <div *ngIf=\"tableRestaurant.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesRestaurant[j].trace)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablesRestaurant.nameValue}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace}}\n              </p>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue2\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace2)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue2}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue2}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue2}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue2}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue2}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value2}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace2}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue3\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace3)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue3}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue3}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue3}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue3}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue3}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value3}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace3}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue4\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace4)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue4}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue4}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue4}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue4}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue4}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value4}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace4}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue5\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace5)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue5}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue5}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue5}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue5}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue5}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value5}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace5}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue6\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace6)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue6}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue6}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue6}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue6}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue6}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value6}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace6}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue7\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace7)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue7}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue7}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue7}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue7}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue7}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value7}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace7}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue8\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace8)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue8}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue8}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue8}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue8}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue8}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value8}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace8}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue9\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace9)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue9}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue9}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue9}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue9}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue9}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value9}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace9}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue10\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace10)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue10}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue10}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue10}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue10}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue10}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value10}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace10}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue11\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace11)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue11}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue11}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue11}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue11}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue11}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value11}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace11}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue12\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace12)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue12}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue12}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue12}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue12}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue12}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value12}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace12}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue13\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace13)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue13}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue13}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue13}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue13}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue13}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value13}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace13}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue14\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace14)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue14}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue14}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue14}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue14}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue14}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value14}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace14}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue15\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace15)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableRestaurant.nameValue15}}<br>\n                  <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue15}}<br>\n                  <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue15}}<br>\n                  <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue15}}<br>\n                  <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue15}}<br>\n                  <b> Notiz2:</b> {{tableRestaurant.notiz2Value15}}<br>\n                  <b> Trace:</b> {{tableRestaurant.trace15}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.newTraceText\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableRestaurant.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableRestaurant.newTraceText}} <br> <b> Tischnummer: </b>{{tableRestaurant.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableRestaurant.newTraceEmployee}} <br> <b> Name: </b>{{tableRestaurant.newTraceName}} <br> <b> Datum: </b>{{tableRestaurant.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableRestaurant.newTraceText1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableRestaurant.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableRestaurant.newTraceText1}} <br> <b> Tischnummer: </b>{{tableRestaurant.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableRestaurant.newTraceEmployee1}} <br> <b> Name: </b>{{tableRestaurant.newTraceName1}} <br> <b> Datum: </b>{{tableRestaurant.newTraceDate1}}\n              </p>\n            </div>\n            <div *ngIf=\"tableRestaurant.newTraceText2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableRestaurant.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableRestaurant.newTraceText2}} <br> <b> Tischnummer: </b>{{tableRestaurant.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableRestaurant.newTraceEmployee2}} <br> <b> Name: </b>{{tableRestaurant.newTraceName2}} <br> <b> Datum: </b>{{tableRestaurant.newTraceDate2}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableRestaurant.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Restaurant\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableRestaurant.number}} {{tableRestaurant.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngFor=\"let tableSonnbergZirbn of tablesSonnbergZirbn | filter:term; let j = index;\">\n    <div *ngIf=\"tablesSonnbergZirbn[j] !== tablesSonnbergZirbn[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableSonnbergZirbn, j)\">{{tableSonnbergZirbn.isBesetzt === 'true' ? 'FREI MACHEN' : '' }}</button>\n      <h4><b> Tisch: {{tableSonnbergZirbn.number}}</b> </h4><br>\n      <div class='cards-container' id='containerSonnbergZirbn'  [ngStyle]=\"{'background-color': + tableSonnbergZirbn.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableSonnbergZirbn.bgColor}\">\n          <div *ngIf=\"tableSonnbergZirbn.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace}}<br>\n              </p>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue2\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace2)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue2}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue2}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue2}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue2}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue2}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value2}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace2}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue3\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace3)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue3}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue3}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue3}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue3}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue3}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value3}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace3}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue4\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace4)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue4}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue4}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue4}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue4}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue4}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value4}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace4}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue5\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace5)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue5}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue5}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue5}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue5}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue5}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value5}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace5}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue6\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace6)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue6}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue6}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue6}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue6}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue6}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value6}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace6}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue7\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace7)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue7}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue7}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue7}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue7}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue7}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value7}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace7}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue8\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace8)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue8}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue8}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue8}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue8}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue8}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value8}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace8}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue9\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace9)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue9}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue9}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue9}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue9}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue9}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value9}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace9}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue10\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace10)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue10}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue10}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue10}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue10}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue10}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value10}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace10}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue11\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace11)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue11}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue11}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue11}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue11}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue11}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value11}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace11}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue12\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace12)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue12}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue12}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue12}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue12}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue12}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value12}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace12}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue13\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace13)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue13}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue13}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue13}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue13}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue13}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value13}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace13}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue14\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace14)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue14}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue14}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue14}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue14}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue14}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value14}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace14}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue15\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace15)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableSonnbergZirbn.nameValue15}}<br>\n                  <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue15}}<br>\n                  <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue15}}<br>\n                  <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue15}}<br>\n                  <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue15}}<br>\n                  <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value15}}<br>\n                  <b> Trace:</b> {{tableSonnbergZirbn.trace15}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.newTraceText\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableSonnbergZirbn.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableSonnbergZirbn.newTraceText}} <br> <b> Tischnummer: </b>{{tableSonnbergZirbn.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableSonnbergZirbn.newTraceEmployee}} <br> <b> Name: </b>{{tableSonnbergZirbn.newTraceName}} <br> <b> Datum: </b>{{tableSonnbergZirbn.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.newTraceText1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableSonnbergZirbn.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableSonnbergZirbn.newTraceText1}} <br> <b> Tischnummer: </b>{{tableSonnbergZirbn.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableSonnbergZirbn.newTraceEmployee1}} <br> <b> Name: </b>{{tableSonnbergZirbn.newTraceName1}} <br> <b> Datum: </b>{{tableSonnbergZirbn.newTraceDate1}}\n              </p>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.newTraceText2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableSonnbergZirbn.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableSonnbergZirbn.newTraceText2}} <br> <b> Tischnummer: </b>{{tableSonnbergZirbn.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableSonnbergZirbn.newTraceEmployee2}} <br> <b> Name: </b>{{tableSonnbergZirbn.newTraceName2}} <br> <b> Datum: </b>{{tableSonnbergZirbn.newTraceDate2}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableSonnbergZirbn.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Sonnberg-Zirbn\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableSonnbergZirbn.number}} {{tableSonnbergZirbn.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngFor=\"let tableWintergarten of tablesWintergarten | filter:term; let j = index;\">\n    <div *ngIf=\"tablesWintergarten[j] !== tablesWintergarten[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableWintergarten, j)\">{{tableWintergarten.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch: {{tableWintergarten.number}}</b> </h4><br>\n      <div class='cards-container' id='containerWintergarten' [ngStyle]=\"{'background-color': + tableWintergarten.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableWintergarten.bgColor}\">\n          <div *ngIf=\"tableWintergarten.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesWintergarten[j].trace)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace}}\n              </p>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue2\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace2)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue2}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue2}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue2}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue2}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue2}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value2}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace2}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue3\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace3)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue3}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue3}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue3}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue3}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue3}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value3}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace3}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue4\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace4)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue4}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue4}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue4}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue4}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue4}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value4}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace4}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue5\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace5)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue5}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue5}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue5}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue5}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue5}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value5}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace5}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue6\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace6)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue6}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue6}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue6}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue6}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue6}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value6}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace6}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue7\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace7)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue7}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue7}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue7}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue7}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue7}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value7}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace7}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue8\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace8)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue8}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue8}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue8}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue8}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue8}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value8}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace8}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue9\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace9)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue9}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue9}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue9}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue9}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue9}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value9}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace9}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue10\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace10)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue10}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue10}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue10}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue10}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue10}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value10}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace10}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue11\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace11)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue11}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue11}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue11}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue11}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue11}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value11}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace11}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue12\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace12)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue12}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue12}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue12}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue12}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue12}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value12}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace12}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue13\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace13)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue13}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue13}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue13}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue13}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue13}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value13}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace13}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue14\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace14)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue14}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue14}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue14}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue14}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue14}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value14}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace14}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue15\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace15)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue15}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue15}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue15}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue15}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue15}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value15}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace15}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.newTraceText\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableWintergarten.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableWintergarten.newTraceText}} <br> <b> Tischnummer: </b>{{tableWintergarten.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableWintergarten.newTraceEmployee}} <br> <b> Name: </b>{{tableWintergarten.newTraceName}} <br> <b> Datum: </b>{{tableWintergarten.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableWintergarten.newTraceText1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableWintergarten.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableWintergarten.newTraceText1}} <br> <b> Tischnummer: </b>{{tableWintergarten.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableWintergarten.newTraceEmployee1}} <br> <b> Name: </b>{{tableWintergarten.newTraceName1}} <br> <b> Datum: </b>{{tableWintergarten.newTraceDate1}}\n              </p>\n            </div>\n            <div *ngIf=\"tableWintergarten.newTraceText2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableWintergarten.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableWintergarten.newTraceText2}} <br> <b> Tischnummer: </b>{{tableWintergarten.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableWintergarten.newTraceEmployee2}} <br> <b> Name: </b>{{tableWintergarten.newTraceName2}} <br> <b> Datum: </b>{{tableWintergarten.newTraceDate2}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableWintergarten.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Wintergarten\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableWintergarten.number}} {{tableWintergarten.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlleComponent = (function () {
    function AlleComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dateGenerated = new Date();
    }
    AlleComponent.prototype.ngOnInit = function () {
    };
    AlleComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    AlleComponent.prototype.getStyle = function (j) {
        if (j) {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    return AlleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanorama'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesPanorama", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesSonnbergZirbn'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesSonnbergZirbn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesRestaurant'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesWintergarten'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesWintergarten", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAlleBool'),
    __metadata("design:type", Boolean)
], AlleComponent.prototype, "showAlleBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], AlleComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AlleComponent.prototype, "occupied", void 0);
AlleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alle',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AlleComponent);

var _a;
//# sourceMappingURL=alle.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/departments.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sonnberg-zirbn [term]=\"term\" [tablesSonnbergZirbn]=\"tablesSonnbergZirbn\" [showSonnbergZirbnBool]=\"showSonnbergZirbnBool\" (occupied)=\"occupied($event)\"></app-sonnberg-zirbn>\n<app-restaurant [term]=\"term\" [tablesRestaurant]=\"tablesRestaurant\" [showRestaurantBool]=\"showRestaurantBool\"  (occupied)=\"occupied($event)\"></app-restaurant>\n<app-panorama [term]=\"term\" [tablesPanorama]=\"tablesPanorama\" [showPanoramaBool]=\"showPanoramaBool\"  (occupied)=\"occupied($event)\"></app-panorama>\n<app-wintergarten [term]=\"term\" [tablesWintergarten]=\"tablesWintergarten\" [showWintergartenBool]=\"showWintergartenBool\"  (occupied)=\"occupied($event)\"></app-wintergarten>\n<app-alle [term]=\"term\" [tablesWintergarten]=\"tablesWintergarten\" [tablesSonnbergZirbn]=\"tablesSonnbergZirbn\"  [tablesRestaurant]=\"tablesRestaurant\" [tablesPanorama]=\"tablesPanorama\" [showAlleBool]=\"showAlleBool\" (occupied)=\"occupied($event)\"></app-alle>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/departments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tables_service__ = __webpack_require__("../../../../../src/app/services/tables.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DepartmentsComponent = (function () {
    function DepartmentsComponent(tischplanService, _navService) {
        this.tischplanService = tischplanService;
        this._navService = _navService;
        this.dispensedSonnbergZirbn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedRestaurant = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedWintergarten = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedPanorama = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        this.tischplanService.dispenseTable(table).subscribe(function (response) {
            console.log("Dispense Table:");
            console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
            console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
            console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].department));
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
                if (response[0].tables[j].department === "Sonnberg-Zirbn") {
                    console.log(' this._navService.changeNav(response[0].tables); called');
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
        console.log("dataString");
        console.log(dataString);
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
        console.log(dataString);
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
    return DepartmentsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesWintergarten'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesWintergarten", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWintergartenBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesSonnbergZirbn'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesSonnbergZirbn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showSonnbergZirbnBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showSonnbergZirbnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanorama'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesPanorama", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showPanoramaBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesRestaurant'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showRestaurantBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showRestaurantBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAlleBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showAlleBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], DepartmentsComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DepartmentsComponent.prototype, "dispensedSonnbergZirbn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], DepartmentsComponent.prototype, "dispensedRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], DepartmentsComponent.prototype, "dispensedWintergarten", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], DepartmentsComponent.prototype, "dispensedPanorama", void 0);
DepartmentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-departments',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/departments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_tables_service__["a" /* NavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tables_service__["a" /* NavService */]) === "function" && _f || Object])
], DepartmentsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=departments.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/panorama/panorama.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showPanoramaBool\">\n  <div *ngFor=\"let tablePanorama of tablesPanorama | filter:term; let j = index;\">\n    <div *ngIf=\"tablesPanorama[j] !== tablesPanorama[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tablePanorama, j)\">{{tablePanorama.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch: {{tablePanorama.number}}</b> </h4><br>\n      <div class='cards-container' id='containerPanorama' [ngStyle]=\"{'background-color': + tablePanorama.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tablePanorama.bgColor}\">\n          <div *ngIf=\"tablePanorama.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesPanorama[j].trace)\">\n            <p style=\"background-color: #FFFFFF; padding: 10px\">\n              <b> Name:</b> {{tablePanorama.nameValue}}<br>\n              <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue}}<br>\n              <b> Anreise Datum:</b> {{tablePanorama.anreiseValue}}<br>\n              <b> Abreise Datum:</b> {{tablePanorama.abreiseValue}}<br>\n              <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue}}<br>\n              <b> Notiz2:</b> {{tablePanorama.notiz2Value}}<br>\n              <b> Trace:</b> {{tablePanorama.trace}}<br>\n            </p>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue2\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace2)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue2}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue2}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue2}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue2}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue2}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value2}}<br>\n                <b> Trace:</b> {{tablePanorama.trace2}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue3\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace3)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue3}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue3}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue3}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue3}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue3}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value3}}<br>\n                <b> Trace:</b> {{tablePanorama.trace3}}<br>\n              </p>\n            </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue4\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace4)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue4}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue4}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue4}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue4}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue4}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value4}}<br>\n                <b> Trace:</b> {{tablePanorama.trace4}}<br>\n              </p>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue5\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace5)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue5}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue5}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue5}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue5}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue5}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value5}}<br>\n                <b> Trace:</b> {{tablePanorama.trace5}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue6\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace6)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue6}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue6}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue6}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue6}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue6}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value6}}<br>\n                <b> Trace:</b> {{tablePanorama.trace6}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue7\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace7)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue7}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue7}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue7}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue7}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue7}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value7}}<br>\n                <b> Trace:</b> {{tablePanorama.trace7}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue8\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace8)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue8}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue8}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue8}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue8}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue8}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value8}}<br>\n                <b> Trace:</b> {{tablePanorama.trace8}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue9\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace9)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue9}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue9}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue9}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue9}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue9}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value9}}<br>\n                <b> Trace:</b> {{tablePanorama.trace9}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue10\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace10)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue10}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue10}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue10}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue10}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue10}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value10}}<br>\n                <b> Trace:</b> {{tablePanorama.trace10}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue11\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace11)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue11}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue11}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue11}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue11}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue11}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value11}}<br>\n                <b> Trace:</b> {{tablePanorama.trace11}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue12\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace12)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue12}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue12}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue12}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue12}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue12}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value12}}<br>\n                <b> Trace:</b> {{tablePanorama.trace12}}<br>\n              </p>\n            </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue13\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace13)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue13}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue13}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue13}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue13}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue13}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value13}}<br>\n                <b> Trace:</b> {{tablePanorama.trace13}}<br>\n              </p>\n            </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue14\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace14)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue14}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue14}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue14}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue14}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue14}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value14}}<br>\n                <b> Trace:</b> {{tablePanorama.trace14}}<br>\n              </p>\n            </div>\n            </div>\n            <div *ngIf=\"tablePanorama.nameValue15\">\n              <div [style.border]=\"getStyle(tablesPanorama[j].trace15)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tablePanorama.nameValue15}}<br>\n                <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue15}}<br>\n                <b> Anreise Datum:</b> {{tablePanorama.anreiseValue15}}<br>\n                <b> Abreise Datum:</b> {{tablePanorama.abreiseValue15}}<br>\n                <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue15}}<br>\n                <b> Notiz2:</b> {{tablePanorama.notiz2Value15}}<br>\n                <b> Trace:</b> {{tablePanorama.trace15}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tablePanorama.newTraceText\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tablePanorama.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tablePanorama.newTraceText}} <br> <b> Tischnummer: </b>{{tablePanorama.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tablePanorama.newTraceEmployee}} <br> <b> Name: </b>{{tablePanorama.newTraceName}} <br> <b> Datum: </b>{{tablePanorama.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tablePanorama.newTraceText1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tablePanorama.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tablePanorama.newTraceText1}} <br> <b> Tischnummer: </b>{{tablePanorama.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tablePanorama.newTraceEmployee1}} <br> <b> Name: </b>{{tablePanorama.newTraceName1}} <br> <b> Datum: </b>{{tablePanorama.newTraceDate1}}\n              </p>\n            </div>\n            <div *ngIf=\"tablePanorama.newTraceText2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tablePanorama.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tablePanorama.newTraceText2}} <br> <b> Tischnummer: </b>{{tablePanorama.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tablePanorama.newTraceEmployee2}} <br> <b> Name: </b>{{tablePanorama.newTraceName2}} <br> <b> Datum: </b>{{tablePanorama.newTraceDate2}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tablePanorama.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Panorama\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!  {{tablePanorama.number}} {{tablePanorama.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/panorama/panorama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanoramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanoramaComponent = (function () {
    function PanoramaComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dateGenerated = new Date();
    }
    PanoramaComponent.prototype.ngOnInit = function () {
    };
    PanoramaComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    PanoramaComponent.prototype.getStyle = function (j) {
        if (j) {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    return PanoramaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanorama'),
    __metadata("design:type", Array)
], PanoramaComponent.prototype, "tablesPanorama", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showPanoramaBool'),
    __metadata("design:type", Boolean)
], PanoramaComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], PanoramaComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PanoramaComponent.prototype, "occupied", void 0);
PanoramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-panorama',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/panorama/panorama.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PanoramaComponent);

var _a;
//# sourceMappingURL=panorama.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/restaurant/restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showRestaurantBool\">\n  <div *ngFor=\"let tableRestaurant of tablesRestaurant | filter:term; let j = index;\">\n    <div *ngIf=\"tablesRestaurant[j] !== tablesRestaurant[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableRestaurant, j)\">{{tableRestaurant.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch: {{tableRestaurant.number}}</b> </h4><br>\n      <div class='cards-container' id='containerRestaurant' [ngStyle]=\"{'background-color': + tableRestaurant.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableRestaurant.bgColor}\">\n          <div *ngIf=\"tableRestaurant.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesRestaurant[j].trace)\">\n            <p style=\"background-color: #FFFFFF; padding: 10px\">\n              <b> Name:</b> {{tableRestaurant.nameValue}}<br>\n              <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue}}<br>\n              <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue}}<br>\n              <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue}}<br>\n              <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue}}<br>\n              <b> Notiz2:</b> {{tableRestaurant.notiz2Value}}<br>\n              <b> Trace:</b> {{tableRestaurant.trace}}\n            </p>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue2\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace2)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue2}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue2}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue2}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue2}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue2}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value2}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace2}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue3\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace3)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue3}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue3}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue3}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue3}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue3}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value3}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace3}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue4\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace4)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue4}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue4}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue4}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue4}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue4}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value4}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace4}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue5\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace5)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue5}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue5}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue5}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue5}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue5}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value5}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace5}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue6\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace6)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue6}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue6}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue6}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue6}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue6}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value6}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace6}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue7\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace7)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue7}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue7}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue7}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue7}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue7}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value7}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace7}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue8\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace8)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue8}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue8}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue8}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue8}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue8}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value8}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace8}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue9\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace9)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue9}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue9}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue9}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue9}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue9}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value9}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace9}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue10\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace10)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue10}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue10}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue10}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue10}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue10}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value10}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace10}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue11\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace11)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue11}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue11}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue11}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue11}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue11}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value11}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace11}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue12\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace12)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue12}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue12}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue12}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue12}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue12}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value12}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace12}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue13\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace13)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue13}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue13}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue13}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue13}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue13}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value13}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace13}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue14\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace14)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue14}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue14}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue14}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue14}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue14}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value14}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace14}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.nameValue15\">\n              <div [style.border]=\"getStyle(tablesRestaurant[j].trace15)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableRestaurant.nameValue15}}<br>\n                <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue15}}<br>\n                <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue15}}<br>\n                <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue15}}<br>\n                <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue15}}<br>\n                <b> Notiz2:</b> {{tableRestaurant.notiz2Value15}}<br>\n                <b> Trace:</b> {{tableRestaurant.trace15}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableRestaurant.newTraceText\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableRestaurant.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableRestaurant.newTraceText}} <br> <b> Tischnummer: </b>{{tableRestaurant.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableRestaurant.newTraceEmployee}} <br> <b> Name: </b>{{tableRestaurant.newTraceName}} <br> <b> Datum: </b>{{tableRestaurant.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableRestaurant.newTraceText1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableRestaurant.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableRestaurant.newTraceText1}} <br> <b> Tischnummer: </b>{{tableRestaurant.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableRestaurant.newTraceEmployee1}} <br> <b> Name: </b>{{tableRestaurant.newTraceName1}} <br> <b> Datum: </b>{{tableRestaurant.newTraceDate1}}\n              </p>\n            </div>\n            <div *ngIf=\"tableRestaurant.newTraceText2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableRestaurant.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableRestaurant.newTraceText2}} <br> <b> Tischnummer: </b>{{tableRestaurant.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableRestaurant.newTraceEmployee2}} <br> <b> Name: </b>{{tableRestaurant.newTraceName2}} <br> <b> Datum: </b>{{tableRestaurant.newTraceDate2}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableRestaurant.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Restaurant\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableRestaurant.number}} {{tableRestaurant.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/restaurant/restaurant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestaurantComponent = (function () {
    function RestaurantComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dateGenerated = new Date();
    }
    RestaurantComponent.prototype.ngOnInit = function () {
    };
    RestaurantComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    RestaurantComponent.prototype.getStyle = function (j) {
        if (j) {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    return RestaurantComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesRestaurant'),
    __metadata("design:type", Array)
], RestaurantComponent.prototype, "tablesRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showRestaurantBool'),
    __metadata("design:type", Boolean)
], RestaurantComponent.prototype, "showRestaurantBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], RestaurantComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], RestaurantComponent.prototype, "occupied", void 0);
RestaurantComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-restaurant',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/restaurant/restaurant.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RestaurantComponent);

var _a;
//# sourceMappingURL=restaurant.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/sonnberg-zirbn/sonnberg-zirbn.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showSonnbergZirbnBool\">\n  <div *ngFor=\"let tableSonnbergZirbn of tablesSonnbergZirbn | filter:term; let j = index;\">\n    <div *ngIf=\"tablesSonnbergZirbn[j] !== tablesSonnbergZirbn[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableSonnbergZirbn, j)\">{{tableSonnbergZirbn.isBesetzt === 'true' ? 'FREI MACHEN' : '' }}</button>\n      <h4><b> Tisch: {{tableSonnbergZirbn.number}}</b> </h4><br>\n      <div class='cards-container' id='containerSonnbergZirbn'  [ngStyle]=\"{'background-color': + tableSonnbergZirbn.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableSonnbergZirbn.bgColor}\">\n          <div *ngIf=\"tableSonnbergZirbn.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n              <b> Name:</b> {{tableSonnbergZirbn.nameValue}}<br>\n              <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue}}<br>\n              <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue}}<br>\n              <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue}}<br>\n              <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue}}<br>\n              <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value}}<br>\n              <b> Trace:</b> {{tableSonnbergZirbn.trace}}<br>\n            </p>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue2\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace2)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue2}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue2}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue2}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue2}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue2}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value2}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace2}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue3\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace3)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue3}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue3}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue3}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue3}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue3}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value3}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace3}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue4\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace4)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue4}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue4}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue4}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue4}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue4}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value4}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace4}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue5\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace5)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue5}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue5}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue5}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue5}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue5}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value5}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace5}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue6\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace6)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue6}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue6}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue6}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue6}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue6}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value6}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace6}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue7\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace7)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue7}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue7}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue7}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue7}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue7}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value7}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace7}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue8\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace8)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue8}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue8}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue8}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue8}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue8}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value8}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace8}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue9\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace9)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue9}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue9}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue9}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue9}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue9}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value9}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace9}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue10\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace10)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue10}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue10}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue10}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue10}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue10}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value10}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace10}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue11\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace11)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue11}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue11}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue11}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue11}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue11}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value11}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace11}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue12\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace12)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue12}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue12}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue12}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue12}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue12}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value12}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace12}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue13\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace13)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue13}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue13}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue13}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue13}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue13}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value13}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace13}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue14\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace14)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue14}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue14}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue14}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue14}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue14}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value14}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace14}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.nameValue15\">\n              <div [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace15)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableSonnbergZirbn.nameValue15}}<br>\n                <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue15}}<br>\n                <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue15}}<br>\n                <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue15}}<br>\n                <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue15}}<br>\n                <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value15}}<br>\n                <b> Trace:</b> {{tableSonnbergZirbn.trace15}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.newTraceText\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableSonnbergZirbn.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableSonnbergZirbn.newTraceText}} <br> <b> Tischnummer: </b>{{tableSonnbergZirbn.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableSonnbergZirbn.newTraceEmployee}} <br> <b> Name: </b>{{tableSonnbergZirbn.newTraceName}} <br> <b> Datum: </b>{{tableSonnbergZirbn.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.newTraceText1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableSonnbergZirbn.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableSonnbergZirbn.newTraceText1}} <br> <b> Tischnummer: </b>{{tableSonnbergZirbn.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableSonnbergZirbn.newTraceEmployee1}} <br> <b> Name: </b>{{tableSonnbergZirbn.newTraceName1}} <br> <b> Datum: </b>{{tableSonnbergZirbn.newTraceDate1}}\n              </p>\n            </div>\n            <div *ngIf=\"tableSonnbergZirbn.newTraceText2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableSonnbergZirbn.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableSonnbergZirbn.newTraceText2}} <br> <b> Tischnummer: </b>{{tableSonnbergZirbn.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableSonnbergZirbn.newTraceEmployee2}} <br> <b> Name: </b>{{tableSonnbergZirbn.newTraceName2}} <br> <b> Datum: </b>{{tableSonnbergZirbn.newTraceDate2}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableSonnbergZirbn.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Sonnberg-Zirbn\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableSonnbergZirbn.number}} {{tableSonnbergZirbn.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/sonnberg-zirbn/sonnberg-zirbn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SonnbergZirbnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SonnbergZirbnComponent = (function () {
    function SonnbergZirbnComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SonnbergZirbnComponent.prototype.ngOnInit = function () {
    };
    SonnbergZirbnComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    SonnbergZirbnComponent.prototype.getStyle = function (j) {
        if (j) {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    return SonnbergZirbnComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesSonnbergZirbn'),
    __metadata("design:type", Array)
], SonnbergZirbnComponent.prototype, "tablesSonnbergZirbn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showSonnbergZirbnBool'),
    __metadata("design:type", Boolean)
], SonnbergZirbnComponent.prototype, "showSonnbergZirbnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], SonnbergZirbnComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SonnbergZirbnComponent.prototype, "occupied", void 0);
SonnbergZirbnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sonnberg-zirbn',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/sonnberg-zirbn/sonnberg-zirbn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SonnbergZirbnComponent);

var _a;
//# sourceMappingURL=sonnberg-zirbn.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/wintergarten/wintergarten.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showWintergartenBool\">\n  <div *ngFor=\"let tableWintergarten of tablesWintergarten | filter:term; let j = index;\">\n    <div *ngIf=\"tablesWintergarten[j] !== tablesWintergarten[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableWintergarten, j)\">{{tableWintergarten.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch: {{tableWintergarten.number}}</b> </h4><br>\n      <div class='cards-container' id='containerWintergarten' [ngStyle]=\"{'background-color': + tableWintergarten.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableWintergarten.bgColor}\">\n          <div *ngIf=\"tableWintergarten.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesWintergarten[j].trace)\">\n            <p style=\"background-color: #FFFFFF; padding: 10px\">\n              <b> Name:</b> {{tableWintergarten.nameValue}}<br>\n              <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue}}<br>\n              <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue}}<br>\n              <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue}}<br>\n              <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue}}<br>\n              <b> Notiz2:</b> {{tableWintergarten.notiz2Value}}<br>\n              <b> Trace:</b> {{tableWintergarten.trace}}\n            </p>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue2\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace2)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue2}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue2}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue2}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue2}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue2}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value2}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace2}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue3\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace3)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue3}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue3}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue3}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue3}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue3}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value3}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace3}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue4\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace4)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue4}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue4}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue4}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue4}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue4}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value4}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace4}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue5\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace5)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWintergarten.nameValue5}}<br>\n                  <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue5}}<br>\n                  <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue5}}<br>\n                  <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue5}}<br>\n                  <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue5}}<br>\n                  <b> Notiz2:</b> {{tableWintergarten.notiz2Value5}}<br>\n                  <b> Trace:</b> {{tableWintergarten.trace5}}\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue6\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace6)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue6}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue6}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue6}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue6}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue6}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value6}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace6}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue7\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace7)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue7}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue7}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue7}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue7}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue7}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value7}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace7}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue8\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace8)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue8}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue8}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue8}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue8}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue8}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value8}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace8}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue9\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace9)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue9}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue9}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue9}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue9}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue9}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value9}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace9}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue10\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace10)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue10}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue10}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue10}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue10}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue10}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value10}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace10}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue11\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace11)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue11}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue11}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue11}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue11}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue11}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value11}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace11}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue12\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace12)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue12}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue12}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue12}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue12}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue12}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value12}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace12}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue13\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace13)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue13}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue13}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue13}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue13}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue13}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value13}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace13}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue14\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace14)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue14}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue14}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue14}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue14}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue14}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value14}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace14}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.nameValue15\">\n              <div [style.border]=\"getStyle(tablesWintergarten[j].trace15)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWintergarten.nameValue15}}<br>\n                <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue15}}<br>\n                <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue15}}<br>\n                <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue15}}<br>\n                <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue15}}<br>\n                <b> Notiz2:</b> {{tableWintergarten.notiz2Value15}}<br>\n                <b> Trace:</b> {{tableWintergarten.trace15}}\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWintergarten.newTraceText\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableWintergarten.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableWintergarten.newTraceText}} <br> <b> Tischnummer: </b>{{tableWintergarten.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableWintergarten.newTraceEmployee}} <br> <b> Name: </b>{{tableWintergarten.newTraceName}} <br> <b> Datum: </b>{{tableWintergarten.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableWintergarten.newTraceText1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableWintergarten.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableWintergarten.newTraceText1}} <br> <b> Tischnummer: </b>{{tableWintergarten.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableWintergarten.newTraceEmployee1}} <br> <b> Name: </b>{{tableWintergarten.newTraceName1}} <br> <b> Datum: </b>{{tableWintergarten.newTraceDate1}}\n              </p>\n            </div>\n            <div *ngIf=\"tableWintergarten.newTraceText2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableWintergarten.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableWintergarten.newTraceText2}} <br> <b> Tischnummer: </b>{{tableWintergarten.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableWintergarten.newTraceEmployee2}} <br> <b> Name: </b>{{tableWintergarten.newTraceName2}} <br> <b> Datum: </b>{{tableWintergarten.newTraceDate2}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableWintergarten.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Wintergarten\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableWintergarten.number}} {{tableWintergarten.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/wintergarten/wintergarten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WintergartenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WintergartenComponent = (function () {
    function WintergartenComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    WintergartenComponent.prototype.ngOnInit = function () {
    };
    WintergartenComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    WintergartenComponent.prototype.getStyle = function (j) {
        if (j) {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    return WintergartenComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesWintergarten'),
    __metadata("design:type", Array)
], WintergartenComponent.prototype, "tablesWintergarten", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWintergartenBool'),
    __metadata("design:type", Boolean)
], WintergartenComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], WintergartenComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], WintergartenComponent.prototype, "occupied", void 0);
WintergartenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wintergarten',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/wintergarten/wintergarten.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _b || Object])
], WintergartenComponent);

var _a, _b;
//# sourceMappingURL=wintergarten.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/form-menu/form-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/form-menu/form-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row4\" style=\"min-height: 40px\">\n  <div class=\"col-md-6 col-xs-6\" style=\"min-height: 40px\" (click)=\"showInfoForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorInfoForm}\">\n    <h6 [ngStyle]=\"{'color': '#' + fontColorInfoForm}\">Info hinzufügen</h6>\n  </div>\n  <div class=\"col-md-6 col-xs-6\" style=\"min-height: 40px\" (click)=\"showNotizForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorNotizForm}\">\n    <h6 [ngStyle]=\"{'color': '#' + fontColorNotizForm}\">Notiz hinzufügen</h6>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/form-menu/form-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormMenuComponent = (function () {
    function FormMenuComponent() {
        this.showNotizFormBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showInfoFormBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FormMenuComponent.prototype.ngOnInit = function () {
    };
    FormMenuComponent.prototype.ngAfterViewInit = function () {
    };
    FormMenuComponent.prototype.showInfoForm = function () {
        console.log("showInfoForm!");
        this.showNotizFormBool = true;
        this.showInfoFormBool = false;
        if (this.buttonBgColorInfoForm === "0a7a74") {
            this.buttonBgColorInfoForm = "f3efe4";
            this.buttonBgColorNotizForm = "0a7a74";
        }
        else {
            this.buttonBgColorInfoForm = "0a7a74";
        }
        if (this.fontColorInfoForm === "f3efe4") {
            this.fontColorInfoForm = "0a7a74";
            this.fontColorNotizForm = "f3efe4";
        }
        else {
            this.fontColorInfoForm = "f3efe4";
        }
        this.showNotizFormBoolChange.emit(this.showNotizFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
    };
    FormMenuComponent.prototype.showNotizForm = function () {
        console.log("showNotizForm!");
        this.showNotizFormBool = false;
        this.showInfoFormBool = true;
        if (this.buttonBgColorNotizForm === "0a7a74") {
            this.buttonBgColorNotizForm = "f3efe4";
            this.buttonBgColorInfoForm = "0a7a74";
        }
        else {
            this.buttonBgColorNotizForm = "0a7a74";
        }
        if (this.fontColorNotizForm === "f3efe4") {
            this.fontColorNotizForm = "0a7a74";
            this.fontColorInfoForm = "f3efe4";
        }
        else {
            this.fontColorNotizForm = "f3efe4";
        }
        this.showNotizFormBoolChange.emit(this.showNotizFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
    };
    return FormMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColorInfoForm'),
    __metadata("design:type", String)
], FormMenuComponent.prototype, "buttonBgColorInfoForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColorInfoForm'),
    __metadata("design:type", String)
], FormMenuComponent.prototype, "fontColorInfoForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColorNotizForm'),
    __metadata("design:type", String)
], FormMenuComponent.prototype, "fontColorNotizForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColorNotizForm'),
    __metadata("design:type", String)
], FormMenuComponent.prototype, "buttonBgColorNotizForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showNotizFormBool'),
    __metadata("design:type", Boolean)
], FormMenuComponent.prototype, "showNotizFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showInfoFormBool'),
    __metadata("design:type", Boolean)
], FormMenuComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FormMenuComponent.prototype, "showNotizFormBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], FormMenuComponent.prototype, "showInfoFormBoolChange", void 0);
FormMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-menu',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/form-menu/form-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/form-menu/form-menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FormMenuComponent);

var _a, _b;
//# sourceMappingURL=form-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showNotizFormBool\">\n  <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"sendInformation($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\" style=\"min-height: 250px\">\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"name\" [(ngModel)]=\"nameTraceInput\" name=\"Name\" placeholder=\"Name\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"roomNumber\" [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Zimmer Nummer\">\n        </div>\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"tableNumber\" [(ngModel)]=\"tableNumber\" name=\"tableNumber\" placeholder=\"Tisch Nummer\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"employee\" [(ngModel)]=\"employee\" name=\"employee\" placeholder=\"Mitarbeiter\">\n        </div>\n        <div class=\"col-lg-12 col-xs-12\">\n                <textarea id=\"informationText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"title\" placeholder=\"Trace hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px; background-color: #0a7a74; color: #FFFFFF\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n<div *ngIf=\"showInfoFormBool\">\n  <form class=\"SendNotiz\"  #myForm=\"ngForm\" (submit)=\"sendNotiz($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\" style=\"min-height: 250px\">\n        <div class=\"col-lg-12\">\n          <label for=\"department\" style=\"padding-bottom: 20px\">Abteilung</label>\n          <select class=\"form-control\"  id=\"department\" style=\"margin-bottom: 10px;\" required [(ngModel)]=\"departmentNotizInput\" placeholder=\"Abteilung auswählen\" name=\"departmentNotizInput\">\n            <option *ngFor=\"let department of departments\"\n                    [value]=\"department\">\n              {{department}}\n            </option>\n          </select>\n        </div>\n        <div class=\"col-lg-12\">\n                <textarea id=\"notizText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"notizInput\" placeholder=\"Notiz hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px; background-color: #0a7a74; color: #FFFFFF\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = (function () {
    function FormComponent(tischplanService, _flashMessagesService) {
        this.tischplanService = tischplanService;
        this._flashMessagesService = _flashMessagesService;
        this.newInformationElements = [];
        this.notizResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.departments = [];
        this.departments = ["Sonnberg-Zirbn", "Restaurant", "Wintergarten", "Panorama"];
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.sendInformation = function (event) {
        var _this = this;
        event.preventDefault();
        this.dateGenerated = new Date();
        var newInformation = {
            text: this.title,
            roomNumber: this.roomNumber,
            tableNumber: this.tableNumber,
            date: this.dateGenerated,
            name: this.nameTraceInput,
            employee: this.employee
        };
        if (newInformation.text === undefined) {
            this._flashMessagesService.show('Die Nachricht ist leer ... ', { cssClass: 'alert-danger', timeout: 20000 });
            return;
        }
        else {
            this._flashMessagesService.show('Erfolgreich Information gespeichert ... ', { cssClass: 'alert-success', timeout: 20000 });
        }
        console.log(newInformation.tableNumber);
        if (newInformation.tableNumber) {
            this.tischplanService.sendInformation(newInformation)
                .subscribe(function (Information) {
                //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
                console.log('Information: ' + JSON.stringify(Information));
                //console.log(Information.tables[0]);
                console.log("------");
                //console.log(Information[0].tables);
                if (Information === null) {
                    return;
                }
                else {
                    if (Information.tables[0].department === "Sonnberg-Zirbn") {
                        for (var i = 0; i < _this.tablesSonnbergZirbn.length; i++) {
                            if (_this.tablesSonnbergZirbn[i].number === Information.tables[0].number) {
                                _this.tablesSonnbergZirbn[i] = Information.tables[0];
                            }
                        }
                    }
                    else if (Information.tables[0].department === "Panorama") {
                        for (var i = 0; i < _this.tablesPanorama.length; i++) {
                            if (_this.tablesPanorama[i].number === Information.tables[0].number) {
                                _this.tablesPanorama[i] = Information.tables[0];
                            }
                        }
                    }
                    else if (Information.tables[0].department === "Restaurant") {
                        for (var i = 0; i < _this.tablesRestaurant.length; i++) {
                            if (_this.tablesRestaurant[i].number === Information.tables[0].number) {
                                _this.tablesRestaurant[i] = Information.tables[0];
                            }
                        }
                    }
                    else if (Information.tables[0].department === "Wintergarten") {
                        for (var i = 0; i < _this.tablesWintergarten.length; i++) {
                            if (_this.tablesWintergarten[i].number === Information.tables[0].number) {
                                _this.tablesWintergarten[i] = Information.tables[0];
                            }
                        }
                    }
                }
            });
        }
        this.tischplanService.sendInformationToBox(newInformation)
            .subscribe(function (Information) {
            //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
            console.log('Information: ' + JSON.stringify(Information));
            //console.log(Information.tables[0]);
            //console.log("------");
            //console.log(Information[0].tables);
            _this.newInformationElements.push(Information);
            console.log('this.newInformationElements' + _this.newInformationElements);
        });
    };
    FormComponent.prototype.sendNotiz = function (event) {
        var _this = this;
        event.preventDefault();
        var newNotiz = {
            notizInput: this.notizInput,
            departmentNotizInput: this.departmentNotizInput,
        };
        if (newNotiz.notizInput === undefined) {
            this._flashMessagesService.show('Die Nachricht ist leer ... ', { cssClass: 'alert-danger', timeout: 20000 });
            return;
        }
        else {
            this._flashMessagesService.show('Erfolgreich Information gespeichert ... ', { cssClass: 'alert-success', timeout: 20000 });
        }
        this.tischplanService.sendInformationToNotizBlock(newNotiz)
            .subscribe(function (Notiz) {
            //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
            console.log('Information: ' + JSON.stringify(Notiz));
            //console.log(Information.tables[0]);
            //console.log("------");
            //console.log(Information[0].tables);
            _this.notizResponse.emit(Notiz);
            _this.notizElements = Notiz;
            console.log('this.newInformationElements' + _this.newInformationElements);
        });
    };
    return FormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('newInformationElements'),
    __metadata("design:type", Array)
], FormComponent.prototype, "newInformationElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dateGenerated'),
    __metadata("design:type", Object)
], FormComponent.prototype, "dateGenerated", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], FormComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('roomNumber'),
    __metadata("design:type", String)
], FormComponent.prototype, "roomNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tableNumber'),
    __metadata("design:type", String)
], FormComponent.prototype, "tableNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('nameTraceInput'),
    __metadata("design:type", String)
], FormComponent.prototype, "nameTraceInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('employee'),
    __metadata("design:type", String)
], FormComponent.prototype, "employee", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesRestaurant'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanorama'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesPanorama", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesWintergarten'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesWintergarten", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesSonnbergZirbn'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesSonnbergZirbn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showInfoFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showNotizFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showNotizFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('notizElements'),
    __metadata("design:type", Object)
], FormComponent.prototype, "notizElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FormComponent.prototype, "notizResponse", void 0);
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], FormComponent);

var _a, _b, _c;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n      <div class='cards-container' id='container1' [dragula]='\"evented-bag\"'>\n        <div class=\"card\" id=\"card1\" [ngStyle]=\"{'background-color': '#' + imHausListeElement.bgColor}\">\n          <p> <b>Name:</b> {{imHausListeElement.name}}<br>\n            <b>Zimmernummer:</b> {{imHausListeElement.zimmernummer}}<br>\n            <b>Anreise:</b> {{imHausListeElement.anreise}}<br>\n            <b>Abreise:</b> {{imHausListeElement.abreise}}<br>\n            <b>Personen Anzahl:</b> {{imHausListeElement.personenAnzahl}}<br>\n            <b>Notiz2:</b> {{imHausListeElement.notiz2}}<br>\n          </p>\n          <div *ngIf=\"imHausListeElement.bgColor === '0a7a74'\">\n            <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImHausListeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImHausListeComponent = (function () {
    function ImHausListeComponent(tischplanService) {
        this.tischplanService = tischplanService;
    }
    ImHausListeComponent.prototype.ngOnInit = function () {
    };
    ImHausListeComponent.prototype.updateImHausListeElement = function (informationElements2) {
        this.tischplanService.updateImHausListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateImHausListeElement response: ');
            console.log(response);
        });
    };
    return ImHausListeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('imHausListeElemente'),
    __metadata("design:type", Array)
], ImHausListeComponent.prototype, "imHausListeElemente", void 0);
ImHausListeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-im-haus-liste',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _a || Object])
], ImHausListeComponent);

var _a;
//# sourceMappingURL=im-haus-liste.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" style=\"max-width: 100%\">\n  <ul class=\"nav navbar-nav\" style=\"max-width: 100%; margin-left: 20px\">\n    <li><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2016/05/servicio-logo-hellblau-auto-ohne-hintergrund-1.png\" (click)=\"brandClick()\" style=\"height: 45px; width: auto; margin-top:15px; margin-right: 50px; text-align: left; display:table-cell; vertical-align:middle;\">Neu Laden</li>\n    <li class=\"anleitung\" ><a href=\"http://servicio.io/tester-info-3-2\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-bottom: 5px; margin-right: 0px; max-height: 15px\" >Anleitung</a></li>\n    <li class=\"printToCart1\"><button (click)=\"printToCart1('printSectionId1')\" style=\" display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 20px\" class=\"printToCart1\">Tisch Übersicht Drucken</button></li>\n    <li class=\"printToCart2\"><button (click)=\"printToCart2('printSectionId2')\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 20px\" class=\"printToCart2\">Tisch Plan Drucken</button></li>\n    <li class=\"printToCart3\"><button (click)=\"printToCart3('printSectionId3')\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 20px\" class=\"printToCart3\">A-Z Liste Drucken</button></li>\n    <li class=\"Belegte Tisch\" style=\"color: #0a7a74; vertical-align:middle; \"><h3>Belegte Tische: {{tablesOccupied}}</h3></li>\n  </ul>\n  <ul class=\"nav navbar-nav navbar-right\">\n    <div class=\"btn-group\" style=\"height: 45px; width: auto; margin: 10px 25px 5px 25px; float: left; text-align: right; display:table-cell; vertical-align:middle;\" dropdown>\n      <button dropdownToggle type=\"button\" style=\" background-color: #0a7a74; color: #FFFFFF\" class=\"btn btn-primary dropdown-toggle\">Umsetzen<span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"overflow: auto; height: 350px; width: 200px; padding: 20px\">\n        <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"umsetzen($event)\">\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"quellTisch\">Quell-Tisch:</label>\n              <input class=\"form-control\" id=\"quellTisch\" [(ngModel)]=\"quellTisch\" name=\"quellTisch\" placeholder=\"Von Tischnummer:\" >\n            </div>\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"zielTisch\">Ziel-Tisch</label>\n              <input class=\"form-control\" id=\"zielTisch\" [(ngModel)]=\"zielTisch\" name=\"zielTisch\" placeholder=\"Zu Tischnummer:\" >\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" style=\"background-color: #0a7a74; color: #FFFFFF; margin-left: 20px\">Umsetzen</button>\n        </form>\n      </ul>\n    </div>\n    <div class=\"btn-group\" style=\"height: 45px; width: auto; margin: 10px 25px 5px 25px; float: left; text-align: right; display:table-cell; vertical-align:middle;\" dropdown>\n      <button dropdownToggle type=\"button\" style=\" background-color: #0a7a74; color: #FFFFFF\" class=\"btn btn-primary dropdown-toggle\">\n        Traces Box <span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"overflow: auto; height: 350px; width: 200px\">\n        <div *ngFor=\"let newInformationElement of newInformationElements; let j = index;\">\n          <button style=\"float: right; background-color: #0a7a74; color: #FFFFFF; margin-right: 20px\" type=\"submit\" class=\"btn btn-send\" (click)=\"delete(newInformationElement, j, $event)\">x</button>\n          <li role=\"menuitem\" style=\"padding: 5px;\" (click)=\"none($event)\"> <b>Zimmer Nummer: </b> {{newInformationElement.roomNumber}} <br><b>Trace: </b> {{newInformationElement.text}} <br><b>Tisch: </b> {{newInformationElement.tableNumber}}<br><b>Datum: </b> {{newInformationElement.date}}<br><b>Name: </b> {{newInformationElement.name}}<br><b>Mitarbeiter: </b> {{newInformationElement.employee}}</li>\n          <li class=\"divider dropdown-divider\"></li>\n        </div>\n      </ul>\n    </div>\n    <li><img alt=\"Partner\" href=\"http://www.salzburgerhof.servicio.io/wlanlandingpage\" src=\"http://servicio.io/wp-content/uploads/2017/06/Salzburger-Hof_Marke_CMYK-ohne-hintergrund.png\" style=\"height: 45px; width: auto; margin-top: 10px; margin-bottom: 5px; margin-right: 25px; float: right; text-align: right; display:table-cell; vertical-align:middle;\"></li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.newInformationElements = [];
        this.umsetzenExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.delete = function (informationElement, j, event) {
        var _this = this;
        console.log(informationElement);
        console.log(j);
        event.stopPropagation();
        this.tischplanService.deleteInformationElement(informationElement)
            .subscribe(function (informationElement) {
            _this.newInformationElements.splice(j, 1);
        });
    };
    NavigationComponent.prototype.printToCart1 = function (printSectionId1) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId1).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n' +
            '<script src="node_modules/core-js/client/shim.min.js"></script>\n' +
            '<script src="<your-libs-directory>/object-assign.min.js"></script></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.printToCart2 = function (printSectionId2) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId2).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style> .row .t1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } </style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.printToCart3 = function (data) {
        console.log('This method is called from the parent component via ViewChild');
        var popupWinindow;
        var innerContents = document.getElementById(data).innerHTML;
        console.log(innerContents);
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    NavigationComponent.prototype.brandClick = function () {
        window.location.reload();
    };
    NavigationComponent.prototype.umsetzen = function (event) {
        event.preventDefault();
        console.log("UMSETZTEN CALLED");
        var quellTisch = this.quellTisch;
        var zielTisch = this.zielTisch;
        this.umsetzenExport.emit({ quellTisch: quellTisch, zielTisch: zielTisch });
    };
    return NavigationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('newInformationElements'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "newInformationElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesOccupied'),
    __metadata("design:type", Number)
], NavigationComponent.prototype, "tablesOccupied", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NavigationComponent.prototype, "umsetzenExport", void 0);
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/notiz/notiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showAlleBool === false\">\n  <br><h3 style=\"color: #0a7a74; margin-top: 10px\">Übergabe Notiz</h3><br>\n  <div class=\"notiz\">\n    <div *ngIf=\"showPanoramaBool\">\n      <div *ngFor=\"let notizElement of notizElements\" >\n        <div *ngIf=\"notizElement.departmentNotizInput === 'Panorama'\">\n          <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n            <p> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showRestaurantBool\">\n      <div *ngFor=\"let notizElement of notizElements\">\n        <div *ngIf=\"notizElement.departmentNotizInput === 'Restaurant'\">\n          <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n            <p> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showSonnbergZirbnBool\">\n      <div *ngFor=\"let notizElement of notizElements\">\n        <div *ngIf=\"notizElement.departmentNotizInput === 'Sonnberg-Zirbn'\">\n          <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n            <p> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showWintergartenBool\">\n      <div *ngFor=\"let notizElement of notizElements\">\n        <div *ngIf=\"notizElement.departmentNotizInput === 'Wintergarten'\">\n          <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n            <p> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/notiz/notiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotizComponent = (function () {
    function NotizComponent() {
    }
    NotizComponent.prototype.ngOnInit = function () {
    };
    return NotizComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('notizElements'),
    __metadata("design:type", Object)
], NotizComponent.prototype, "notizElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWintergartenBool'),
    __metadata("design:type", Boolean)
], NotizComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showSonnbergZirbnBool'),
    __metadata("design:type", Boolean)
], NotizComponent.prototype, "showSonnbergZirbnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showPanoramaBool'),
    __metadata("design:type", Boolean)
], NotizComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showRestaurantBool'),
    __metadata("design:type", Boolean)
], NotizComponent.prototype, "showRestaurantBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAlleBool'),
    __metadata("design:type", Boolean)
], NotizComponent.prototype, "showAlleBool", void 0);
NotizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notiz',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/notiz/notiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotizComponent);

//# sourceMappingURL=notiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/print/print.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"printSectionId3\" class=\"section3\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n    </tr>\n    <tr style=\"border: solid 1px black;\" >\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n    </tr>\n    <div *ngFor=\"let table of tables\">\n      <tr style=\"border: solid 1px black;\">\n        <div *ngIf=\"table.nameValue\">\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n        </div>\n      </tr>\n    </div>\n  </table>\n</div>\n<div id=\"printSectionId1\" class=\"section3\">\n  <div *ngIf=\"showPanoramaBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Panorama\n      </tr>\n      <tr style=\"border: solid 1px black;\" >\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesPanorama\">\n        <div *ngIf=\"table.nameValue\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace3}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showRestaurantBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Restaurant\n      </tr>\n      <tr style=\"border: solid 1px black;\" >\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesRestaurant\">\n        <div *ngIf=\"table.nameValue\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace3}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showSonnbergZirbnBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Sonnberg-Zirbn\n      </tr>\n      <tr style=\"border: solid 1px black;\" >\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesSonnbergZirbn\">\n        <div *ngIf=\"table.nameValue\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace3}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showWintergartenBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Wintergarten\n      </tr>\n      <tr style=\"border: solid 1px black;\" >\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesWintergarten\">\n        <div *ngIf=\"table.nameValue\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace3}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/print/print.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Table__ = __webpack_require__("../../../../../Table.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrintComponent = (function () {
    function PrintComponent() {
        this.getTablesOccupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getTablesforAzListe = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.uniqueTables = [];
        this.tableNumbers = [];
    }
    PrintComponent.prototype.ngOnInit = function () {
    };
    PrintComponent.prototype.formatAzListe = function (tables) {
        console.log('tables in formatAzListe');
        console.log(tables);
        this.tables = tables;
        function filterByID(obj) {
            if ('nameValue2' in obj || 'nameValue3' in obj) {
                return true;
            }
            else {
                return false;
            }
        }
        this.tempTablesArray = this.tables.filter(filterByID);
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].nameValue2 || this.tables[i].nameValue3) {
                this.tables.splice(i, 1);
            }
        }
        for (var i = 0; i < this.tempTablesArray.length; i++) {
            this.tempTablesArray2[i] = new __WEBPACK_IMPORTED_MODULE_1__Table__["a" /* Table */]();
        }
        for (var i = 0; i < this.tempTablesArray.length; i++) {
            this.tempTablesArray3[i] = new __WEBPACK_IMPORTED_MODULE_1__Table__["a" /* Table */]();
        }
        for (var i = 0; i < this.tempTablesArray.length; i++) {
            this.tempTablesArray1[i] = new __WEBPACK_IMPORTED_MODULE_1__Table__["a" /* Table */]();
        }
        for (var a = 0; a < this.tempTablesArray.length; a++) {
            if (typeof this.tempTablesArray[a].nameValue !== "undefined") {
                this.tempTablesArray2[a].nameValue = this.tempTablesArray[a].nameValue;
                this.tempTablesArray2[a].notiz2Value = this.tempTablesArray[a].notiz2Value;
                this.tempTablesArray2[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue;
                this.tempTablesArray2[a].number = this.tempTablesArray[a].number;
                this.tempTablesArray2[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue;
                this.tempTablesArray2[a].anreiseValue = this.tempTablesArray[a].anreiseValue;
                this.tempTablesArray2[a].abreiseValue = this.tempTablesArray[a].abreiseValue;
                this.tempTablesArray2[a].trace = this.tempTablesArray[a].trace;
                this.tables = this.tables.concat(this.tempTablesArray2[a]);
            }
        }
        for (var a = 0; a < this.tempTablesArray.length; a++) {
            if (typeof this.tempTablesArray[a].nameValue2 !== "undefined") {
                this.tempTablesArray1[a].nameValue = this.tempTablesArray[a].nameValue2;
                this.tempTablesArray1[a].notiz2Value = this.tempTablesArray[a].notiz2Value2;
                this.tempTablesArray1[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue2;
                this.tempTablesArray1[a].number = this.tempTablesArray[a].number;
                this.tempTablesArray1[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue2;
                this.tempTablesArray1[a].anreiseValue = this.tempTablesArray[a].anreiseValue2;
                this.tempTablesArray1[a].abreiseValue = this.tempTablesArray[a].abreiseValue2;
                this.tempTablesArray1[a].trace = this.tempTablesArray[a].trace2;
                this.tables = this.tables.concat(this.tempTablesArray1[a]);
            }
        }
        for (var a = 0; a < this.tempTablesArray.length; a++) {
            if (typeof this.tempTablesArray[a].nameValue3 !== "undefined") {
                this.tempTablesArray3[a].nameValue = this.tempTablesArray[a].nameValue3;
                this.tempTablesArray3[a].notiz2Value = this.tempTablesArray[a].notiz2Value3;
                this.tempTablesArray3[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue3;
                this.tempTablesArray3[a].number = this.tempTablesArray[a].number;
                this.tempTablesArray3[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue3;
                this.tempTablesArray3[a].anreiseValue = this.tempTablesArray[a].anreiseValue3;
                this.tempTablesArray3[a].abreiseValue = this.tempTablesArray[a].abreiseValue3;
                this.tempTablesArray3[a].trace = this.tempTablesArray[a].trace3;
                this.tables = this.tables.concat(this.tempTablesArray3[a]);
            }
        }
        console.log(this.tempTablesArray1);
        console.log(this.tempTablesArray);
        console.log(this.tempTablesArray2);
        console.log(this.tempTablesArray3);
        console.log('this.tables before sort ');
        console.log(this.tables);
        for (var i = 0; i < this.tables.length; i++) {
            if (!("nameValue" in this.tables[i])) {
                this.tables.splice(i, 1);
            }
        }
        this.tables = this.tables.sort(function (a, b) {
            var nameA = "";
            var nameB = "";
            if (typeof a.nameValue !== "undefined" && a.nameValue !== null) {
                nameA = a.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (typeof b.nameValue !== "undefined" && a.nameValue !== null) {
                nameB = b.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        console.log('this.tables after sort: ');
        console.log("this.uniqueTables: ");
        console.log(this.uniqueTables);
        for (var i = 0; i < this.tables.length; i++) {
            console.log(i);
            if ("nameValue" in this.tables[i]) {
                console.log("--->" + i);
                this.tableNumbers.push(this.tables[i].number);
            }
        }
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        this.uniqueTables = this.tableNumbers.filter(onlyUnique);
        this.tablesOccupied = this.uniqueTables.length;
        this.getTablesOccupied.emit(this.tablesOccupied);
        this.getTablesforAzListe.emit(this.tables);
        console.log(this.tables);
        console.log("this.tablesOccupied" + this.tablesOccupied);
    };
    return PrintComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tables'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tables", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dateGeneratedListe'),
    __metadata("design:type", String)
], PrintComponent.prototype, "dateGeneratedListe", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanorama'),
    __metadata("design:type", String)
], PrintComponent.prototype, "tablesPanorama", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showPanoramaBool'),
    __metadata("design:type", String)
], PrintComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showRestaurantBool'),
    __metadata("design:type", String)
], PrintComponent.prototype, "showRestaurantBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesRestaurant'),
    __metadata("design:type", String)
], PrintComponent.prototype, "tablesRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showSonnbergZirbnBool'),
    __metadata("design:type", String)
], PrintComponent.prototype, "showSonnbergZirbnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesSonnbergZirbn'),
    __metadata("design:type", String)
], PrintComponent.prototype, "tablesSonnbergZirbn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWintergartenBool'),
    __metadata("design:type", String)
], PrintComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesWintergarten'),
    __metadata("design:type", String)
], PrintComponent.prototype, "tablesWintergarten", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PrintComponent.prototype, "getTablesOccupied", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], PrintComponent.prototype, "getTablesforAzListe", void 0);
PrintComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-print',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/print/print.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    })
], PrintComponent);

var _a, _b;
//# sourceMappingURL=print.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"color: #0a7a74; margin-top: 0px\">Suche</h3>\n  <div style=\"margin: 20px\">\n    <input type=\"text\" (keyup)=\"onKey($event)\">\n  </div>\n  <div class=\"line1\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
        this.termExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SearchComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            //alert('you just clicked enter');
            this.termExport.emit(this.term);
        }
    };
    SearchComponent.prototype.onKey = function (event) {
        this.term = event.target.value;
        console.log(this.term);
        this.termExport.emit(this.term);
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SearchComponent.prototype, "termExport", void 0);
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"printSectionId2\" class=\"col-xs-12 printTwo\">\n  <div class=\"row\" style=\"border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\">\n    <div *ngIf=\"showSonnbergZirbnBool\">\n      <div *ngFor=\"let tableSonnbergZirbn of tablesSonnbergZirbn; let j = index;\">\n        <div class=\"t{{tableSonnbergZirbn.number}} table-item\" (click)=\"moveTable(tableSonnbergZirbn, j)\" [ngStyle]=\"{'top': tableSonnbergZirbn.topValue + 'px', 'left': tableSonnbergZirbn.leftValue + 'px', 'background-color': + tableSonnbergZirbn.bgColor, 'height': + tableSonnbergZirbn.height + 'px', 'width': + tableSonnbergZirbn.width + 'px', 'border': + tableSonnbergZirbn.border}\" [style.border]=\"getStyle(tablesSonnbergZirbn[j].trace, tablesSonnbergZirbn[j].trace2, tablesSonnbergZirbn[j].trace3, tablesSonnbergZirbn[j].trace4, tablesSonnbergZirbn[j].trace5, tablesSonnbergZirbn[j].trace6, tablesSonnbergZirbn[j].trace7, tablesSonnbergZirbn[j].trace8, tablesSonnbergZirbn[j].trace9, tablesSonnbergZirbn[j].trace10, tablesSonnbergZirbn[j].trace11, tablesSonnbergZirbn[j].trace12, tablesSonnbergZirbn[j].trace13, tablesSonnbergZirbn[j].trace14, tablesSonnbergZirbn[j].trace15, tablesSonnbergZirbn[j].newTraceText)\">\n          <div *ngIf=\"tablesSonnbergZirbn[j] !== tablesSonnbergZirbn[j+1]\">\n            <p><b>{{tableSonnbergZirbn.number}} | {{tableSonnbergZirbn.personenAnzahlValue}} {{tableSonnbergZirbn.personenAnzahlValue2}} {{tableSonnbergZirbn.personenAnzahlValue3}} {{tableSonnbergZirbn.personenAnzahlValue4}} {{tableSonnbergZirbn.personenAnzahlValue5}} {{tableSonnbergZirbn.personenAnzahlValue6}} {{tableSonnbergZirbn.personenAnzahlValue7}} {{tableSonnbergZirbn.personenAnzahlValue8}} {{tableSonnbergZirbn.personenAnzahlValue9}} {{tableSonnbergZirbn.personenAnzahlValue10}}  {{tableSonnbergZirbn.personenAnzahlValue11}}  {{tableSonnbergZirbn.personenAnzahlValue12}}  {{tableSonnbergZirbn.personenAnzahlValue13}}  {{tableSonnbergZirbn.personenAnzahlValue14}}  {{tableSonnbergZirbn.personenAnzahlValue15}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showPanoramaBool\">\n      <div *ngFor=\"let tablePanorama of tablesPanorama; let j = index;\">\n        <div class=\"t{{tablePanorama.number}} table-item\" (click)=\"moveTable(tablePanorama, j)\" [ngStyle]=\"{'top': tablePanorama.topValue + 'px', 'left': tablePanorama.leftValue + 'px', 'background-color': + tablePanorama.bgColor,  'height': + tablePanorama.height + 'px', 'width': + tablePanorama.width + 'px', 'border': + tablePanorama.border}\" [style.border]=\"getStyle(tablesPanorama[j].trace, tablesPanorama[j].trace2, tablesPanorama[j].trace3, tablesPanorama[j].trace4, tablesPanorama[j].trace5, tablesPanorama[j].trace6, tablesPanorama[j].trace7, tablesPanorama[j].trace8, tablesPanorama[j].trace9, tablesPanorama[j].trace10, tablesPanorama[j].trace11, tablesPanorama[j].trace12, tablesPanorama[j].trace13, tablesPanorama[j].trace14, tablesPanorama[j].trace15, tablesPanorama[j].newTraceText)\">\n          <div *ngIf=\"tablesPanorama[j] !== tablesPanorama[j+1]\">\n            <p><b>{{tablePanorama.number}} | {{tablePanorama.personenAnzahlValue}} {{tablePanorama.personenAnzahlValue2}} {{tablePanorama.personenAnzahlValue3}} {{tablePanorama.personenAnzahlValue4}} {{tablePanorama.personenAnzahlValue5}} {{tablePanorama.personenAnzahlValue6}} {{tablePanorama.personenAnzahlValue7}} {{tablePanorama.personenAnzahlValue8}} {{tablePanorama.personenAnzahlValue9}} {{tablePanorama.personenAnzahlValue10}} {{tablePanorama.personenAnzahlValue11}} {{tablePanorama.personenAnzahlValue12}} {{tablePanorama.personenAnzahlValue13}} {{tablePanorama.personenAnzahlValue14}} {{tablePanorama.personenAnzahlValue15}}</b></p>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showRestaurantBool\">\n      <div *ngFor=\"let tableRestaurant of tablesRestaurant; let j = index;\">\n        <div class=\"t{{tableRestaurant.number}} table-item\" (click)=\"moveTable(tableRestaurant, j)\" [ngStyle]=\"{'top': tableRestaurant.topValue + 'px', 'left': tableRestaurant.leftValue + 'px', 'background-color': + tableRestaurant.bgColor, 'height': + tableRestaurant.height + 'px', 'width': + tableRestaurant.width + 'px', 'border': + tableRestaurant.border}\" [style.border]=\"getStyle(tablesRestaurant[j].trace, tablesRestaurant[j].trace2, tablesRestaurant[j].trace3, tablesRestaurant[j].trace4, tablesRestaurant[j].trace5, tablesRestaurant[j].trace6, tablesRestaurant[j].trace7, tablesRestaurant[j].trace8, tablesRestaurant[j].trace9, tablesRestaurant[j].trace10, tablesRestaurant[j].trace11, tablesRestaurant[j].trace12, tablesRestaurant[j].trace13, tablesRestaurant[j].trace14, tablesRestaurant[j].trace15, tablesRestaurant[j].newTraceText)\">\n          <div *ngIf=\"tablesRestaurant[j] !== tablesRestaurant[j+1]\">\n            <p><b>{{tableRestaurant.number}} | {{tableRestaurant.personenAnzahlValue}} {{tableRestaurant.personenAnzahlValue2}} {{tableRestaurant.personenAnzahlValue3}} {{tableRestaurant.personenAnzahlValue4}} {{tableRestaurant.personenAnzahlValue5}} {{tableRestaurant.personenAnzahlValue6}} {{tableRestaurant.personenAnzahlValue7}} {{tableRestaurant.personenAnzahlValue8}} {{tableRestaurant.personenAnzahlValue9}} {{tableRestaurant.personenAnzahlValue10}}  {{tableRestaurant.personenAnzahlValue11}} {{tableRestaurant.personenAnzahlValue12}} {{tableRestaurant.personenAnzahlValue13}} {{tableRestaurant.personenAnzahlValue14}} {{tableRestaurant.personenAnzahlValue15}} </b></p>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showWintergartenBool\">\n      <div *ngFor=\"let tableWintergarten of tablesWintergarten; let j = index;\">\n        <div class=\"t{{tableWintergarten.number}} table-item\" (click)=\"moveTable(tableWintergarten, j)\" [ngStyle]=\"{'top': tableWintergarten.topValue + 'px', 'left': tableWintergarten.leftValue + 'px', 'background-color': + tableWintergarten.bgColor,  'height': + tableWintergarten.height + 'px', 'width': + tableWintergarten.width + 'px', 'border': + tableWintergarten.border, 'border-radius': + tableWintergarten.borderRadius, 'transform':  + tableWintergarten.transformValue}\" [style.border]=\"getStyle(tablesWintergarten[j].trace, tablesWintergarten[j].trace2, tablesWintergarten[j].trace3, tablesWintergarten[j].trace4, tablesWintergarten[j].trace5, tablesWintergarten[j].trace6, tablesWintergarten[j].trace7, tablesWintergarten[j].trace8, tablesWintergarten[j].trace9, tablesWintergarten[j].trace10, tablesWintergarten[j].trace11, tablesWintergarten[j].trace12, tablesWintergarten[j].trace13, tablesWintergarten[j].trace14, tablesWintergarten[j].trace15, tablesWintergarten[j].newTraceText)\">\n          <div *ngIf=\"tablesWintergarten[j] !== tablesWintergarten[j+1]\">\n            <p><b>{{tableWintergarten.number}} | {{tableWintergarten.personenAnzahlValue}} {{tableWintergarten.personenAnzahlValue2}} {{tableWintergarten.personenAnzahlValue3}} {{tableWintergarten.personenAnzahlValue4}} {{tableWintergarten.personenAnzahlValue5}} {{tableWintergarten.personenAnzahlValue6}} {{tableWintergarten.personenAnzahlValue7}} {{tableWintergarten.personenAnzahlValue8}} {{tableWintergarten.personenAnzahlValue9}} {{tableWintergarten.personenAnzahlValue10}} {{tableWintergarten.personenAnzahlValue11}} {{tableWintergarten.personenAnzahlValue12}} {{tableWintergarten.personenAnzahlValue13}} {{tableWintergarten.personenAnzahlValue14}} {{tableWintergarten.personenAnzahlValue15}}</b></p>\n            </div>\n            </div>\n      </div>\n    </div>\n    <div *ngIf=\"showAlleBool\">\n      <br>\n      <br>\n      <br>\n      <h1 style=\"color: white\">Perfekt um eine Suche zu starten ;-)</h1>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tables_service__ = __webpack_require__("../../../../../src/app/services/tables.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableplanComponent = (function () {
    function TableplanComponent(tischplanService, _navService) {
        this.tischplanService = tischplanService;
        this._navService = _navService;
        this.movedSonnbergZirbn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedRestaurant = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedWintergarten = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedPanorama = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TableplanComponent.prototype.ngOnInit = function () {
    };
    TableplanComponent.prototype.moveTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table :' + table.number + 'j' + j);
        this.tischplanService.moveTable(table).subscribe(function (response) {
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
        });
    };
    TableplanComponent.prototype.getStyle = function (j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
        if (j || k || l || m || n || o || p || q || r || s || t || u || v || w || x || y) {
            return "solid 3px red";
        }
        else {
            return "solid 3px rgb(243, 239, 228)";
        }
    };
    return TableplanComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesWintergarten'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesWintergarten", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWintergartenBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesSonnbergZirbn'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesSonnbergZirbn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showSonnbergZirbnBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showSonnbergZirbnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanorama'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesPanorama", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showPanoramaBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesRestaurant'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showRestaurantBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showRestaurantBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAlleBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showAlleBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TableplanComponent.prototype, "movedSonnbergZirbn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], TableplanComponent.prototype, "movedRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], TableplanComponent.prototype, "movedWintergarten", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], TableplanComponent.prototype, "movedPanorama", void 0);
TableplanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tableplan',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_tables_service__["a" /* NavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tables_service__["a" /* NavService */]) === "function" && _f || Object])
], TableplanComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=tableplan.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  background-color: #0a7a74;\n}\n\n.row {\n  height: 100%;\n}\n\n.line{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 115px;\n}\n\n.line1{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 95px;\n}\n\n@media (min-width: 1200px) {\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: calc(250vh - 390px);\n  }\n}\n\n@media (min-width: 800px) {\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: 580px;\n  }\n}\n\n.printTwo {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #0a7a74;\n  min-height: 580px;\n}\n\n\n.row .inner-table {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: calc(100vh - 240px);\n}\n\n.row4 {\n  margin-top: 90px;\n}\n\n.row .table-col {\n  min-height: 100vh;\n  background-color: #f3efe4;\n  padding: 20px 10px 20px 10px;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  border-bottom: 20px solid #0a7a74;\n  box-sizing: border-box;\n}\n\n@media (min-width: 800px) {\n  .row .table-col {\n    min-height: calc(100vh +  275px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n    box-sizing: border-box;\n  }\n}\n\n@media (min-width: 800px) {\n  .row .inner-table {\n    max-height: calc(100vh);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n@media (min-width: 1200px) {\n  .row .table-col {\n    min-height: calc(100vh);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n    box-sizing: border-box;\n  }\n}\n\n@media (min-width: 1200px) {\n  .row .inner-table {\n    max-height: calc(100vh - 350px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n.row .print-col {\n  padding: 0;\n  background-color: #f3efe4;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  min-height: 100vh;\n  border-bottom: 20px solid #0a7a74;\n  box-sizing: border-box;\n}\n\n@media (min-width: 800px) {\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n    box-sizing: border-box;\n    min-height: 100vh;\n    max-height: 100vh;\n  }\n}\n@media (min-width: 1200px) {\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n    box-sizing: border-box;\n    min-height: 100vh;\n    max-height: 100vh;\n\n  }\n}\n\n.row .upload-col {\n  background-color: #f3efe4;\n  padding: 0px 10px 20px 10px;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  border-bottom: 20px solid #0a7a74;\n  box-sizing: border-box;\n  min-height: 100vh;\n  max-height: 100vh;\n}\n\n.section3 {\n  display: none;\n}\n\n.row1 {\n  height: calc((100vh - 250px) / 3);\n  overflow: auto;\n}\n\n\n.row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Tisch, .anleitung {\n  display: none;\n}\n\n@media (min-width: 1200px) {\n  .row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Tisch, .anleitung {\n    display: block;\n  }\n}\n\n\n.cards-container {\n  margin: 10px 0px 10px 0px;\n  padding: 10px 10px 40px 10px;\n}\n\n.row .container-fluid .table-col .inner-table .row3 .wrapper .cards-container {\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n\n.row .container-fluid .col-md-4 .row1 {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  width: 105%;\n  height: 232.5px;\n  padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container {\n  overflow: auto;\n  margin: 20px 40px 20px 0;\n  display: inline-block;\n  max-width: 100%;\n  border-radius: 3px;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 {\n  overflow: auto;\n  margin: 0 auto;\n  display: inline-block;\n  width: 100%;\n  height: 800px;\n  padding-top: 20px;\n}\n\n\n.row .container-fluid h3 {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin: 0 auto;\n  display: inline-block;\n  color: #0a7a74;\n  position: relative;\n  text-align: center;\n}\n\n.row .container-fluid .col-md-4 h3 {\n  margin: 0 auto;\n  color: #0a7a74;\n  position: relative;\n}\n\n.row .container-fluid .upload-col .csv h3 {\n  margin: 0;\n}\n\n.row1 .col {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.row1 .col:nth-child(1) {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.row1 .col:nth-child(2) {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n}\n.row1 .col:nth-child(3) {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.row .col-md-4 .row2 {\n  padding-bottom: 10px;\n  position: relative;\n  min-height: 100%;\n  border-bottom: 1px solid red;\n}\n\n.card {\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row3 .row1 p {\n  /*padding: 10px 10px 10px 10px;*/\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 .wrapper .container .card p {\n  /*padding: 10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-6 .row {\n  background-color: #eaf3f3;\n  padding: 20px 10px 20px 10px;\n  height: 100%;\n}\n\n.table-item {\n  position: absolute;\n}\n\n.btn-send {\n  display: none;\n}\n\n@media (min-width: 1200px) {\n  .btn-send {\n    display: block;\n  }\n}\n\n.csv {\n  margin-bottom: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <title>Dashboard</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"node_modules/core-js/client/shim.min.js\"></script>\n  <script src=\"<your-libs-directory>/object-assign.min.js\"></script>\n</head>\n\n<body>\n  <div id=\"charge-error\" class=\"alert alert-danger <% if ( !errMsg ) { %> hidden <% } %>\">\n    <%= errMsg  %>\n  </div>\n  <div class=\"row\">\n    <div class=\"container-fluid\">\n      <app-navigation  [newInformationElements]=\"newInformationElements\"\n                       [tablesOccupied]=\"tablesOccupied\"\n                       (getTablesOccupied)=\"tablesOccupied = $event\"\n                       (umsetzenExport)=\"quellTisch = $event; umsetzen($event)\">\n      </app-navigation>\n      <div class=\"col-xs-12 col-sm-8 col-lg-4 print-col\">\n        <app-form-menu style=\"min-height: 40px\" [buttonBgColorInfoForm]=\"buttonBgColorInfoForm\"\n                       [buttonBgColorNotizForm]=\"buttonBgColorNotizForm\"\n                       [fontColorInfoForm]=\"fontColorInfoForm\"\n                       [fontColorNotizForm]=\"fontColorNotizForm\"\n                       [showNotizFormBool]=\"showNotizFormBool\"\n                       [showInfoFormBool]=\"showInfoFormBool\"\n                       (showInfoFormBoolChange)=\"showInfoFormBool=$event\"\n                       (showNotizFormBoolChange)=\"showNotizFormBool=$event\">\n        </app-form-menu>\n        <app-form [newInformationElements]=\"newInformationElements\"\n                  [dateGenerated]=\"dateGenerated\"\n                  [title]=\"title\"\n                  [roomNumber]=\"roomNumber\"\n                  [tableNumber]=\"tableNumber\"\n                  [employee]=\"employee\"\n                  [nameTraceInput]=\"nameTraceInput\"\n                  [tablesPanorama]=\"tablesPanorama\"\n                  [tablesRestaurant]=\"tablesRestaurant\"\n                  [tablesSonnbergZirbn]=\"tablesSonnbergZirbn\"\n                  [tablesWintergarten]=\"tablesWintergarten\"\n                  [showNotizFormBool]=\"showNotizFormBool\"\n                  [showInfoFormBool]=\"showInfoFormBool\"\n                  [notizElements]=\"notizElements\"\n                  (notizResponse)=\"notizElements=$event\">\n        </app-form>\n        <app-departmentmenu\n          [buttonBgColor1]=\"buttonBgColor1\"\n          [buttonBgColor2]=\"buttonBgColor2\"\n          [buttonBgColor3]=\"buttonBgColor3\"\n          [buttonBgColor4]=\"buttonBgColor4\"\n          [buttonBgColor5]=\"buttonBgColor5\"\n          [fontColor1]=\"fontColor1\"\n          [fontColor2]=\"fontColor2\"\n          [fontColor3]=\"fontColor3\"\n          [fontColor4]=\"fontColor4\"\n          [fontColor5]=\"fontColor5\"\n          [showPanoramaBool]=\"showPanoramaBool\"\n          [showRestaurantBool]=\"showRestaurantBool\"\n          [showSonnbergZirbnBool]=\"showSonnbergZirbnBool\"\n          [showWintergartenBool]=\"showWintergartenBool\"\n          [showAlleBool]=\"showAlleBool\"\n          (showSonnbergZirbnBoolChange)=\"showSonnbergZirbnBool=$event\"\n          (showPanoramaBoolChange)=\"showPanoramaBool=$event\"\n          (showRestaurantBoolChange)=\"showRestaurantBool=$event\"\n          (showWintergartenBoolChange)=\"showWintergartenBool=$event\"\n          (showAlleBoolChange)=\"showAlleBool=$event\">\n        </app-departmentmenu>\n        <app-tableplan [tablesWintergarten]=\"tablesWintergarten\"\n                       [showWintergartenBool]=\"showWintergartenBool\"\n                       [tablesSonnbergZirbn]=\"tablesSonnbergZirbn\"\n                       [showSonnbergZirbnBool]=\"showSonnbergZirbnBool\"\n                       [tablesPanorama]=\"tablesPanorama\"\n                       [showPanoramaBool]=\"showPanoramaBool\"\n                       [tablesRestaurant]=\"tablesRestaurant\"\n                       [showRestaurantBool]=\"showRestaurantBool\"\n                       (movedSonnbergZirbn)=\"tablesSonnbergZirbn = $event\"\n                       (movedRestaurant)=\"tablesRestaurant = $event\"\n                       (movedPanorama)=\"tablesPanorama = $event\"\n                       (movedWintergarten)=\"tablesWintergarten = $event\"\n                       [showAlleBool]=\"showAlleBool\">\n        </app-tableplan>\n      </div>\n      <div class=\"col-xs-12 col-lg-4 upload-col\">\n        <app-upload></app-upload>\n        <div class=\"outer-cards\">\n          <h3>Im-Haus-Liste</h3>\n          <app-im-haus-liste [imHausListeElemente]=\"imHausListeElemente\"></app-im-haus-liste>\n          <h3>Anreise-Liste</h3>\n          <app-anreise-liste [anreiseListeElemente]=\"anreiseListeElemente\"></app-anreise-liste>\n          <h3>Traces-Liste</h3>\n          <app-traces-liste [tracesListeElemente]=\"tracesListeElemente\" ></app-traces-liste>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-lg-4 table-col\">\n          <app-search (termExport)=\"term = $event\"></app-search>\n        <app-notiz\n          [showPanoramaBool]=\"showPanoramaBool\"\n          [showRestaurantBool]=\"showRestaurantBool\"\n          [showSonnbergZirbnBool]=\"showSonnbergZirbnBool\"\n          [showWintergartenBool]=\"showWintergartenBool\"\n          [notizElements]=\"notizElements\"\n          [showAlleBool]=\"showAlleBool\">\n        </app-notiz>\n        <h3 style=\"margin-top: 20px\">Tisch Übersicht</h3>\n        <div class=\"inner-table\" style=\"padding: 0px 0px 0px 0px;\">\n          <div class=\"row3\">\n            <div class='wrapper' id=\"wrapper\">\n              <app-departments [tablesWintergarten]=\"tablesWintergarten\"\n                               [showWintergartenBool]=\"showWintergartenBool\"\n                               [tablesSonnbergZirbn]=\"tablesSonnbergZirbn\"\n                               [showSonnbergZirbnBool]=\"showSonnbergZirbnBool\"\n                               [tablesPanorama]=\"tablesPanorama\"\n                               [showPanoramaBool]=\"showPanoramaBool\"\n                               [tablesRestaurant]=\"tablesRestaurant\"\n                               [showRestaurantBool]=\"showRestaurantBool\"\n                               (dispensedSonnbergZirbn)=\"tablesSonnbergZirbn=$event\"\n                               (dispensedRestaurant)=\"tablesRestaurant=$event\"\n                               (dispensedPanorama)=\"tablesPanorama=$event\"\n                               (dispensedWintergarten)=\"tablesWintergarten=$event\"\n                               [term]=\"term\"\n                               [showAlleBool]=\"showAlleBool\">\n              </app-departments>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n<app-print  [tables]=\"tables\"\n            [dateGeneratedListe]=\"dateGeneratedListe\"\n            [tablesPanorama]=\"tablesPanorama\"\n            [showPanoramaBool]=\"showPanoramaBool\"\n            [showRestaurantBool]=\"showRestaurantBool\"\n            [tablesRestaurant]=\"tablesRestaurant\"\n            [showSonnbergZirbnBool]=\"showSonnbergZirbnBool\"\n            [tablesSonnbergZirbn]=\"tablesSonnbergZirbn\"\n            [showWintergartenBool]=\"showWintergartenBool\"\n            [tablesWintergarten]=\"tablesWintergarten\"\n            (getTablesOccupied)=\"tablesOccupied = $event\"\n            (getTablesforAzListe)=\"tables = $event\">\n</app-print>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TischplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__print_print_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/print/print.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__departmentmenu_departmentmenu_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_form_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__im_haus_liste_im_haus_liste_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tableplan_tableplan_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__anreise_liste_anreise_liste_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/anreise-liste/anreise-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__traces_liste_traces_liste_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/traces-liste/traces-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upload_upload_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__departments_departments_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_tables_service__ = __webpack_require__("../../../../../src/app/services/tables.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var TischplanComponent = (function () {
    function TischplanComponent(tischplanService, dragulaService, _navService) {
        //this.subscription = this._navService.navItem$
        //  .subscribe(tables => this.tablesPanorama = tables);
        var _this = this;
        this.tischplanService = tischplanService;
        this.dragulaService = dragulaService;
        this._navService = _navService;
        this.topValues = [];
        this.tablesTemp = [];
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.tracesListeElemente = [];
        this.tables = [];
        this.uniqueTables = [];
        this.tablesSonnbergZirbn = [];
        this.tablesPanorama = [];
        this.tablesRestaurant = [];
        this.tablesWintergarten = [];
        this.filesToUpload = [];
        this.isDropped = [];
        this.newInformationElements = [];
        this.tableNumbers = [];
        this.notizElements = [];
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.buttonBgColorInfoForm = "0a7a74";
        this.buttonBgColorNotizForm = "0a7a74";
        this.fontColorInfoForm = "f3efe4";
        this.fontColorNotizForm = "f3efe4";
        this.dateGeneratedListe = new Date();
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor3 = "0a7a74";
        this.buttonBgColor4 = "0a7a74";
        this.buttonBgColor5 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor2 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor4 = "f3efe4";
        this.fontColor5 = "f3efe4";
        this.tablesOccupied = 0;
        this.backgroundColor = "ffffff";
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        this.showAlleBool = false;
        this.tischplanService.getImHausListe()
            .subscribe(function (imHausListeElemente) {
            if (imHausListeElemente === null) {
                return;
            }
            else {
                imHausListeElemente.sort(function (a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
                _this.imHausListeElemente = imHausListeElemente;
                console.log(_this.imHausListeElemente);
            }
        });
        this.tischplanService.getAnreiseListe()
            .subscribe(function (anreiseListeElemente) {
            if (anreiseListeElemente === null) {
                return;
            }
            else {
                anreiseListeElemente.sort(function (a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
                _this.anreiseListeElemente = anreiseListeElemente;
                console.log(_this.anreiseListeElemente);
            }
        });
        this.tischplanService.getInformationElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.newInformationElements = informationElemente;
                console.log(_this.newInformationElements);
            }
        });
        this.tischplanService.getNotizElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.notizElements = informationElemente;
                console.log(_this.notizElements);
            }
        });
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            if (tables === null) {
                return;
            }
            else {
                console.log("TABLES LENGTH: " + tables.length);
                tables[3].tables.sort(function (a, b) {
                    if (Number(a.number) < Number(b.number))
                        return -1;
                    if (Number(a.number) > Number(b.number))
                        return 1;
                    return 0;
                });
                var sorted = tables.sort();
                console.log('sorted:');
                console.log(sorted);
                for (var a = 0; a < tables.length; a++) {
                    if (tables[a].department === "Panorama") {
                        _this.tablesPanorama = tables[a].tables;
                    }
                    else if (tables[a].department === "Wintergarten") {
                        _this.tablesWintergarten = tables[a].tables;
                        console.log('Test' + JSON.stringify(_this.tablesWintergarten));
                    }
                    else if (tables[a].department === "Sonnberg-Zirbn") {
                        _this.tablesSonnbergZirbn = tables[a].tables;
                    }
                    else if (tables[a].department === "Restaurant") {
                        _this.tablesRestaurant = tables[a].tables;
                    }
                }
                _this.changeBgColorIfAnreise(tables);
                //this.dispenseIfAbreise(tables);
            }
            console.log(_this.tablesPanorama);
            console.log(_this.tablesWintergarten);
            console.log(_this.tablesSonnbergZirbn);
            console.log(_this.tablesRestaurant);
            _this.tables = _this.tables.concat(_this.tablesWintergarten).concat(_this.tablesRestaurant).concat(_this.tablesPanorama).concat(_this.tablesSonnbergZirbn);
            _this.printComponent.formatAzListe(_this.tables);
            console.log("this.tables");
            console.log(_this.tables);
        });
        this.tischplanService.getTracesListe()
            .subscribe(function (tracesListeElemente) {
            if (tracesListeElemente === null) {
                return;
            }
            else {
                tracesListeElemente.sort(function (a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
                console.log('92' + JSON.stringify(tracesListeElemente));
                //console.log("2:" + tracesListeElemente[0].data[0]);
                //console.log(tracesListeElemente[0].data.length);
                //this.tracesListeElemente = tracesListeElemente[0].data;
                _this.tracesListeElemente = tracesListeElemente;
                //this.formatTracesListeElements(tracesListeElemente);
            }
        });
        dragulaService.drag.subscribe(function (value) {
            console.log("drag: " + value[0]);
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            console.log("drop: " + value[0]);
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            console.log("over: " + value[0]);
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            console.log("out: " + value[0]);
            _this.onOut(value.slice(1));
        });
    }
    TischplanComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
    };
    TischplanComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        //console.log("Args = ");
        var information = args[0].innerText;
        //console.log("information: " + information);
        var informationElements = information.split(/\n/);
        //console.log(informationElements);
        var informationElements2 = [];
        for (var s = 0; s < informationElements.length; s++) {
            informationElements2.push(informationElements[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = informationElements[s];
            }
        }
        //console.log(informationElements2);
        var department = JSON.stringify(args[1].id);
        //console.log("departement" + department);
        var departementSubstring = department.substring(1, department.length - 1);
        //console.log("departementSubstring" + departementSubstring);
        var tableNumber = args[1].innerText;
        var numbers = tableNumber.match(/\d+/g);
        //console.log("numbers: " + numbers);
        var arrayIndex = numbers[1];
        //console.log("arrayIndex: " + arrayIndex);
        var tableNumberSubstring = "";
        //console.log("tableNumber" + tableNumber);
        tableNumberSubstring = tableNumber.toString().match(/\d+/);
        //console.log("tableNumberSubstring" + tableNumberSubstring);
        var dataString = [];
        dataString.push(information + departementSubstring + tableNumberSubstring);
        console.log('dataString' + dataString);
        this.departmentsComponent.addInformationToTable(dataString, arrayIndex);
        this.departmentsComponent.occupyTableOnDrop(dataString, arrayIndex);
        this.imHausListeComponent.updateImHausListeElement(informationElements2);
        this.anreiseListeComponent.updateAnreiseListeElement(informationElements2);
        this.tracesListeComponent.updateTracesListeElement(informationElements2);
    };
    TischplanComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
    };
    TischplanComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
    };
    TischplanComponent.prototype.ngOnInit = function () {
    };
    TischplanComponent.prototype.upload = function () {
        this.uploadComponent.upload();
    };
    TischplanComponent.prototype.showWintergarten = function () {
        this.departmentmenuComponent.showWintergarten();
    };
    TischplanComponent.prototype.showRestaurant = function () {
        this.departmentmenuComponent.showRestaurant();
    };
    TischplanComponent.prototype.showSonnbergZirbn = function () {
        this.departmentmenuComponent.showWintergarten();
    };
    TischplanComponent.prototype.showPanorama = function () {
        this.departmentmenuComponent.showPanorama();
    };
    TischplanComponent.prototype.moveTable = function (table, j) {
        this.tableplanComponent.moveTable(table, j);
    };
    TischplanComponent.prototype.sendInformation = function (event) {
        this.formComponent.sendInformation(event);
    };
    TischplanComponent.prototype.delete = function (informationElement, j, event) {
        this.navigationComponent.delete(informationElement, j, event);
    };
    TischplanComponent.prototype.changeBgColorIfAnreise = function (tables) {
        console.log('=================================================changeBgColorIfAnreise');
        this.dateTodayGenerated = new Date();
        for (var a = 0; a < tables.length; a++) {
            for (var b = 0; b < tables[a].tables.length; b++) {
                if (tables[a].tables[b].anreiseValue) {
                    console.log('tables[a].tables[b].anreiseValue: ' + b + " " + tables[a].tables[b].anreiseValue);
                    this.parts[0] = tables[a].tables[b].anreiseValue.match(/(\d+)/g);
                }
                else {
                    this.parts[0] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue2) {
                    this.parts[1] = tables[a].tables[b].anreiseValue2.match(/(\d+)/g);
                }
                else {
                    this.parts[1] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue3) {
                    this.parts[2] = tables[a].tables[b].anreiseValue3.match(/(\d+)/g);
                }
                else {
                    this.parts[2] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue4) {
                    this.parts[3] = tables[a].tables[b].anreiseValue4.match(/(\d+)/g);
                }
                else {
                    this.parts[3] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue5) {
                    this.parts[4] = tables[a].tables[b].anreiseValue5.match(/(\d+)/g);
                }
                else {
                    this.parts[4] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue6) {
                    this.parts[5] = tables[a].tables[b].anreiseValue6.match(/(\d+)/g);
                }
                else {
                    this.parts[5] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue7) {
                    this.parts[6] = tables[a].tables[b].anreiseValue7.match(/(\d+)/g);
                }
                else {
                    this.parts[6] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue8) {
                    this.parts[7] = tables[a].tables[b].anreiseValue8.match(/(\d+)/g);
                }
                else {
                    this.parts[7] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue9) {
                    this.parts[8] = tables[a].tables[b].anreiseValue9.match(/(\d+)/g);
                }
                else {
                    this.parts[8] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue10) {
                    this.parts[9] = tables[a].tables[b].anreiseValue10.match(/(\d+)/g);
                }
                else {
                    this.parts[9] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue11) {
                    this.parts[10] = tables[a].tables[b].anreiseValue11.match(/(\d+)/g);
                }
                else {
                    this.parts[10] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue12) {
                    this.parts[11] = tables[a].tables[b].anreiseValue12.match(/(\d+)/g);
                }
                else {
                    this.parts[11] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue13) {
                    this.parts[12] = tables[a].tables[b].anreiseValue13.match(/(\d+)/g);
                }
                else {
                    this.parts[12] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue14) {
                    this.parts[13] = tables[a].tables[b].anreiseValue14.match(/(\d+)/g);
                }
                else {
                    this.parts[13] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue15) {
                    this.parts[14] = tables[a].tables[b].anreiseValue15.match(/(\d+)/g);
                }
                else {
                    this.parts[14] = "undefined";
                }
                for (var c = 0; c <= 14; c++) {
                    if (this.parts[c]) {
                        this.date[c] = new Date(2018, this.parts[c][1] - 1, this.parts[c][0]);
                        this.parsedDate[c] = String(this.date[c]).substring(0, 15);
                    }
                }
                // note parts[1]-1
                //console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
                // Mon May 31 2010 00:00:00
                //this.tablesRestaurant[j].anreiseValue
                var dateToday = String(this.dateTodayGenerated).substring(0, 15);
                console.log('Parsed Date --->: ' + this.parsedDate[0]);
                console.log('this.dateGenerated --->: ' + dateToday);
                if (dateToday.indexOf(this.parsedDate[0] || this.parsedDate[1] || this.parsedDate[2] || this.parsedDate[3] || this.parsedDate[4] || this.parsedDate[5] || this.parsedDate[6] || this.parsedDate[7] || this.parsedDate[8] || this.parsedDate[9] || this.parsedDate[10] || this.parsedDate[11] || this.parsedDate[12] || this.parsedDate[13] || this.parsedDate[14] || this.parsedDate[15]) !== -1) {
                    if (tables[a].department === "Panorama") {
                        this.tablesPanorama[b].bgColor = "#0a7a74";
                    }
                    else if (tables[a].department === "Wintergarten") {
                        this.tablesWintergarten[b].bgColor = "#0a7a74";
                    }
                    else if (tables[a].department === "Sonnberg-Zirbn") {
                        this.tablesSonnbergZirbn[b].bgColor = "#0a7a74";
                    }
                    else if (tables[a].department === "Restaurant") {
                        this.tablesRestaurant[b].bgColor = "#0a7a74";
                    }
                }
            }
        }
    };
    /*
      dispenseIfAbreise(tables) {
        console.log('=================================================dispenseIfAbreise');
        this.dateTodayGenerated = new Date();
    
        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
    
            if (tables[a].tables[b].abreiseValue) {
              console.log('tables[a].tables[b].abreiseValue: ' + b + " " + tables[a].tables[b].anreiseValue);
              this.parts[0] = tables[a].tables[b].abreiseValue.match(/(\d+)/g);} else {
              this.parts[0] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue2) {
              this.parts[1] = tables[a].tables[b].abreiseValue2.match(/(\d+)/g);}else {
              this.parts[1] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue3) {
              this.parts[2] = tables[a].tables[b].abreiseValue3.match(/(\d+)/g);}else {
              this.parts[2] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue4) {
              this.parts[3] = tables[a].tables[b].abreiseValue4.match(/(\d+)/g);}else {
              this.parts[3] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue4) {
              this.parts[4] = tables[a].tables[b].abreiseValue4.match(/(\d+)/g);}else {
              this.parts[4] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue4) {
              this.parts[5] = tables[a].tables[b].abreiseValue4.match(/(\d+)/g);}else {
              this.parts[5] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue7) {
              this.parts[6] = tables[a].tables[b].abreiseValue7.match(/(\d+)/g);}else {
              this.parts[6] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue8) {
              this.parts[7] = tables[a].tables[b].abreiseValue8.match(/(\d+)/g);}else {
              this.parts[7] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue9) {
              this.parts[8] = tables[a].tables[b].abreiseValue9.match(/(\d+)/g);}else {
              this.parts[8] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue10) {
              this.parts[9] = tables[a].tables[b].abreiseValue10.match(/(\d+)/g);}else {
              this.parts[9] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue11) {
              this.parts[10] = tables[a].tables[b].abreiseValue11.match(/(\d+)/g);}else {
              this.parts[10] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue12) {
              this.parts[11] = tables[a].tables[b].abreiseValue12.match(/(\d+)/g);}else {
              this.parts[11] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue13) {
              this.parts[12] = tables[a].tables[b].abreiseValue13.match(/(\d+)/g);}else {
              this.parts[12] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue14) {
              this.parts[13] = tables[a].tables[b].abreiseValue14.match(/(\d+)/g);}else {
              this.parts[13] = "undefined";
            }
            if (tables[a].tables[b].abreiseValue15) {
              this.parts[14] = tables[a].tables[b].abreiseValue15.match(/(\d+)/g);}else {
              this.parts[14] = "undefined";
            }
    
            for (let c = 0; c <= 14; c++) {
              if (this.parts[c]) {
                this.date[c] = new Date(2018, this.parts[c][1] - 1, this.parts[c][0]);
                this.parsedDate[c] = String(this.date[c]).substring(0, 15);
              }
            }
            // note parts[1]-1
            //console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
            // Mon May 31 2010 00:00:00
            //this.tablesRestaurant[j].anreiseValue
            let dateToday = String(this.dateTodayGenerated).substring(0, 15);
            console.log('Parsed Date --->: ' + this.parsedDate[0]);
            console.log('this.dateGenerated --->: ' + dateToday);
            if (dateToday.indexOf(this.parsedDate[0] || this.parsedDate[1] || this.parsedDate[2] || this.parsedDate[3] || this.parsedDate[4] || this.parsedDate[5] || this.parsedDate[6] || this.parsedDate[7] || this.parsedDate[8] || this.parsedDate[9] || this.parsedDate[10] || this.parsedDate[11] || this.parsedDate[12] || this.parsedDate[13] || this.parsedDate[14] || this.parsedDate[15]) !== -1) {
                this.departmentsComponent.occupy(tables[a].tables[b], b);
              }
            }
          }
        }
    */
    TischplanComponent.prototype.umsetzen = function () {
        var _this = this;
        var targetTable = this.quellTisch.zielTisch;
        var quellTischNumber = this.quellTisch.quellTisch;
        var targetTableNumber = Number(this.quellTisch.zielTisch);
        var quellTischNumberNumber = Number(this.quellTisch.quellTisch);
        console.log('targetTable' + targetTable);
        console.log('quellTischNumber' + quellTischNumber);
        var tableToMove = { department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty" };
        var j = 0;
        if (Number(this.quellTisch.quellTisch) >= 40 && Number(this.quellTisch.quellTisch) <= 59) {
            tableToMove.department = "Sonnberg-Zirbn";
            j = 0;
        }
        else if (Number(this.quellTisch.quellTisch) >= 60 && Number(this.quellTisch.quellTisch) <= 89) {
            tableToMove.department = "Panorama";
            j = 1;
        }
        else if (Number(this.quellTisch.quellTisch) >= 1 && Number(this.quellTisch.quellTisch) <= 24) {
            tableToMove.department = "Restaurant";
            j = 3;
        }
        else if (Number(this.quellTisch.quellTisch) >= 501 && Number(this.quellTisch.quellTisch) <= 524) {
            tableToMove.department = "Wintergarten";
            j = 2;
        }
        if (Number(this.quellTisch.zielTisch) >= 40 && Number(this.quellTisch.zielTisch) <= 59) {
            tableToMove.targetDepartment = "Sonnberg-Zirbn";
        }
        else if (Number(this.quellTisch.zielTisch) >= 60 && Number(this.quellTisch.zielTisch) <= 89) {
            tableToMove.targetDepartment = "Panorama";
        }
        else if (Number(this.quellTisch.zielTisch) >= 1 && Number(this.quellTisch.zielTisch) <= 24) {
            tableToMove.targetDepartment = "Restaurant";
        }
        else if (Number(this.quellTisch.zielTisch) >= 501 && Number(this.quellTisch.zielTisch) <= 524) {
            tableToMove.targetDepartment = "Wintergarten";
        }
        var index = 0;
        tableToMove.number = quellTischNumber;
        tableToMove.targetTable = targetTable;
        console.log(tableToMove);
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            for (var a = 0; a < tables.length; a++) {
                for (var b = 0; b < tables[a].tables.length; b++) {
                    if (tables[a].department === tableToMove.department) {
                        console.log("YEEEES BEFORE");
                        if (tables[a].tables[b].number === tableToMove.number) {
                            console.log("YEEEEEEEESSSSS AFFFTEEEER!!!");
                            console.log(tables[a].tables[b]);
                            _this.tableInformation.push(tables[a].tables[b]);
                            console.log(_this.tableInformation);
                            console.log('index: ' + index);
                            _this.tableInformation.push(tableToMove);
                        }
                    }
                }
            }
            for (var a = 0; a < tables.length; a++) {
                for (var b = 0; b < tables[a].tables.length; b++) {
                    if (tables[a].department === tableToMove.targetDepartment) {
                        if (tables[a].tables[b].number === tableToMove.targetTable) {
                            index = b;
                        }
                    }
                }
            }
            _this.departmentsComponent.addInformationToTable(_this.tableInformation, index);
            _this.departmentsComponent.occupyTableOnDrop(tableToMove, index);
            //this.departmentsComponent.umsetzen(this.tableInformation, index);
        });
        this.departmentsComponent.occupy(tableToMove, j);
    };
    return TischplanComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__print_print_component__["a" /* PrintComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__print_print_component__["a" /* PrintComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__print_print_component__["a" /* PrintComponent */]) === "function" && _a || Object)
], TischplanComponent.prototype, "printComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */]) === "function" && _b || Object)
], TischplanComponent.prototype, "departmentmenuComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__form_form_component__["a" /* FormComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__form_form_component__["a" /* FormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__form_form_component__["a" /* FormComponent */]) === "function" && _c || Object)
], TischplanComponent.prototype, "formComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_12__departments_departments_component__["a" /* DepartmentsComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_12__departments_departments_component__["a" /* DepartmentsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__departments_departments_component__["a" /* DepartmentsComponent */]) === "function" && _d || Object)
], TischplanComponent.prototype, "departmentsComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__im_haus_liste_im_haus_liste_component__["a" /* ImHausListeComponent */]),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__im_haus_liste_im_haus_liste_component__["a" /* ImHausListeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__im_haus_liste_im_haus_liste_component__["a" /* ImHausListeComponent */]) === "function" && _e || Object)
], TischplanComponent.prototype, "imHausListeComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */]),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */]) === "function" && _f || Object)
], TischplanComponent.prototype, "navigationComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__tableplan_tableplan_component__["a" /* TableplanComponent */]),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__tableplan_tableplan_component__["a" /* TableplanComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__tableplan_tableplan_component__["a" /* TableplanComponent */]) === "function" && _g || Object)
], TischplanComponent.prototype, "tableplanComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9__anreise_liste_anreise_liste_component__["a" /* AnreiseListeComponent */]),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__anreise_liste_anreise_liste_component__["a" /* AnreiseListeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__anreise_liste_anreise_liste_component__["a" /* AnreiseListeComponent */]) === "function" && _h || Object)
], TischplanComponent.prototype, "anreiseListeComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_10__traces_liste_traces_liste_component__["a" /* TracesListeComponent */]),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_10__traces_liste_traces_liste_component__["a" /* TracesListeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__traces_liste_traces_liste_component__["a" /* TracesListeComponent */]) === "function" && _j || Object)
], TischplanComponent.prototype, "tracesListeComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_11__upload_upload_component__["a" /* UploadComponent */]),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_11__upload_upload_component__["a" /* UploadComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__upload_upload_component__["a" /* UploadComponent */]) === "function" && _k || Object)
], TischplanComponent.prototype, "uploadComponent", void 0);
TischplanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tischplan',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_13__services_tables_service__["a" /* NavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_tables_service__["a" /* NavService */]) === "function" && _o || Object])
], TischplanComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=tischplan.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/traces-liste/traces-liste.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let tracesListeElement of tracesListeElemente; let t = index;\">\n      <div class='cards-container' id='container3' [dragula]='\"evented-bag\"' >\n        <div class=\"card\" id=\"card3\" [ngStyle]=\"{'background-color': '#' + tracesListeElement.bgColor}\">\n          <p><b>Zimmernummer:</b> {{tracesListeElement.zimmernummer}}<br>\n            <b>Name:</b> {{tracesListeElement.name}}<br>\n            <b>Personen:</b> {{tracesListeElement.personenAnzahl}}<br>\n            <b>Anreise:</b> {{tracesListeElement.anreise}}<br>\n            <b>Abreise:</b> {{tracesListeElement.abreise}}<br>\n            <b>Trace:</b> {{tracesListeElement.trace}}<br>\n          </p>\n          <div *ngIf=\"tracesListeElement.bgColor === '0a7a74'\">\n            <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/traces-liste/traces-liste.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracesListeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TracesListeComponent = (function () {
    function TracesListeComponent(tischplanService) {
        this.tischplanService = tischplanService;
    }
    TracesListeComponent.prototype.ngOnInit = function () {
    };
    TracesListeComponent.prototype.updateTracesListeElement = function (informationElements2) {
        this.tischplanService.updateTracesListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateTracesListeElement response: ');
            console.log(response);
        });
    };
    return TracesListeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tracesListeElemente'),
    __metadata("design:type", Array)
], TracesListeComponent.prototype, "tracesListeElemente", void 0);
TracesListeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-traces-liste',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/traces-liste/traces-liste.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _a || Object])
], TracesListeComponent);

var _a;
//# sourceMappingURL=traces-liste.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"csv\"  style=\" width: 100%; height: 100px;\"><h3 style=\"color: #0a7a74\">CSV-Datei hochladen</h3>\n  <div class=\"line\"></div>\n  <form class=\"SendMessage\" (submit)=\"sendMessage($event)\">\n    <input type=\"file\" style=\"float: left; margin-top: 10px; color: #0a7a74\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n    <button style=\" background-color: #0a7a74; float: right; color:  white\" type=\"button\" class=\"btn btn-send\" (click)=\"upload()\">CSV HOCHLADEN</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadComponent = (function () {
    function UploadComponent(http, _flashMessagesService) {
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.filesToUpload = [];
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    UploadComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append('uploads[]', files[0], files[0]['name']);
        this.http.post('/upload', formData)
            .map(function (files) { return files.json(); }).map(function (res) {
            // 1st parameter is a flash message text
            // 2nd parameter is optional. You can pass object with options.
            return _this._flashMessagesService.show('Erfolgreich CSV Datei hochgeladen', { cssClass: 'alert-success', timeout: 10000 });
        })
            .subscribe(function (files) { return console.log('files', files); });
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/upload/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], UploadComponent);

var _a, _b;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/tables.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NavService = (function () {
    function NavService() {
        // Observable navItem source
        this._navItemSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        // Observable navItem stream
        this.navItem$ = this._navItemSource.asObservable();
    }
    // service command
    NavService.prototype.changeNav = function (tables) {
        console.log('number in service:');
        console.log(tables);
        this._navItemSource.next(tables);
    };
    return NavService;
}());
NavService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NavService);

//# sourceMappingURL=tables.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/tischplan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TischplanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TischplanService = (function () {
    function TischplanService(http) {
        this.http = http;
        console.log('Task service initialized!');
    }
    TischplanService.prototype.getImHausListe = function () {
        return this.http.get('imHausListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getAnreiseListe = function () {
        return this.http.get('anreiseListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getTracesListe = function () {
        return this.http.get('tracesListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getTables = function () {
        return this.http.get('tables')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getInformationElements = function () {
        return this.http.get('information')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.occupyTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('occupyTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.moveTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('moveTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.dispenseTable = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('dispenseTable', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.removePlaceholder = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removePlaceholder', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addPlaceholder = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addPlaceholder', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addInformationToTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addInformationToTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformation = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToTables', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformationToBox = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToBox', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.deleteInformationElement = function (informationElement) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('deleteInformationElement', informationElement, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateImHausListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateImHausListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateAnreiseListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateAnreiseListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateTracesListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateTracesListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformationToNotizBlock = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newNotiz', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getNotizElements = function () {
        return this.http.get('getNotiz')
            .map(function (res) { return res.json(); });
    };
    return TischplanService;
}());
TischplanService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TischplanService);

var _a;
//# sourceMappingURL=tischplan.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map