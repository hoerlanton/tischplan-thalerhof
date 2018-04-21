webpackJsonp(["main"],{

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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
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
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_digital_table_plan_main_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_digital_table_plan_print_print_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/print/print.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_digital_table_plan_departments_wintergarten_wintergarten_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/wintergarten/wintergarten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_digital_table_plan_departments_restaurant_restaurant_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/restaurant/restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_digital_table_plan_departments_panorama_panorama_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/panorama/panorama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_digital_table_plan_departments_sonnberg_zirbn_sonnberg_zirbn_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/sonnberg-zirbn/sonnberg-zirbn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_digital_table_plan_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_digital_table_plan_form_form_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_digital_table_plan_tableplan_tableplan_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/tableplan/tableplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_digital_table_plan_departmentmenu_departmentmenu_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_digital_table_plan_im_haus_list_im_haus_list_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/im-haus-list/im-haus-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_digital_table_plan_departments_departments_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_digital_table_plan_departments_all_all_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/all/all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_digital_table_plan_login_login_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_digital_table_plan_register_register_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_digital_table_plan_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_24__components_digital_table_plan_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_24__components_digital_table_plan_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__components_digital_table_plan_main_component__["a" /* MainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_19__components_digital_table_plan_departments_departments_component__["a" /* DepartmentsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_25__components_digital_table_plan_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_26__components_digital_table_plan_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_digital_table_plan_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_digital_table_plan_print_print_component__["a" /* PrintComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_digital_table_plan_departments_wintergarten_wintergarten_component__["a" /* WintergartenComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_digital_table_plan_departments_restaurant_restaurant_component__["a" /* RestaurantComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_digital_table_plan_departments_panorama_panorama_component__["a" /* PanoramaComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_digital_table_plan_departments_sonnberg_zirbn_sonnberg_zirbn_component__["a" /* SonnbergZirbnComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_digital_table_plan_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_digital_table_plan_form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_digital_table_plan_tableplan_tableplan_component__["a" /* TableplanComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_digital_table_plan_departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_digital_table_plan_im_haus_list_im_haus_list_component__["a" /* ImHausListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_digital_table_plan_departments_departments_component__["a" /* DepartmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_digital_table_plan_departments_all_all_component__["a" /* AllComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_digital_table_plan_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_digital_table_plan_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_digital_table_plan_profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_8_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_21_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_22__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_23__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_23__angular_router__["b" /* RouterModule */].forChild(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_28__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_29__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  margin: 8px 0px 0px 0px;\n  text-align: center;\n}\n\n.dropdown-menu .divider {\n  margin: 0px;\n}\n\n.dropdown-menu {\n  overflow: auto;\n  margin: 0 0 0 20px;\n  width: 200px;\n}\n\n.row4 {\n  margin-top: 90px;\n  min-height: 40px;\n  z-index: 1;\n}\n\n.showSonnbergZirbn, .showPanorama, .showRestaurant, .showWintergarten, .showAll {\n  padding: 10px;\n}\n\n\n\n.col-xs-3 {\n  min-height: 40px;\n  width: 21%;\n  border-radius: 3px;\n}\n\n.btn-group-departments {\n  height: 45px;\n  width: auto;\n  margin: 0px 10px 5px 0px;\n  float: left;\n  text-align: right;\n  display:table-cell;\n  vertical-align:middle;\n}\n\n.abteilungsButton {\n  color: #FFFFFF;\n  border: none;\n}\n\n@media (min-width: 500px) {\n  .row4 {\n    margin-top: 60px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .btn-default {\n    display: inline-block;\n  }\n  .btn-send {\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row4\">\n  <div class=\"col-md-3 col-xs-3\">\n  <div class=\"btn-group-departments\" dropdown>\n  <button dropdownToggle type=\"button\" class=\"abteilungsButton\" [ngStyle]=\"{'background-color': '#' + buttonBgColorDropdownToggle}\"   (mouseenter)=\"mouseEnterDropdownToggle()\"  (mouseleave)=\"mouseLeaveDropdownToggle()\">\n    <div *ngIf=\"showDepartments\">\n     Abteilungen <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n    </div>\n    <div *ngIf=\"showAllBool\">\n      Alle <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n    </div>\n    <div *ngIf=\"showSonnbergZirbnBool\">\n      Sonnberg-<br>Zirbn <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n    </div>\n    <div *ngIf=\"showWintergartenBool\">\n       Wintergarten <br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n    </div>\n    <div *ngIf=\"showRestaurantBool\">\n      Restaurant <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n    </div>\n    <div *ngIf=\"showPanoramaBool\">\n       Panorama <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n    </div>\n  </button>\n  <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n      <li role=\"menuitem\" class=\"showSonnbergZirbn\"  (click)=\"showSonnbergZirbn()\" (mouseenter)=\"mouseEnterSonnbergZirbn()\"  (mouseleave)=\"mouseLeaveSonnbergZirbn()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor1}\">\n        <p [ngStyle]=\"{'color': '#' + fontColor1}\">Sonnberg-Zirbn</p>\n      </li>\n    <li class=\"divider dropdown-divider\"></li>\n    <li role=\"menuitem\" class=\"showPanorama\"  (click)=\"showPanorama()\" (mouseenter)=\"mouseEnterPanorama()\"  (mouseleave)=\"mouseLeavePanorama()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor2}\">\n        <p [ngStyle]=\"{'color': '#' + fontColor2}\">Panorama</p>\n      </li>\n    <li class=\"divider dropdown-divider\"></li>\n    <li role=\"menuitem\" class=\"showRestaurant\" (click)=\"showRestaurant()\" (mouseenter)=\"mouseEnterRestaurant()\"  (mouseleave)=\"mouseLeaveRestaurant()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor3}\">\n        <p [ngStyle]=\"{'color': '#' + fontColor3}\">Restaurant</p>\n      </li>\n    <li class=\"divider dropdown-divider\"></li>\n    <li role=\"menuitem\" class=\"showWintergarten\" (click)=\"showWintergarten()\" (mouseenter)=\"mouseEnterWintergarten()\"  (mouseleave)=\"mouseLeaveWintergarten()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor4}\">\n        <p [ngStyle]=\"{'color': '#' + fontColor4}\">Wintergarten</p>\n      </li>\n    <li class=\"divider dropdown-divider\"></li>\n    <li role=\"menuitem\" class=\"showAll\" (click)=\"showAll()\" (mouseenter)=\"mouseEnterAll()\"  (mouseleave)=\"mouseLeaveAll()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor5}\">\n        <p [ngStyle]=\"{'color': '#' + fontColor5}\">Alle</p>\n      </li>\n    <li class=\"divider dropdown-divider\"></li>\n  </ul>\n</div>\n</div>\n  <div class=\"col-md-3 col-xs-3\" (click)=\"showInfoForm()\"  (mouseenter)=\"mouseEnterShowInfoForm()\"  (mouseleave)=\"mouseLeaveShowInfoForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorInfoForm}\">\n    <p [ngStyle]=\"{'color': '#' + fontColorInfoForm}\">Trace</p>\n  </div>\n  <div class=\"col-md-3 col-xs-3\"  (click)=\"showNoteForm()\"  (mouseenter)=\"mouseEnterShowNoteForm()\"  (mouseleave)=\"mouseLeaveShowNoteForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorNoteForm}\">\n    <p [ngStyle]=\"{'color': '#' + fontColorNoteForm}\">Notiz</p>\n  </div>\n  <div class=\"col-md-3 col-xs-3\" style=\"padding-left: 5px\" (click)=\"showTablePlan()\"  (mouseenter)=\"mouseEnterShowTablePlan()\"  (mouseleave)=\"mouseLeaveShowTablePlan()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorShowTablePlan}\">\n    <p  [ngStyle]=\"{'color': '#' + fontColorShowTablePlan}\">Tischplan</p>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.ts":
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
        this.showAllBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showNoteFormBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showInfoFormBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showTablePlanBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAllBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showAllBool", void 0);
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
], DepartmentmenuComponent.prototype, "showAllBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColorInfoForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorInfoForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColorInfoForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorInfoForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColorNoteForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorNoteForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColorNoteForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorNoteForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColorShowTablePlan'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorShowTablePlan", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColorShowTablePlan'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorShowTablePlan", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showNoteFormBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showNoteFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showInfoFormBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablePlanBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], DepartmentmenuComponent.prototype, "showNoteFormBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], DepartmentmenuComponent.prototype, "showInfoFormBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _h || Object)
], DepartmentmenuComponent.prototype, "showTablePlanBoolChange", void 0);
DepartmentmenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-departmentmenu',
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DepartmentmenuComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=departmentmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departments/all/all.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showAllBool\">\n  <div *ngFor=\"let table of tables; let j = index;\">\n      <h4><b> Tisch:</b>{{table.number}} </h4><br>\n      <div class='cards-container' id='containerTables' [ngStyle]=\"{'background-color': + table.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + table.bgColor}\">\n          <div *ngIf=\"table.isOccupied === 'true'\">\n            <div [style.border]=\"getStyle(table.traceValue)\">\n              <div *ngIf=\"table.nameValue\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Zimmernummer:</b> {{table.roomNumberValue}}<br>\n                  <b> Name:</b> {{table.nameValue}}<br>\n                  <b> Anreise Datum:</b> {{table.arrivalValue}}<br>\n                  <b> Abreise Datum:</b> {{table.departureValue}}<br>\n                  <b> Personenanzahl:</b> {{table.numberOfPersonsValue}}<br>\n                  <b> Nation:</b> {{table.nationValue}}<br>\n                  <b> Sprache:</b> {{table.languageValue}}<br>\n                  <b> Preis Typ:</b> {{table.typeOfPriceValue}}<br>\n                  <b> Reisebüro:</b> {{table.sourceValue}}<br>\n                  <b> Kategorie:</b> {{table.categoryValue}}<br>\n                  <b> Notiz1:</b> {{table.note1Value}}<br>\n                  <b> Notiz2:</b> {{table.note2Value}}<br>\n                  <b> Trace:</b> {{table.traceValue}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"table.newTraceName\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{table.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{table.newTraceText}} <br> <b> Tischnummer: </b>{{table.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{table.newTraceEmployee}} <br> <b> Name: </b>{{table.newTraceName}} <br> <b> Datum: </b>{{table.newTraceDate}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"table.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"tables\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px; text-align: center\">Listen-Element hier hin ziehen! <span>{{table.number}} {{table.department}} {{j}}</span></p>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departments/all/all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllComponent; });
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


var AllComponent = (function () {
    function AllComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log("this.tables in allcomponent");
        //console.log(this.tables);
        console.log("this.tablesTempDeparture in allcomponent");
        console.log(this.tablesTempDeparture);
    }
    AllComponent.prototype.ngOnInit = function () {
    };
    AllComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    AllComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    AllComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (Array.isArray(tables) && tables.length && term && term.length) {
            this.tables = tables.filter(function (item) {
                console.log(item);
                var keys = Object.keys(item);
                console.log(keys);
                if (Array.isArray(keys) && keys.length) {
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var key = keys_1[_i];
                        if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                            return true;
                        }
                    }
                    return false;
                }
                else {
                    return false;
                }
            });
        }
        else {
            return tables;
        }
    };
    return AllComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAllBool'),
    __metadata("design:type", Boolean)
], AllComponent.prototype, "showAllBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], AllComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tables'),
    __metadata("design:type", Object)
], AllComponent.prototype, "tables", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesTempDeparture'),
    __metadata("design:type", Object)
], AllComponent.prototype, "tablesTempDeparture", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AllComponent.prototype, "occupied", void 0);
AllComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter',
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-all',
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/all/all.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AllComponent);

