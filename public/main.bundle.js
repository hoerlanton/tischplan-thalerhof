webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("./src/app/services/main.service.ts");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")],
        providers: [main_service_1.MainService],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var main_component_1 = __webpack_require__("./src/app/components/digital-table-plan/main.component.ts");
var print_component_1 = __webpack_require__("./src/app/components/digital-table-plan/print/print.component.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var ng2_dragula_1 = __webpack_require__("./node_modules/ng2-dragula/index.js");
var dropdown_1 = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
var speisesaal_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departments/speisesaal/speisesaal.component.ts");
var bar_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departments/bar/bar.component.ts");
var weinstube_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departments/weinstube/weinstube.component.ts");
var terasse_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departments/terasse/terasse.component.ts");
var navigation_component_1 = __webpack_require__("./src/app/components/digital-table-plan/navigation/navigation.component.ts");
var form_component_1 = __webpack_require__("./src/app/components/digital-table-plan/form/form.component.ts");
var tableplan_component_1 = __webpack_require__("./src/app/components/digital-table-plan/tableplan/tableplan.component.ts");
var departmentmenu_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.ts");
var im_haus_list_component_1 = __webpack_require__("./src/app/components/digital-table-plan/im-haus-list/im-haus-list.component.ts");
var departments_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departments/departments.component.ts");
var all_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departments/all/all.component.ts");
var ng2_search_filter_1 = __webpack_require__("./node_modules/ng2-search-filter/dist/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var login_component_1 = __webpack_require__("./src/app/components/digital-table-plan/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/components/digital-table-plan/register/register.component.ts");
var profile_component_1 = __webpack_require__("./src/app/components/digital-table-plan/profile/profile.component.ts");
var auth_guard_1 = __webpack_require__("./src/app/guards/auth.guard.ts");
var validate_service_1 = __webpack_require__("./src/app/services/validate.service.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var appRoutes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: main_component_1.MainComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'dashboard', component: departments_component_1.DepartmentsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [auth_guard_1.AuthGuard] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            main_component_1.MainComponent,
            print_component_1.PrintComponent,
            speisesaal_component_1.SpeisesaalComponent,
            bar_component_1.BarComponent,
            weinstube_component_1.WeinstubeComponent,
            terasse_component_1.TerasseComponent,
            navigation_component_1.NavigationComponent,
            form_component_1.FormComponent,
            tableplan_component_1.TableplanComponent,
            departmentmenu_component_1.DepartmentmenuComponent,
            im_haus_list_component_1.ImHausListComponent,
            departments_component_1.DepartmentsComponent,
            all_component_1.AllComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            profile_component_1.ProfileComponent
        ],
        imports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            angular2_flash_messages_1.FlashMessagesModule,
            ng2_dragula_1.DragulaModule,
            forms_1.ReactiveFormsModule,
            platform_browser_1.BrowserModule,
            dropdown_1.BsDropdownModule.forRoot(),
            ng2_search_filter_1.Ng2SearchPipeModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot(appRoutes),
            router_1.RouterModule.forChild(appRoutes)
        ],
        providers: [validate_service_1.ValidateService, auth_service_1.AuthService, auth_guard_1.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.css":
/***/ (function(module, exports) {

module.exports = "p {\n  margin: 8px 0px 0px 0px;\n  text-align: center;\n}\n\n.dropdown-menu .divider {\n  margin: 0px;\n}\n\n.dropdown-menu {\n  overflow: auto;\n  margin: 0 0 0 20px;\n  width: 200px;\n}\n\n.row4 {\n  margin-top: 90px;\n  min-height: 40px;\n  z-index: 1;\n}\n\n.showTerasse, .showWeinstube, .showBar, .showSpeisesaal, .showAll {\n  padding: 10px;\n}\n\n.col-xs-3 {\n  min-height: 40px;\n  width: 21%;\n  border-radius: 3px;\n}\n\n.btn-group-departments {\n  height: 45px;\n  width: auto;\n  margin: 0px 10px 5px 0px;\n  float: left;\n  text-align: right;\n  display:table-cell;\n  vertical-align:middle;\n}\n\n.abteilungsButton {\n  color: #FFFFFF;\n  border: none;\n}\n\n@media (min-width: 500px) {\n  .row4 {\n    margin-top: 60px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .btn-default {\n    display: inline-block;\n  }\n  .btn-send {\n    display: block;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row4\">\n  <div class=\"col-md-3 col-xs-3\">\n  <div class=\"btn-group-departments\" dropdown>\n  <button dropdownToggle type=\"button\" class=\"abteilungsButton\" [ngStyle]=\"{'background-color': '#' + buttonBgColorDropdownToggle}\"   (mouseenter)=\"mouseEnterDropdownToggle()\"  (mouseleave)=\"mouseLeaveDropdownToggle()\">\n    <div *ngIf=\"showDepartments\">\n     Abteilungen <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n    </div>\n    <div *ngIf=\"showAllBool\">\n      Alle <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n    </div>\n    <div *ngIf=\"showTerasseBool\">\n      Terrasse <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n    </div>\n    <div *ngIf=\"showSpeisesaalBool\">\n       Speisesaal <br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n    </div>\n    <div *ngIf=\"showBarBool\">\n      Bar <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n    </div>\n    <div *ngIf=\"showWeinstubeBool\">\n       Weinstube <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n    </div>\n  </button>\n  <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n      <li role=\"menuitem\" class=\"showTerasse\"  (click)=\"showTerasse()\" (mouseenter)=\"mouseEnterTerasse()\"  (mouseleave)=\"mouseLeaveTerasse()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor1}\">\n        <p [ngStyle]=\"{'color': '#' + fontColor1}\">Terrasse</p>\n      </li>\n    <li class=\"divider dropdown-divider\"></li>\n    <li role=\"menuitem\" class=\"showWeinstube\"  (click)=\"showWeinstube()\" (mouseenter)=\"mouseEnterWeinstube()\"  (mouseleave)=\"mouseLeaveWeinstube()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor2}\">\n        <p [ngStyle]=\"{'color': '#' + fontColor2}\">Weinstube</p>\n      </li>\n    <li class=\"divider dropdown-divider\"></li>\n    <li role=\"menuitem\" class=\"showBar\" (click)=\"showBar()\" (mouseenter)=\"mouseEnterBar()\"  (mouseleave)=\"mouseLeaveBar()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor3}\">\n        <p [ngStyle]=\"{'color': '#' + fontColor3}\">Bar</p>\n      </li>\n    <li class=\"divider dropdown-divider\"></li>\n    <li role=\"menuitem\" class=\"showSpeisesaal\" (click)=\"showSpeisesaal()\" (mouseenter)=\"mouseEnterSpeisesaal()\"  (mouseleave)=\"mouseLeaveSpeisesaal()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor4}\">\n        <p [ngStyle]=\"{'color': '#' + fontColor4}\">Speisesaal</p>\n      </li>\n    <li class=\"divider dropdown-divider\"></li>\n    <li role=\"menuitem\" class=\"showAll\" (click)=\"showAll()\" (mouseenter)=\"mouseEnterAll()\"  (mouseleave)=\"mouseLeaveAll()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor5}\">\n        <p [ngStyle]=\"{'color': '#' + fontColor5}\">Alle</p>\n      </li>\n    <li class=\"divider dropdown-divider\"></li>\n  </ul>\n</div>\n</div>\n  <div class=\"col-md-3 col-xs-3\" (click)=\"showInfoForm()\"  (mouseenter)=\"mouseEnterShowInfoForm()\"  (mouseleave)=\"mouseLeaveShowInfoForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorInfoForm}\">\n    <p [ngStyle]=\"{'color': '#' + fontColorInfoForm}\">Trace</p>\n  </div>\n  <div class=\"col-md-3 col-xs-3\"  (click)=\"showNoteForm()\"  (mouseenter)=\"mouseEnterShowNoteForm()\"  (mouseleave)=\"mouseLeaveShowNoteForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorNoteForm}\">\n    <p [ngStyle]=\"{'color': '#' + fontColorNoteForm}\">Notiz</p>\n  </div>\n  <div class=\"col-md-3 col-xs-3\" style=\"padding-left: 5px\" (click)=\"showTablePlan()\"  (mouseenter)=\"mouseEnterShowTablePlan()\"  (mouseleave)=\"mouseLeaveShowTablePlan()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorShowTablePlan}\">\n    <p  [ngStyle]=\"{'color': '#' + fontColorShowTablePlan}\">Tischplan</p>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var DepartmentmenuComponent = (function () {
    function DepartmentmenuComponent() {
        this.showTerasseBoolChange = new core_1.EventEmitter();
        this.showWeinstubeBoolChange = new core_1.EventEmitter();
        this.showBarBoolChange = new core_1.EventEmitter();
        this.showSpeisesaalBoolChange = new core_1.EventEmitter();
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
    DepartmentmenuComponent.prototype.showTerasse = function () {
        //console.log("showTerasse!");
        this.showTerasseBool = true;
        this.showWeinstubeBool = false;
        this.showBarBool = false;
        this.showSpeisesaalBool = false;
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
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showBarBoolChange.emit(this.showBarBool);
        this.showWeinstubeBoolChange.emit(this.showWeinstubeBool);
        this.showSpeisesaalBoolChange.emit(this.showSpeisesaalBool);
        this.showAllBoolChange.emit(this.showAllBool);
    };
    DepartmentmenuComponent.prototype.showWeinstube = function () {
        //console.log("showWeinstube!");
        this.showTerasseBool = false;
        this.showWeinstubeBool = true;
        //console.log(this.showWeinstubeBool);
        this.showBarBool = false;
        this.showSpeisesaalBool = false;
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
        this.showWeinstubeBoolChange.emit(this.showWeinstubeBool);
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showBarBoolChange.emit(this.showBarBool);
        this.showSpeisesaalBoolChange.emit(this.showSpeisesaalBool);
        this.showAllBoolChange.emit(this.showAllBool);
    };
    DepartmentmenuComponent.prototype.showBar = function () {
        //console.log("showBar!");
        this.showTerasseBool = false;
        this.showWeinstubeBool = false;
        this.showBarBool = true;
        this.showSpeisesaalBool = false;
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
        this.showBarBoolChange.emit(this.showBarBool);
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showWeinstubeBoolChange.emit(this.showWeinstubeBool);
        this.showSpeisesaalBoolChange.emit(this.showSpeisesaalBool);
        this.showAllBoolChange.emit(this.showAllBool);
    };
    DepartmentmenuComponent.prototype.showSpeisesaal = function () {
        //console.log("showSpeisesaal!");
        this.showTerasseBool = false;
        this.showWeinstubeBool = false;
        this.showBarBool = false;
        this.showSpeisesaalBool = true;
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
        this.showSpeisesaalBoolChange.emit(this.showSpeisesaalBool);
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showBarBoolChange.emit(this.showBarBool);
        this.showWeinstubeBoolChange.emit(this.showWeinstubeBool);
        this.showAllBoolChange.emit(this.showAllBool);
    };
    DepartmentmenuComponent.prototype.showAll = function () {
        //console.log("showAll!");
        this.showTerasseBool = false;
        this.showWeinstubeBool = false;
        this.showBarBool = false;
        this.showSpeisesaalBool = false;
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
        this.showSpeisesaalBoolChange.emit(this.showSpeisesaalBool);
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showBarBoolChange.emit(this.showBarBool);
        this.showWeinstubeBoolChange.emit(this.showWeinstubeBool);
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
    DepartmentmenuComponent.prototype.mouseEnterTerasse = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor1 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor1 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveTerasse = function () {
        if (this.buttonBgColor1 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor1 = "154846";
        }
        else if (this.buttonBgColor1 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor1 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterWeinstube = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor2 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveWeinstube = function () {
        if (this.buttonBgColor2 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "154846";
        }
        else if (this.buttonBgColor2 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterBar = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor3 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveBar = function () {
        if (this.buttonBgColor3 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "154846";
        }
        else if (this.buttonBgColor3 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterSpeisesaal = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor4 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveSpeisesaal = function () {
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
    core_1.Input('buttonBgColor1'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor1", void 0);
__decorate([
    core_1.Input('buttonBgColor2'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor2", void 0);
__decorate([
    core_1.Input('buttonBgColor3'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor3", void 0);
__decorate([
    core_1.Input('buttonBgColor4'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor4", void 0);
__decorate([
    core_1.Input('buttonBgColor5'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor5", void 0);
__decorate([
    core_1.Input('fontColor1'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor1", void 0);
__decorate([
    core_1.Input('fontColor2'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor2", void 0);
__decorate([
    core_1.Input('fontColor3'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor3", void 0);
__decorate([
    core_1.Input('fontColor4'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor4", void 0);
__decorate([
    core_1.Input('fontColor5'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor5", void 0);
__decorate([
    core_1.Input('showWeinstubeBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showWeinstubeBool", void 0);
__decorate([
    core_1.Input('showBarBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showBarBool", void 0);
__decorate([
    core_1.Input('showTerasseBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTerasseBool", void 0);
__decorate([
    core_1.Input('showSpeisesaalBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showSpeisesaalBool", void 0);
__decorate([
    core_1.Input('showAllBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showAllBool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], DepartmentmenuComponent.prototype, "showTerasseBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], DepartmentmenuComponent.prototype, "showWeinstubeBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], DepartmentmenuComponent.prototype, "showBarBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], DepartmentmenuComponent.prototype, "showSpeisesaalBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], DepartmentmenuComponent.prototype, "showAllBoolChange", void 0);
__decorate([
    core_1.Input('buttonBgColorInfoForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorInfoForm", void 0);
__decorate([
    core_1.Input('fontColorInfoForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorInfoForm", void 0);
__decorate([
    core_1.Input('fontColorNoteForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorNoteForm", void 0);
__decorate([
    core_1.Input('buttonBgColorNoteForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorNoteForm", void 0);
__decorate([
    core_1.Input('buttonBgColorShowTablePlan'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorShowTablePlan", void 0);
__decorate([
    core_1.Input('fontColorShowTablePlan'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorShowTablePlan", void 0);
__decorate([
    core_1.Input('showNoteFormBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showNoteFormBool", void 0);
__decorate([
    core_1.Input('showInfoFormBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    core_1.Input('showTablePlanBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], DepartmentmenuComponent.prototype, "showNoteFormBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], DepartmentmenuComponent.prototype, "showInfoFormBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_h = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _h || Object)
], DepartmentmenuComponent.prototype, "showTablePlanBoolChange", void 0);
DepartmentmenuComponent = __decorate([
    core_1.Component({
        selector: 'app-departmentmenu',
        template: __webpack_require__("./src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DepartmentmenuComponent);
exports.DepartmentmenuComponent = DepartmentmenuComponent;
var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=departmentmenu.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/departments/all/all.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showAllBool\">\n  <div *ngFor=\"let table of tables; let j = index;\">\n      <h4><b> Tisch:</b>{{table.number}} </h4><br>\n      <div class='cards-container' id='containerTables' [ngStyle]=\"{'background-color': + table.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + table.bgColor}\">\n          <div *ngIf=\"table.isOccupied === 'true'\">\n              <div *ngIf=\"table.nameValue\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Zimmernummer:</b> {{table.roomNumberValue}}<br>\n                  <b> Name:</b> {{table.nameValue}}<br>\n                  <b> Anreise Datum:</b> {{table.arrivalValue}}<br>\n                  <b> Abreise Datum:</b> {{table.departureValue}}<br>\n                  <b> HP/F:</b> {{table.priceValue}}<br>\n                  <b> Personenanzahl:</b> {{table.numberOfPersonsValue}}<br>\n                  <b> Nation:</b> {{table.nationValue}}<br>\n                </p>\n              </div>\n            <div *ngIf=\"table.newTraceName\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{table.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{table.newTraceText}} <br> <b> Tischnummer: </b>{{table.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{table.newTraceEmployee}} <br> <b> Name: </b>{{table.newTraceName}} <br> <b> Datum: </b>{{table.newTraceDate}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"table.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"tables\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px; text-align: center\">Listen-Element hier hin ziehen! <span>{{table.number}} {{table.department}} {{j}}</span></p>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/departments/all/all.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var core_2 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var AllComponent = (function () {
    function AllComponent() {
        this.occupied = new core_1.EventEmitter();
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
    core_1.Input('showAllBool'),
    __metadata("design:type", Boolean)
], AllComponent.prototype, "showAllBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], AllComponent.prototype, "term", void 0);
__decorate([
    core_1.Input('tables'),
    __metadata("design:type", Object)
], AllComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('tablesTempDeparture'),
    __metadata("design:type", Object)
], AllComponent.prototype, "tablesTempDeparture", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AllComponent.prototype, "occupied", void 0);
AllComponent = __decorate([
    core_2.Pipe({
        name: 'filter',
    }),
    core_1.Component({
        selector: 'app-all',
        template: __webpack_require__("./src/app/components/digital-table-plan/departments/all/all.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AllComponent);
exports.AllComponent = AllComponent;
var _a;
//# sourceMappingURL=all.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/departments/bar/bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showBarBool\">\n  <div *ngFor=\"let tableBar of tablesBar; let j = index;\">\n    <div *ngIf=\"tablesBar[j] !== tablesBar[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableBar, j)\">{{tableBar.isOccupied === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableBar.number}} </h4><br>\n      <div class='cards-container' id='containerBar' [ngStyle]=\"{'background-color': + tableBar.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableBar.bgColor}\">\n          <div *ngIf=\"tableBar.isOccupied === 'true'\">\n            <div *ngFor=\"let group of tableBar.groups; let j = index;\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Zimmernummer:</b> {{group.roomNumberValue}}<br>\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Anreise Datum:</b> {{group.arrivalValue}}<br>\n                    <b> Abreise Datum:</b> {{group.departureValue}}<br>\n                    <b> HP/F:</b> {{group.priceValue}}<br>\n                    <b> Personenanzahl:</b> {{group.numberOfPersonsValue}}<br>\n                    <b> Nation:</b> {{group.nationValue}}<br>\n                  </p>\n                </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableBar.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Bar\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px;\">Listen-Element hier hin ziehen! {{tableBar.number}} {{tableBar.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/departments/bar/bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var BarComponent = (function () {
    function BarComponent() {
        this.occupied = new core_1.EventEmitter();
        this.dateGenerated = new Date();
    }
    BarComponent.prototype.ngOnInit = function () {
    };
    BarComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    BarComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    BarComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesBar = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesBar = tables.filter(function (item) {
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
    return BarComponent;
}());
__decorate([
    core_1.Input('tablesBar'),
    __metadata("design:type", Array)
], BarComponent.prototype, "tablesBar", void 0);
__decorate([
    core_1.Input('showBarBool'),
    __metadata("design:type", Boolean)
], BarComponent.prototype, "showBarBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], BarComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], BarComponent.prototype, "occupied", void 0);
BarComponent = __decorate([
    core_1.Component({
        selector: 'app-bar',
        template: __webpack_require__("./src/app/components/digital-table-plan/departments/bar/bar.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BarComponent);
exports.BarComponent = BarComponent;
var _a;
//# sourceMappingURL=bar.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/departments/departments.component.html":
/***/ (function(module, exports) {

module.exports = "<app-terasse [term]=\"term\" [tablesTerasse]=\"tablesTerasse\" [showTerasseBool]=\"showTerasseBool\" (occupied)=\"occupied($event)\"></app-terasse>\n<app-bar [term]=\"term\" [tablesBar]=\"tablesBar\" [showBarBool]=\"showBarBool\"  (occupied)=\"occupied($event)\"></app-bar>\n<app-weinstube [term]=\"term\" [tablesWeinstube]=\"tablesWeinstube\" [showWeinstubeBool]=\"showWeinstubeBool\"  (occupied)=\"occupied($event)\"></app-weinstube>\n<app-speisesaal [term]=\"term\" [tablesSpeisesaal]=\"tablesSpeisesaal\" [showSpeisesaalBool]=\"showSpeisesaalBool\"  (occupied)=\"occupied($event)\"></app-speisesaal>\n<app-all [term]=\"term\" [tables]=\"tables\" [tablesTempDeparture]=\"tablesTempDeparture\" [showAllBool]=\"showAllBool\" (occupied)=\"occupied($event)\"></app-all>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/departments/departments.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("./src/app/services/main.service.ts");
var speisesaal_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departments/speisesaal/speisesaal.component.ts");
var all_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departments/all/all.component.ts");
var weinstube_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departments/weinstube/weinstube.component.ts");
var bar_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departments/bar/bar.component.ts");
var terasse_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departments/terasse/terasse.component.ts");
var DepartmentsComponent = (function () {
    function DepartmentsComponent(mainService) {
        this.mainService = mainService;
        this.dispensedTerasse = new core_1.EventEmitter();
        this.dispensedBar = new core_1.EventEmitter();
        this.dispensedSpeisesaal = new core_1.EventEmitter();
        this.dispensedWeinstube = new core_1.EventEmitter();
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
                if (response[0].tables[j].department === "Terasse") {
                    _this.dispensedTerasse.emit(response[0].tables);
                }
                else if (response[0].tables[j].department === "Weinstube") {
                    _this.dispensedWeinstube.emit(response[0].tables);
                }
                else if (response[0].tables[j].department === "Bar") {
                    _this.dispensedBar.emit(response[0].tables);
                }
                else if (response[0].tables[j].department === "Speisesaal") {
                    _this.dispensedSpeisesaal.emit(response[0].tables);
                    console.log("Speisesaal" + JSON.stringify(response[0].tables));
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
            //console.log(this.tablesTerasse[j].placeholder);
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
                if (response[0].department === "Terasse") {
                    _this.dispensedTerasse.emit(response[0].tables);
                }
                else if (response[0].department === "Weinstube") {
                    _this.dispensedWeinstube.emit(response[0].tables);
                }
                else if (response[0].department === "Bar") {
                    _this.dispensedBar.emit(response[0].tables);
                }
                else if (response[0].department === "Speisesaal") {
                    _this.dispensedSpeisesaal.emit(response[0].tables);
                }
            }
        }
        // console.log(this.tablesTerasse[arrayIndex]);
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
                if (response.tables[0].department === "Terasse") {
                    _this.tablesTerasse[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Weinstube") {
                    _this.tablesWeinstube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Bar") {
                    _this.tablesBar[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Speisesaal") {
                    _this.tablesSpeisesaal[arrayIndex] = response.tables[0];
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
                            // this.tablesBar[j].arrivalValue
                            var dateToday = String(_this.dateTodayGenerated).substring(0, 15);
                            //console.log('Parsed Date --->: ' + this.parsedDate[0]);
                            //console.log('this.dateGenerated --->: ' + dateToday);
                            if (dateToday.indexOf(_this.parsedDate[0]) !== -1) {
                                if (_this.tablesChangeBgColorIfArrival[a].department === "Weinstube") {
                                    //console.log(this.tablesWeinstube);
                                    if (_this.tablesWeinstube[b]) {
                                        //console.log(this.tablesWeinstube[b]);
                                        _this.tablesWeinstube[b].bgColor = "#0a7a74";
                                    }
                                }
                                else if (_this.tablesChangeBgColorIfArrival[a].department === "Speisesaal") {
                                    if (_this.tablesSpeisesaal[b]) {
                                        _this.tablesSpeisesaal[b].bgColor = "#0a7a74";
                                    }
                                }
                                else if (_this.tablesChangeBgColorIfArrival[a].department === "Terasse") {
                                    if (_this.tablesTerasse[b]) {
                                        _this.tablesTerasse[b].bgColor = "#0a7a74";
                                    }
                                }
                                else if (_this.tablesChangeBgColorIfArrival[a].department === "Bar") {
                                    if (_this.tablesBar[b]) {
                                        _this.tablesBar[b].bgColor = "#0a7a74";
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
        if (this.showWeinstubeBool) {
            this.panoramaComponent.transform(this.tablesWeinstube, term);
        }
        else if (this.showBarBool) {
            this.restaurantComponent.transform(this.tablesBar, term);
        }
        else if (this.showSpeisesaalBool) {
            this.wintergartenComponent.transform(this.tablesSpeisesaal, term);
        }
        else if (this.showTerasseBool) {
            this.sonnbergZirbnComponent.transform(this.tablesTerasse, term);
        }
        else if (this.showAllBool) {
            this.allComponent.transform(this.tables, term);
        }
    };
    return DepartmentsComponent;
}());
__decorate([
    core_1.Input('tablesSpeisesaal'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesSpeisesaal", void 0);
__decorate([
    core_1.Input('showSpeisesaalBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showSpeisesaalBool", void 0);
__decorate([
    core_1.Input('tablesTerasse'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesTerasse", void 0);
__decorate([
    core_1.Input('showTerasseBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showTerasseBool", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesWeinstube", void 0);
__decorate([
    core_1.Input('tables'),
    __metadata("design:type", Object)
], DepartmentsComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('showWeinstubeBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showWeinstubeBool", void 0);
__decorate([
    core_1.Input('tablesBar'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesBar", void 0);
__decorate([
    core_1.Input('showBarBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showBarBool", void 0);
__decorate([
    core_1.Input('showAllBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showAllBool", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DepartmentsComponent.prototype, "tablesTempDeparture", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], DepartmentsComponent.prototype, "term", void 0);
__decorate([
    core_1.ViewChild(all_component_1.AllComponent),
    __metadata("design:type", typeof (_a = typeof all_component_1.AllComponent !== "undefined" && all_component_1.AllComponent) === "function" && _a || Object)
], DepartmentsComponent.prototype, "allComponent", void 0);
__decorate([
    core_1.ViewChild(weinstube_component_1.WeinstubeComponent),
    __metadata("design:type", typeof (_b = typeof weinstube_component_1.WeinstubeComponent !== "undefined" && weinstube_component_1.WeinstubeComponent) === "function" && _b || Object)
], DepartmentsComponent.prototype, "panoramaComponent", void 0);
__decorate([
    core_1.ViewChild(bar_component_1.BarComponent),
    __metadata("design:type", typeof (_c = typeof bar_component_1.BarComponent !== "undefined" && bar_component_1.BarComponent) === "function" && _c || Object)
], DepartmentsComponent.prototype, "restaurantComponent", void 0);
__decorate([
    core_1.ViewChild(speisesaal_component_1.SpeisesaalComponent),
    __metadata("design:type", typeof (_d = typeof speisesaal_component_1.SpeisesaalComponent !== "undefined" && speisesaal_component_1.SpeisesaalComponent) === "function" && _d || Object)
], DepartmentsComponent.prototype, "wintergartenComponent", void 0);
__decorate([
    core_1.ViewChild(terasse_component_1.TerasseComponent),
    __metadata("design:type", typeof (_e = typeof terasse_component_1.TerasseComponent !== "undefined" && terasse_component_1.TerasseComponent) === "function" && _e || Object)
], DepartmentsComponent.prototype, "sonnbergZirbnComponent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], DepartmentsComponent.prototype, "dispensedTerasse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], DepartmentsComponent.prototype, "dispensedBar", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_h = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _h || Object)
], DepartmentsComponent.prototype, "dispensedSpeisesaal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_j = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _j || Object)
], DepartmentsComponent.prototype, "dispensedWeinstube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_k = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _k || Object)
], DepartmentsComponent.prototype, "updateAzList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_l = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _l || Object)
], DepartmentsComponent.prototype, "updateImHausListElement", void 0);
DepartmentsComponent = __decorate([
    core_1.Component({
        selector: 'app-departments',
        template: __webpack_require__("./src/app/components/digital-table-plan/departments/departments.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_m = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _m || Object])
], DepartmentsComponent);
exports.DepartmentsComponent = DepartmentsComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=departments.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/departments/speisesaal/speisesaal.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showSpeisesaalBool\">\n  <div *ngFor=\"let tableSpeisesaal of tablesSpeisesaal; let j = index;\">\n    <div *ngIf=\"tablesSpeisesaal[j] !== tablesSpeisesaal[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableSpeisesaal, j)\">{{tableSpeisesaal.isOccupied === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableSpeisesaal.number}} </h4><br>\n      <div class='cards-container' id='containerSpeisesaal' [ngStyle]=\"{'background-color': + tableSpeisesaal.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableSpeisesaal.bgColor}\">\n          <div *ngIf=\"tableSpeisesaal.isOccupied === 'true'\">\n            <div *ngFor=\"let group of tableSpeisesaal.groups; let j = index;\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Zimmernummer:</b> {{group.roomNumberValue}}<br>\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Anreise Datum:</b> {{group.arrivalValue}}<br>\n                    <b> Abreise Datum:</b> {{group.departureValue}}<br>\n                    <b> HP/F:</b> {{group.priceValue}}<br>\n                    <b> Personenanzahl:</b> {{group.numberOfPersonsValue}}<br>\n                    <b> Nation:</b> {{group.nationValue}}<br>\n                  </p>\n                </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableSpeisesaal.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Speisesaal\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableSpeisesaal.number}} {{tableSpeisesaal.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/departments/speisesaal/speisesaal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var SpeisesaalComponent = (function () {
    function SpeisesaalComponent() {
        this.occupied = new core_1.EventEmitter();
    }
    SpeisesaalComponent.prototype.ngOnInit = function () {
    };
    SpeisesaalComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    SpeisesaalComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    SpeisesaalComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesSpeisesaal = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesSpeisesaal = tables.filter(function (item) {
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
    return SpeisesaalComponent;
}());
__decorate([
    core_1.Input('tablesSpeisesaal'),
    __metadata("design:type", Array)
], SpeisesaalComponent.prototype, "tablesSpeisesaal", void 0);
__decorate([
    core_1.Input('showSpeisesaalBool'),
    __metadata("design:type", Boolean)
], SpeisesaalComponent.prototype, "showSpeisesaalBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], SpeisesaalComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], SpeisesaalComponent.prototype, "occupied", void 0);
SpeisesaalComponent = __decorate([
    core_1.Component({
        selector: 'app-speisesaal',
        template: __webpack_require__("./src/app/components/digital-table-plan/departments/speisesaal/speisesaal.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SpeisesaalComponent);
exports.SpeisesaalComponent = SpeisesaalComponent;
var _a;
//# sourceMappingURL=speisesaal.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/departments/terasse/terasse.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTerasseBool\">\n  <div *ngFor=\"let tableTerasse of tablesTerasse; let j = index;\">\n    <div *ngIf=\"tablesTerasse[j] !== tablesTerasse[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableTerasse, j)\">{{tableTerasse.isOccupied === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableTerasse.number}} </h4><br>\n      <div class='cards-container' id='containerTerasse' [ngStyle]=\"{'background-color': + tableTerasse.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableTerasse.bgColor}\">\n          <div *ngIf=\"tableTerasse.isOccupied === 'true'\">\n            <div *ngFor=\"let group of tableTerasse.groups; let j = index;\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Zimmernummer:</b> {{group.roomNumberValue}}<br>\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Anreise Datum:</b> {{group.arrivalValue}}<br>\n                    <b> Abreise Datum:</b> {{group.departureValue}}<br>\n                    <b> HP/F:</b> {{group.priceValue}}<br>\n                    <b> Personenanzahl:</b> {{group.numberOfPersonsValue}}<br>\n                    <b> Nation:</b> {{group.nationValue}}<br>\n                  </p>\n                </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableTerasse.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Terasse\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px;\">Listen-Element hier hin ziehen! {{tableTerasse.number}} {{tableTerasse.department}} {{j}} </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/departments/terasse/terasse.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var TerasseComponent = (function () {
    function TerasseComponent() {
        this.occupied = new core_1.EventEmitter();
    }
    TerasseComponent.prototype.ngOnInit = function () {
    };
    TerasseComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    TerasseComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    TerasseComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesTerasse = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesTerasse = tables.filter(function (item) {
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
    return TerasseComponent;
}());
__decorate([
    core_1.Input('tablesTerasse'),
    __metadata("design:type", Array)
], TerasseComponent.prototype, "tablesTerasse", void 0);
__decorate([
    core_1.Input('showTerasseBool'),
    __metadata("design:type", Boolean)
], TerasseComponent.prototype, "showTerasseBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], TerasseComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TerasseComponent.prototype, "occupied", void 0);
TerasseComponent = __decorate([
    core_1.Component({
        selector: 'app-terasse',
        template: __webpack_require__("./src/app/components/digital-table-plan/departments/terasse/terasse.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TerasseComponent);
exports.TerasseComponent = TerasseComponent;
var _a;
//# sourceMappingURL=terasse.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/departments/weinstube/weinstube.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showWeinstubeBool\">\n  <div *ngFor=\"let tableWeinstube of tablesWeinstube; let j = index;\">\n    <div *ngIf=\"tablesWeinstube[j] !== tablesWeinstube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableWeinstube, j)\">{{tableWeinstube.isOccupied === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableWeinstube.number}} </h4><br>\n      <div class='cards-container' id='containerWeinstube' [ngStyle]=\"{'background-color': + tableWeinstube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableWeinstube.bgColor}\">\n          <div *ngIf=\"tableWeinstube.isOccupied === 'true'\">\n            <div *ngFor=\"let group of tableWeinstube.groups; let j = index;\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Zimmernummer:</b> {{group.roomNumberValue}}<br>\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Anreise Datum:</b> {{group.arrivalValue}}<br>\n                    <b> Abreise Datum:</b> {{group.departureValue}}<br>\n                    <b> HP/F:</b> {{group.priceValue}}<br>\n                    <b> Personenanzahl:</b> {{group.numberOfPersonsValue}}<br>\n                    <b> Nation:</b> {{group.nationValue}}<br>\n                  </p>\n                </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableWeinstube.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Weinstube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px; text-align: center\"> Listen-Element hier hin ziehen! {{tableWeinstube.number}} {{tableWeinstube.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/departments/weinstube/weinstube.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var WeinstubeComponent = (function () {
    function WeinstubeComponent() {
        this.occupied = new core_1.EventEmitter();
        this.dateGenerated = new Date();
    }
    WeinstubeComponent.prototype.ngOnInit = function () {
    };
    WeinstubeComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    WeinstubeComponent.prototype.getStyle = function (j) {
        //console.log(j);
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    WeinstubeComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesWeinstube = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesWeinstube = tables.filter(function (item) {
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
    return WeinstubeComponent;
}());
__decorate([
    core_1.Input('tablesWeinstube'),
    __metadata("design:type", Array)
], WeinstubeComponent.prototype, "tablesWeinstube", void 0);
__decorate([
    core_1.Input('showWeinstubeBool'),
    __metadata("design:type", Boolean)
], WeinstubeComponent.prototype, "showWeinstubeBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], WeinstubeComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], WeinstubeComponent.prototype, "occupied", void 0);
WeinstubeComponent = __decorate([
    core_1.Component({
        selector: 'app-weinstube',
        template: __webpack_require__("./src/app/components/digital-table-plan/departments/weinstube/weinstube.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WeinstubeComponent);
exports.WeinstubeComponent = WeinstubeComponent;
var _a;
//# sourceMappingURL=weinstube.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showNoteFormBool\">\n  <div *ngIf=\"showAllBool === false\">\n    <div class=\"note\">\n      <div *ngIf=\"showWeinstubeBool\">\n        <div *ngFor=\"let noteElement of noteElements\" >\n          <div *ngIf=\"noteElement.departmentNoteInput === 'Weinstube'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p style=\"color: white\"> <b> Note: </b>{{noteElement.noteInput === '' ? \"Keine Notiz\" : noteElement.noteInput}} <br><b>  Datum: </b> {{noteElement.noteInput === '' ? \"\" : noteElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showBarBool\">\n        <div *ngFor=\"let noteElement of noteElements\">\n          <div *ngIf=\"noteElement.departmentNoteInput === 'Bar'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p style=\"color: white\"> <b> Note: </b>{{noteElement.noteInput === '' ? \"Keine Notiz\" : noteElement.noteInput}} <br> <b> Datum: </b> {{noteElement.noteInput === '' ? \"\" : noteElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTerasseBool\">\n        <div *ngFor=\"let noteElement of noteElements\">\n          <div *ngIf=\"noteElement.departmentNoteInput === 'Terasse'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p style=\"color: white\"> <b> Note: </b>{{noteElement.noteInput === '' ? \"Keine Notiz\" : noteElement.noteInput}}<br> <b> Datum: </b>{{noteElement.noteInput === '' ? \"\" : noteElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showSpeisesaalBool\">\n        <div *ngFor=\"let noteElement of noteElements\">\n          <div *ngIf=\"noteElement.departmentNoteInput === 'Speisesaal'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p style=\"color: white\"> <b> Note: </b>{{noteElement.noteInput === '' ? \"Keine Notiz\" : noteElement.noteInput}} <br> <b> Datum: </b> {{noteElement.noteInput === '' ? \"\" : noteElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <form class=\"SendNote\"  #myForm=\"ngForm\" (submit)=\"sendNote($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\" style=\"min-height: 250px\">\n        <div class=\"col-lg-12\">\n          <label for=\"department\" style=\"padding-bottom: 20px; color: #FFFFFF\">Abteilung</label>\n          <select class=\"form-control\"  id=\"department\" style=\"margin-bottom: 10px; width: 100%\" required [(ngModel)]=\"departmentNoteInput\" placeholder=\"Abteilung auswählen\" name=\"departmentNoteInput\">\n            <option *ngFor=\"let department of departments\"\n                    [value]=\"department\">\n              {{department}}\n            </option>\n          </select>\n        </div>\n        <div class=\"col-lg-12\">\n                <textarea id=\"noteText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"noteInput\" placeholder=\"Note hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px;\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n<div *ngIf=\"showInfoFormBool\">\n  <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"sendInformation($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"name\" [(ngModel)]=\"nameTraceInput\" name=\"Name\" placeholder=\"Name\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"roomNumber\" [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Zimmer Nummer\">\n        </div>\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"tableNumber\" [(ngModel)]=\"tableNumber\" name=\"tableNumber\" placeholder=\"Table Nummer\">\n          <select  class=\"form-control\" style=\"margin-top: 20px\" id=\"employee\" [(ngModel)]=\"employee\" name=\"employee\" placeholder=\"Mitarbeiter\">\n            <option *ngFor=\"let employee of employees\"\n                    [value]=\"employee\">\n              {{employee}}\n            </option>\n          </select>\n        </div>\n        <div class=\"col-lg-12 col-xs-12\">\n                <textarea id=\"informationText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"title\" placeholder=\"Trace hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px;\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/form/form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("./src/app/services/main.service.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var FormComponent = (function () {
    function FormComponent(mainService, _flashMessagesService) {
        this.mainService = mainService;
        this._flashMessagesService = _flashMessagesService;
        this.newInformationElements = [];
        this.noteResponse = new core_1.EventEmitter();
        this.changeColorIfArrivalExport = new core_1.EventEmitter();
        this.parts = [];
        this.departments = [];
        this.employees = [];
        this.departments = ["Terasse", "Bar", "Speisesaal", "Weinstube"];
        this.employees = ["Test1", "Test2", "Test3", "Test4"];
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
                    if (Information.tables[0].department === "Terasse") {
                        for (var i = 0; i < _this.tablesTerasse.length; i++) {
                            if (_this.tablesTerasse[i].number === Information.tables[0].number) {
                                _this.tablesTerasse[i] = Information.tables[0];
                            }
                        }
                    }
                    else if (Information.tables[0].department === "Weinstube") {
                        for (var i = 0; i < _this.tablesWeinstube.length; i++) {
                            if (_this.tablesWeinstube[i].number === Information.tables[0].number) {
                                _this.tablesWeinstube[i] = Information.tables[0];
                            }
                        }
                    }
                    else if (Information.tables[0].department === "Bar") {
                        for (var i = 0; i < _this.tablesBar.length; i++) {
                            if (_this.tablesBar[i].number === Information.tables[0].number) {
                                _this.tablesBar[i] = Information.tables[0];
                            }
                        }
                    }
                    else if (Information.tables[0].department === "Speisesaal") {
                        for (var i = 0; i < _this.tablesSpeisesaal.length; i++) {
                            if (_this.tablesSpeisesaal[i].number === Information.tables[0].number) {
                                _this.tablesSpeisesaal[i] = Information.tables[0];
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
    core_1.Input('newInformationElements'),
    __metadata("design:type", Array)
], FormComponent.prototype, "newInformationElements", void 0);
__decorate([
    core_1.Input('dateGenerated'),
    __metadata("design:type", Object)
], FormComponent.prototype, "dateGenerated", void 0);
__decorate([
    core_1.Input('title'),
    __metadata("design:type", String)
], FormComponent.prototype, "title", void 0);
__decorate([
    core_1.Input('roomNumber'),
    __metadata("design:type", String)
], FormComponent.prototype, "roomNumber", void 0);
__decorate([
    core_1.Input('tableNumber'),
    __metadata("design:type", String)
], FormComponent.prototype, "tableNumber", void 0);
__decorate([
    core_1.Input('nameTraceInput'),
    __metadata("design:type", String)
], FormComponent.prototype, "nameTraceInput", void 0);
__decorate([
    core_1.Input('employee'),
    __metadata("design:type", String)
], FormComponent.prototype, "employee", void 0);
__decorate([
    core_1.Input('tablesBar'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesBar", void 0);
__decorate([
    core_1.Input('tablesWeinstube'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesWeinstube", void 0);
__decorate([
    core_1.Input('tablesSpeisesaal'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesSpeisesaal", void 0);
__decorate([
    core_1.Input('tablesTerasse'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesTerasse", void 0);
__decorate([
    core_1.Input('showInfoFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    core_1.Input('showNoteFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showNoteFormBool", void 0);
__decorate([
    core_1.Input('noteElements'),
    __metadata("design:type", Object)
], FormComponent.prototype, "noteElements", void 0);
__decorate([
    core_1.Input('showSpeisesaalBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showSpeisesaalBool", void 0);
__decorate([
    core_1.Input('showTerasseBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showTerasseBool", void 0);
__decorate([
    core_1.Input('showWeinstubeBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showWeinstubeBool", void 0);
__decorate([
    core_1.Input('showBarBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showBarBool", void 0);
__decorate([
    core_1.Input('showAllBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showAllBool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], FormComponent.prototype, "noteResponse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], FormComponent.prototype, "changeColorIfArrivalExport", void 0);
FormComponent = __decorate([
    core_1.Component({
        selector: 'app-form',
        template: __webpack_require__("./src/app/components/digital-table-plan/form/form.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _c || Object, typeof (_d = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _d || Object])
], FormComponent);
exports.FormComponent = FormComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/im-haus-list/im-haus-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74;\">Zukünftige Anreisen</h3>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListElement of imHausListElemente\">\n      <div *ngIf=\"!imHausListElement.isArrival\">\n        <div class='cards-container' id='container1' [dragula]='\"evented-bag\"'>\n          <div class=\"card\" id=\"card1\" [ngStyle]=\"{'background-color': '#' + imHausListElement.bgColor}\">\n            <p> <b>Name:</b> {{imHausListElement.name}}<br>\n              <b>Nation:</b> {{imHausListElement.nation}}<br>\n              <b>Zimmernummer:</b> {{imHausListElement.roomNumber}}<br>\n              <b>Anreise:</b> {{imHausListElement.arrival}}<br>\n              <b>Abreise:</b> {{imHausListElement.departure}}<br>\n              <b>HP/F:</b> {{imHausListElement.price}}<br>\n              <b>Personen Anzahl:</b> {{imHausListElement.numberOfPersons}}<br>\n            </p>\n            <div *ngIf=\"imHausListElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"arrivalTextButton\" style=\"height: 45px\">\n<h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74; max-width: 50%; float: left;\">Anreisen</h3><div class=\"btn-group\" style=\"float: right\" dropdown>\n  <button style=\"margin: 10px 0 0 0\" dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">Heute/Morgen<span class=\"caret\"></span></button>\n  <ul *dropdownMenu class=\"dropdown-menu\" style=\"padding: 0px; height: auto\" role=\"menu\">\n    <div style=\"margin: 0 0 0 0; padding: 10px\" class=\"changeToday\" (mouseenter)=\"mouseEnterChangeTodayButton()\"  (mouseleave)=\"mouseLeaveChangeTodayButton()\" (click)=\"changeDayToToday($event); sortList($event)\" [ngStyle]=\"{'background-color': '#' + bgColorToday}\"><p >Heute</p></div>\n    <div style=\"margin: 0 0 0 0; padding: 10px\" class=\"changeTomorrow\" (mouseenter)=\"mouseEnterChangeTomorrowButton()\"  (mouseleave)=\"mouseLeaveChangeTomorrowButton()\" (click)=\"changeDayToTomorrow($event); sortList($event)\" [ngStyle]=\"{'background-color': '#' + bgColorTomorrow}\"><p >Morgen</p></div>\n  </ul>\n</div>\n</div>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListElement of imHausListElemente\">\n      <div *ngIf=\"imHausListElement.isArrival\">\n        <div class='cards-container' id='container2' [dragula]='\"evented-bag\"'>\n          <div class=\"card\" id=\"card2\" [ngStyle]=\"{'background-color': '#' + imHausListElement.bgColor}\">\n            <p> <b>Name:</b> {{imHausListElement.name}}<br>\n              <b>Nation:</b> {{imHausListElement.nation}}<br>\n              <b>Zimmernummer:</b> {{imHausListElement.roomNumber}}<br>\n              <b>Anreise:</b> {{imHausListElement.arrival}}<br>\n              <b>Abreise:</b> {{imHausListElement.departure}}<br>\n              <b>HP/F:</b> {{imHausListElement.price}}<br>\n              <b>Personen Anzahl:</b> {{imHausListElement.numberOfPersons}}<br>\n            </p>\n            <div *ngIf=\"imHausListElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/im-haus-list/im-haus-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("./src/app/services/main.service.ts");
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
    core_1.Input('imHausListElemente'),
    __metadata("design:type", Array)
], ImHausListComponent.prototype, "imHausListElemente", void 0);
ImHausListComponent = __decorate([
    core_1.Component({
        selector: 'app-im-haus-list',
        template: __webpack_require__("./src/app/components/digital-table-plan/im-haus-list/im-haus-list.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], ImHausListComponent);
exports.ImHausListComponent = ImHausListComponent;
var _a;
//# sourceMappingURL=im-haus-list.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\n    padding: 0;\n    margin: 0;\n    height: 100%;\n    background-color: #0a7a74;\n}\n\n.row {\n    height: 100%;\n    background-color: #0a7a74;\n    margin: 0;\n}\n\n.row .container-fluid {\n    background-color: #0a7a74;\n    height: 100vh;\n}\n\n.row .container-fluid .col-md-4 {\n    background-color: #0a7a74;\n    height: 100%;\n}\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n</head>\n<body>\n<div class=\"row\">\n<div class=\"container-fluid\">\n    <div class=\"col-md-4  hidden-xs hidden-sm\">\n    </div>\n    <div class=\"col-md-4\" style=\"padding-top: 20px\">\n      <div class=\"brand\" style=\"text-align: center\"><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2017/05/servicio-logo-lang-weiss.png\" style=\"height: 45px; width: auto; margin-top:0px; margin-right: 10px; text-align: center; display:inline-block; vertical-align:middle;\"></div>\n      <h2 style=\"color: #FFFFFF\">Login</h2>\n      <form (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label style=\"color: #FFFFFF\">Benutzername</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n          <label style=\"color: #FFFFFF\">Passwort</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" style=\"background-color: #ffffff; color: #0a7a74\" value=\"Login\">\n      </form>\n    </div>\n    <div class=\"col-md-4  hidden-xs  hidden-sm\">\n    </div>\n</div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
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
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__("./src/app/components/digital-table-plan/login/login.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/main.component.css":
/***/ (function(module, exports) {

module.exports = "html {\n  background-color: #0a7a74;\n}\n\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  background-color: #0a7a74;\n}\n\nspan {\n  color: #9d9d9d;\n}\n\n.container-fluid {\n  padding: 0 0 10px 0;\n  margin: 0;\n  height: 100vh;\n  max-width: 100vw;\n  background-color: #0a7a74;\n}\n\n.row {\n  max-width: 100vw;\n  min-height: 100vh;\n  padding: 0 15px 15px 15px;\n  background-color: #0a7a74;\n  margin: 0 0 0 0;\n}\n\n.line{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 115px;\n}\n\n.line1{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 95px;\n}\n\n.printTwo {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #0a7a74;\n  max-height: calc(100vh - 241px);\n  top:-100px;\n  z-index: -1;\n}\n\n.row .inner-table {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: calc(100vh - 120px);\n}\n\n.row .table-col {\n  min-height: calc(100vh - 70px);\n  max-height: calc(100vh - 70px);\n  background-color: #f3efe4;\n  padding: 10px 10px 20px 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: 3px;\n  width: calc(100vw - 20px);\n  max-width: 100%;\n}\n\n.print-col {\n  padding: 0;\n  min-height: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 2;\n}\n\n.row .upload-col {\n  background-color: #f3efe4;\n  padding: 10px 10px 20px 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: calc(100vh - 70px);\n  max-height: calc(100vh - 70px);\n  border-radius: 3px;\n  z-index: 1;\n}\n\n.section2 {\n  display: none;\n}\n\n.section3 {\n  display: none;\n}\n\n.row1 {\n  height: calc((100vh - 195px) / 2);\n  overflow: auto;\n}\n\n.row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Table, .anleitung {\n  display: none;\n}\n\n.cards-container {\n  margin: 10px 0px 10px 0px;\n  padding: 10px 10px 40px 10px;\n}\n\n.row .container-fluid  .table-col .inner-table .row3 .wrapper .cards-container {\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n\n}\n\n#containerBar, #containerWeinstube, #containerSpeisesaal, #containerTerasse {\n  border-radius: 3px;\n  border: solid 1px grey;\n}\n\n.row .container-fluid .col-md-4 .row1 {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  width: 105%;\n  height: 232.5px;\n  padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container {\n  overflow: auto;\n  margin: 20px 40px 20px 0;\n  display: inline-block;\n  max-width: 100%;\n  border-radius: 3px;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 {\n  overflow: auto;\n  margin: 0 auto;\n  display: inline-block;\n  width: 100%;\n  height: 800px;\n  padding-top: 20px;\n}\n\n.row .container-fluid h3 {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin: 0 auto;\n  display: inline-block;\n  color: #0a7a74;\n  position: relative;\n  text-align: center;\n}\n\n.row .container-fluid .col-md-4 h3 {\n  margin: 0 auto;\n  color: #0a7a74;\n  position: relative;\n}\n\nbody html .row .container-fluid .upload-col .outer-cards h3 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  color: #0a7a74;\n}\n\n.row1 .col {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.row1 .col:nth-child(1) {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n.row1 .col:nth-child(2) {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n}\n\n.row1 .col:nth-child(3) {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.row .col-md-4 .row2 {\n  padding-bottom: 10px;\n  position: relative;\n  min-height: 100%;\n  border-bottom: 1px solid red;\n}\n\n.card {\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row3 .row1 p {\n  /*padding: 10px 10px 10px 10px;*/\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 .wrapper .container .card p {\n  /*padding: 10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-6 .row {\n  background-color: #eaf3f3;\n  padding: 20px 10px 20px 10px;\n  height: 100%;\n}\n\n.table-item {\n  position: absolute;\n}\n\n.btn-send {\n  display: none;\n}\n\n.xls {\n  margin-bottom: 30px;\n}\n\n.btn-default {\n  display: none;\n}\n\n.btn-primary {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  margin: 10px 20px 20px 0px;\n  border: none;\n}\n\n.btn-group-departments {\n  margin: 0px 10px 5px 0px;\n}\n\n.btn-primary:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n@media (min-width: 701px) {\n\n\n  .row {\n    max-width: 100vw;\n    max-height: calc(100vh - 60px);\n    padding: 0 15px 15px 15px;\n    background-color: #0a7a74;\n  }\n\n  .row .table-col {\n    max-height: calc(100vh - 70px);\n    min-height: calc(100vh - 70px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    max-width: calc(100vw - 20px);\n    width: 30%;\n    margin: 60px 0 0 10px;\n  }\n\n  .btn-group-departments {\n    margin: 0 10px 5px 20px;\n  }\n\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: calc(100vh - 60px);\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .inner-table {\n    max-height: calc(100vh - 121px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-height:  calc(100vh - 10px);\n    max-height: calc(100vh - 10px);\n  }\n\n  .print-col {\n    margin-left: 15px;\n    width: 65%;\n    max-height: calc(100vh - 60px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .btn-default {\n    display: inline-block;\n  }\n\n  .btn-send {\n    display: block;\n  }\n\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: calc(100vh - 60px);\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .table-col {\n    min-height: calc(100vh - 70px);\n    max-height: calc(100vh - 70px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 23%;\n    margin: 60px 0 0 10px;\n\n  }\n\n  .row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Table, .anleitung {\n    display: block;\n  }\n\n  .print-col {\n    width: 48%;\n    margin-left: 15px;\n    margin-right: 15px;\n    max-height: calc(100vh - 60px);\n\n  }\n\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-height: calc(100vh - 70px);\n    max-height: calc(100vh - 70px);\n    margin-top: 60px;\n  }\n\n  .row .inner-table {\n    max-height: calc(100vh - 125px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n  .navbar-nav {\n    display: inline-block;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/main.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<html>\n<head>\n  <title>Dashboard</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"node_modules/core-js/client/shim.min.js\"></script>\n  <script src=\"<your-libs-directory>/object-assign.min.js\"></script>\n  <script src=\"node_modules/angular2/es6/dev/src/testing/shims_for_IE.js\"></script>\n</head>\n<div id=\"charge-error\" class=\"alert alert-danger <% if ( !errMsg ) { %> hidden <% } %>\"><%= errMsg  %></div>\n<body>\n<app-navigation  [newInformationElements]=\"newInformationElements\"\n                 [tablesOccupied]=\"tablesOccupied\"\n                 [tablesTempDeparture]=\"tablesTempDeparture\"\n                 (getTablesOccupied)=\"tablesOccupied = $event\"\n                 (reseatExport)=\"reseatInfoVar = $event; reseat($event)\"\n                 (departureExportExport)=\"departureTablePlusIndex = $event; departureRemoval($event)\"\n                 (transformExport)=\"term = $event; transform($event)\"\n                 (termExport)=\"term = $event\"\n                 (reloadLists)=\"reloadLists($event)\"\n                 [newInformationEmployees]=\"newInformationEmployees\"\n                 (getTablesExport)=\"getTables($event)\">\n</app-navigation>\n  <div class=\"row\">\n    <div class=\"container-fluid\">\n      <flash-messages></flash-messages>\n      <div class=\"col-xs-12 col-sm-8 col-lg-6 print-col\">\n        <app-departmentmenu\n          [buttonBgColor1]=\"buttonBgColor1\"\n          [buttonBgColor2]=\"buttonBgColor2\"\n          [buttonBgColor3]=\"buttonBgColor3\"\n          [buttonBgColor4]=\"buttonBgColor4\"\n          [buttonBgColor5]=\"buttonBgColor5\"\n          [fontColor1]=\"fontColor1\"\n          [fontColor2]=\"fontColor2\"\n          [fontColor3]=\"fontColor3\"\n          [fontColor4]=\"fontColor4\"\n          [fontColor5]=\"fontColor5\"\n          [showWeinstubeBool]=\"showWeinstubeBool\"\n          [showBarBool]=\"showBarBool\"\n          [showTerasseBool]=\"showTerasseBool\"\n          [showSpeisesaalBool]=\"showSpeisesaalBool\"\n          [showAllBool]=\"showAllBool\"\n          (showTerasseBoolChange)=\"showTerasseBool=$event\"\n          (showWeinstubeBoolChange)=\"showWeinstubeBool=$event\"\n          (showBarBoolChange)=\"showBarBool=$event\"\n          (showSpeisesaalBoolChange)=\"showSpeisesaalBool=$event\"\n          (showAllBoolChange)=\"showAllBool=$event\"\n          [buttonBgColorInfoForm]=\"buttonBgColorInfoForm\"\n          [buttonBgColorNoteForm]=\"buttonBgColorNoteForm\"\n          [fontColorInfoForm]=\"fontColorInfoForm\"\n          [fontColorNoteForm]=\"fontColorNoteForm\"\n          [showNoteFormBool]=\"showNoteFormBool\"\n          [showInfoFormBool]=\"showInfoFormBool\"\n          (showInfoFormBoolChange)=\"showInfoFormBool=$event\"\n          (showNoteFormBoolChange)=\"showNoteFormBool=$event\"\n          (showTablePlanBoolChange)=\"showTablePlanBool=$event\"\n          [showTablePlanBool]=\"showTablePlanBool\"\n          [buttonBgColorShowTablePlan]=\"buttonBgColorShowTablePlan\"\n          [fontColorShowTablePlan]=\"fontColorShowTablePlan\">\n        </app-departmentmenu><flash-messages></flash-messages>\n        <app-form [newInformationElements]=\"newInformationElements\"\n                  [dateGenerated]=\"dateGenerated\"\n                  [title]=\"title\"\n                  [roomNumber]=\"roomNumber\"\n                  [tableNumber]=\"tableNumber\"\n                  [employee]=\"employee\"\n                  [nameTraceInput]=\"nameTraceInput\"\n                  [tablesWeinstube]=\"tablesWeinstube\"\n                  [tablesBar]=\"tablesBar\"\n                  [tablesTerasse]=\"tablesTerasse\"\n                  [tablesSpeisesaal]=\"tablesSpeisesaal\"\n                  [showNoteFormBool]=\"showNoteFormBool\"\n                  [showInfoFormBool]=\"showInfoFormBool\"\n                  [noteElements]=\"noteElements\"\n                  [showWeinstubeBool]=\"showWeinstubeBool\"\n                  [showBarBool]=\"showBarBool\"\n                  [showTerasseBool]=\"showTerasseBool\"\n                  [showSpeisesaalBool]=\"showSpeisesaalBool\"\n                  [showAllBool]=\"showAllBool\"\n                  (noteResponse)=\"noteElements=$event\"\n                  (changeColorIfArrivalExport)=\"changeBgColorIfArrival($event)\">\n        </app-form>\n        <app-tableplan [tablesSpeisesaal]=\"tablesSpeisesaal\"\n                       [showSpeisesaalBool]=\"showSpeisesaalBool\"\n                       [tablesTerasse]=\"tablesTerasse\"\n                       [showTerasseBool]=\"showTerasseBool\"\n                       [tablesWeinstube]=\"tablesWeinstube\"\n                       [showWeinstubeBool]=\"showWeinstubeBool\"\n                       [tablesBar]=\"tablesBar\"\n                       [showBarBool]=\"showBarBool\"\n                       (movedTerasse)=\"tablesTerasse = $event\"\n                       (movedBar)=\"tablesBar = $event\"\n                       (movedWeinstube)=\"tablesWeinstube = $event\"\n                       (movedSpeisesaal)=\"tablesSpeisesaal = $event\"\n                       [showAllBool]=\"showAllBool\"\n                       [showTablePlanBool]=\"showTablePlanBool\"\n                       (changeBgColorIfArrival)=\"changeBgColorIfArrival($event)\"\n                       (adult1WeinstubeExport)=\"adult1Weinstube=$event\"\n                       (adult1BarExport)=\"adult1Bar=$event\"\n                       (adult1TerasseExport)=\"adult1Terasse=$event\"\n                       (adult1SpeisesaalExport)=\"adult1Speisesaal=$event\"\n                       (child1WeinstubeExport)=\"child1Weinstube=$event\"\n                       (child2WeinstubeExport)=\"child2Weinstube=$event\"\n                       (child3WeinstubeExport)=\"child3Weinstube=$event\"\n                       (child4WeinstubeExport)=\"child4Weinstube=$event\"\n                       (child1BarExport)=\"child1Bar=$event\"\n                       (child2BarExport)=\"child2Bar=$event\"\n                       (child3BarExport)=\"child3Bar=$event\"\n                       (child4BarExport)=\"child4Bar=$event\"\n                       (child1TerasseExport)=\"child1Terasse=$event\"\n                       (child2TerasseExport)=\"child2Terasse=$event\"\n                       (child3TerasseExport)=\"child3Terasse=$event\"\n                       (child4TerasseExport)=\"child4Terasse=$event\"\n                       (child1SpeisesaalExport)=\"child1Speisesaal=$event\"\n                       (child2SpeisesaalExport)=\"child2Speisesaal=$event\"\n                       (child3SpeisesaalExport)=\"child3Speisesaal=$event\"\n                       (child4SpeisesaalExport)=\"child4Speisesaal=$event\">\n        </app-tableplan>\n      </div>\n      <div class=\"col-xs-12 col-lg-3 upload-col\">\n        <div class=\"outer-cards\">\n          <app-im-haus-list [imHausListElemente]=\"imHausListElemente\"></app-im-haus-list>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-lg-3 table-col\">\n        <h3 >Tisch Übersicht</h3>\n        <div class=\"inner-table\" style=\"padding: 0px 0px 0px 0px;\">\n          <div class=\"row3\">\n            <div class='wrapper' id=\"wrapper\">\n              <app-departments [tablesSpeisesaal]=\"tablesSpeisesaal\"\n                               [showSpeisesaalBool]=\"showSpeisesaalBool\"\n                               [tablesTerasse]=\"tablesTerasse\"\n                               [showTerasseBool]=\"showTerasseBool\"\n                               [tablesWeinstube]=\"tablesWeinstube\"\n                               [showWeinstubeBool]=\"showWeinstubeBool\"\n                               [tablesBar]=\"tablesBar\"\n                               [showBarBool]=\"showBarBool\"\n                               (dispensedTerasse)=\"tablesTerasse=$event\"\n                               (dispensedBar)=\"tablesBar=$event\"\n                               (dispensedWeinstube)=\"tablesWeinstube=$event\"\n                               (dispensedSpeisesaal)=\"tablesSpeisesaal=$event\"\n                               [term]=\"term\"\n                               [showAllBool]=\"showAllBool\"\n                               (updateAzList)=\"updateAzList($event)\"\n                               [tablesTempDeparture]=\"tablesTempDeparture\"\n                               [tables]=\"tables\"\n                               (updateImHausListElement)=\"updateImHausListElement($event); table = $event;\">\n              </app-departments>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n<app-print  [tables]=\"tables\"\n            [dateGeneratedListe]=\"dateGeneratedListe\"\n            [tablesWeinstube]=\"tablesWeinstube\"\n            [showWeinstubeBool]=\"showWeinstubeBool\"\n            [showBarBool]=\"showBarBool\"\n            [tablesBar]=\"tablesBar\"\n            [showTerasseBool]=\"showTerasseBool\"\n            [tablesTerasse]=\"tablesTerasse\"\n            [showSpeisesaalBool]=\"showSpeisesaalBool\"\n            [tablesSpeisesaal]=\"tablesSpeisesaal\"\n            (getTablesOccupied)=\"tablesOccupied = $event\"\n            (getTablesforAzListe)=\"tables = $event\"\n            [adult1Weinstube]=\"adult1Weinstube\"\n            [adult1Bar]=\"adult1Bar\"\n            [adult1Terasse]=\"adult1Terasse\"\n            [adult1Speisesaal]=\"adult1Speisesaal\"\n            [child1Weinstube]=\"child1Weinstube\"\n            [child2Weinstube]=\"child2Weinstube\"\n            [child3Weinstube]=\"child3Weinstube\"\n            [child4Weinstube]=\"child4Weinstube\"\n            [child1Bar]=\"child1Bar\"\n            [child2Bar]=\"child2Bar\"\n            [child3Bar]=\"child3Bar\"\n            [child4Bar]=\"child4Bar\"\n            [child1Terasse]=\"child1Terasse\"\n            [child2Terasse]=\"child2Terasse\"\n            [child3Terasse]=\"child3Terasse\"\n            [child4Terasse]=\"child4Terasse\"\n            [child1Speisesaal]=\"child1Speisesaal\"\n            [child2Speisesaal]=\"child2Speisesaal\"\n            [child3Speisesaal]=\"child3Speisesaal\"\n            [child4Speisesaal]=\"child4Speisesaal\">\n</app-print>\n</html>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/main.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("./src/app/services/main.service.ts");
var ng2_dragula_1 = __webpack_require__("./node_modules/ng2-dragula/index.js");
var print_component_1 = __webpack_require__("./src/app/components/digital-table-plan/print/print.component.ts");
var departmentmenu_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departmentmenu/departmentmenu.component.ts");
var form_component_1 = __webpack_require__("./src/app/components/digital-table-plan/form/form.component.ts");
var im_haus_list_component_1 = __webpack_require__("./src/app/components/digital-table-plan/im-haus-list/im-haus-list.component.ts");
var navigation_component_1 = __webpack_require__("./src/app/components/digital-table-plan/navigation/navigation.component.ts");
var tableplan_component_1 = __webpack_require__("./src/app/components/digital-table-plan/tableplan/tableplan.component.ts");
var departments_component_1 = __webpack_require__("./src/app/components/digital-table-plan/departments/departments.component.ts");
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
        this.tablesTerasse = [];
        this.tablesWeinstube = [];
        this.tablesBar = [];
        this.tablesSpeisesaal = [];
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
        this.adult1Terasse = [];
        this.adult2Terasse = [];
        this.child1Terasse = [];
        this.child2Terasse = [];
        this.child3Terasse = [];
        this.child4Terasse = [];
        this.adult1Weinstube = [];
        this.adult2Weinstube = [];
        this.child1Weinstube = [];
        this.child2Weinstube = [];
        this.child3Weinstube = [];
        this.child4Weinstube = [];
        this.adult1Bar = [];
        this.adult2Bar = [];
        this.child1Bar = [];
        this.child2Bar = [];
        this.child3Bar = [];
        this.child4Bar = [];
        this.adult1Speisesaal = [];
        this.adult2Speisesaal = [];
        this.child1Speisesaal = [];
        this.child2Speisesaal = [];
        this.child3Speisesaal = [];
        this.child4Speisesaal = [];
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
        this.showTerasseBool = false;
        this.showWeinstubeBool = false;
        this.showBarBool = false;
        this.showSpeisesaalBool = false;
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
    MainComponent.prototype.showSpeisesaal = function () {
        this.departmentmenuComponent.showSpeisesaal();
    };
    MainComponent.prototype.transform = function (term) {
        this.departmentsComponent.transform(term);
    };
    MainComponent.prototype.showBar = function () {
        this.departmentmenuComponent.showBar();
    };
    MainComponent.prototype.showTerasse = function () {
        this.departmentmenuComponent.showSpeisesaal();
    };
    MainComponent.prototype.showWeinstube = function () {
        this.departmentmenuComponent.showWeinstube();
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
                //console.log('this.tablesSpeisesaal:');
                //console.log(this.tablesSpeisesaal);
                _this.tables = _this.tablesSpeisesaal.concat(_this.tablesBar).concat(_this.tablesWeinstube).concat(_this.tablesTerasse);
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
                    if (tables[x].department === "Bar") {
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
                    if (tables[a].department === "Weinstube") {
                        _this.tablesWeinstube = tables[a].tables;
                    }
                    else if (tables[a].department === "Speisesaal") {
                        _this.tablesSpeisesaal = tables[a].tables;
                        //console.log('Test' + JSON.stringify(this.tablesSpeisesaal));
                    }
                    else if (tables[a].department === "Terasse") {
                        _this.tablesTerasse = tables[a].tables;
                    }
                    else if (tables[a].department === "Bar") {
                        _this.tablesBar = tables[a].tables;
                    }
                }
                _this.changeBgColorIfArrival();
            }
            _this.tablesTempDeparture = tables;
            _this.tables = _this.tablesSpeisesaal.concat(_this.tablesBar).concat(_this.tablesWeinstube).concat(_this.tablesTerasse);
            _this.printComponent.formatAzList(_this.tables);
            setTimeout(function () {
                _this.tableplanComponent.sumUpNumberOfPersons();
            }, 1000);
        });
    };
    return MainComponent;
}());
__decorate([
    core_1.ViewChild(print_component_1.PrintComponent),
    __metadata("design:type", typeof (_a = typeof print_component_1.PrintComponent !== "undefined" && print_component_1.PrintComponent) === "function" && _a || Object)
], MainComponent.prototype, "printComponent", void 0);
__decorate([
    core_1.ViewChild(departmentmenu_component_1.DepartmentmenuComponent),
    __metadata("design:type", typeof (_b = typeof departmentmenu_component_1.DepartmentmenuComponent !== "undefined" && departmentmenu_component_1.DepartmentmenuComponent) === "function" && _b || Object)
], MainComponent.prototype, "departmentmenuComponent", void 0);
__decorate([
    core_1.ViewChild(form_component_1.FormComponent),
    __metadata("design:type", typeof (_c = typeof form_component_1.FormComponent !== "undefined" && form_component_1.FormComponent) === "function" && _c || Object)
], MainComponent.prototype, "formComponent", void 0);
__decorate([
    core_1.ViewChild(departments_component_1.DepartmentsComponent),
    __metadata("design:type", typeof (_d = typeof departments_component_1.DepartmentsComponent !== "undefined" && departments_component_1.DepartmentsComponent) === "function" && _d || Object)
], MainComponent.prototype, "departmentsComponent", void 0);
__decorate([
    core_1.ViewChild(im_haus_list_component_1.ImHausListComponent),
    __metadata("design:type", typeof (_e = typeof im_haus_list_component_1.ImHausListComponent !== "undefined" && im_haus_list_component_1.ImHausListComponent) === "function" && _e || Object)
], MainComponent.prototype, "imHausListComponent", void 0);
__decorate([
    core_1.ViewChild(navigation_component_1.NavigationComponent),
    __metadata("design:type", typeof (_f = typeof navigation_component_1.NavigationComponent !== "undefined" && navigation_component_1.NavigationComponent) === "function" && _f || Object)
], MainComponent.prototype, "navigationComponent", void 0);
__decorate([
    core_1.ViewChild(tableplan_component_1.TableplanComponent),
    __metadata("design:type", typeof (_g = typeof tableplan_component_1.TableplanComponent !== "undefined" && tableplan_component_1.TableplanComponent) === "function" && _g || Object)
], MainComponent.prototype, "tableplanComponent", void 0);
MainComponent = __decorate([
    core_1.Component({
        selector: 'main',
        template: __webpack_require__("./src/app/components/digital-table-plan/main.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _h || Object, typeof (_j = typeof ng2_dragula_1.DragulaService !== "undefined" && ng2_dragula_1.DragulaService) === "function" && _j || Object])
], MainComponent);
exports.MainComponent = MainComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-fixed-top {\n  max-width: 100%;\n  background-color: #0d2f2e;\n  border-radius: 0px;\n  max-height: 120px;\n  display: block;\n}\n\n.container {\n  max-height: 120px;\n  display: block;\n  padding: 0;\n  margin: 0\n}\n\nul.navbar-nav {\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  max-height:  40px;\n}\n\n.navbar-logout {\n  float: right;\n}\n\n.brand {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 30%;\n}\n\n.Table {\n  color: #0a7a74;\n  float: right;\n  margin-right: 10px;\n}\n\n.TableDiv{\n  background-color: #0a7a74;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  margin-top: 12px;\n  margin-left: 48px;\n  max-width: 50px;\n}\n\n.TableH3 {\n  color: #eaf3f3;\n  margin: 0;\n  line-height: 29px;\n  font-size: 20px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  align: center;\n}\n\n.dropdown-toggle {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n.dropdown-menu {\n  overflow: auto;\n  height: 350px;\n  width: 200px;\n  padding: 20px;\n}\n\n.xls {\n  width: 100%;\n  height: 100px;\n}\n\n.file {\n  float: left;\n  margin-top: 10px;\n  color: #0a7a74;\n}\n\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\n  border: none;\n}\n\n.navbar-form {\n  margin: 11px 0 0 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  padding: 0;\n}\n\n.btn-send {\n  background-color: #0a7a74;\n  float: right;\n  color: white;\n  margin-right: 10px;\n  display: none;\n}\n\nh6 {\n  color: #0a7a74;\n}\n\n.navbar-right{\n\n}\n\n.btn-default {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  float: left;\n  vertical-align: middle;\n  margin: 10px 10px 5px 10px;\n  border: none;\n  display: none;\n}\n\n.btn-default:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n.btn-group {\n  height: 45px;\n  width: auto;\n  margin: 10px 10px 5px 10px;\n  float: left;\n  text-align: right;\n  display:none;\n  vertical-align:middle;\n}\n\n.menuitem {\n  padding: 5px;\n}\n\n.navbar-left {\n  max-width: 100%;\n  display: -webkit-inline-box;\n  border: none;\n}\n\n.form-group {\n  max-height: 45px;\n  margin: 0 5px 0 0;\n}\n\n.form-group-search {\n  float: left;\n  width: calc(100% - 52px);\n}\n\n.form-control {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  border: none;\n  height: 32px;\n  opacity: 80;\n  margin: 0px 0px 0px 0px;\n}\n\n.search-btn-default {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  border: none;\n  float: right;\n  margin-right: 10px;\n  min-width: 30px;\n  height: 32px;\n}\n\n.Partner {\n  height: 45px;\n  width: auto;\n  margin-top: 4px;\n  margin-bottom: 5px;\n  margin-right: 25px;\n  float: right;\n  text-align: right;\n  display:none;\n  vertical-align:middle;\n}\n\n.xls {\n  margin-bottom: 30px;\n}\n\n@media (max-width: 500px) {\n\n  .navbar-left {\n    display: block;\n  }\n}\n\n@media (min-width: 766px ) and  (max-width: 774px) {\n  .navbar-right {\n    margin-top: -23px;\n  }\n\n  .search-btn-default {\n    margin-top: 0px;\n    margin-left: 40px;\n    min-width: 30px;\n    min-height: 30px;\n  }\n}\n\n@media (min-width: 500px ) and  (max-width: 774px) {\n  .navbar-fixed-top {\n    display: block;\n    max-height: 56px;\n  }\n  .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: auto;\n    max-height: 55px;\n  }\n  .navbar-nav {\n    margin-top: 0;\n\n    display: -webkit-inline-box;\n\n    display: -ms-inline-flexbox;\n\n    display: inline-flex;\n    max-height: 50px;\n  }\n  .navbar-right{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    max-width: 79%;\n    margin-right: 10px;\n\n  }\n  .navbar-left{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .form-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .form-control{\n\n  }\n  .search-btn-default {\n    margin-top: 0px;\n  }\n}\n\n@media (min-width: 775px) {\n  .Partner {\n    display: none;\n    max-width: 100%;\n    float: right;\n  }\n\n  .form-group {\n    display: block;\n  }\n\n  .form-group-search {\n    float: none;\n    width: auto;\n  }\n\n  .navbar-left {\n    float: right;\n  }\n\n  .navbar-right {\n    max-width: 100%;\n    margin-right: 10px;\n  }\n\n  .container {\n    display: block;\n    width: auto;\n  }\n\n  .navbar-fixed-top {\n    max-height: 45px;\n    display: block;\n  }\n\n  .btn-group {\n    display:none;\n  }\n\n  .brand {\n    max-width: 100%;\n  }\n\n  .partnerLi {\n    float: right;\n  }\n\n  .navbar-left {\n    display: block;\n    margin-top: 11px;\n  }\n\n  .search-btn-default {\n    float: right;\n    margin-right: 20px;\n    margin-top: 0px;\n  }\n\n  .Table {\n    margin-right: 0px;\n  }\n\n  .TableDiv{\n    margin-left: 35px;\n  }\n  .navbar-nav {\n\n  }\n\n}\n\n@media (min-width: 1250px) {\n  .btn-default {\n    display: block;\n  }\n\n  .btn-send {\n    display: block;\n  }\n\n  .print-col {\n    width: 32%\n  }\n\n  .search-btn-default {\n    display: block;\n  }\n\n  .btn-group {\n    display: block;\n  }\n\n  .navbar-nav {\n    display: block;\n\n  }\n\n  .container {\n    display: block;\n    width: 100%;\n  }\n\n  .navbar-right {\n    max-width: 65%;\n    min-width: 50%;\n  }\n  .form-group {\n    margin: 0;\n    width: 70%;\n    max-height: 100%;\n    margin: 0 2px 20px 10px;\n  }\n\n  .form-control {\n    background-color: #0a7a74;\n    color: #FFFFFF;\n    border: none;\n    opacity: 80;\n    width: 135px;\n    margin: 0px 0px 0px 0px;\n  }\n\n  .TableDiv{\n    margin-left: 0px;\n  }\n}\n\n@media (min-width: 1650px) {\n  .Partner {\n    display: inline-block;\n    max-width: 100%;\n    float: right;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n  <ul class=\"nav navbar-nav\">\n    <li class=\"brand\" ><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2018/01/servicio-logo-neu-laden-1.png\" (click)=\"brandClick()\" style=\"height: 45px; width: auto; margin-top:0px; margin-right: 10px; text-align: left; display:inline-block; vertical-align:middle;\"></li>\n    <li class=\"Belegte Table\" ><div class=\"TableDiv\"><h3 class=\"TableH3\">{{tablesOccupied}}</h3></div></li>\n    <div class=\"btn-group\" dropdown>\n      <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"><i class=\"fa fa-print\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" style=\"height: auto; padding: 0\" role=\"menu\">\n        <li class=\"printToCart1\" (click)=\"printToCart1('printSectionId1')\" (mouseenter)=\"mouseEnterprintToCart1Button()\"  (mouseleave)=\"mouseLeaveprintToCart1Button()\" [ngStyle]=\"{'background-color': '#' + printToCart1Button}\" style=\"display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\">Tisch Übersicht Drucken</li>\n        <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n        <li class=\"printToCart2\" (click)=\"printToCart2('printSectionId2')\"  (mouseenter)=\"mouseEnterprintToCart2Button()\"  (mouseleave)=\"mouseLeaveprintToCart2Button()\" [ngStyle]=\"{'background-color': '#' + printToCart2Button}\"  style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\">Tisch Plan Drucken</li>\n        <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n        <li class=\"printToCart3\" (click)=\"printToCart3('printSectionId3')\"   (mouseenter)=\"mouseEnterprintToCart3Button()\"  (mouseleave)=\"mouseLeaveprintToCart3Button()\" [ngStyle]=\"{'background-color': '#' + printToCart3Button}\"  style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\">A-Z Liste Drucken</li>\n        <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n        <li class=\"printToCart1\" (click)=\"printToCart4('printSectionId4')\" (mouseenter)=\"mouseEnterprintToCart4Button()\"  (mouseleave)=\"mouseLeaveprintToCart4Button()\" [ngStyle]=\"{'background-color': '#' + printToCart4Button}\" style=\"display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\">Sortiert Nach Anreise Datum Liste</li>\n      </ul>\n    </div>\n    <div class=\"btn-group\" dropdown>\n      <button dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">CSV<i class=\"fa fa-upload\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" style=\"padding: 10px; height: auto\" role=\"menu\">\n        <div class=\"csv\" (click)=\"none($event)\" ><h6 >CSV-Datei hochladen</h6>\n          <form class=\"SendMessage\" (submit)=\"sendMessage($event)\">\n            <input type=\"file\" style=\"max-width: 160px; min-height: 50px\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n            <button type=\"button\" class=\"btn btn-send\" (click)=\"upload()\">CSV hochladen</button>\n          </form>\n        </div>\n      </ul>\n    </div>\n    <li class=\"navbar-logout\" *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"/\">LOGOUT</a></li>\n  </ul>\n  <ul class=\"nav navbar-nav navbar-right\" >\n    <div class=\"btn-group\"  dropdown>\n      <button dropdownToggle type=\"button\"  class=\"btn btn-primary dropdown-toggle\">Rangliste <i class=\"fa fa-gift\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"padding: 0\">\n        <div *ngFor=\"let newInformationEmployee of newInformationEmployees; let j = index;\">\n\n          <li role=\"menuitem\" class=\"menuitem\" (click)=\"none($event)\"> <b>Name: </b> {{newInformationEmployee.employee}} <br><b>Punkte: </b> {{newInformationEmployee.numberOfTraces}}</li>\n          <li class=\"divider dropdown-divider\"></li>\n        </div>\n      </ul>\n    </div>\n    <div class=\"btn-group\" dropdown>\n      <button dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">Abreisen <i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"max-height: 130px; padding: 0\">\n        <li role=\"menuitem\" class=\"menuitem\" (mouseenter)=\"mouseEnterDepartureAbortButton()\"  (mouseleave)=\"mouseLeaveDepartureAbortButton()\" [ngStyle]=\"{'background-color': '#' + departureAbortButton}\" style=\"color: black;\">Abort</li>\n        <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n        <li role=\"menuitem\" class=\"menuitem\" style=\"background-color: red; color: white;\" (mouseenter)=\"mouseEnterDepartureExecuteButton()\"  (mouseleave)=\"mouseLeaveDepartureExecuteButton()\" [ngStyle]=\"{'background-color': '#' + departureExecuteButton}\" style=\"color: white;\" (click)=\"dispenseIfDepartureToday()\"><b> Abreisen für Heute entfernen</b></li>\n        <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n        <li role=\"menuitem\" class=\"menuitem\" (mouseenter)=\"mouseEnterDepartureTomorrowExecuteButton()\"  (mouseleave)=\"mouseLeaveDepartureTomorrowExecuteButton()\" [ngStyle]=\"{'background-color': '#' + departureExecuteTomorrowButton}\" style=\"color: white;\" (click)=\"dispenseIfDepartureTomorrow()\"><b> Abreisen für Morgen entfernen</b></li>\n        <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n      </ul>\n    </div>\n     <div class=\"btn-group\" dropdown>\n      <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">Umsetzen <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"height: auto\">\n        <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"reseat($event)\">\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"sourceTable\">Quell-Tisch:</label>\n              <input class=\"form-control\" id=\"sourceTable\" [(ngModel)]=\"sourceTable\" name=\"sourceTable\" placeholder=\"Von Tablenummer:\" >\n            </div>\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"targetTable\">Ziel-Tisch</label>\n              <input class=\"form-control\" id=\"targetTable\" [(ngModel)]=\"targetTable\" name=\"targetTable\" placeholder=\"Zu Tablenummer:\" >\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" >Umsetzen <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i></button>\n        </form>\n      </ul>\n    </div>\n    <div class=\"btn-group\"  dropdown>\n      <button dropdownToggle type=\"button\"  class=\"btn btn-primary dropdown-toggle\">Traces <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i> <span class=\"caret\"></span>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"padding: 0\">\n        <div *ngFor=\"let newInformationElement of newInformationElements; let j = index;\">\n          <button type=\"submit\" class=\"btn btn-send\" style=\"margin: 10px\" (click)=\"delete(newInformationElement, j, $event)\">x</button>\n          <li role=\"menuitem\" style=\"padding: 10px;\" class=\"menuitem\" (click)=\"none($event)\"> <b>Zimmer Nummer: </b> {{newInformationElement.roomNumber}} <br><b>Trace: </b> {{newInformationElement.text}} <br><b>Tisch: </b> {{newInformationElement.tableNumber}}<br><b>Datum: </b> {{newInformationElement.date}}<br><b>Name: </b> {{newInformationElement.name}}<br><b>Mitarbeiter: </b> {{newInformationElement.employee}}</li>\n          <li class=\"divider dropdown-divider\"></li>\n        </div>\n      </ul>\n    </div>\n    <form class=\"navbar-form navbar-left\">\n      <div class=\"form-group form-group-search\">\n        <input type=\"text\" class=\"form-control\" (keyup)=\"onKey($event)\">\n      </div>\n      <button type=\"submit\" class=\"btn search-btn-default\" ><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n    </form>\n    <li class=\"partnerLi\" ><img class=\"Partner\" alt=\"Partner\" style=\"background-color: white\" href=\"http://www.salzburgerhof.servicio.io/wlanlandingpage\" src=\"http://servicio.io/wp-content/uploads/2018/05/logo.png\" ></li>\n  </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/navigation/navigation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("./src/app/services/main.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
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
        this.reseatExport = new core_1.EventEmitter();
        this.departureExportExport = new core_1.EventEmitter();
        this.termExport = new core_1.EventEmitter();
        this.getTablesExport = new core_1.EventEmitter();
        this.reloadLists = new core_1.EventEmitter();
        this.transformExport = new core_1.EventEmitter();
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.printToCart1Button = "ffffff";
        this.printToCart2Button = "ffffff";
        this.printToCart3Button = "ffffff";
        this.printToCart4Button = "ffffff";
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
        popupWinindow.document.write('<html><head><style> .row .t201 { position: absolute; } .row .t202 { position: absolute; } .row .t204 { position: absolute; } .row .t244 { position: absolute; } .row .t118 { position: absolute; } .row .t103 { position: absolute; } .row .t130 { position: absolute; } .row .t131 { position: absolute; } .row .t132 { position: absolute; } .row .t133 { position: absolute; } .row .t134 { position: absolute; } .row .t135 { position: absolute; } .row .t136 { position: absolute; } .row .t137 { position: absolute; } .row .t138 { position: absolute; } .row .t104 { position: absolute; } .row .t105 { position: absolute; } .row .t106 { position: absolute; } .row .t107 { position: absolute; } .row .t108 { position: absolute; } .row .t109 { position: absolute; } .row .t110 { position: absolute; } .row .t111 { position: absolute; } .row .t112 { position: absolute; } .row .t113 { position: absolute; } .row .t114 { position: absolute; } .row .t115 { position: absolute; } .row .t116 { position: absolute; } .row .t117 { position: absolute; } .row .t118 { position: absolute; } .row .t119 { position: absolute; } .row .t129 { position: absolute; }  .row .t121 { position: absolute; }  .row .t203 { position: absolute; }</style></head><body onload="window.print()">' + innerContents + '</html>');
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
    NavigationComponent.prototype.printToCart4 = function (data) {
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
        if (Number(this.sourceTable) >= 0 && Number(this.sourceTable) <= 0) {
            tableToMove.department = "Terasse";
            j = 0;
        }
        else if ((Number(this.sourceTable) >= 201 && Number(this.sourceTable) <= 205) || Number(this.sourceTable) == 244 || Number(this.sourceTable) == 118) {
            tableToMove.department = "Weinstube";
            j = 1;
        }
        else if ((Number(this.sourceTable) >= 130 && Number(this.sourceTable) <= 138) || Number(this.sourceTable) == 103) {
            tableToMove.department = "Bar";
            j = 3;
        }
        else if ((Number(this.sourceTable) >= 107 && Number(this.sourceTable) <= 130) && Number(this.sourceTable) != 118) {
            tableToMove.department = "Speisesaal";
            j = 2;
        }
        if (Number(this.targetTable) >= 0 && Number(this.targetTable) <= 0) {
            tableToMove.targetDepartment = "Terasse";
        }
        else if ((Number(this.targetTable) >= 201 && Number(this.targetTable) <= 205) || Number(this.targetTable) == 244 || Number(this.targetTable) == 118) {
            tableToMove.targetDepartment = "Weinstube";
        }
        else if ((Number(this.targetTable) >= 130 && Number(this.targetTable) <= 138) || Number(this.targetTable) == 103) {
            tableToMove.targetDepartment = "Bar";
        }
        else if ((Number(this.targetTable) >= 107 && Number(this.targetTable) <= 130) && Number(this.targetTable) != 118) {
            tableToMove.targetDepartment = "Speisesaal";
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
    NavigationComponent.prototype.mouseEnterprintToCart4Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart4Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart4Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart4Button = function () {
        if (this.printToCart4Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart4Button = "ffffff";
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
    core_1.Input('newInformationElements'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "newInformationElements", void 0);
__decorate([
    core_1.Input('newInformationEmployees'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "newInformationEmployees", void 0);
__decorate([
    core_1.Input('tablesOccupied'),
    __metadata("design:type", Number)
], NavigationComponent.prototype, "tablesOccupied", void 0);
__decorate([
    core_1.Input('tablesTempDeparture'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "tablesTempDeparture", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], NavigationComponent.prototype, "reseatExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], NavigationComponent.prototype, "departureExportExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], NavigationComponent.prototype, "termExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], NavigationComponent.prototype, "getTablesExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], NavigationComponent.prototype, "reloadLists", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], NavigationComponent.prototype, "transformExport", void 0);
NavigationComponent = __decorate([
    core_1.Component({
        selector: 'app-navigation',
        template: __webpack_require__("./src/app/components/digital-table-plan/navigation/navigation.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _g || Object, typeof (_h = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _h || Object, typeof (_j = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _j || Object, typeof (_k = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _k || Object, typeof (_l = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _l || Object])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/print/print.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"printSectionId3\" class=\"section3\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n        Die Zahlen getrennt durch / in der PAX Spalte stehen für folgende Werte in dieser Reihenfolge: Anzahl Erwachsene / Anzahl Kinder(K1) 0-3 Jahre / Anzahl Kinder(K2) 4-7 Jahre / Anzahl Kinder(K3) 8-11 Jahre / Anzahl Kinder(K4) 12-16 Jahre<br>\n        Anzahl der Tische besetzt: {{uniqueTables.length}}<br>\n        Anzahl der Personen: {{sumErwRestaurant}} / {{sumKi1Restaurant}} / {{sumKi2Restaurant}} / {{sumKi3Restaurant}} / {{sumKi4Restaurant}}<br>\n        Anzahl der Halbpensionen: {{sumErwRestaurantHP}} / {{sumKi1RestaurantHP}} / {{sumKi2RestaurantHP}} / {{sumKi3RestaurantHP}} / {{sumKi4RestaurantHP}}<br>\n        Anzahl der Gäste mit Frühstück: {{sumErwRestaurantF}} / {{sumKi1RestaurantF}} / {{sumKi2RestaurantF}} / {{sumKi3RestaurantF}} / {{sumKi4RestaurantF}}<br>\n    </tr>\n    <tr style=\"border: solid 1px black;\">\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Nation</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">HP/F</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n    </tr>\n    <div *ngFor=\"let table of tables\">\n      <tr style=\"border: solid 1px black;\">\n        <div *ngIf=\"table.nameValue\">\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.roomNumberValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.numberOfPersonsValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nationValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.arrivalValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.departureValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.priceValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n        </div>\n      </tr>\n    </div>\n  </table>\n</div>\n<div id=\"printSectionId4\" class=\"section3\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n        Die Zahlen getrennt durch / in der PAX Spalte stehen für folgende Werte in dieser Reihenfolge: Anzahl Erwachsene / Anzahl Kinder(K1) 0-3 Jahre / Anzahl Kinder(K2) 4-7 Jahre / Anzahl Kinder(K3) 8-11 Jahre / Anzahl Kinder(K4) 12-16 Jahre<br>\n        Anzahl der Tische besetzt: {{uniqueTables.length}}<br>\n      Anzahl der Personen: {{sumErwRestaurant}} / {{sumKi1Restaurant}} / {{sumKi2Restaurant}} / {{sumKi3Restaurant}} / {{sumKi4Restaurant}}<br>\n      Anzahl der Halbpensionen: {{sumErwRestaurantHP}} / {{sumKi1RestaurantHP}} / {{sumKi2RestaurantHP}} / {{sumKi3RestaurantHP}} / {{sumKi4RestaurantHP}}<br>\n      Anzahl der Gäste mit Frühstück: {{sumErwRestaurantF}} / {{sumKi1RestaurantF}} / {{sumKi2RestaurantF}} / {{sumKi3RestaurantF}} / {{sumKi4RestaurantF}}<br>\n    </tr>\n    <tr style=\"border: solid 1px black;\">\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Nation</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">HP/F</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n    </tr>\n    <div *ngFor=\"let table of tablesTerasseSortedByDate\">\n      <tr style=\"border: solid 1px black;\">\n        <div *ngIf=\"table.nameValue\">\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.roomNumberValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.numberOfPersonsValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nationValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.arrivalValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.departureValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.priceValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n        </div>\n      </tr>\n    </div>\n  </table>\n</div>\n<div id=\"printSectionId1\" class=\"section3\">\n <div *ngIf=\"showTerasseBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n          Die Zahlen getrennt durch / in der PAX Spalte stehen für folgende Werte in dieser Reihenfolge: Anzahl Erwachsene / Anzahl Kinder(K1) 0-3 Jahre / Anzahl Kinder(K2) 4-7 Jahre / Anzahl Kinder(K3) 8-11 Jahre / Anzahl Kinder(K4) 12-16 Jahre<br>\n          Anzahl der Tische besetzt: {{uniqueTables.length}}<br>\n          Anzahl der Personen: {{sumErwRestaurant}} / {{sumKi1Restaurant}} / {{sumKi2Restaurant}} / {{sumKi3Restaurant}} / {{sumKi4Restaurant}}<br>\n          Anzahl der Halbpensionen: {{sumErwRestaurantHP}} / {{sumKi1RestaurantHP}} / {{sumKi2RestaurantHP}} / {{sumKi3RestaurantHP}} / {{sumKi4RestaurantHP}}<br>\n          Anzahl der Gäste mit Frühstück: {{sumErwRestaurantF}} / {{sumKi1RestaurantF}} / {{sumKi2RestaurantF}} / {{sumKi3RestaurantF}} / {{sumKi4RestaurantF}}\n      </tr>\n      <tr>\n        Terrasse\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Nation</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">HP/F</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Sonderinformationen</th>\n      </tr>\n      <div *ngFor=\"let table of tablesTerasse\">\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <div *ngIf=\"group.nameValue\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.roomNumberValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.numberOfPersonsValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nationValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.arrivalValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.departureValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.priceValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showWeinstubeBool\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n        Die Zahlen getrennt durch / in der PAX Spalte stehen für folgende Werte in dieser Reihenfolge: Anzahl Erwachsene / Anzahl Kinder(K1) 0-3 Jahre / Anzahl Kinder(K2) 4-7 Jahre / Anzahl Kinder(K3) 8-11 Jahre / Anzahl Kinder(K4) 12-16 Jahre<br>\n        Anzahl der Tische besetzt: {{uniqueTables.length}}<br>\n        Anzahl der Personen: {{sumErwRestaurant}} / {{sumKi1Restaurant}} / {{sumKi2Restaurant}} / {{sumKi3Restaurant}} / {{sumKi4Restaurant}}<br>\n        Anzahl der Halbpensionen: {{sumErwRestaurantHP}} / {{sumKi1RestaurantHP}} / {{sumKi2RestaurantHP}} / {{sumKi3RestaurantHP}} / {{sumKi4RestaurantHP}}<br>\n        Anzahl der Gäste mit Frühstück: {{sumErwRestaurantF}} / {{sumKi1RestaurantF}} / {{sumKi2RestaurantF}} / {{sumKi3RestaurantF}} / {{sumKi4RestaurantF}}<br>\n    </tr>\n    <tr>\n      Weinstube\n    </tr>\n    <tr style=\"border: solid 1px black;\">\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Nation</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">HP/F</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Sonderinformationen</th>\n    </tr>\n    <div *ngFor=\"let table of tablesWeinstube\">\n      <div *ngFor=\"let group of table.groups\">\n        <tr style=\"border: solid 1px black;\">\n          <div *ngIf=\"group.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.roomNumberValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.numberOfPersonsValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nationValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.arrivalValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.departureValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.priceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n          </div>\n          <div *ngIf=\"group.newTraceText\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n          </div>\n        </tr>\n      </div>\n    </div>\n    </table>\n  </div>\n  <div *ngIf=\"showBarBool\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n        Die Zahlen getrennt durch / in der PAX Spalte stehen für folgende Werte in dieser Reihenfolge: Anzahl Erwachsene / Anzahl Kinder(K1) 0-3 Jahre / Anzahl Kinder(K2) 4-7 Jahre / Anzahl Kinder(K3) 8-11 Jahre / Anzahl Kinder(K4) 12-16 Jahre<br>\n        Anzahl der Tische besetzt: {{uniqueTables.length}}<br>\n        Anzahl der Personen: {{sumErwRestaurant}} / {{sumKi1Restaurant}} / {{sumKi2Restaurant}} / {{sumKi3Restaurant}} / {{sumKi4Restaurant}}<br>\n        Anzahl der Halbpensionen: {{sumErwRestaurantHP}} / {{sumKi1RestaurantHP}} / {{sumKi2RestaurantHP}} / {{sumKi3RestaurantHP}} / {{sumKi4RestaurantHP}}<br>\n        Anzahl der Gäste mit Frühstück: {{sumErwRestaurantF}} / {{sumKi1RestaurantF}} / {{sumKi2RestaurantF}} / {{sumKi3RestaurantF}} / {{sumKi4RestaurantF}}<br>\n    </tr>\n    <tr>\n      Bar\n    </tr>\n    <tr style=\"border: solid 1px black;\">\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Nation</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">HP/F</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Sonderinformationen</th>\n    </tr>\n    <div *ngFor=\"let table of tablesBar\">\n      <div *ngFor=\"let group of table.groups\">\n        <tr style=\"border: solid 1px black;\">\n          <div *ngIf=\"group.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.roomNumberValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.numberOfPersonsValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nationValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.arrivalValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.departureValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.priceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n          </div>\n          <div *ngIf=\"group.newTraceText\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n          </div>\n        </tr>\n      </div>\n    </div>\n    </table>\n  </div>\n  <div *ngIf=\"showSpeisesaalBool\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n        Die Zahlen getrennt durch / in der PAX Spalte stehen für folgende Werte in dieser Reihenfolge: Anzahl Erwachsene / Anzahl Kinder(K1) 0-3 Jahre / Anzahl Kinder(K2) 4-7 Jahre / Anzahl Kinder(K3) 8-11 Jahre / Anzahl Kinder(K4) 12-16 Jahre<br>\n        Anzahl der Tische besetzt: {{uniqueTables.length}}<br>\n        Anzahl der Personen: {{sumErwRestaurant}} / {{sumKi1Restaurant}} / {{sumKi2Restaurant}} / {{sumKi3Restaurant}} / {{sumKi4Restaurant}}<br>\n        Anzahl der Halbpensionen: {{sumErwRestaurantHP}} / {{sumKi1RestaurantHP}} / {{sumKi2RestaurantHP}} / {{sumKi3RestaurantHP}} / {{sumKi4RestaurantHP}}<br>\n        Anzahl der Gäste mit Frühstück: {{sumErwRestaurantF}} / {{sumKi1RestaurantF}} / {{sumKi2RestaurantF}} / {{sumKi3RestaurantF}} / {{sumKi4RestaurantF}}<br>\n    </tr>\n    <tr>\n      Speisesaal\n    </tr>\n    <tr style=\"border: solid 1px black;\">\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Nation</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">HP/F</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Sonderinformationen</th>\n    </tr>\n    <div *ngFor=\"let table of tablesSpeisesaal\">\n      <div *ngFor=\"let group of table.groups\">\n        <tr style=\"border: solid 1px black;\">\n          <div *ngIf=\"group.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.roomNumberValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.numberOfPersonsValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nationValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.arrivalValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.departureValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.priceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n          </div>\n          <div *ngIf=\"group.newTraceText\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n          </div>\n        </tr>\n      </div>\n    </div>\n    </table>\n  </div>\n</div>\n<div id=\"printSectionId2\" class=\"section2\">\n  <div class=\"row\" style=\" border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\">\n    <p>Die Zahlen getrennt durch / stehen für folgende Werte in dieser Reihenfolge:  Anzahl Erwachsenene / Anzahl Kinder(K1) 0-3 Jahre / Anzahl Kinder(K2) 4-7 Jahre / Anzahl Kinder(K3) 8-11 Jahre / Anzahl Kinder(K4) 12-16 Jahre<br>\n      <b style=\"color: #0a7a74; font-size: 30pt\">•</b> Anreisen      <b style=\"color: grey; font-size: 30pt\">•</b> Tisch ist Besetzt       <b style=\"color: red; font-size: 30pt\">•</b> Sonderinformationen       <b style=\"color: beige; font-size: 30pt\">•</b> Tisch ist frei</p>\n    <div *ngIf=\"showTerasseBool\">\n      <div *ngFor=\"let tableTerasse of tablesTerasse; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableTerasse.number}} table-item\" [ngStyle]=\"{'top': tableTerasse.topValue + 'px', 'left': tableTerasse.leftValue + 'px', 'background-color': + tableTerasse.bgColor, 'height': + tableTerasse.height + 'px', 'width': + tableTerasse.width + 'px', 'border': + tableTerasse.border}\" dropdown>\n          <div *ngIf=\"tablesTerasse[j] !== tablesTerasse[j+1]\">\n            <p><b>{{tableTerasse.number}} <br>{{adult1Terasse[j]}}/{{child1Terasse[j]}}/{{child2Terasse[j]}}/{{child3Terasse[j]}}/{{child4Terasse[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showWeinstubeBool\">\n      <div *ngFor=\"let tableWeinstube of tablesWeinstube; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableWeinstube.number}} table-item\" [ngStyle]=\"{'top': tableWeinstube.topValue + 'px', 'left': tableWeinstube.leftValue + 'px', 'background-color': + tableWeinstube.bgColor, 'height': + tableWeinstube.height + 'px', 'width': + tableWeinstube.width + 'px', 'border': + tableWeinstube.border}\" dropdown>\n          <div *ngIf=\"tablesWeinstube[j] !== tablesWeinstube[j+1]\">\n            <p><b>{{tableWeinstube.number}} <br>{{adult1Weinstube[j]}}/{{child1Weinstube[j]}}/{{child2Weinstube[j]}}/{{child3Weinstube[j]}}/{{child4Weinstube[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showBarBool\">\n      <div *ngFor=\"let tableBar of tablesBar; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableBar.number}} table-item\" [ngStyle]=\"{'top': tableBar.topValue + 'px', 'left': tableBar.leftValue + 'px', 'background-color': + tableBar.bgColor, 'height': + tableBar.height + 'px', 'width': + tableBar.width + 'px', 'border': + tableBar.border}\"  dropdown>\n          <div *ngIf=\"tablesBar[j] !== tablesBar[j+1]\">\n            <p><b>{{tableBar.number}}  <br>{{adult1Bar[j]}}/{{child1Bar[j]}}/{{child2Bar[j]}}/{{child3Bar[j]}}/{{child4Bar[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showSpeisesaalBool\">\n      <div *ngFor=\"let tableSpeisesaal of tablesSpeisesaal; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableSpeisesaal.number}} table-item\" [ngStyle]=\"{'top': tableSpeisesaal.topValue + 'px', 'left': tableSpeisesaal.leftValue + 'px', 'background-color': + tableSpeisesaal.bgColor, 'height': + tableSpeisesaal.height + 'px', 'width': + tableSpeisesaal.width + 'px', 'border': + tableSpeisesaal.border}\"  dropdown>\n          <div *ngIf=\"tablesSpeisesaal[j] !== tablesSpeisesaal[j+1]\">\n            <p><b>{{tableSpeisesaal.number}}  <br>{{adult1Speisesaal[j]}}/{{child1Speisesaal[j]}}/{{child2Speisesaal[j]}}/{{child3Speisesaal[j]}}/{{child4Speisesaal[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p style=\"position: relative; top: 850px; left: 20px\">Anzahl der Tische besetzt: {{uniqueTables.length}}<br>\n    Anzahl der Personen: {{sumErwRestaurant}} / {{sumKi1Restaurant}} / {{sumKi2Restaurant}} / {{sumKi3Restaurant}} / {{sumKi4Restaurant}}<br>\n    Anzahl der Halbpensionen: {{sumErwRestaurantHP}} / {{sumKi1RestaurantHP}} / {{sumKi2RestaurantHP}} / {{sumKi3RestaurantHP}} / {{sumKi4RestaurantHP}}<br>\n    Anzahl der Gäste mit Frühstück: {{sumErwRestaurantF}} / {{sumKi1RestaurantF}} / {{sumKi2RestaurantF}} / {{sumKi3RestaurantF}} / {{sumKi4RestaurantF}}<br>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/print/print.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var PrintComponent = (function () {
    function PrintComponent() {
        this.getTablesOccupied = new core_1.EventEmitter();
        this.getTablesforAzListe = new core_1.EventEmitter();
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.uniqueTables = [];
        this.tableNumbers = [];
        this.tableTemp = [];
        this.sumOfGuests = [];
        this.sumOfGuestsHP = [];
        this.sumOfGuestsF = [];
        this.trace = false;
    }
    PrintComponent.prototype.ngOnInit = function () {
    };
    PrintComponent.prototype.formatAzList = function (tables) {
        this.tables = tables;
        this.tableNumbers = [];
        this.uniqueTables = [];
        this.tableTemp = [];
        this.tablesTerasseSortedByDate = tables;
        this.sumOfGuests = [0, 0, 0, 0, 0];
        this.sumErwRestaurant = 0;
        this.sumKi1Restaurant = 0;
        this.sumKi2Restaurant = 0;
        this.sumKi3Restaurant = 0;
        this.sumKi4Restaurant = 0;
        this.sumOfGuestsF = [0, 0, 0, 0, 0];
        this.sumErwRestaurantF = 0;
        this.sumKi1RestaurantF = 0;
        this.sumKi2RestaurantF = 0;
        this.sumKi3RestaurantF = 0;
        this.sumKi4RestaurantF = 0;
        this.sumOfGuestsHP = [0, 0, 0, 0, 0];
        this.sumErwRestaurantHP = 0;
        this.sumKi1RestaurantHP = 0;
        this.sumKi2RestaurantHP = 0;
        this.sumKi3RestaurantHP = 0;
        this.sumKi4RestaurantHP = 0;
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
                        this.sumOfGuests = this.tables[i].groups[j].numberOfPersonsValue.match(/\d+/g);
                        if (this.tables[i].groups[j].priceValue.indexOf("H") != -1) {
                            this.sumOfGuestsHP = this.tables[i].groups[j].numberOfPersonsValue.match(/\d+/g);
                        }
                        else if (this.tables[i].groups[j].priceValue.indexOf("F") != -1) {
                            this.sumOfGuestsF = this.tables[i].groups[j].numberOfPersonsValue.match(/\d+/g);
                        }
                        if (this.sumOfGuestsHP != null) {
                            //console.log(erwKi);
                            this.sumErwRestaurantHP += Number(this.sumOfGuestsHP[0]);
                            this.sumKi1RestaurantHP += Number(this.sumOfGuestsHP[1]);
                            this.sumKi2RestaurantHP += Number(this.sumOfGuestsHP[2]);
                            this.sumKi4RestaurantHP += Number(this.sumOfGuestsHP[3]);
                            this.sumKi4RestaurantHP += Number(this.sumOfGuestsHP[4]);
                            //console.log("this.object");
                            //console.log(this.object);
                            this.sumOfGuestsHP = [0, 0, 0, 0, 0];
                        }
                        if (this.sumOfGuestsF != null) {
                            console.log(this.sumOfGuestsF);
                            this.sumErwRestaurantF += Number(this.sumOfGuestsF[0]);
                            this.sumKi1RestaurantF += Number(this.sumOfGuestsF[1]);
                            this.sumKi2RestaurantF += Number(this.sumOfGuestsF[2]);
                            this.sumKi3RestaurantF += Number(this.sumOfGuestsF[3]);
                            this.sumKi4RestaurantF += Number(this.sumOfGuestsF[4]);
                            //console.log("this.object");
                            //console.log(this.object);
                            this.sumOfGuestsF = [0, 0, 0, 0, 0];
                        }
                        if (this.sumOfGuests != null) {
                            //console.log(erwKi);
                            this.sumErwRestaurant += Number(this.sumOfGuests[0]);
                            this.sumKi1Restaurant += Number(this.sumOfGuests[1]);
                            this.sumKi2Restaurant += Number(this.sumOfGuests[2]);
                            this.sumKi3Restaurant += Number(this.sumOfGuests[3]);
                            this.sumKi4Restaurant += Number(this.sumOfGuests[4]);
                        }
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
        this.tablesTerasseSortedByDate = this.tableTemp.sort(function (a, b) {
            var arrivalValueA = 0;
            var arrivalValueB = 0;
            if (typeof a.arrivalValue !== "undefined" && a.arrivalValue !== null) {
                arrivalValueA = a.arrivalValue; // ignore upper and lowercase
            }
            if (typeof b.arrivalValue !== "undefined" && b.arrivalValue !== null) {
                arrivalValueB = b.arrivalValue; // ignore upper and lowercase
            }
            if (arrivalValueA < arrivalValueB) {
                return -1;
            }
            if (arrivalValueA > arrivalValueB) {
                return 1;
            }
            // names must be equal
            return 0;
            //}
        });
        console.log(this.tablesTerasseSortedByDate);
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
    core_1.Input('tables'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('dateGeneratedListe'),
    __metadata("design:type", String)
], PrintComponent.prototype, "dateGeneratedListe", void 0);
__decorate([
    core_1.Input('tablesWeinstube'),
    __metadata("design:type", String)
], PrintComponent.prototype, "tablesWeinstube", void 0);
__decorate([
    core_1.Input('showWeinstubeBool'),
    __metadata("design:type", String)
], PrintComponent.prototype, "showWeinstubeBool", void 0);
__decorate([
    core_1.Input('showBarBool'),
    __metadata("design:type", String)
], PrintComponent.prototype, "showBarBool", void 0);
__decorate([
    core_1.Input('tablesBar'),
    __metadata("design:type", String)
], PrintComponent.prototype, "tablesBar", void 0);
__decorate([
    core_1.Input('showTerasseBool'),
    __metadata("design:type", String)
], PrintComponent.prototype, "showTerasseBool", void 0);
__decorate([
    core_1.Input('tablesTerasse'),
    __metadata("design:type", String)
], PrintComponent.prototype, "tablesTerasse", void 0);
__decorate([
    core_1.Input('showSpeisesaalBool'),
    __metadata("design:type", String)
], PrintComponent.prototype, "showSpeisesaalBool", void 0);
__decorate([
    core_1.Input('tablesSpeisesaal'),
    __metadata("design:type", String)
], PrintComponent.prototype, "tablesSpeisesaal", void 0);
__decorate([
    core_1.Input('adult1Weinstube'),
    __metadata("design:type", String)
], PrintComponent.prototype, "adult1Weinstube", void 0);
__decorate([
    core_1.Input('adult1Bar'),
    __metadata("design:type", String)
], PrintComponent.prototype, "adult1Bar", void 0);
__decorate([
    core_1.Input('adult1Terasse'),
    __metadata("design:type", String)
], PrintComponent.prototype, "adult1Terasse", void 0);
__decorate([
    core_1.Input('adult1Speisesaal'),
    __metadata("design:type", String)
], PrintComponent.prototype, "adult1Speisesaal", void 0);
__decorate([
    core_1.Input('child1Weinstube'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child1Weinstube", void 0);
__decorate([
    core_1.Input('child1Bar'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child1Bar", void 0);
__decorate([
    core_1.Input('child1Terasse'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child1Terasse", void 0);
__decorate([
    core_1.Input('child1Speisesaal'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child1Speisesaal", void 0);
__decorate([
    core_1.Input('child2Weinstube'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child2Weinstube", void 0);
__decorate([
    core_1.Input('child2Bar'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child2Bar", void 0);
__decorate([
    core_1.Input('child2Terasse'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child2Terasse", void 0);
__decorate([
    core_1.Input('child2Speisesaal'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child2Speisesaal", void 0);
__decorate([
    core_1.Input('child3Weinstube'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child3Weinstube", void 0);
__decorate([
    core_1.Input('child3Bar'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child3Bar", void 0);
__decorate([
    core_1.Input('child3Terasse'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child3Terasse", void 0);
__decorate([
    core_1.Input('child3Speisesaal'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child3Speisesaal", void 0);
__decorate([
    core_1.Input('child4Weinstube'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child4Weinstube", void 0);
__decorate([
    core_1.Input('child4Bar'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child4Bar", void 0);
__decorate([
    core_1.Input('child4Terasse'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child4Terasse", void 0);
__decorate([
    core_1.Input('child4Speisesaal'),
    __metadata("design:type", String)
], PrintComponent.prototype, "child4Speisesaal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], PrintComponent.prototype, "getTablesOccupied", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], PrintComponent.prototype, "getTablesforAzListe", void 0);
PrintComponent = __decorate([
    core_1.Component({
        selector: 'app-print',
        template: __webpack_require__("./src/app/components/digital-table-plan/print/print.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrintComponent);
exports.PrintComponent = PrintComponent;
var _a, _b;
//# sourceMappingURL=print.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
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
    core_1.Component({
        selector: 'app-profile',
        template: __webpack_require__("./src/app/components/digital-table-plan/profile/profile.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var validate_service_1 = __webpack_require__("./src/app/services/validate.service.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
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
    core_1.Component({
        selector: 'app-register',
        template: __webpack_require__("./src/app/components/digital-table-plan/register/register.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof validate_service_1.ValidateService !== "undefined" && validate_service_1.ValidateService) === "function" && _a || Object, typeof (_b = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _b || Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/components/digital-table-plan/tableplan/tableplan.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTablePlanBool\">\n  <div class=\"col-xs-12 printTwo\">\n    <div class=\"row\" style=\" border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\">\n      <div *ngIf=\"showTerasseBool\">\n        <div *ngFor=\"let tableTerasse of tablesTerasse; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableTerasse.number}} table-item\" [ngStyle]=\"{'top': tableTerasse.topValue + 'px', 'left': tableTerasse.leftValue + 'px', 'background-color': + tableTerasse.bgColor, 'height': + tableTerasse.height + 'px', 'width': + tableTerasse.width + 'px', 'border': + tableTerasse.border}\" [style.border]=\"getStyle(tablesTerasse[j].groups)\"  dropdown>\n            <div *ngIf=\"tablesTerasse[j] !== tablesTerasse[j+1]\">\n              <p><b>{{tableTerasse.number}} <br>{{adult1Terasse[j]}}/{{child1Terasse[j]}}/{{child2Terasse[j]}}/{{child3Terasse[j]}}/{{child4Terasse[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableTerasse, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableTerasse, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableTerasse.groups\">\n                    <div *ngIf=\"group.nameValue\">\n                      <div class=\"dropdown-item\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Zimmer Nummer: </b>{{group.roomNumberValue}}<br><b>Anreise: </b>{{group.arrivalValue}}<br><b>Abreise:</b> {{group.departureValue}}<br><b>HP/F:</b> {{group.priceValue}}<br><b>Personen Anzahl:</b>{{group.numberOfPersonsValue}}<br></div>\n                      <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                    </div>\n                    <div *ngIf=\"group.newTraceText\">\n                      <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                        <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showWeinstubeBool\">\n        <div *ngFor=\"let tableWeinstube of tablesWeinstube; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableWeinstube.number}} table-item\" [ngStyle]=\"{'top': tableWeinstube.topValue + 'px', 'left': tableWeinstube.leftValue + 'px', 'background-color': + tableWeinstube.bgColor, 'height': + tableWeinstube.height + 'px', 'width': + tableWeinstube.width + 'px', 'border': + tableWeinstube.border}\" [style.border]=\"getStyle(tablesWeinstube[j].groups)\" dropdown>\n            <div *ngIf=\"tablesWeinstube[j] !== tablesWeinstube[j+1]\">\n              <p><b>{{tableWeinstube.number}} <br>{{adult1Weinstube[j]}}/{{child1Weinstube[j]}}/{{child2Weinstube[j]}}/{{child3Weinstube[j]}}/{{child4Weinstube[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableWeinstube, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableWeinstube, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableWeinstube.groups\">\n                    <div *ngIf=\"group.nameValue\">\n                      <div class=\"dropdown-item\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Zimmer Nummer: </b>{{group.roomNumberValue}}<br><b>Anreise: </b>{{group.arrivalValue}}<br><b>Abreise:</b> {{group.departureValue}}<br><b>HP/F:</b> {{group.priceValue}}<br><b>Personen Anzahl:</b>{{group.numberOfPersonsValue}}<br></div>\n                      <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                    </div>\n                    <div *ngIf=\"group.newTraceText\">\n                      <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                        <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showBarBool\">\n        <div *ngFor=\"let tableBar of tablesBar; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableBar.number}} table-item\" [ngStyle]=\"{'top': tableBar.topValue + 'px', 'left': tableBar.leftValue + 'px', 'background-color': + tableBar.bgColor, 'height': + tableBar.height + 'px', 'width': + tableBar.width + 'px', 'border': + tableBar.border}\" [style.border]=\"getStyle(tablesBar[j].groups)\" dropdown>\n            <div *ngIf=\"tablesBar[j] !== tablesBar[j+1]\">\n              <p><b>{{tableBar.number}}  <br>{{adult1Bar[j]}}/{{child1Bar[j]}}/{{child2Bar[j]}}/{{child3Bar[j]}}/{{child4Bar[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableBar, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableBar, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableBar.groups\">\n                    <div *ngIf=\"group.nameValue\">\n                      <div class=\"dropdown-item\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Zimmer Nummer: </b>{{group.roomNumberValue}}<br><b>Anreise: </b>{{group.arrivalValue}}<br><b>Abreise:</b> {{group.departureValue}}<br><b>HP/F:</b> {{group.priceValue}}<br><b>Personen Anzahl:</b>{{group.numberOfPersonsValue}}<br></div>\n                      <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                    </div>\n                    <div *ngIf=\"group.newTraceText\">\n                      <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                        <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showSpeisesaalBool\">\n        <div *ngFor=\"let tableSpeisesaal of tablesSpeisesaal; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableSpeisesaal.number}} table-item\" [ngStyle]=\"{'top': tableSpeisesaal.topValue + 'px', 'left': tableSpeisesaal.leftValue + 'px', 'background-color': + tableSpeisesaal.bgColor, 'height': + tableSpeisesaal.height + 'px', 'width': + tableSpeisesaal.width + 'px', 'border': + tableSpeisesaal.border, 'border-radius': + tableSpeisesaal.borderRadius, 'transform':  + tableSpeisesaal.transformValue}\" [style.border]=\"getStyle(tablesSpeisesaal[j].groups)\" dropdown>\n            <div *ngIf=\"tablesSpeisesaal[j] !== tablesSpeisesaal[j+1]\">\n              <p><b>{{tableSpeisesaal.number}}  <br>{{adult1Speisesaal[j]}}/{{child1Speisesaal[j]}}/{{child2Speisesaal[j]}}/{{child3Speisesaal[j]}}/{{child4Speisesaal[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableSpeisesaal, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableSpeisesaal, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableSpeisesaal.groups\">\n                    <div *ngIf=\"group.nameValue\">\n                      <div class=\"dropdown-item\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Zimmer Nummer: </b>{{group.roomNumberValue}}<br><b>Anreise: </b>{{group.arrivalValue}}<br><b>Abreise:</b> {{group.departureValue}}<br><b>HP/F:</b> {{group.priceValue}}<br><b>Personen Anzahl:</b>{{group.numberOfPersonsValue}}<br></div>\n                      <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                    </div>\n                    <div *ngIf=\"group.newTraceText\">\n                      <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                        <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showAllBool\">\n        <br>\n        <br>\n        <br>\n        <h1 style=\"color: white; margin-top: 200px\">Perfekt um eine Suche zu starten ;-)</h1>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digital-table-plan/tableplan/tableplan.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("./src/app/services/main.service.ts");
var TableplanComponent = (function () {
    function TableplanComponent(mainService) {
        this.mainService = mainService;
        this.movedTerasse = new core_1.EventEmitter();
        this.movedBar = new core_1.EventEmitter();
        this.movedSpeisesaal = new core_1.EventEmitter();
        this.movedWeinstube = new core_1.EventEmitter();
        this.changeBgColorIfArrival = new core_1.EventEmitter();
        this.adult1SpeisesaalExport = new core_1.EventEmitter();
        this.child1SpeisesaalExport = new core_1.EventEmitter();
        this.child2SpeisesaalExport = new core_1.EventEmitter();
        this.child3SpeisesaalExport = new core_1.EventEmitter();
        this.child4SpeisesaalExport = new core_1.EventEmitter();
        this.adult1BarExport = new core_1.EventEmitter();
        this.child1BarExport = new core_1.EventEmitter();
        this.child2BarExport = new core_1.EventEmitter();
        this.child3BarExport = new core_1.EventEmitter();
        this.child4BarExport = new core_1.EventEmitter();
        this.adult1WeinstubeExport = new core_1.EventEmitter();
        this.child1WeinstubeExport = new core_1.EventEmitter();
        this.child2WeinstubeExport = new core_1.EventEmitter();
        this.child3WeinstubeExport = new core_1.EventEmitter();
        this.child4WeinstubeExport = new core_1.EventEmitter();
        this.adult1TerasseExport = new core_1.EventEmitter();
        this.child1TerasseExport = new core_1.EventEmitter();
        this.child2TerasseExport = new core_1.EventEmitter();
        this.child3TerasseExport = new core_1.EventEmitter();
        this.child4TerasseExport = new core_1.EventEmitter();
        this.adult1Terasse = [];
        this.child1Terasse = [];
        this.child2Terasse = [];
        this.child3Terasse = [];
        this.child4Terasse = [];
        this.adult1Weinstube = [];
        this.child1Weinstube = [];
        this.child2Weinstube = [];
        this.child3Weinstube = [];
        this.child4Weinstube = [];
        this.adult1Bar = [];
        this.child1Bar = [];
        this.child2Bar = [];
        this.child3Bar = [];
        this.child4Bar = [];
        this.adult1Speisesaal = [];
        this.child1Speisesaal = [];
        this.child2Speisesaal = [];
        this.child3Speisesaal = [];
        this.child4Speisesaal = [];
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
            //console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
            //console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
            //console.log("response[0].tables.department" + response[0].tables[j].department);
            if (response === null) {
                return;
            }
            else {
                if (response[0].department === "Terasse") {
                    _this.movedTerasse.emit(response[0].tables);
                    //this.tablesTerasse = response[0].tables;
                }
                else if (response[0].department === "Weinstube") {
                    _this.movedWeinstube.emit(response[0].tables);
                    //this.tablesWeinstube = response[0].tables;
                    //this._navService.changeNav(response[0].tables);
                }
                else if (response[0].department === "Bar") {
                    _this.movedBar.emit(response[0].tables);
                    //this.tablesBar = response[0].tables;
                }
                else if (response[0].department === "Speisesaal") {
                    _this.movedSpeisesaal.emit(response[0].tables);
                    //this.tablesSpeisesaal = response[0].tables;
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
            //console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
            //console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
            //console.log("response[0].tables.department" + response[0].tables[j].department);
            if (response === null) {
                return;
            }
            else {
                if (response[0].department === "Terasse") {
                    _this.movedTerasse.emit(response[0].tables);
                    //this.tablesTerasse = response[0].tables;
                }
                else if (response[0].department === "Weinstube") {
                    _this.movedWeinstube.emit(response[0].tables);
                    //this.tablesWeinstube = response[0].tables;
                    //this._navService.changeNav(response[0].tables);
                }
                else if (response[0].department === "Bar") {
                    _this.movedBar.emit(response[0].tables);
                    //this.tablesBar = response[0].tables;
                }
                else if (response[0].department === "Speisesaal") {
                    _this.movedSpeisesaal.emit(response[0].tables);
                    //this.tablesSpeisesaal = response[0].tables;
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
                if (a[b].newTraceText) {
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
        console.log("sumUpNumberOfPersons called");
        if (this.tablesTerasse) {
            for (var p = 0; p < this.tablesTerasse.length; p++) {
                this.adult1Terasse[p] = 0;
                this.child1Terasse[p] = 0;
                this.child2Terasse[p] = 0;
                this.child3Terasse[p] = 0;
                this.child4Terasse[p] = 0;
                if (this.tablesTerasse[p].groups) {
                    for (var g = 0; g < this.tablesTerasse[p].groups.length; g++) {
                        if (this.tablesTerasse[p].groups[g].numberOfPersonsValue) {
                            var adult = this.tablesTerasse[p].groups[g].numberOfPersonsValue.match(/\d+/g);
                            if (adult != null) {
                                //console.log(adult);
                                this.adult1Terasse[p] = this.adult1Terasse[p] + Number(adult[0]);
                                //console.log(this.adult[p]);
                            }
                            if (adult != null) {
                                //console.log(adult);
                                this.child1Terasse[p] = this.child1Terasse[p] + Number(adult[1]);
                                this.child2Terasse[p] = this.child2Terasse[p] + Number(adult[2]);
                                this.child3Terasse[p] = this.child3Terasse[p] + Number(adult[3]);
                                this.child4Terasse[p] = this.child4Terasse[p] + Number(adult[4]);
                                //console.log(this.child[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesWeinstube) {
            for (var p = 0; p < this.tablesWeinstube.length; p++) {
                this.adult1Weinstube[p] = 0;
                this.child1Weinstube[p] = 0;
                this.child2Weinstube[p] = 0;
                this.child3Weinstube[p] = 0;
                this.child4Weinstube[p] = 0;
                if (this.tablesWeinstube[p].groups) {
                    for (var g = 0; g < this.tablesWeinstube[p].groups.length; g++) {
                        if (this.tablesWeinstube[p].groups[g].numberOfPersonsValue) {
                            var adult = this.tablesWeinstube[p].groups[g].numberOfPersonsValue.match(/\d+/g);
                            if (adult != null) {
                                //console.log(adult);
                                this.adult1Weinstube[p] = this.adult1Weinstube[p] + Number(adult[0]);
                                //console.log(this.adult[p]);
                            }
                            if (adult != null) {
                                //console.log(adult);
                                this.child1Weinstube[p] = this.child1Weinstube[p] + Number(adult[1]);
                                this.child2Weinstube[p] = this.child2Weinstube[p] + Number(adult[2]);
                                this.child3Weinstube[p] = this.child3Weinstube[p] + Number(adult[3]);
                                this.child4Weinstube[p] = this.child4Weinstube[p] + Number(adult[4]);
                                //console.log(this.child[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesBar) {
            for (var p = 0; p < this.tablesBar.length; p++) {
                this.adult1Bar[p] = 0;
                this.child1Bar[p] = 0;
                this.child2Bar[p] = 0;
                this.child3Bar[p] = 0;
                this.child4Bar[p] = 0;
                if (this.tablesBar[p].groups) {
                    for (var g = 0; g < this.tablesBar[p].groups.length; g++) {
                        if (this.tablesBar[p].groups[g].numberOfPersonsValue) {
                            var adult = this.tablesBar[p].groups[g].numberOfPersonsValue.match(/\d+/g);
                            if (adult != null) {
                                //console.log(adult);
                                this.adult1Bar[p] = this.adult1Bar[p] + Number(adult[0]);
                                //console.log(this.adult[p]);
                            }
                            if (adult != null) {
                                //console.log(adult);
                                this.child1Bar[p] = this.child1Bar[p] + Number(adult[1]);
                                this.child2Bar[p] = this.child2Bar[p] + Number(adult[2]);
                                this.child3Bar[p] = this.child3Bar[p] + Number(adult[3]);
                                this.child4Bar[p] = this.child4Bar[p] + Number(adult[4]);
                                //console.log(this.child[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesSpeisesaal) {
            for (var p = 0; p < this.tablesSpeisesaal.length; p++) {
                this.adult1Speisesaal[p] = 0;
                this.child1Speisesaal[p] = 0;
                this.child2Speisesaal[p] = 0;
                this.child3Speisesaal[p] = 0;
                this.child4Speisesaal[p] = 0;
                if (this.tablesSpeisesaal[p].groups) {
                    for (var g = 0; g < this.tablesSpeisesaal[p].groups.length; g++) {
                        if (this.tablesSpeisesaal[p].groups[g].numberOfPersonsValue) {
                            var adult = this.tablesSpeisesaal[p].groups[g].numberOfPersonsValue.match(/\d+/g);
                            if (adult != null) {
                                //console.log(adult);
                                this.adult1Speisesaal[p] = this.adult1Speisesaal[p] + Number(adult[0]);
                                //console.log(this.adult[p]);
                            }
                            if (adult != null) {
                                //console.log(adult);
                                this.child1Speisesaal[p] = this.child1Speisesaal[p] + Number(adult[1]);
                                this.child2Speisesaal[p] = this.child2Speisesaal[p] + Number(adult[2]);
                                this.child3Speisesaal[p] = this.child3Speisesaal[p] + Number(adult[3]);
                                this.child4Speisesaal[p] = this.child4Speisesaal[p] + Number(adult[4]);
                                //console.log(this.child[p]);
                            }
                        }
                    }
                }
            }
        }
        this.adult1SpeisesaalExport.emit(this.adult1Speisesaal);
        this.child1SpeisesaalExport.emit(this.child1Speisesaal);
        this.child2SpeisesaalExport.emit(this.child2Speisesaal);
        this.child3SpeisesaalExport.emit(this.child3Speisesaal);
        this.child4SpeisesaalExport.emit(this.child4Speisesaal);
        this.adult1BarExport.emit(this.adult1Bar);
        this.child1BarExport.emit(this.child1Bar);
        this.child2BarExport.emit(this.child2Bar);
        this.child3BarExport.emit(this.child3Bar);
        this.child4BarExport.emit(this.child4Bar);
        this.adult1WeinstubeExport.emit(this.adult1Weinstube);
        this.child1WeinstubeExport.emit(this.child1Weinstube);
        this.child2WeinstubeExport.emit(this.child2Weinstube);
        this.child3WeinstubeExport.emit(this.child3Weinstube);
        this.child4WeinstubeExport.emit(this.child4Weinstube);
        this.adult1TerasseExport.emit(this.adult1Terasse);
        this.child1TerasseExport.emit(this.child1Terasse);
        this.child2TerasseExport.emit(this.child2Terasse);
        this.child3TerasseExport.emit(this.child3Terasse);
        this.child4TerasseExport.emit(this.child4Terasse);
    };
    return TableplanComponent;
}());
__decorate([
    core_1.Input('tablesSpeisesaal'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesSpeisesaal", void 0);
__decorate([
    core_1.Input('showSpeisesaalBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showSpeisesaalBool", void 0);
__decorate([
    core_1.Input('tablesTerasse'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesTerasse", void 0);
__decorate([
    core_1.Input('showTerasseBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTerasseBool", void 0);
__decorate([
    core_1.Input('tablesWeinstube'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesWeinstube", void 0);
__decorate([
    core_1.Input('showWeinstubeBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showWeinstubeBool", void 0);
__decorate([
    core_1.Input('tablesBar'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesBar", void 0);
__decorate([
    core_1.Input('showBarBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showBarBool", void 0);
__decorate([
    core_1.Input('showAllBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showAllBool", void 0);
__decorate([
    core_1.Input('showTablePlanBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TableplanComponent.prototype, "movedTerasse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], TableplanComponent.prototype, "movedBar", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], TableplanComponent.prototype, "movedSpeisesaal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], TableplanComponent.prototype, "movedWeinstube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], TableplanComponent.prototype, "changeBgColorIfArrival", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], TableplanComponent.prototype, "adult1SpeisesaalExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], TableplanComponent.prototype, "child1SpeisesaalExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_h = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _h || Object)
], TableplanComponent.prototype, "child2SpeisesaalExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_j = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _j || Object)
], TableplanComponent.prototype, "child3SpeisesaalExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_k = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _k || Object)
], TableplanComponent.prototype, "child4SpeisesaalExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_l = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _l || Object)
], TableplanComponent.prototype, "adult1BarExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_m = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _m || Object)
], TableplanComponent.prototype, "child1BarExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_o = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _o || Object)
], TableplanComponent.prototype, "child2BarExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_p = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _p || Object)
], TableplanComponent.prototype, "child3BarExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_q = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _q || Object)
], TableplanComponent.prototype, "child4BarExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_r = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _r || Object)
], TableplanComponent.prototype, "adult1WeinstubeExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_s = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _s || Object)
], TableplanComponent.prototype, "child1WeinstubeExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_t = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _t || Object)
], TableplanComponent.prototype, "child2WeinstubeExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_u = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _u || Object)
], TableplanComponent.prototype, "child3WeinstubeExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_v = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _v || Object)
], TableplanComponent.prototype, "child4WeinstubeExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_w = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _w || Object)
], TableplanComponent.prototype, "adult1TerasseExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_x = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _x || Object)
], TableplanComponent.prototype, "child1TerasseExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_y = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _y || Object)
], TableplanComponent.prototype, "child2TerasseExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_z = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _z || Object)
], TableplanComponent.prototype, "child3TerasseExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_0 = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _0 || Object)
], TableplanComponent.prototype, "child4TerasseExport", void 0);
TableplanComponent = __decorate([
    core_1.Component({
        selector: 'app-tableplan',
        template: __webpack_require__("./src/app/components/digital-table-plan/tableplan/tableplan.component.html"),
        styles: [__webpack_require__("./src/app/components/digital-table-plan/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_1 = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _1 || Object])
], TableplanComponent);
exports.TableplanComponent = TableplanComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
//# sourceMappingURL=tableplan.component.js.map

/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;
var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Gets called from submit login form
    AuthService.prototype.authenticateUser = function (user) {
        console.log("Check1");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new http_1.Headers();
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
        return angular2_jwt_1.tokenNotExpired('id_token');
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], AuthService);
exports.AuthService = AuthService;
var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/services/main.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
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
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('occupyTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.removeTable = function (dataString) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removeTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.addTable = function (dataString) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.dispenseTable = function (tableTerasse) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('dispenseTable', tableTerasse, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.removePlaceholder = function (dataString) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removePlaceholder', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.addPlaceholder = function (tableTerasse) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addPlaceholder', tableTerasse, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.addInformationToTable = function (dataString) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addInformationToTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.sendInformation = function (newInformation) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToTables', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.sendInformationToBox = function (newInformation) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToBox', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.deleteInformationElement = function (informationElement) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('deleteInformationElement', informationElement, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.updateImHausListElement = function (informationElements2) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateImHausListElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.sendInformationToNoteBlock = function (newInformation) {
        var headers = new http_1.Headers();
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], MainService);
exports.MainService = MainService;
var _a;
//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ValidateService);
exports.ValidateService = ValidateService;
//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map