var _a;
//# sourceMappingURL=all.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departments/departments.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sonnberg-zirbn [term]=\"term\" [tablesSonnbergZirbn]=\"tablesSonnbergZirbn\" [showSonnbergZirbnBool]=\"showSonnbergZirbnBool\" (occupied)=\"occupied($event)\"></app-sonnberg-zirbn>\n<app-restaurant [term]=\"term\" [tablesRestaurant]=\"tablesRestaurant\" [showRestaurantBool]=\"showRestaurantBool\"  (occupied)=\"occupied($event)\"></app-restaurant>\n<app-panorama [term]=\"term\" [tablesPanorama]=\"tablesPanorama\" [showPanoramaBool]=\"showPanoramaBool\"  (occupied)=\"occupied($event)\"></app-panorama>\n<app-wintergarten [term]=\"term\" [tablesWintergarten]=\"tablesWintergarten\" [showWintergartenBool]=\"showWintergartenBool\"  (occupied)=\"occupied($event)\"></app-wintergarten>\n<app-all [term]=\"term\" [tables]=\"tables\" [tablesTempDeparture]=\"tablesTempDeparture\" [showAllBool]=\"showAllBool\" (occupied)=\"occupied($event)\"></app-all>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departments/departments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wintergarten_wintergarten_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/wintergarten/wintergarten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_all_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/all/all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panorama_panorama_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/panorama/panorama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restaurant_restaurant_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/restaurant/restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sonnberg_zirbn_sonnberg_zirbn_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/sonnberg-zirbn/sonnberg-zirbn.component.ts");
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
    function DepartmentsComponent(mainService) {
        this.mainService = mainService;
        this.dispensedSonnbergZirbn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedRestaurant = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedWintergarten = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedPanorama = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateAzList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateImHausListElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
    DepartmentsComponent.prototype.changeBgColorIfArrival = function () {
        var _this = this;
        setTimeout(function () {
            _this.tablesChangeBgColorIfArrival = _this.tablesTempDeparture;
            //console.log('changeBgColorIfArrival calld');
            //console.log(this.tablesChangeBgColorIfArrival);
            _this.dateTodayGenerated = new Date();
            _this.parts = [];
            _this.parsedDate = [];
            _this.date = [];
            for (var a = 0; a < _this.tablesChangeBgColorIfArrival.length; a++) {
                for (var b = 0; b < _this.tablesChangeBgColorIfArrival[a].tables.length; b++) {
                    if (_this.tablesChangeBgColorIfArrival[a].tables[b].groups) {
                        for (var c = 0; c < _this.tablesChangeBgColorIfArrival[a].tables[b].groups.length; c++) {
                            if (_this.tablesChangeBgColorIfArrival[a].tables[b].groups[c].arrivalValue) {
                                //console.log('tablesChangeBgColorIfArrival[a].tables[b].groups[c].arrivalValue: ' + c + " " + this.tablesChangeBgColorIfArrival[a].tables[b].groups[c].arrivalValue);
                                _this.parts[0] = _this.tablesChangeBgColorIfArrival[a].tables[b].groups[c].arrivalValue.match(/(\d+)/g);
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
                            // this.tablesRestaurant[j].arrivalValue
                            var dateToday = String(_this.dateTodayGenerated).substring(0, 15);
                            //console.log('Parsed Date --->: ' + this.parsedDate[0]);
                            //console.log('this.dateGenerated --->: ' + dateToday);
                            if (dateToday.indexOf(_this.parsedDate[0]) !== -1) {
                                if (_this.tablesChangeBgColorIfArrival[a].department === "Panorama") {
                                    //console.log(this.tablesPanorama);
                                    if (_this.tablesPanorama[b]) {
                                        //console.log(this.tablesPanorama[b]);
                                        _this.tablesPanorama[b].bgColor = "#0a7a74";
                                    }
                                }
                                else if (_this.tablesChangeBgColorIfArrival[a].department === "Wintergarten") {
                                    if (_this.tablesWintergarten[b]) {
                                        _this.tablesWintergarten[b].bgColor = "#0a7a74";
                                    }
                                }
                                else if (_this.tablesChangeBgColorIfArrival[a].department === "Sonnberg-Zirbn") {
                                    if (_this.tablesSonnbergZirbn[b]) {
                                        _this.tablesSonnbergZirbn[b].bgColor = "#0a7a74";
                                    }
                                }
                                else if (_this.tablesChangeBgColorIfArrival[a].department === "Restaurant") {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesPanorama", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tables'),
    __metadata("design:type", Object)
], DepartmentsComponent.prototype, "tables", void 0);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAllBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showAllBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DepartmentsComponent.prototype, "tablesTempDeparture", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], DepartmentsComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__all_all_component__["a" /* AllComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__all_all_component__["a" /* AllComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__all_all_component__["a" /* AllComponent */]) === "function" && _a || Object)
], DepartmentsComponent.prototype, "allComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__panorama_panorama_component__["a" /* PanoramaComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__panorama_panorama_component__["a" /* PanoramaComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__panorama_panorama_component__["a" /* PanoramaComponent */]) === "function" && _b || Object)
], DepartmentsComponent.prototype, "panoramaComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__restaurant_restaurant_component__["a" /* RestaurantComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__restaurant_restaurant_component__["a" /* RestaurantComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__restaurant_restaurant_component__["a" /* RestaurantComponent */]) === "function" && _c || Object)
], DepartmentsComponent.prototype, "restaurantComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__wintergarten_wintergarten_component__["a" /* WintergartenComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__wintergarten_wintergarten_component__["a" /* WintergartenComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__wintergarten_wintergarten_component__["a" /* WintergartenComponent */]) === "function" && _d || Object)
], DepartmentsComponent.prototype, "wintergartenComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__sonnberg_zirbn_sonnberg_zirbn_component__["a" /* SonnbergZirbnComponent */]),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__sonnberg_zirbn_sonnberg_zirbn_component__["a" /* SonnbergZirbnComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__sonnberg_zirbn_sonnberg_zirbn_component__["a" /* SonnbergZirbnComponent */]) === "function" && _e || Object)
], DepartmentsComponent.prototype, "sonnbergZirbnComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], DepartmentsComponent.prototype, "dispensedSonnbergZirbn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], DepartmentsComponent.prototype, "dispensedRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _h || Object)
], DepartmentsComponent.prototype, "dispensedWintergarten", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _j || Object)
], DepartmentsComponent.prototype, "dispensedPanorama", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _k || Object)
], DepartmentsComponent.prototype, "updateAzList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _l || Object)
], DepartmentsComponent.prototype, "updateImHausListElement", void 0);
DepartmentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-departments',
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/departments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */]) === "function" && _m || Object])
], DepartmentsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=departments.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departments/panorama/panorama.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showPanoramaBool\">\n  <div *ngFor=\"let tablePanorama of tablesPanorama; let j = index;\">\n    <div *ngIf=\"tablesPanorama[j] !== tablesPanorama[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tablePanorama, j)\">{{tablePanorama.isOccupied === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tablePanorama.number}} </h4><br>\n      <div class='cards-container' id='containerPanorama' [ngStyle]=\"{'background-color': + tablePanorama.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tablePanorama.bgColor}\">\n          <div *ngIf=\"tablePanorama.isOccupied === 'true'\">\n            <div *ngFor=\"let group of tablePanorama.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.traceValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Zimmernummer:</b> {{group.roomNumberValue}}<br>\n                    <b> Anreise Datum:</b> {{group.arrivalValue}}<br>\n                    <b> Abreise Datum:</b> {{group.departureValue}}<br>\n                    <b> Personenanzahl:</b> {{group.numberOfPersonsValue}}<br>\n                    <b> Nation:</b> {{group.nationValue}}<br>\n                    <b> Sprache:</b> {{group.languageValue}}<br>\n                    <b> Preis Typ:</b> {{group.typeOfPriceValue}}<br>\n                    <b> Reisebüro:</b> {{group.sourceValue}}<br>\n                    <b> Kategorie:</b> {{group.categoryValue}}<br>\n                    <b> Notiz1:</b> {{group.note1Value}}<br>\n                    <b> Notiz2:</b> {{group.note2Value}}<br>\n                    <b> Trace:</b> {{group.traceValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tablePanorama.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Panorama\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px; text-align: center\"> Listen-Element hier hin ziehen! {{tablePanorama.number}} {{tablePanorama.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departments/panorama/panorama.component.ts":
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
        //console.log(j);
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    PanoramaComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesPanorama = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesPanorama = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
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
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/panorama/panorama.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PanoramaComponent);

var _a;
//# sourceMappingURL=panorama.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departments/restaurant/restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showRestaurantBool\">\n  <div *ngFor=\"let tableRestaurant of tablesRestaurant; let j = index;\">\n    <div *ngIf=\"tablesRestaurant[j] !== tablesRestaurant[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableRestaurant, j)\">{{tableRestaurant.isOccupied === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableRestaurant.number}} </h4><br>\n      <div class='cards-container' id='containerRestaurant' [ngStyle]=\"{'background-color': + tableRestaurant.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableRestaurant.bgColor}\">\n          <div *ngIf=\"tableRestaurant.isOccupied === 'true'\">\n            <div *ngFor=\"let group of tableRestaurant.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.traceValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Zimmernummer:</b> {{group.roomNumberValue}}<br>\n                    <b> Anreise Datum:</b> {{group.arrivalValue}}<br>\n                    <b> Abreise Datum:</b> {{group.departureValue}}<br>\n                    <b> Personenanzahl:</b> {{group.numberOfPersonsValue}}<br>\n                    <b> Nation:</b> {{group.nationValue}}<br>\n                    <b> Sprache:</b> {{group.languageValue}}<br>\n                    <b> Preis Typ:</b> {{group.typeOfPriceValue}}<br>\n                    <b> Reisebüro:</b> {{group.sourceValue}}<br>\n                    <b> Kategorie:</b> {{group.categoryValue}}<br>\n                    <b> Notiz1:</b> {{group.note1Value}}<br>\n                    <b> Notiz2:</b> {{group.note2Value}}<br>\n                    <b> Trace:</b> {{group.traceValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableRestaurant.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Restaurant\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px;\">Listen-Element hier hin ziehen! {{tableRestaurant.number}} {{tableRestaurant.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departments/restaurant/restaurant.component.ts":
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
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    RestaurantComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesRestaurant = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesRestaurant = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
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
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/restaurant/restaurant.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RestaurantComponent);

var _a;
//# sourceMappingURL=restaurant.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departments/sonnberg-zirbn/sonnberg-zirbn.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showSonnbergZirbnBool\">\n  <div *ngFor=\"let tableSonnbergZirbn of tablesSonnbergZirbn; let j = index;\">\n    <div *ngIf=\"tablesSonnbergZirbn[j] !== tablesSonnbergZirbn[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableSonnbergZirbn, j)\">{{tableSonnbergZirbn.isOccupied === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableSonnbergZirbn.number}} </h4><br>\n      <div class='cards-container' id='containerSonnbergZirbn' [ngStyle]=\"{'background-color': + tableSonnbergZirbn.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableSonnbergZirbn.bgColor}\">\n          <div *ngIf=\"tableSonnbergZirbn.isOccupied === 'true'\">\n            <div *ngFor=\"let group of tableSonnbergZirbn.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.traceValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Zimmernummer:</b> {{group.roomNumberValue}}<br>\n                    <b> Anreise Datum:</b> {{group.arrivalValue}}<br>\n                    <b> Abreise Datum:</b> {{group.departureValue}}<br>\n                    <b> Personenanzahl:</b> {{group.numberOfPersonsValue}}<br>\n                    <b> Nation:</b> {{group.nationValue}}<br>\n                    <b> Sprache:</b> {{group.languageValue}}<br>\n                    <b> Preis Typ:</b> {{group.typeOfPriceValue}}<br>\n                    <b> Reisebüro:</b> {{group.sourceValue}}<br>\n                    <b> Kategorie:</b> {{group.categoryValue}}<br>\n                    <b> Notiz1:</b> {{group.note1Value}}<br>\n                    <b> Notiz2:</b> {{group.note2Value}}<br>\n                    <b> Trace:</b> {{group.traceValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableSonnbergZirbn.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Sonnberg-Zirbn\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px;\">Listen-Element hier hin ziehen! {{tableSonnbergZirbn.number}} {{tableSonnbergZirbn.department}} {{j}} </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departments/sonnberg-zirbn/sonnberg-zirbn.component.ts":
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
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    SonnbergZirbnComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesSonnbergZirbn = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesSonnbergZirbn = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
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
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/sonnberg-zirbn/sonnberg-zirbn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SonnbergZirbnComponent);

var _a;
//# sourceMappingURL=sonnberg-zirbn.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departments/wintergarten/wintergarten.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showWintergartenBool\">\n  <div *ngFor=\"let tableWintergarten of tablesWintergarten; let j = index;\">\n    <div *ngIf=\"tablesWintergarten[j] !== tablesWintergarten[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableWintergarten, j)\">{{tableWintergarten.isOccupied === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableWintergarten.number}} </h4><br>\n      <div class='cards-container' id='containerWintergarten' [ngStyle]=\"{'background-color': + tableWintergarten.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableWintergarten.bgColor}\">\n          <div *ngIf=\"tableWintergarten.isOccupied === 'true'\">\n            <div *ngFor=\"let group of tableWintergarten.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.traceValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Zimmernummer:</b> {{group.roomNumberValue}}<br>\n                    <b> Anreise Datum:</b> {{group.arrivalValue}}<br>\n                    <b> Abreise Datum:</b> {{group.departureValue}}<br>\n                    <b> Personenanzahl:</b> {{group.numberOfPersonsValue}}<br>\n                    <b> Nation:</b> {{group.nationValue}}<br>\n                    <b> Sprache:</b> {{group.languageValue}}<br>\n                    <b> Preis Typ:</b> {{group.typeOfPriceValue}}<br>\n                    <b> Reisebüro:</b> {{group.sourceValue}}<br>\n                    <b> Kategorie:</b> {{group.categoryValue}}<br>\n                    <b> Notiz1:</b> {{group.note1Value}}<br>\n                    <b> Notiz2:</b> {{group.note2Value}}<br>\n                    <b> Trace:</b> {{group.traceValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableWintergarten.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Wintergarten\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableWintergarten.number}} {{tableWintergarten.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/departments/wintergarten/wintergarten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WintergartenComponent; });
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

var WintergartenComponent = (function () {
    function WintergartenComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    WintergartenComponent.prototype.ngOnInit = function () {
    };
    WintergartenComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    WintergartenComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    WintergartenComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesWintergarten = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesWintergarten = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
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
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/wintergarten/wintergarten.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WintergartenComponent);

var _a;
//# sourceMappingURL=wintergarten.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showNoteFormBool\">\n  <div *ngIf=\"showAllBool === false\">\n    <div class=\"note\">\n      <div *ngIf=\"showPanoramaBool\">\n        <div *ngFor=\"let noteElement of noteElements\" >\n          <div *ngIf=\"noteElement.departmentNoteInput === 'Panorama'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p style=\"color: white\"> <b> Note: </b>{{noteElement.noteInput === '' ? \"Keine Notiz\" : noteElement.noteInput}} <br><b>  Datum: </b> {{noteElement.noteInput === '' ? \"\" : noteElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showRestaurantBool\">\n        <div *ngFor=\"let noteElement of noteElements\">\n          <div *ngIf=\"noteElement.departmentNoteInput === 'Restaurant'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p style=\"color: white\"> <b> Note: </b>{{noteElement.noteInput === '' ? \"Keine Notiz\" : noteElement.noteInput}} <br> <b> Datum: </b> {{noteElement.noteInput === '' ? \"\" : noteElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showSonnbergZirbnBool\">\n        <div *ngFor=\"let noteElement of noteElements\">\n          <div *ngIf=\"noteElement.departmentNoteInput === 'Sonnberg-Zirbn'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p style=\"color: white\"> <b> Note: </b>{{noteElement.noteInput === '' ? \"Keine Notiz\" : noteElement.noteInput}}<br> <b> Datum: </b>{{noteElement.noteInput === '' ? \"\" : noteElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showWintergartenBool\">\n        <div *ngFor=\"let noteElement of noteElements\">\n          <div *ngIf=\"noteElement.departmentNoteInput === 'Wintergarten'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p style=\"color: white\"> <b> Note: </b>{{noteElement.noteInput === '' ? \"Keine Notiz\" : noteElement.noteInput}} <br> <b> Datum: </b> {{noteElement.noteInput === '' ? \"\" : noteElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <form class=\"SendNote\"  #myForm=\"ngForm\" (submit)=\"sendNote($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\" style=\"min-height: 250px\">\n        <div class=\"col-lg-12\">\n          <label for=\"department\" style=\"padding-bottom: 20px; color: #FFFFFF\">Abteilung</label>\n          <select class=\"form-control\"  id=\"department\" style=\"margin-bottom: 10px; width: 100%\" required [(ngModel)]=\"departmentNoteInput\" placeholder=\"Abteilung auswählen\" name=\"departmentNoteInput\">\n            <option *ngFor=\"let department of departments\"\n                    [value]=\"department\">\n              {{department}}\n            </option>\n          </select>\n        </div>\n        <div class=\"col-lg-12\">\n                <textarea id=\"noteText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"noteInput\" placeholder=\"Note hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px;\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n<div *ngIf=\"showInfoFormBool\">\n  <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"sendInformation($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"name\" [(ngModel)]=\"nameTraceInput\" name=\"Name\" placeholder=\"Name\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"roomNumber\" [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Zimmer Nummer\">\n        </div>\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"tableNumber\" [(ngModel)]=\"tableNumber\" name=\"tableNumber\" placeholder=\"Table Nummer\">\n          <select  class=\"form-control\" style=\"margin-top: 20px\" id=\"employee\" [(ngModel)]=\"employee\" name=\"employee\" placeholder=\"Mitarbeiter\">\n            <option *ngFor=\"let employee of employees\"\n                    [value]=\"employee\">\n              {{employee}}\n            </option>\n          </select>\n        </div>\n        <div class=\"col-lg-12 col-xs-12\">\n                <textarea id=\"informationText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"title\" placeholder=\"Trace hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px;\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
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
    function FormComponent(mainService, _flashMessagesService) {
        this.mainService = mainService;
        this._flashMessagesService = _flashMessagesService;
        this.newInformationElements = [];
        this.noteResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeColorIfArrivalExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.parts = [];
        this.departments = [];
        this.employees = [];
        this.departments = ["Sonnberg-Zirbn", "Restaurant", "Wintergarten", "Panorama"];
        this.employees = ["Alexandra Lopion", "Julia Ackermann", "Torsten Streit", "Sabrina Schrötwieser", "Loreen Kumpfert", "Aylin Fiedler", "Julia Laue", "Richard Klöffel", "Tino Deisenroth", "Stefan Scheiber", "Dominic Mugambi", "Ralf Rohsmann", "Florian Thurner"];
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
            this.mainService.sendInformation(newInformation)
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
            this.changeColorIfArrivalExport.emit();
        }
        this.mainService.sendInformationToBox(newInformation)
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
    FormComponent.prototype.sendNote = function (event) {
        var _this = this;
        event.preventDefault();
        this.noteDate = String(new Date()).substring(0, 15);
        console.log(this.noteDate);
        var newNote = {
            noteInput: this.noteInput,
            departmentNoteInput: this.departmentNoteInput,
            date: this.noteDate
        };
        if (newNote.noteInput === undefined) {
            this._flashMessagesService.show('Die Nachricht ist leer ... ', { cssClass: 'alert-danger', timeout: 20000 });
            return;
        }
        else {
            this._flashMessagesService.show('Erfolgreich Information gespeichert ... ', { cssClass: 'alert-success', timeout: 20000 });
        }
        this.mainService.sendInformationToNoteBlock(newNote)
            .subscribe(function (Note) {
            //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
            console.log('Information: ' + JSON.stringify(Note));
            //console.log(Information.tables[0]);
            //console.log("------");
            //console.log(Information[0].tables);
            _this.noteResponse.emit(Note);
            _this.noteElements = Note;
            console.log(_this.noteElements);
            //console.log('this.newInformationElements' + this.newInformationElements);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showNoteFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showNoteFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('noteElements'),
    __metadata("design:type", Object)
], FormComponent.prototype, "noteElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWintergartenBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showSonnbergZirbnBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showSonnbergZirbnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showPanoramaBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showRestaurantBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showRestaurantBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAllBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showAllBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FormComponent.prototype, "noteResponse", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], FormComponent.prototype, "changeColorIfArrivalExport", void 0);
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], FormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/im-haus-list/im-haus-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74;\">Im-Haus</h3>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListElement of imHausListElemente\">\n      <div *ngIf=\"imHausListElement.trace === '-' && !imHausListElement.isArrival\">\n        <div class='cards-container' id='container1' [dragula]='\"evented-bag\"'>\n          <div class=\"card\" id=\"card1\" [ngStyle]=\"{'background-color': '#' + imHausListElement.bgColor}\">\n            <p> <b>Name:</b> {{imHausListElement.name}}<br>\n              <b>Nation:</b> {{imHausListElement.nation}}<br>\n              <b>Sprache:</b> {{imHausListElement.language}}<br>\n              <b>Kategorie:</b> {{imHausListElement.categorie}}<br>\n              <b>Zimmernummer:</b> {{imHausListElement.roomNumber}}<br>\n              <b>Preis Typ:</b> {{imHausListElement.typeOfPrice}}<br>\n              <b>Anreise:</b> {{imHausListElement.arrival}}<br>\n              <b>Abreise:</b> {{imHausListElement.departure}}<br>\n              <b>Personen Anzahl:</b> {{imHausListElement.numberOfPersons}}<br>\n              <b>Reisebüro:</b> {{imHausListElement.source}}<br>\n              <b>Notiz1:</b> {{imHausListElement.note1}}<br>\n              <b>Notiz2:</b> {{imHausListElement.note2}}<br>\n              <b>Trace:</b> {{imHausListElement.trace}}<br>\n            </p>\n            <div *ngIf=\"imHausListElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"arrivalTextButton\" style=\"height: 45px\">\n<h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74; max-width: 50%; float: left;\">Anreisen</h3><div class=\"btn-group\" style=\"float: right\" dropdown>\n  <button style=\"margin: 10px 0 0 0\" dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">Heute/Morgen<span class=\"caret\"></span></button>\n  <ul *dropdownMenu class=\"dropdown-menu\" style=\"padding: 0px; height: auto\" role=\"menu\">\n    <div style=\"margin: 0 0 0 0; padding: 10px\" class=\"changeToday\" (mouseenter)=\"mouseEnterChangeTodayButton()\"  (mouseleave)=\"mouseLeaveChangeTodayButton()\" (click)=\"changeDayToToday($event); sortList($event)\" [ngStyle]=\"{'background-color': '#' + bgColorToday}\"><p >Heute</p></div>\n    <div style=\"margin: 0 0 0 0; padding: 10px\" class=\"changeTomorrow\" (mouseenter)=\"mouseEnterChangeTomorrowButton()\"  (mouseleave)=\"mouseLeaveChangeTomorrowButton()\" (click)=\"changeDayToTomorrow($event); sortList($event)\" [ngStyle]=\"{'background-color': '#' + bgColorTomorrow}\"><p >Morgen</p></div>\n  </ul>\n</div>\n</div>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListElement of imHausListElemente\">\n      <div *ngIf=\"imHausListElement.trace === '-' && imHausListElement.isArrival\">\n        <div class='cards-container' id='container2' [dragula]='\"evented-bag\"'>\n          <div class=\"card\" id=\"card2\" [ngStyle]=\"{'background-color': '#' + imHausListElement.bgColor}\">\n            <p> <b>Name:</b> {{imHausListElement.name}}<br>\n              <b>Nation:</b> {{imHausListElement.nation}}<br>\n              <b>Sprache:</b> {{imHausListElement.language}}<br>\n              <b>Kategorie:</b> {{imHausListElement.categorie}}<br>\n              <b>Zimmernummer:</b> {{imHausListElement.roomNumber}}<br>\n              <b>Preis Typ:</b> {{imHausListElement.typeOfPrice}}<br>\n              <b>Anreise:</b> {{imHausListElement.arrival}}<br>\n              <b>Abreise:</b> {{imHausListElement.departure}}<br>\n              <b>Personen Anzahl:</b> {{imHausListElement.numberOfPersons}}<br>\n              <b>Reisebüro:</b> {{imHausListElement.source}}<br>\n              <b>Notiz1:</b> {{imHausListElement.note1}}<br>\n              <b>Notiz2:</b> {{imHausListElement.note2}}<br>\n              <b>Trace:</b> {{imHausListElement.trace}}<br>\n            </p>\n            <div *ngIf=\"imHausListElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74;\">Traces</h3>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListElement of imHausListElemente\">\n      <div *ngIf=\"imHausListElement.trace != '-'\">\n        <div class='cards-container' id='container3' [dragula]='\"evented-bag\"'>\n          <div class=\"card\" id=\"card3\" [ngStyle]=\"{'background-color': '#' + imHausListElement.bgColor}\">\n            <p> <b>Name:</b> {{imHausListElement.name}}<br>\n              <b>Nation:</b> {{imHausListElement.nation}}<br>\n              <b>Sprache:</b> {{imHausListElement.language}}<br>\n              <b>Kategorie:</b> {{imHausListElement.categorie}}<br>\n              <b>Zimmernummer:</b> {{imHausListElement.roomNumber}}<br>\n              <b>Preis Typ:</b> {{imHausListElement.typeOfPrice}}<br>\n              <b>Anreise:</b> {{imHausListElement.arrival}}<br>\n              <b>Abreise:</b> {{imHausListElement.departure}}<br>\n              <b>Personen Anzahl:</b> {{imHausListElement.numberOfPersons}}<br>\n              <b>Reisebüro:</b> {{imHausListElement.source}}<br>\n              <b>Notiz1:</b> {{imHausListElement.note1}}<br>\n              <b>Note2:</b> {{imHausListElement.note2}}<br>\n              <b>Trace:</b> {{imHausListElement.trace}}<br>\n            </p>\n            <div *ngIf=\"imHausListElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/im-haus-list/im-haus-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImHausListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImHausListComponent = (function () {
    function ImHausListComponent(mainService) {
        this.mainService = mainService;
        this.parts = [];
        this.tomorrow = false;
        this.bgColorTomorrow = "ffffff";
        this.bgColorToday = "ffffff";
    }
    ImHausListComponent.prototype.ngOnInit = function () {
    };
    ImHausListComponent.prototype.updateImHausListElement = function (informationElements2) {
        var _this = this;
        this.mainService.updateImHausListElement(informationElements2)
            .subscribe(function (response) {
            response.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            //this.imHausListElemente = response;
            //console.log('updateImHausListElement response: ');
            //console.log(response);
            _this.imHausListElemente = response;
            _this.sortList();
        });
    };
    ImHausListComponent.prototype.changeDayToToday = function () {
        this.tomorrow = null;
        this.bgColorTomorrow = "ffffff";
        this.bgColorToday = "0a7a74";
    };
    ImHausListComponent.prototype.changeDayToTomorrow = function () {
        this.tomorrow = true;
        this.bgColorTomorrow = "0a7a74";
        this.bgColorToday = "ffffff";
    };
    ImHausListComponent.prototype.mouseEnterChangeTodayButton = function () {
        //console.log("mouse enter : ");
        if (this.bgColorToday === "ffffff") {
            //console.log('mouse enter1 :');
            this.bgColorToday = "bdbdbd";
        }
        if (this.bgColorToday === "0a7a74") {
            //console.log('mouse enter1 :');
            this.bgColorToday = "05504c";
        }
    };
    ImHausListComponent.prototype.mouseLeaveChangeTodayButton = function () {
        if (this.bgColorToday === "bdbdbd") {
            //console.log('mouse leave1 :');
            this.bgColorToday = "ffffff";
        }
        if (this.bgColorToday === "05504c") {
            //console.log('mouse enter1 :');
            this.bgColorToday = "0a7a74";
        }
    };
    ImHausListComponent.prototype.mouseEnterChangeTomorrowButton = function () {
        //console.log("mouse enter : ");
        if (this.bgColorTomorrow === "ffffff") {
            //console.log('mouse enter1 :');
            this.bgColorTomorrow = "bdbdbd";
        }
        if (this.bgColorTomorrow === "0a7a74") {
            //console.log('mouse enter1 :');
            this.bgColorTomorrow = "05504c";
        }
    };
    ImHausListComponent.prototype.mouseLeaveChangeTomorrowButton = function () {
        if (this.bgColorTomorrow === "bdbdbd") {
            //console.log('mouse leave1 :');
            this.bgColorTomorrow = "ffffff";
        }
        if (this.bgColorTomorrow === "05504c") {
            //console.log('mouse enter1 :');
            this.bgColorTomorrow = "0a7a74";
        }
    };
    ImHausListComponent.prototype.sortList = function () {
        if (this.tomorrow) {
            this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        }
        else {
            this.dateTodayGenerated = new Date();
        }
        //Date generated for tomorrow
        //new Date().getTime() + 24 * 60 * 60 * 1000
        var dateToday = String(this.dateTodayGenerated).substring(0, 15);
        //console.log("===========================ANREISEN===============================");
        //console.log(dateToday);
        for (var i = 0; i < this.imHausListElemente.length; i++) {
            this.imHausListElemente[i].isArrival = false;
            if (this.imHausListElemente[i].arrival) {
                this.parts = this.imHausListElemente[i].arrival.match(/(\d+)/g);
                //console.log(this.parts);
            }
            if (this.parts) {
                this.date = new Date(2018, this.parts[1] - 1, this.parts[0]);
                //console.log(this.date);
                this.parsedDate = String(this.date).substring(0, 15);
                //console.log(this.parsedDate);
            }
            if (dateToday.indexOf(this.parsedDate) !== -1) {
                this.imHausListElemente[i].isArrival = true;
            }
        }
    };
    return ImHausListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('imHausListElemente'),
    __metadata("design:type", Array)
], ImHausListComponent.prototype, "imHausListElemente", void 0);
ImHausListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-im-haus-list',
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/im-haus-list/im-haus-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */]) === "function" && _a || Object])
], ImHausListComponent);

var _a;
//# sourceMappingURL=im-haus-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n    padding: 0;\n    margin: 0;\n    height: 100%;\n    background-color: #0a7a74;\n}\n\n.row {\n    height: 100%;\n    background-color: #0a7a74;\n    margin: 0;\n}\n\n.row .container-fluid {\n    background-color: #0a7a74;\n    height: 100vh;\n}\n\n.row .container-fluid .col-md-4 {\n    background-color: #0a7a74;\n    height: 100%;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n</head>\n<body>\n<div class=\"row\">\n<div class=\"container-fluid\">\n    <div class=\"col-md-4  hidden-xs hidden-sm\">\n    </div>\n    <div class=\"col-md-4\" style=\"padding-top: 20px\">\n      <div class=\"brand\" style=\"text-align: center\"><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2017/05/servicio-logo-lang-weiss.png\" style=\"height: 45px; width: auto; margin-top:0px; margin-right: 10px; text-align: center; display:inline-block; vertical-align:middle;\"></div>\n      <h2 style=\"color: #FFFFFF\">Login</h2>\n      <form (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label style=\"color: #FFFFFF\">Benutzername</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n          <label style=\"color: #FFFFFF\">Passwort</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" style=\"background-color: #ffffff; color: #0a7a74\" value=\"Login\">\n      </form>\n    </div>\n    <div class=\"col-md-4  hidden-xs  hidden-sm\">\n    </div>\n</div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {FlashMessagesService} from 'angular2-flash-messages';
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log("Login submit");
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                // this.flashMessage.show('You are now logged in', {
                //   cssClass: 'alert-success',
                //   timeout: 5000});
                _this.router.navigate(['dashboard']);
            }
            else {
                //  this.flashMessage.show(data.msg, {
                //    cssClass: 'alert-danger',
                //    timeout: 5000});
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  background-color: #0a7a74;\n}\n\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  background-color: #0a7a74;\n}\n\nspan {\n  color: #9d9d9d;\n}\n\n.container-fluid {\n  padding: 0 0 10px 0;\n  margin: 0;\n  height: 100vh;\n  max-width: 100vw;\n  background-color: #0a7a74;\n}\n\n.row {\n  max-width: 100vw;\n  min-height: 100vh;\n  padding: 0 15px 15px 15px;\n  background-color: #0a7a74;\n  margin: 0 0 0 0;\n}\n\n.line{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 115px;\n}\n\n.line1{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 95px;\n}\n\n.printTwo {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #0a7a74;\n  max-height: calc(100vh - 241px);\n  top:-100px;\n  z-index: -1;\n}\n\n.row .inner-table {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: calc(100vh - 120px);\n}\n\n.row .table-col {\n  min-height: calc(100vh - 70px);\n  max-height: calc(100vh - 70px);\n  background-color: #f3efe4;\n  padding: 10px 10px 20px 10px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  width: calc(100vw - 20px);\n  max-width: 100%;\n}\n\n.print-col {\n  padding: 0;\n  min-height: auto;\n  box-sizing: border-box;\n  z-index: 2;\n}\n\n.row .upload-col {\n  background-color: #f3efe4;\n  padding: 10px 10px 20px 10px;\n  box-sizing: border-box;\n  min-height: calc(100vh - 70px);\n  max-height: calc(100vh - 70px);\n  border-radius: 3px;\n  z-index: 1;\n}\n.section2 {\n  display: none;\n}\n\n.section3 {\n  display: none;\n}\n\n.row1 {\n  height: calc((100vh - 195px) / 3);\n  overflow: auto;\n}\n\n.row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Table, .anleitung {\n  display: none;\n}\n\n.cards-container {\n  margin: 10px 0px 10px 0px;\n  padding: 10px 10px 40px 10px;\n}\n\n\n.row .container-fluid  .table-col .inner-table .row3 .wrapper .cards-container {\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n\n}\n\n#containerRestaurant, #containerPanorama, #containerWintergarten, #containerSonnbergZirbn {\n  border-radius: 3px;\n  border: solid 1px grey;\n}\n\n.row .container-fluid .col-md-4 .row1 {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  width: 105%;\n  height: 232.5px;\n  padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container {\n  overflow: auto;\n  margin: 20px 40px 20px 0;\n  display: inline-block;\n  max-width: 100%;\n  border-radius: 3px;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 {\n  overflow: auto;\n  margin: 0 auto;\n  display: inline-block;\n  width: 100%;\n  height: 800px;\n  padding-top: 20px;\n}\n\n.row .container-fluid h3 {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin: 0 auto;\n  display: inline-block;\n  color: #0a7a74;\n  position: relative;\n  text-align: center;\n}\n\n.row .container-fluid .col-md-4 h3 {\n  margin: 0 auto;\n  color: #0a7a74;\n  position: relative;\n}\n\nbody html .row .container-fluid .upload-col .outer-cards h3 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  color: #0a7a74;\n}\n\n.row1 .col {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.row1 .col:nth-child(1) {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.row1 .col:nth-child(2) {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n}\n.row1 .col:nth-child(3) {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.row .col-md-4 .row2 {\n  padding-bottom: 10px;\n  position: relative;\n  min-height: 100%;\n  border-bottom: 1px solid red;\n}\n\n.card {\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row3 .row1 p {\n  /*padding: 10px 10px 10px 10px;*/\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 .wrapper .container .card p {\n  /*padding: 10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-6 .row {\n  background-color: #eaf3f3;\n  padding: 20px 10px 20px 10px;\n  height: 100%;\n}\n\n.table-item {\n  position: absolute;\n}\n\n.btn-send {\n  display: none;\n}\n\n.xls {\n  margin-bottom: 30px;\n}\n\n.btn-default {\n  display: none;\n}\n\n\n.btn-primary {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  margin: 10px 20px 20px 0px;\n  border: none;\n}\n\n.btn-group-departments {\n  margin: 0px 10px 5px 0px;\n}\n\n\n.btn-primary:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n@media (min-width: 701px) {\n\n\n  .row {\n    max-width: 100vw;\n    max-height: calc(100vh - 60px);\n    padding: 0 15px 15px 15px;\n    background-color: #0a7a74;\n  }\n\n  .row .table-col {\n    max-height: calc(100vh - 70px);\n    min-height: calc(100vh - 70px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    box-sizing: border-box;\n    max-width: calc(100vw - 20px);\n    width: 30%;\n    margin: 60px 0 0 10px;\n  }\n\n  .btn-group-departments {\n    margin: 0 10px 5px 20px;\n  }\n\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: calc(100vh - 60px);\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .inner-table {\n    max-height: calc(100vh - 121px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    box-sizing: border-box;\n    min-height:  calc(100vh - 10px);\n    max-height: calc(100vh - 10px);\n  }\n\n  .print-col {\n    margin-left: 15px;\n    width: 65%;\n    max-height: calc(100vh - 60px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .btn-default {\n    display: inline-block;\n  }\n\n  .btn-send {\n    display: block;\n  }\n\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: calc(100vh - 60px);\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .table-col {\n    min-height: calc(100vh - 70px);\n    max-height: calc(100vh - 70px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    box-sizing: border-box;\n    width: 23%;\n    margin: 60px 0 0 10px;\n\n  }\n\n  .row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Table, .anleitung {\n    display: block;\n  }\n\n  .print-col {\n    width: 48%;\n    margin-left: 15px;\n    margin-right: 15px;\n    max-height: calc(100vh - 60px);\n\n  }\n\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    box-sizing: border-box;\n    min-height: calc(100vh - 70px);\n    max-height: calc(100vh - 70px);\n    margin-top: 60px;\n  }\n\n  .row .inner-table {\n    max-height: calc(100vh - 125px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n  .navbar-nav {\n    display: inline-block;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/main.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<html>\n<head>\n  <title>Dashboard</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"node_modules/core-js/client/shim.min.js\"></script>\n  <script src=\"<your-libs-directory>/object-assign.min.js\"></script>\n  <script src=\"node_modules/angular2/es6/dev/src/testing/shims_for_IE.js\"></script>\n</head>\n<div id=\"charge-error\" class=\"alert alert-danger <% if ( !errMsg ) { %> hidden <% } %>\"><%= errMsg  %></div>\n<body>\n<app-navigation  [newInformationElements]=\"newInformationElements\"\n                 [tablesOccupied]=\"tablesOccupied\"\n                 [tablesTempDeparture]=\"tablesTempDeparture\"\n                 (getTablesOccupied)=\"tablesOccupied = $event\"\n                 (reseatExport)=\"reseatInfoVar = $event; reseat($event)\"\n                 (departureExportExport)=\"departureTablePlusIndex = $event; departureRemoval($event)\"\n                 (transformExport)=\"term = $event; transform($event)\"\n                 (termExport)=\"term = $event\"\n                 (reloadLists)=\"reloadLists($event)\"\n                 [newInformationEmployees]=\"newInformationEmployees\"\n                 (getTablesExport)=\"getTables($event)\">\n</app-navigation>\n  <div class=\"row\">\n    <div class=\"container-fluid\">\n      <flash-messages></flash-messages>\n      <div class=\"col-xs-12 col-sm-8 col-lg-6 print-col\">\n        <app-departmentmenu\n          [buttonBgColor1]=\"buttonBgColor1\"\n          [buttonBgColor2]=\"buttonBgColor2\"\n          [buttonBgColor3]=\"buttonBgColor3\"\n          [buttonBgColor4]=\"buttonBgColor4\"\n          [buttonBgColor5]=\"buttonBgColor5\"\n          [fontColor1]=\"fontColor1\"\n          [fontColor2]=\"fontColor2\"\n          [fontColor3]=\"fontColor3\"\n          [fontColor4]=\"fontColor4\"\n          [fontColor5]=\"fontColor5\"\n          [showPanoramaBool]=\"showPanoramaBool\"\n          [showRestaurantBool]=\"showRestaurantBool\"\n          [showSonnbergZirbnBool]=\"showSonnbergZirbnBool\"\n          [showWintergartenBool]=\"showWintergartenBool\"\n          [showAllBool]=\"showAllBool\"\n          (showSonnbergZirbnBoolChange)=\"showSonnbergZirbnBool=$event\"\n          (showPanoramaBoolChange)=\"showPanoramaBool=$event\"\n          (showRestaurantBoolChange)=\"showRestaurantBool=$event\"\n          (showWintergartenBoolChange)=\"showWintergartenBool=$event\"\n          (showAllBoolChange)=\"showAllBool=$event\"\n          [buttonBgColorInfoForm]=\"buttonBgColorInfoForm\"\n          [buttonBgColorNoteForm]=\"buttonBgColorNoteForm\"\n          [fontColorInfoForm]=\"fontColorInfoForm\"\n          [fontColorNoteForm]=\"fontColorNoteForm\"\n          [showNoteFormBool]=\"showNoteFormBool\"\n          [showInfoFormBool]=\"showInfoFormBool\"\n          (showInfoFormBoolChange)=\"showInfoFormBool=$event\"\n          (showNoteFormBoolChange)=\"showNoteFormBool=$event\"\n          (showTablePlanBoolChange)=\"showTablePlanBool=$event\"\n          [showTablePlanBool]=\"showTablePlanBool\"\n          [buttonBgColorShowTablePlan]=\"buttonBgColorShowTablePlan\"\n          [fontColorShowTablePlan]=\"fontColorShowTablePlan\">\n        </app-departmentmenu><flash-messages></flash-messages>\n        <app-form [newInformationElements]=\"newInformationElements\"\n                  [dateGenerated]=\"dateGenerated\"\n                  [title]=\"title\"\n                  [roomNumber]=\"roomNumber\"\n                  [tableNumber]=\"tableNumber\"\n                  [employee]=\"employee\"\n                  [nameTraceInput]=\"nameTraceInput\"\n                  [tablesPanorama]=\"tablesPanorama\"\n                  [tablesRestaurant]=\"tablesRestaurant\"\n                  [tablesSonnbergZirbn]=\"tablesSonnbergZirbn\"\n                  [tablesWintergarten]=\"tablesWintergarten\"\n                  [showNoteFormBool]=\"showNoteFormBool\"\n                  [showInfoFormBool]=\"showInfoFormBool\"\n                  [noteElements]=\"noteElements\"\n                  [showPanoramaBool]=\"showPanoramaBool\"\n                  [showRestaurantBool]=\"showRestaurantBool\"\n                  [showSonnbergZirbnBool]=\"showSonnbergZirbnBool\"\n                  [showWintergartenBool]=\"showWintergartenBool\"\n                  [showAllBool]=\"showAllBool\"\n                  (noteResponse)=\"noteElements=$event\"\n                  (changeColorIfArrivalExport)=\"changeBgColorIfArrival($event)\">\n        </app-form>\n        <app-tableplan [tablesWintergarten]=\"tablesWintergarten\"\n                       [showWintergartenBool]=\"showWintergartenBool\"\n                       [tablesSonnbergZirbn]=\"tablesSonnbergZirbn\"\n                       [showSonnbergZirbnBool]=\"showSonnbergZirbnBool\"\n                       [tablesPanorama]=\"tablesPanorama\"\n                       [showPanoramaBool]=\"showPanoramaBool\"\n                       [tablesRestaurant]=\"tablesRestaurant\"\n                       [showRestaurantBool]=\"showRestaurantBool\"\n                       (movedSonnbergZirbn)=\"tablesSonnbergZirbn = $event\"\n                       (movedRestaurant)=\"tablesRestaurant = $event\"\n                       (movedPanorama)=\"tablesPanorama = $event\"\n                       (movedWintergarten)=\"tablesWintergarten = $event\"\n                       [showAllBool]=\"showAllBool\"\n                       [showTablePlanBool]=\"showTablePlanBool\"\n                       (changeBgColorIfArrival)=\"changeBgColorIfArrival($event)\"\n                       (adultPanoramaExport)=\"adultPanorama=$event\"\n                       (adultRestaurantExport)=\"adultRestaurant=$event\"\n                       (adultSonnbergZirbnExport)=\"adultSonnbergZirbn=$event\"\n                       (adultWintergartenExport)=\"adultWintergarten=$event\"\n                       (childPanoramaExport)=\"childPanorama=$event\"\n                       (childRestaurantExport)=\"childRestaurant=$event\"\n                       (childSonnbergZirbnExport)=\"childSonnbergZirbn=$event\"\n                       (childWintergartenExport)=\"childWintergarten=$event\">\n        </app-tableplan>\n      </div>\n      <div class=\"col-xs-12 col-lg-3 upload-col\">\n        <div class=\"outer-cards\">\n          <app-im-haus-list [imHausListElemente]=\"imHausListElemente\"></app-im-haus-list>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-lg-3 table-col\">\n        <h3 >Tisch Übersicht</h3>\n        <div class=\"inner-table\" style=\"padding: 0px 0px 0px 0px;\">\n          <div class=\"row3\">\n            <div class='wrapper' id=\"wrapper\">\n              <app-departments [tablesWintergarten]=\"tablesWintergarten\"\n                               [showWintergartenBool]=\"showWintergartenBool\"\n                               [tablesSonnbergZirbn]=\"tablesSonnbergZirbn\"\n                               [showSonnbergZirbnBool]=\"showSonnbergZirbnBool\"\n                               [tablesPanorama]=\"tablesPanorama\"\n                               [showPanoramaBool]=\"showPanoramaBool\"\n                               [tablesRestaurant]=\"tablesRestaurant\"\n                               [showRestaurantBool]=\"showRestaurantBool\"\n                               (dispensedSonnbergZirbn)=\"tablesSonnbergZirbn=$event\"\n                               (dispensedRestaurant)=\"tablesRestaurant=$event\"\n                               (dispensedPanorama)=\"tablesPanorama=$event\"\n                               (dispensedWintergarten)=\"tablesWintergarten=$event\"\n                               [term]=\"term\"\n                               [showAllBool]=\"showAllBool\"\n                               (updateAzList)=\"updateAzList($event)\"\n                               [tablesTempDeparture]=\"tablesTempDeparture\"\n                               [tables]=\"tables\"\n                               (updateImHausListElement)=\"updateImHausListElement($event); table = $event;\">\n              </app-departments>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n<app-print  [tables]=\"tables\"\n            [dateGeneratedListe]=\"dateGeneratedListe\"\n            [tablesPanorama]=\"tablesPanorama\"\n            [showPanoramaBool]=\"showPanoramaBool\"\n            [showRestaurantBool]=\"showRestaurantBool\"\n            [tablesRestaurant]=\"tablesRestaurant\"\n            [showSonnbergZirbnBool]=\"showSonnbergZirbnBool\"\n            [tablesSonnbergZirbn]=\"tablesSonnbergZirbn\"\n            [showWintergartenBool]=\"showWintergartenBool\"\n            [tablesWintergarten]=\"tablesWintergarten\"\n            (getTablesOccupied)=\"tablesOccupied = $event\"\n            (getTablesforAzListe)=\"tables = $event\"\n            [adultPanorama]=\"adultPanorama\"\n            [adultRestaurant]=\"adultRestaurant\"\n            [adultSonnbergZirbn]=\"adultSonnbergZirbn\"\n            [adultWintergarten]=\"adultWintergarten\"\n            [childPanorama]=\"childPanorama\"\n            [childRestaurant]=\"childRestaurant\"\n            [childSonnbergZirbn]=\"childSonnbergZirbn\"\n            [childWintergarten]=\"childWintergarten\">\n</app-print>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__print_print_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/print/print.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__departmentmenu_departmentmenu_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_form_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__im_haus_list_im_haus_list_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/im-haus-list/im-haus-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tableplan_tableplan_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/tableplan/tableplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__departments_departments_component__ = __webpack_require__("../../../../../src/app/components/digital-table-plan/departments/departments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MainComponent = (function () {
    function MainComponent(mainService, dragulaService) {
        var _this = this;
        this.mainService = mainService;
        this.dragulaService = dragulaService;
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
        this.noteElements = [];
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.tablesTempDeparture = [];
        this.newInformationEmployees = [];
        this.history = [];
        this.adultSonnbergZirbn = [];
        this.childSonnbergZirbn = [];
        this.adultPanorama = [];
        this.childPanorama = [];
        this.adultRestaurant = [];
        this.childRestaurant = [];
        this.adultWintergarten = [];
        this.childWintergarten = [];
        this.buttonBgColorInfoForm = "0a7a74";
        this.buttonBgColorNoteForm = "0a7a74";
        this.buttonBgColorShowTablePlan = "0a7a74";
        this.fontColorInfoForm = "f3efe4";
        this.fontColorNoteForm = "f3efe4";
        this.fontColorShowTablePlan = "f3efe4";
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
        this.showAllBool = false;
        this.term = "";
        this.mainService.getInformationElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.newInformationElements = informationElemente;
                console.log(_this.newInformationElements);
            }
        });
        this.mainService.getInformationEmployees()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                informationElemente.sort(function (a, b) { return 0 - (a.numberOfTraces > b.numberOfTraces ? 1 : -1); });
                _this.newInformationEmployees = informationElemente;
                console.log(_this.newInformationEmployees);
            }
        });
        this.mainService.getNoteElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.noteElements = informationElemente;
                console.log(_this.noteElements);
            }
        });
        this.getTables();
        this.reloadLists();
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
    MainComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
    };
    MainComponent.prototype.onDrop = function (args) {
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
        this.updateImHausListElement(informationElements2);
        this.tableplanComponent.sumUpNumberOfPersons();
    };
    MainComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
    };
    MainComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
    };
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.showWintergarten = function () {
        this.departmentmenuComponent.showWintergarten();
    };
    MainComponent.prototype.transform = function (term) {
        this.departmentsComponent.transform(term);
    };
    MainComponent.prototype.showRestaurant = function () {
        this.departmentmenuComponent.showRestaurant();
    };
    MainComponent.prototype.showSonnbergZirbn = function () {
        this.departmentmenuComponent.showWintergarten();
    };
    MainComponent.prototype.showPanorama = function () {
        this.departmentmenuComponent.showPanorama();
    };
    MainComponent.prototype.sendInformation = function (event) {
        this.formComponent.sendInformation(event);
    };
    MainComponent.prototype.delete = function (informationElement, j, event) {
        this.navigationComponent.delete(informationElement, j, event);
    };
    MainComponent.prototype.changeBgColorIfArrival = function () {
        this.departmentsComponent.changeBgColorIfArrival();
    };
    MainComponent.prototype.departureRemoval = function () {
        this.departmentsComponent.occupy(this.departureTablePlusIndex.departureExport, this.departureTablePlusIndex.b);
    };
    MainComponent.prototype.updateImHausListElement = function (x) {
        this.imHausListComponent.updateImHausListElement(x);
    };
    MainComponent.prototype.reseat = function () {
        var _this = this;
        this.departmentsComponent.addInformationToTable(this.reseatInfoVar.tableInformationExport, this.reseatInfoVar.indexTarget);
        this.departmentsComponent.occupyTableOnDrop(this.reseatInfoVar.tableToMove, this.reseatInfoVar.indexTarget);
        setTimeout(function () {
            _this.departmentsComponent.occupy(_this.reseatInfoVar.tableToMove, _this.reseatInfoVar.indexSource);
        }, 2000);
    };
    MainComponent.prototype.reloadLists = function () {
        var _this = this;
        this.mainService.getImHausList()
            .subscribe(function (imHausListElemente) {
            if (imHausListElemente === null) {
                return;
            }
            else {
                imHausListElemente.sort(function (a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
                _this.imHausListElemente = imHausListElemente;
                console.log(_this.imHausListElemente);
                setTimeout(function () {
                    _this.imHausListComponent.sortList();
                }, 3000);
            }
        });
    };
    MainComponent.prototype.updateAzList = function () {
        var _this = this;
        setTimeout(function () {
            _this.getTables();
            setTimeout(function () {
                //console.log('this.tablesWintergarten:');
                //console.log(this.tablesWintergarten);
                _this.tables = _this.tablesWintergarten.concat(_this.tablesRestaurant).concat(_this.tablesPanorama).concat(_this.tablesSonnbergZirbn);
                //console.log('this.tables: in updateAzList');
                //console.log(this.tables);
                _this.printComponent.formatAzList(_this.tables);
            }, 3000);
        }, 1000);
    };
    MainComponent.prototype.getTables = function () {
        var _this = this;
        console.log('getTables called');
        this.mainService.getTables()
            .subscribe(function (tables) {
            if (tables === null) {
                return;
            }
            else {
                //console.log("tables[3].tables");
                //console.log(JSON.parse(tables[3].tables));
                for (var x = 0; x < tables.length; x++) {
                    //console.log("tables[x].department");
                    //console.log(tables[x].department);
                    if (tables[x].department === "Restaurant") {
                        tables[x].tables.sort(function (a, b) {
                            //console.log(a.number);
                            //console.log(b.number);
                            if (Number(a.number) < Number(b.number))
                                return -1;
                            if (Number(a.number) > Number(b.number))
                                return 1;
                            return 0;
                        });
                    }
                }
                for (var a = 0; a < tables.length; a++) {
                    if (tables[a].department === "Panorama") {
                        _this.tablesPanorama = tables[a].tables;
                    }
                    else if (tables[a].department === "Wintergarten") {
                        _this.tablesWintergarten = tables[a].tables;
                        //console.log('Test' + JSON.stringify(this.tablesWintergarten));
                    }
                    else if (tables[a].department === "Sonnberg-Zirbn") {
                        _this.tablesSonnbergZirbn = tables[a].tables;
                    }
                    else if (tables[a].department === "Restaurant") {
                        _this.tablesRestaurant = tables[a].tables;
                    }
                }
                _this.changeBgColorIfArrival();
            }
            _this.tablesTempDeparture = tables;
            _this.tables = _this.tablesWintergarten.concat(_this.tablesRestaurant).concat(_this.tablesPanorama).concat(_this.tablesSonnbergZirbn);
            _this.printComponent.formatAzList(_this.tables);
            setTimeout(function () {
                _this.tableplanComponent.sumUpNumberOfPersons();
            }, 1000);
        });
    };
    return MainComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__print_print_component__["a" /* PrintComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__print_print_component__["a" /* PrintComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__print_print_component__["a" /* PrintComponent */]) === "function" && _a || Object)
], MainComponent.prototype, "printComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */]) === "function" && _b || Object)
], MainComponent.prototype, "departmentmenuComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__form_form_component__["a" /* FormComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__form_form_component__["a" /* FormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__form_form_component__["a" /* FormComponent */]) === "function" && _c || Object)
], MainComponent.prototype, "formComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9__departments_departments_component__["a" /* DepartmentsComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__departments_departments_component__["a" /* DepartmentsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__departments_departments_component__["a" /* DepartmentsComponent */]) === "function" && _d || Object)
], MainComponent.prototype, "departmentsComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__im_haus_list_im_haus_list_component__["a" /* ImHausListComponent */]),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__im_haus_list_im_haus_list_component__["a" /* ImHausListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__im_haus_list_im_haus_list_component__["a" /* ImHausListComponent */]) === "function" && _e || Object)
], MainComponent.prototype, "imHausListComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */]),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */]) === "function" && _f || Object)
], MainComponent.prototype, "navigationComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__tableplan_tableplan_component__["a" /* TableplanComponent */]),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__tableplan_tableplan_component__["a" /* TableplanComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__tableplan_tableplan_component__["a" /* TableplanComponent */]) === "function" && _g || Object)
], MainComponent.prototype, "tableplanComponent", void 0);
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main',
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]) === "function" && _j || Object])
], MainComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-fixed-top {\n  max-width: 100%;\n  background-color: #0d2f2e;\n  border-radius: 0px;\n  max-height: 120px;\n  display: block;\n}\n\n.container {\n  max-height: 120px;\n  display: block;\n  padding: 0;\n  margin: 0\n}\n\nul.navbar-nav {\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  max-height:  40px;\n}\n\n.navbar-logout {\n  float: right;\n}\n\n.brand {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 30%;\n}\n\n.Table {\n  color: #0a7a74;\n  float: right;\n  margin-right: 10px;\n}\n\n.TableDiv{\n  background-color: #0a7a74;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  margin-top: 12px;\n  margin-left: 48px;\n  max-width: 50px;\n}\n\n.TableH3 {\n  color: #eaf3f3;\n  margin: 0;\n  line-height: 29px;\n  font-size: 20px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  align: center;\n}\n\n.dropdown-toggle {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n.dropdown-menu {\n  overflow: auto;\n  height: 350px;\n  width: 200px;\n  padding: 20px;\n}\n\n.xls {\n  width: 100%;\n  height: 100px;\n}\n\n.file {\n  float: left;\n  margin-top: 10px;\n  color: #0a7a74;\n}\n\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\n  border: none;\n}\n\n.navbar-form {\n  margin: 11px 0 0 0;\n  box-shadow: none;\n  padding: 0;\n}\n\n.btn-send {\n  background-color: #0a7a74;\n  float: right;\n  color: white;\n  margin-right: 10px;\n  display: none;\n}\n\nh6 {\n  color: #0a7a74;\n}\n\n.navbar-right{\n\n}\n\n.btn-default {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  float: left;\n  vertical-align: middle;\n  margin: 10px 10px 5px 10px;\n  border: none;\n  display: none;\n}\n\n.btn-default:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n.btn-group {\n  height: 45px;\n  width: auto;\n  margin: 10px 10px 5px 10px;\n  float: left;\n  text-align: right;\n  display:none;\n  vertical-align:middle;\n}\n\n.menuitem {\n  padding: 5px;\n}\n\n.navbar-left {\n  max-width: 100%;\n  display: -webkit-inline-box;\n  border: none;\n}\n\n.form-group {\n  max-height: 45px;\n  margin: 0 5px 0 0;\n}\n\n.form-group-search {\n  float: left;\n  width: calc(100% - 52px);\n}\n\n.form-control {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  border: none;\n  height: 32px;\n  opacity: 80;\n  margin: 0px 0px 0px 0px;\n}\n\n.search-btn-default {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  border: none;\n  float: right;\n  margin-right: 10px;\n  min-width: 30px;\n  height: 32px;\n}\n\n.Partner {\n  height: 45px;\n  width: auto;\n  margin-top: 4px;\n  margin-bottom: 5px;\n  margin-right: 25px;\n  float: right;\n  text-align: right;\n  display:none;\n  vertical-align:middle;\n}\n\n.xls {\n  margin-bottom: 30px;\n}\n\n@media (max-width: 500px) {\n\n  .navbar-left {\n    display: block;\n  }\n}\n\n@media (min-width: 766px ) and  (max-width: 774px) {\n  .navbar-right {\n    margin-top: -23px;\n  }\n\n  .search-btn-default {\n    margin-top: 0px;\n    margin-left: 40px;\n    min-width: 30px;\n    min-height: 30px;\n  }\n}\n\n@media (min-width: 500px ) and  (max-width: 774px) {\n  .navbar-fixed-top {\n    display: block;\n    max-height: 56px;\n  }\n  .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: auto;\n    max-height: 55px;\n  }\n  .navbar-nav {\n    margin-top: 0;\n\n    display: -webkit-inline-box;\n\n    display: -ms-inline-flexbox;\n\n    display: inline-flex;\n    max-height: 50px;\n  }\n  .navbar-right{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    max-width: 79%;\n    margin-right: 10px;\n\n  }\n  .navbar-left{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .form-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .form-control{\n\n  }\n  .search-btn-default {\n    margin-top: 0px;\n  }\n}\n\n@media (min-width: 775px) {\n  .Partner {\n    display: none;\n    max-width: 100%;\n    float: right;\n  }\n\n  .form-group {\n    display: block;\n  }\n\n  .form-group-search {\n    float: none;\n    width: auto;\n  }\n\n  .navbar-left {\n    float: right;\n  }\n\n  .navbar-right {\n    max-width: 100%;\n    margin-right: 10px;\n  }\n\n  .container {\n    display: block;\n    width: auto;\n  }\n\n  .navbar-fixed-top {\n    max-height: 45px;\n    display: block;\n  }\n\n  .btn-group {\n    display:none;\n  }\n\n  .brand {\n    max-width: 100%;\n  }\n\n  .partnerLi {\n    float: right;\n  }\n\n  .navbar-left {\n    display: block;\n    margin-top: 11px;\n  }\n\n  .search-btn-default {\n    float: right;\n    margin-right: 20px;\n    margin-top: 0px;\n  }\n\n  .Table {\n    margin-right: 0px;\n  }\n\n  .TableDiv{\n    margin-left: 35px;\n  }\n  .navbar-nav {\n\n  }\n\n}\n\n\n@media (min-width: 1250px) {\n  .btn-default {\n    display: block;\n  }\n\n  .btn-send {\n    display: block;\n  }\n\n  .print-col {\n    width: 32%\n  }\n\n  .search-btn-default {\n    display: block;\n  }\n\n  .btn-group {\n    display: block;\n  }\n\n  .navbar-nav {\n    display: block;\n\n  }\n\n  .container {\n    display: block;\n    width: 100%;\n  }\n\n  .navbar-right {\n    max-width: 65%;\n    min-width: 50%;\n  }\n  .form-group {\n    margin: 0;\n    width: 70%;\n    max-height: 100%;\n    margin: 0 2px 20px 10px;\n  }\n\n  .form-control {\n    background-color: #0a7a74;\n    color: #FFFFFF;\n    border: none;\n    opacity: 80;\n    width: 135px;\n    margin: 0px 0px 0px 0px;\n  }\n\n  .TableDiv{\n    margin-left: 0px;\n  }\n}\n\n\n@media (min-width: 1650px) {\n  .Partner {\n    display: inline-block;\n    max-width: 100%;\n    float: right;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n  <ul class=\"nav navbar-nav\">\n    <li class=\"brand\" ><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2018/01/servicio-logo-neu-laden-1.png\" (click)=\"brandClick()\" style=\"height: 45px; width: auto; margin-top:0px; margin-right: 10px; text-align: left; display:inline-block; vertical-align:middle;\"></li>\n    <li class=\"Belegte Table\" ><div class=\"TableDiv\"><h3 class=\"TableH3\">{{tablesOccupied}}</h3></div></li>\n    <div class=\"btn-group\" dropdown>\n      <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"><i class=\"fa fa-print\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" style=\"height: auto; padding: 0\" role=\"menu\">\n        <li class=\"printToCart1\" (click)=\"printToCart1('printSectionId1')\" (mouseenter)=\"mouseEnterprintToCart1Button()\"  (mouseleave)=\"mouseLeaveprintToCart1Button()\" [ngStyle]=\"{'background-color': '#' + printToCart1Button}\" style=\"display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\">Tisch Übersicht Drucken</li>\n        <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n        <li class=\"printToCart2\" (click)=\"printToCart2('printSectionId2')\"  (mouseenter)=\"mouseEnterprintToCart2Button()\"  (mouseleave)=\"mouseLeaveprintToCart2Button()\" [ngStyle]=\"{'background-color': '#' + printToCart2Button}\"  style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\">Tisch Plan Drucken</li>\n        <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n        <li class=\"printToCart3\" (click)=\"printToCart3('printSectionId3')\"   (mouseenter)=\"mouseEnterprintToCart3Button()\"  (mouseleave)=\"mouseLeaveprintToCart3Button()\" [ngStyle]=\"{'background-color': '#' + printToCart3Button}\"  style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\">A-Z Liste Drucken</li>\n      </ul>\n    </div>\n    <div class=\"btn-group\" dropdown>\n      <button dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">XLS<i class=\"fa fa-upload\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" style=\"padding: 10px; height: auto\" role=\"menu\">\n        <div class=\"xls\" (click)=\"none($event)\" ><h6 >XLS-Datei hochladen</h6>\n          <form class=\"SendMessage\" (submit)=\"sendMessage($event)\">\n            <input type=\"file\" style=\"max-width: 160px; min-height: 50px\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n            <button type=\"button\" class=\"btn btn-send\" (click)=\"upload()\">XLS hochladen</button>\n          </form>\n        </div>\n      </ul>\n    </div>\n    <li class=\"navbar-logout\" *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"/\">LOGOUT</a></li>\n  </ul>\n  <ul class=\"nav navbar-nav navbar-right\" >\n    <div class=\"btn-group\"  dropdown>\n      <button dropdownToggle type=\"button\"  class=\"btn btn-primary dropdown-toggle\">Rangliste <i class=\"fa fa-gift\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"padding: 0\">\n        <div *ngFor=\"let newInformationEmployee of newInformationEmployees; let j = index;\">\n\n          <li role=\"menuitem\" class=\"menuitem\" (click)=\"none($event)\"> <b>Name: </b> {{newInformationEmployee.employee}} <br><b>Punkte: </b> {{newInformationEmployee.numberOfTraces}}</li>\n          <li class=\"divider dropdown-divider\"></li>\n        </div>\n      </ul>\n    </div>\n    <div class=\"btn-group\" dropdown>\n      <button dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">Abreisen <i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"max-height: 130px; padding: 0\">\n        <li role=\"menuitem\" class=\"menuitem\" (mouseenter)=\"mouseEnterDepartureAbortButton()\"  (mouseleave)=\"mouseLeaveDepartureAbortButton()\" [ngStyle]=\"{'background-color': '#' + departureAbortButton}\" style=\"color: black;\">Abort</li>\n        <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n        <li role=\"menuitem\" class=\"menuitem\" style=\"background-color: red; color: white;\" (mouseenter)=\"mouseEnterDepartureExecuteButton()\"  (mouseleave)=\"mouseLeaveDepartureExecuteButton()\" [ngStyle]=\"{'background-color': '#' + departureExecuteButton}\" style=\"color: white;\" (click)=\"dispenseIfDepartureToday()\"><b> Abreisen für Heute entfernen</b></li>\n        <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n        <li role=\"menuitem\" class=\"menuitem\" (mouseenter)=\"mouseEnterDepartureTomorrowExecuteButton()\"  (mouseleave)=\"mouseLeaveDepartureTomorrowExecuteButton()\" [ngStyle]=\"{'background-color': '#' + departureExecuteTomorrowButton}\" style=\"color: white;\" (click)=\"dispenseIfDepartureTomorrow()\"><b> Abreisen für Morgen entfernen</b></li>\n        <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n      </ul>\n    </div>\n     <div class=\"btn-group\" dropdown>\n      <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">Umsetzen <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"height: auto\">\n        <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"reseat($event)\">\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"sourceTable\">Quell-Tisch:</label>\n              <input class=\"form-control\" id=\"sourceTable\" [(ngModel)]=\"sourceTable\" name=\"sourceTable\" placeholder=\"Von Tablenummer:\" >\n            </div>\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"targetTable\">Ziel-Tisch</label>\n              <input class=\"form-control\" id=\"targetTable\" [(ngModel)]=\"targetTable\" name=\"targetTable\" placeholder=\"Zu Tablenummer:\" >\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" >Umsetzen <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i></button>\n        </form>\n      </ul>\n    </div>\n    <div class=\"btn-group\"  dropdown>\n      <button dropdownToggle type=\"button\"  class=\"btn btn-primary dropdown-toggle\">Traces <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i> <span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"padding: 0\">\n        <div *ngFor=\"let newInformationElement of newInformationElements; let j = index;\">\n          <button type=\"submit\" class=\"btn btn-send\" style=\"margin: 10px\" (click)=\"delete(newInformationElement, j, $event)\">x</button>\n          <li role=\"menuitem\" style=\"padding: 10px;\" class=\"menuitem\" (click)=\"none($event)\"> <b>Zimmer Nummer: </b> {{newInformationElement.roomNumber}} <br><b>Trace: </b> {{newInformationElement.text}} <br><b>Tisch: </b> {{newInformationElement.tableNumber}}<br><b>Datum: </b> {{newInformationElement.date}}<br><b>Name: </b> {{newInformationElement.name}}<br><b>Mitarbeiter: </b> {{newInformationElement.employee}}</li>\n          <li class=\"divider dropdown-divider\"></li>\n        </div>\n      </ul>\n    </div>\n    <form class=\"navbar-form navbar-left\">\n      <div class=\"form-group form-group-search\">\n        <input type=\"text\" class=\"form-control\" (keyup)=\"onKey($event)\">\n      </div>\n      <button type=\"submit\" class=\"btn search-btn-default\" ><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n    </form>\n    <li class=\"partnerLi\" ><img class=\"Partner\" alt=\"Partner\" href=\"http://www.salzburgerhof.servicio.io/wlanlandingpage\" src=\"http://servicio.io/wp-content/uploads/2018/01/SalzburgerHof_Marke_RGB.jpg\" ></li>\n  </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function NavigationComponent(mainService, http, _flashMessagesService, authService, router) {
        this.mainService = mainService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.filesToUpload = [];
        this.newInformationElements = [];
        this.newInformationEmployees = [];
        this.tablesTempDeparture = [];
        this.reseatExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.departureExportExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.termExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getTablesExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.reloadLists = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.transformExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.printToCart1Button = "ffffff";
        this.printToCart2Button = "ffffff";
        this.printToCart3Button = "ffffff";
        this.departureAbortButton = "ffffff";
        this.departureExecuteButton = "ff0000";
        this.departureExecuteTomorrowButton = "ff0000";
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.delete = function (informationElement, j, event) {
        var _this = this;
        console.log(informationElement);
        console.log(j);
        event.stopPropagation();
        this.mainService.deleteInformationElement(informationElement)
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
        console.log('This method is calld from the parent component via ViewChild');
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
    NavigationComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    NavigationComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append('uploads[]', files[0], files[0]['name']);
        this.http.post('/upload', formData)
            .map(function (files) { return files.json(); }).map(function (res) {
            // 1st parameter is a flash message text
            // 2nd parameter is optional. You can pass object with options.
            if (res[0].originalname) {
                _this._flashMessagesService.show('Erfolgreich ' + JSON.stringify(res[0].originalname) + " hochgeladen", {
                    cssClass: 'alert-success',
                    timeout: 10000
                });
            }
            else {
                _this._flashMessagesService.show(JSON.stringify(res), {
                    cssClass: 'alert-danger',
                    timeout: 10000
                });
            }
        })
            .subscribe(function (files) { return console.log("files", files); });
        setTimeout(function () {
            _this.reloadLists.emit();
        }, 3000);
    };
    NavigationComponent.prototype.dispenseIfDepartureToday = function () {
        this.dateTodayGenerated = new Date(); //Today
        this.dispenseIfDeparture();
    };
    NavigationComponent.prototype.dispenseIfDepartureTomorrow = function () {
        console.log("dispenseIfDepartureTomorrow");
        this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); //Tomorrow
        this.dispenseIfDeparture();
        console.log(this.dateTodayGenerated);
    };
    NavigationComponent.prototype.dispenseIfDeparture = function () {
        var _this = this;
        var tables = this.tablesTempDeparture;
        var departureExport = [];
        var b = 0;
        console.log('dispenseIfDeparture');
        //Tomorrow new Date().getTime() + 24 * 60 * 60 * 1000
        for (var a = 0; a < tables.length; a++) {
            for (var b_1 = 0; b_1 < tables[a].tables.length; b_1++) {
                if (tables[a].tables[b_1].groups) {
                    var departureExportObject = {
                        table: tables[a].tables[b_1],
                        group: [],
                        date: String(this.dateTodayGenerated).substring(0, 15)
                    };
                    for (var c = 0; c < tables[a].tables[b_1].groups.length; c++) {
                        if (tables[a].tables[b_1].groups[c].departureValue) {
                            this.parts[0] = tables[a].tables[b_1].groups[c].departureValue.match(/(\d+)/g);
                        }
                        else {
                            this.parts[0] = "undefined";
                        }
                        if (this.parts[0]) {
                            this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
                            this.parsedDate[0] = String(this.date[0]).substring(0, 15);
                        }
                        var dateToday = String(this.dateTodayGenerated).substring(0, 15);
                        if (dateToday.indexOf(this.parsedDate[0]) !== -1 || tables[a].tables[b_1].groups[c].newTraceText) {
                            departureExportObject.group.push(c);
                        }
                        if (c === (tables[a].tables[b_1].groups.length - 1) && (typeof departureExportObject.group !== 'undefined' && departureExportObject.group.length > 0)) {
                            console.log("EEEEMMMMMMIIIIIIITTT");
                            departureExport.push(departureExportObject);
                        }
                    }
                }
            }
        }
        console.log(departureExport);
        setTimeout(function () {
            _this.departureExportExport.emit({ departureExport: departureExport, b: b });
        }, 100);
        this.getTablesExport.emit();
    };
    NavigationComponent.prototype.reseat = function () {
        var _this = this;
        event.preventDefault();
        console.log("UMSETZTEN CALLED");
        var sourceTable = this.sourceTable;
        var targetTable = this.targetTable;
        this.tableInformation = [];
        //let targetTable = this.sourceTable;
        //let sourceTableNumber = this.sourceTable;
        //let targetTableNumber = Number(this.sourceTable.targetTable);
        //let sourceTableNumberNumber = Number(this.sourceTable.sourceTable);
        console.log('targetTable' + targetTable);
        console.log('sourceTableNumber' + sourceTable);
        var tableToMove = { department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty" };
        var j = 0;
        if (Number(this.sourceTable) >= 40 && Number(this.sourceTable) <= 59) {
            tableToMove.department = "Sonnberg-Zirbn";
            j = 0;
        }
        else if (Number(this.sourceTable) >= 60 && Number(this.sourceTable) <= 89) {
            tableToMove.department = "Panorama";
            j = 1;
        }
        else if (Number(this.sourceTable) >= 1 && Number(this.sourceTable) <= 24) {
            tableToMove.department = "Restaurant";
            j = 3;
        }
        else if (Number(this.sourceTable) >= 501 && Number(this.sourceTable) <= 524) {
            tableToMove.department = "Wintergarten";
            j = 2;
        }
        if (Number(this.targetTable) >= 40 && Number(this.targetTable) <= 59) {
            tableToMove.targetDepartment = "Sonnberg-Zirbn";
        }
        else if (Number(this.targetTable) >= 60 && Number(this.targetTable) <= 89) {
            tableToMove.targetDepartment = "Panorama";
        }
        else if (Number(this.targetTable) >= 1 && Number(this.targetTable) <= 24) {
            tableToMove.targetDepartment = "Restaurant";
        }
        else if (Number(this.targetTable) >= 501 && Number(this.targetTable) <= 524) {
            tableToMove.targetDepartment = "Wintergarten";
        }
        var indexTarget = 0;
        var indexSource = 0;
        tableToMove.number = this.sourceTable;
        tableToMove.targetTable = this.targetTable;
        console.log(tableToMove);
        this.mainService.getTables()
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
                            _this.tableInformation.push(tableToMove);
                            console.log(_this.tableInformation);
                        }
                    }
                }
            }
            for (var a = 0; a < tables.length; a++) {
                for (var b = 0; b < tables[a].tables.length; b++) {
                    if (tables[a].department === tableToMove.targetDepartment) {
                        if (tables[a].tables[b].number === tableToMove.targetTable) {
                            indexTarget = b;
                        }
                    }
                }
            }
            for (var a = 0; a < tables.length; a++) {
                for (var b = 0; b < tables[a].tables.length; b++) {
                    if (tables[a].department === tableToMove.department) {
                        if (tables[a].tables[b].number === tableToMove.number) {
                            indexSource = b;
                        }
                    }
                }
            }
            console.log("this.tableInformation IIIIIIIII");
            var tableInformationExport = _this.tableInformation;
            _this.reseatExport.emit({ tableToMove: tableToMove, indexTarget: indexTarget, indexSource: indexSource, tableInformationExport: tableInformationExport });
        });
    };
    NavigationComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            //alert('you just clicked enter');
            this.termExport.emit(this.term);
        }
    };
    NavigationComponent.prototype.onKey = function (event) {
        this.term = event.target.value;
        console.log(this.term);
        this.termExport.emit(this.term);
        this.transformExport.emit(this.term);
    };
    NavigationComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        //this._flashMessagesService.show('You are logged out', {
        //  cssClass: 'alert-success',
        //  timeout: 3000
        //});
        this.router.navigate(['/login']);
        return false;
    };
    NavigationComponent.prototype.mouseEnterprintToCart1Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart1Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart1Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart1Button = function () {
        if (this.printToCart1Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart1Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterprintToCart2Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart2Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart2Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart2Button = function () {
        if (this.printToCart2Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart2Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterprintToCart3Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart3Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart3Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart3Button = function () {
        if (this.printToCart3Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart3Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterDepartureExecuteButton = function () {
        //console.log("mouse enter : ");
        if (this.departureExecuteButton === "ff0000") {
            //console.log('mouse enter1 :');
            this.departureExecuteButton = "a00000";
        }
    };
    NavigationComponent.prototype.mouseLeaveDepartureExecuteButton = function () {
        if (this.departureExecuteButton === "a00000") {
            //console.log('mouse leave1 :');
            this.departureExecuteButton = "ff0000";
        }
    };
    NavigationComponent.prototype.mouseEnterDepartureTomorrowExecuteButton = function () {
        //console.log("mouse enter : ");
        if (this.departureExecuteTomorrowButton === "ff0000") {
            //console.log('mouse enter1 :');
            this.departureExecuteTomorrowButton = "a00000";
        }
    };
    NavigationComponent.prototype.mouseLeaveDepartureTomorrowExecuteButton = function () {
        if (this.departureExecuteTomorrowButton === "a00000") {
            //console.log('mouse leave1 :');
            this.departureExecuteTomorrowButton = "ff0000";
        }
    };
    NavigationComponent.prototype.mouseEnterDepartureAbortButton = function () {
        //console.log("mouse enter : ");
        if (this.departureAbortButton === "ffffff") {
            //console.log('mouse enter1 :');
            this.departureAbortButton = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveDepartureAbortButton = function () {
        if (this.departureAbortButton === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.departureAbortButton = "ffffff";
        }
    };
    return NavigationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('newInformationElements'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "newInformationElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('newInformationEmployees'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "newInformationEmployees", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesOccupied'),
    __metadata("design:type", Number)
], NavigationComponent.prototype, "tablesOccupied", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesTempDeparture'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "tablesTempDeparture", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NavigationComponent.prototype, "reseatExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], NavigationComponent.prototype, "departureExportExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], NavigationComponent.prototype, "termExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], NavigationComponent.prototype, "getTablesExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], NavigationComponent.prototype, "reloadLists", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], NavigationComponent.prototype, "transformExport", void 0);
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _l || Object])
], NavigationComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/print/print.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"printSectionId3\" class=\"section3\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n    </tr>\n    <tr style=\"border: solid 1px black;\">\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Nation</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Kategorie</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Preis Typ</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Reisebüro</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Sprache</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n    </tr>\n    <div *ngFor=\"let table of tables\">\n      <tr style=\"border: solid 1px black;\">\n        <div *ngIf=\"table.nameValue\">\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.roomNumberValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.numberOfPersonsValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nationValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.categoryValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.typeOfPriceValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.sourceValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.languageValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.arrivalValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.departureValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.note1Value}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.note2Value}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.traceValue}}</td>\n        </div>\n      </tr>\n    </div>\n  </table>\n</div>\n<div id=\"printSectionId1\" class=\"section3\">\n <div *ngIf=\"showSonnbergZirbnBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Sonnberg-Zirbn\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Nation</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Kategorie</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Preis Typ</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Reisebüro</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Sprache</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesSonnbergZirbn\">\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <div *ngIf=\"group.nameValue\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.roomNumberValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.numberOfPersonsValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nationValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.categoryValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.typeOfPriceValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.sourceValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.languageValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.arrivalValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.departureValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.note1Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.note2Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            </div>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showPanoramaBool\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n    </tr>\n    <tr>\n      Panorama\n    </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Nation</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Kategorie</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Preis Typ</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Reisebüro</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Sprache</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesPanorama\">\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <div *ngIf=\"group.nameValue\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.roomNumberValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.numberOfPersonsValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nationValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.categoryValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.typeOfPriceValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.sourceValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.languageValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.arrivalValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.departureValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.note1Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.note2Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            </div>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showRestaurantBool\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n    </tr>\n    <tr>\n      Restaurant\n    </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Nation</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Kategorie</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Preis Typ</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Reisebüro</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Sprache</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesRestaurant\">\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <div *ngIf=\"group.nameValue\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.roomNumberValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.numberOfPersonsValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nationValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.categoryValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.typeOfPriceValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.sourceValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.languageValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.arrivalValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.departureValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.note1Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.note2Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            </div>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showWintergartenBool\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n    </tr>\n    <tr>\n      Wintergarten\n    </tr>\n    <tr style=\"border: solid 1px black;\">\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Nation</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Kategorie</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Preis Typ</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Reisebüro</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Sprache</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n    </tr>\n    <div *ngFor=\"let table of tablesWintergarten\">\n      <div *ngFor=\"let group of table.groups\">\n        <tr style=\"border: solid 1px black;\">\n          <div *ngIf=\"group.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.roomNumberValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.numberOfPersonsValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nationValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.categoryValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.typeOfPriceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.sourceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.languageValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.arrivalValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.departureValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.note1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.note2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n          </div>\n          <div *ngIf=\"group.newTraceText\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n          </div>\n        </tr>\n      </div>\n    </div>\n    </table>\n  </div>\n</div>\n<div id=\"printSectionId2\" class=\"section2\">\n  <div class=\"row\" style=\" border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\">\n    <div *ngIf=\"showSonnbergZirbnBool\">\n      <div *ngFor=\"let tableSonnbergZirbn of tablesSonnbergZirbn; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableSonnbergZirbn.number}} table-item\" [ngStyle]=\"{'top': tableSonnbergZirbn.topValue + 'px', 'left': tableSonnbergZirbn.leftValue + 'px', 'background-color': + tableSonnbergZirbn.bgColor, 'height': + tableSonnbergZirbn.height + 'px', 'width': + tableSonnbergZirbn.width + 'px', 'border': + tableSonnbergZirbn.border}\" [style.border]=\"getStyle(tablesSonnbergZirbn[j].groups)\" dropdown>\n          <div *ngIf=\"tablesSonnbergZirbn[j] !== tablesSonnbergZirbn[j+1]\">\n            <p><b>{{tableSonnbergZirbn.number}} <br>{{adultSonnbergZirbn[j]}}/{{childSonnbergZirbn[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showPanoramaBool\">\n      <div *ngFor=\"let tablePanorama of tablesPanorama; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tablePanorama.number}} table-item\" [ngStyle]=\"{'top': tablePanorama.topValue + 'px', 'left': tablePanorama.leftValue + 'px', 'background-color': + tablePanorama.bgColor, 'height': + tablePanorama.height + 'px', 'width': + tablePanorama.width + 'px', 'border': + tablePanorama.border}\" [style.border]=\"getStyle(tablesPanorama[j].groups)\" dropdown>\n          <div *ngIf=\"tablesPanorama[j] !== tablesPanorama[j+1]\">\n            <p><b>{{tablePanorama.number}} <br>{{adultPanorama[j]}}/{{childPanorama[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showRestaurantBool\">\n      <div *ngFor=\"let tableRestaurant of tablesRestaurant; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableRestaurant.number}} table-item\" [ngStyle]=\"{'top': tableRestaurant.topValue + 'px', 'left': tableRestaurant.leftValue + 'px', 'background-color': + tableRestaurant.bgColor, 'height': + tableRestaurant.height + 'px', 'width': + tableRestaurant.width + 'px', 'border': + tableRestaurant.border}\" [style.border]=\"getStyle(tablesRestaurant[j].groups)\" dropdown>\n          <div *ngIf=\"tablesRestaurant[j] !== tablesRestaurant[j+1]\">\n            <p><b>{{tableRestaurant.number}} <br>{{adultRestaurant[j]}}/{{childRestaurant[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showWintergartenBool\">\n      <div *ngFor=\"let tableWintergarten of tablesWintergarten; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableWintergarten.number}} table-item\" [ngStyle]=\"{'top': tableWintergarten.topValue + 'px', 'left': tableWintergarten.leftValue + 'px', 'background-color': + tableWintergarten.bgColor, 'height': + tableWintergarten.height + 'px', 'width': + tableWintergarten.width + 'px', 'border': + tableWintergarten.border}\" [style.border]=\"getStyle(tablesWintergarten[j].groups)\" dropdown>\n          <div *ngIf=\"tablesWintergarten[j] !== tablesWintergarten[j+1]\">\n            <p><b>{{tableWintergarten.number}} <br>{{adultWintergarten[j]}}/{{childWintergarten[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/print/print.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintComponent; });
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
        this.tableTemp = [];
        this.trace = false;
    }
    PrintComponent.prototype.ngOnInit = function () {
    };
    PrintComponent.prototype.formatAzList = function (tables) {
        this.tables = tables;
        this.tableNumbers = [];
        this.uniqueTables = [];
        this.tableTemp = [];
        //(<any>Object).assign( this.photos, photos )
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].groups) {
                for (var j = 0; j < this.tables[i].groups.length; j++) {
                    var tempObject = {
                        number: this.tables[i].number,
                        department: this.tables[i].department,
                        bgColor: this.tables[i].bgColor,
                        isOccupied: this.tables[i].isOccupied,
                        placeholder: this.tables[i].placeholder,
                        border: this.tables[i].border,
                    };
                    if (this.tables[i].groups[j]) {
                        //console.log(this.tables[i].number);
                        this.object = Object.assign(this.tables[i].groups[j], tempObject);
                        //console.log("this.object");
                        //console.log(this.object);
                        this.tableTemp.push(this.object);
                    }
                }
            }
        }
        //console.log("this.tableTemp");
        //console.log(this.tableTemp);
        this.tables = this.tableTemp.sort(function (a, b) {
            var nameA = "";
            var nameB = "";
            if (typeof a.nameValue !== "undefined" && a.nameValue !== null) {
                nameA = a.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (typeof b.nameValue !== "undefined" && b.nameValue !== null) {
                nameB = b.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
            //}
        });
        for (var i = 0; i < this.tables.length; i++) {
            //console.log(i);
            if ("nameValue" in this.tables[i]) {
                //console.log("--->" + i);
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
    };
    PrintComponent.prototype.getStyle = function (a) {
        //console.log("a");
        //console.log(a);
        if (typeof a === "undefined") {
            return "solid 3px rgb(243, 239, 228)";
        }
        else {
            for (var b = 0; b < a.length; b++) {
                //console.log("getStyle for loop a[b].traceValue");
                //console.log(a[b].traceValue);
                if (a[b].traceValue != "Empty" || a[b].newTraceText) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('adultPanorama'),
    __metadata("design:type", String)
], PrintComponent.prototype, "adultPanorama", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('adultRestaurant'),
    __metadata("design:type", String)
], PrintComponent.prototype, "adultRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('adultSonnbergZirbn'),
    __metadata("design:type", String)
], PrintComponent.prototype, "adultSonnbergZirbn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('adultWintergarten'),
    __metadata("design:type", String)
], PrintComponent.prototype, "adultWintergarten", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('childPanorama'),
    __metadata("design:type", String)
], PrintComponent.prototype, "childPanorama", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('childRestaurant'),
    __metadata("design:type", String)
], PrintComponent.prototype, "childRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('childSonnbergZirbn'),
    __metadata("design:type", String)
], PrintComponent.prototype, "childSonnbergZirbn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('childWintergarten'),
    __metadata("design:type", String)
], PrintComponent.prototype, "childWintergarten", void 0);
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
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/print/print.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrintComponent);

var _a, _b;
//# sourceMappingURL=print.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/tableplan/tableplan.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTablePlanBool\">\n  <div class=\"col-xs-12 printTwo\">\n    <div class=\"row\" style=\" border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\">\n      <div *ngIf=\"showSonnbergZirbnBool\">\n        <div *ngFor=\"let tableSonnbergZirbn of tablesSonnbergZirbn; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableSonnbergZirbn.number}} table-item\" [ngStyle]=\"{'top': tableSonnbergZirbn.topValue + 'px', 'left': tableSonnbergZirbn.leftValue + 'px', 'background-color': + tableSonnbergZirbn.bgColor, 'height': + tableSonnbergZirbn.height + 'px', 'width': + tableSonnbergZirbn.width + 'px', 'border': + tableSonnbergZirbn.border}\" [style.border]=\"getStyle(tablesSonnbergZirbn[j].groups)\" dropdown>\n            <div *ngIf=\"tablesSonnbergZirbn[j] !== tablesSonnbergZirbn[j+1]\">\n              <p><b>{{tableSonnbergZirbn.number}} <br>{{adultSonnbergZirbn[j]}}/{{childSonnbergZirbn[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableSonnbergZirbn, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableSonnbergZirbn, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableSonnbergZirbn.groups\">\n                    <div *ngIf=\"group.nameValue\">\n                      <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.traceValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Sprache:</b> {{group.languageValue}}<br><b>Zimmer Nummer: </b>{{group.roomNumberValue}}<br><b>Preistyp: </b>{{group.typeOfPriceValue}}<br><b>Anreise: </b>{{group.arrivalValue}}<br><b>Abreise:</b> {{group.departureValue}}<br><b>Personen Anzahl:</b>{{group.numberOfPersonsValue}}<br><b>Kategorie: </b>{{group.categoryValue}}<br><b>Reisebüro: </b>{{group.sourceValue}}<br><b>Notiz1:</b> {{group.note1Value}}<br><b>Notiz2:</b> {{group.note2Value}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br><b>Trace:</b> {{group.traceValue}}</div>\n                      <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                    </div>\n                    <div *ngIf=\"group.newTraceText\">\n                      <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                        <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showPanoramaBool\">\n        <div *ngFor=\"let tablePanorama of tablesPanorama; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tablePanorama.number}} table-item\" [ngStyle]=\"{'top': tablePanorama.topValue + 'px', 'left': tablePanorama.leftValue + 'px', 'background-color': + tablePanorama.bgColor, 'height': + tablePanorama.height + 'px', 'width': + tablePanorama.width + 'px', 'border': + tablePanorama.border}\" [style.border]=\"getStyle(tablesPanorama[j].groups)\" dropdown>\n            <div *ngIf=\"tablesPanorama[j] !== tablesPanorama[j+1]\">\n              <p><b>{{tablePanorama.number}} <br>{{adultPanorama[j]}}/{{childPanorama[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tablePanorama, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tablePanorama, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tablePanorama.groups\">\n                    <div *ngIf=\"group.nameValue\">\n                      <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.traceValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Sprache:</b> {{group.languageValue}}<br><b>Zimmer Nummer: </b>{{group.roomNumberValue}}<br><b>Preistyp: </b>{{group.typeOfPriceValue}}<br><b>Anreise: </b>{{group.arrivalValue}}<br><b>Abreise:</b> {{group.departureValue}}<br><b>Personen Anzahl:</b>{{group.numberOfPersonsValue}}<br><b>Kategorie: </b>{{group.categoryValue}}<br><b>Reisebüro: </b>{{group.sourceValue}}<br><b>Notiz1:</b> {{group.note1Value}}<br><b>Notiz2:</b> {{group.note2Value}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br><b>Trace:</b> {{group.traceValue}}</div>\n                      <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                    </div>\n                    <div *ngIf=\"group.newTraceText\">\n                      <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                        <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showRestaurantBool\">\n        <div *ngFor=\"let tableRestaurant of tablesRestaurant; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableRestaurant.number}} table-item\" [ngStyle]=\"{'top': tableRestaurant.topValue + 'px', 'left': tableRestaurant.leftValue + 'px', 'background-color': + tableRestaurant.bgColor, 'height': + tableRestaurant.height + 'px', 'width': + tableRestaurant.width + 'px', 'border': + tableRestaurant.border}\" [style.border]=\"getStyle(tablesRestaurant[j].groups)\" dropdown>\n            <div *ngIf=\"tablesRestaurant[j] !== tablesRestaurant[j+1]\">\n              <p><b>{{tableRestaurant.number}} <br>{{adultRestaurant[j]}}/{{childRestaurant[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableRestaurant, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableRestaurant, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableRestaurant.groups\">\n                    <div *ngIf=\"group.nameValue\">\n                      <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.traceValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Sprache:</b> {{group.languageValue}}<br><b>Zimmer Nummer: </b>{{group.roomNumberValue}}<br><b>Preistyp: </b>{{group.typeOfPriceValue}}<br><b>Anreise: </b>{{group.arrivalValue}}<br><b>Abreise:</b> {{group.departureValue}}<br><b>Personen Anzahl:</b>{{group.numberOfPersonsValue}}<br><b>Kategorie: </b>{{group.categoryValue}}<br><b>Reisebüro: </b>{{group.sourceValue}}<br><b>Notiz1:</b> {{group.note1Value}}<br><b>Notiz2:</b> {{group.note2Value}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br><b>Trace:</b> {{group.traceValue}}</div>\n                      <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                    </div>\n                    <div *ngIf=\"group.newTraceText\">\n                      <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                        <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showWintergartenBool\">\n        <div *ngFor=\"let tableWintergarten of tablesWintergarten; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableWintergarten.number}} table-item\" [ngStyle]=\"{'top': tableWintergarten.topValue + 'px', 'left': tableWintergarten.leftValue + 'px', 'background-color': + tableWintergarten.bgColor, 'height': + tableWintergarten.height + 'px', 'width': + tableWintergarten.width + 'px', 'border': + tableWintergarten.border, 'border-radius': + tableWintergarten.borderRadius, 'transform':  + tableWintergarten.transformValue}\" [style.border]=\"getStyle(tablesWintergarten[j].groups)\" dropdown>\n            <div *ngIf=\"tablesWintergarten[j] !== tablesWintergarten[j+1]\">\n              <p><b>{{tableWintergarten.number}} <br>{{adultWintergarten[j]}}/{{childWintergarten[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableWintergarten, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableWintergarten, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableWintergarten.groups\">\n                    <div *ngIf=\"group.nameValue\">\n                      <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.traceValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Sprache:</b> {{group.languageValue}}<br><b>Zimmer Nummer: </b>{{group.roomNumberValue}}<br><b>Preistyp: </b>{{group.typeOfPriceValue}}<br><b>Anreise: </b>{{group.arrivalValue}}<br><b>Abreise:</b> {{group.departureValue}}<br><b>Personen Anzahl:</b>{{group.numberOfPersonsValue}}<br><b>Kategorie: </b>{{group.categoryValue}}<br><b>Reisebüro: </b>{{group.sourceValue}}<br><b>Notiz1:</b> {{group.note1Value}}<br><b>Notiz2:</b> {{group.note2Value}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br><b>Trace:</b> {{group.traceValue}}</div>\n                      <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                    </div>\n                    <div *ngIf=\"group.newTraceText\">\n                      <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                        <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showAllBool\">\n        <br>\n        <br>\n        <br>\n        <h1 style=\"color: white; margin-top: 200px\">Perfekt um eine Suche zu starten ;-)</h1>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digital-table-plan/tableplan/tableplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
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
    function TableplanComponent(mainService) {
        this.mainService = mainService;
        this.movedSonnbergZirbn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedRestaurant = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedWintergarten = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedPanorama = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeBgColorIfArrival = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.childWintergartenExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.adultWintergartenExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.adultRestaurantExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.childRestaurantExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.adultPanoramaExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.childPanoramaExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.adultSonnbergZirbnExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.childSonnbergZirbnExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
            _this.changeBgColorIfArrival.emit();
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
            _this.changeBgColorIfArrival.emit();
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
    TableplanComponent.prototype.sumUpNumberOfPersons = function () {
        console.log("sumUpNumberOfPersons calld");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAllBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showAllBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablePlanBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTablePlanBool", void 0);
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], TableplanComponent.prototype, "changeBgColorIfArrival", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], TableplanComponent.prototype, "childWintergartenExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], TableplanComponent.prototype, "adultWintergartenExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _h || Object)
], TableplanComponent.prototype, "adultRestaurantExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _j || Object)
], TableplanComponent.prototype, "childRestaurantExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _k || Object)
], TableplanComponent.prototype, "adultPanoramaExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _l || Object)
], TableplanComponent.prototype, "childPanoramaExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _m || Object)
], TableplanComponent.prototype, "adultSonnbergZirbnExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _o || Object)
], TableplanComponent.prototype, "childSonnbergZirbnExport", void 0);
TableplanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tableplan',
        template: __webpack_require__("../../../../../src/app/components/digital-table-plan/tableplan/tableplan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */]) === "function" && _p || Object])
], TableplanComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
//# sourceMappingURL=tableplan.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            console.log('CAN ACTIVATE IS TRUE');
            return true;
        }
        else {
            this.router.navigate(['/login']);
            console.log('CAN ACTIVATE IS FALSE');
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Gets called from submit login form
    AuthService.prototype.authenticateUser = function (user) {
        console.log("Check1");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Gets called from submit login form
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        console.log(JSON.stringify(user));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8000/' + ep;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
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



var MainService = (function () {
    function MainService(http) {
        this.http = http;
        console.log('Task service initialized!');
    }
    MainService.prototype.getImHausList = function () {
        return this.http.get('getImHausList')
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.getTables = function () {
        return this.http.get('tables')
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.getInformationElements = function () {
        return this.http.get('information')
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.getInformationEmployees = function () {
        return this.http.get('informationEmployees')
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.occupyTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('occupyTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.removeTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removeTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.addTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.dispenseTable = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('dispenseTable', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.removePlaceholder = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removePlaceholder', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.addPlaceholder = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addPlaceholder', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.addInformationToTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addInformationToTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.sendInformation = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToTables', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.sendInformationToBox = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToBox', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.deleteInformationElement = function (informationElement) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('deleteInformationElement', informationElement, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.updateImHausListElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateImHausListElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.sendInformationToNoteBlock = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newNote', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.getNoteElements = function () {
        return this.http.get('getNote')
            .map(function (res) { return res.json(); });
    };
    return MainService;
}());
MainService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], MainService);

var _a;
//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

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