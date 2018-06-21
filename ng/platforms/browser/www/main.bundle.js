webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
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
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.hostURL = 'http://localhost';
        this.hostPORT = '8000';
        console.log(localStorage.getItem('currentUser'));
        if (localStorage.getItem('currentUser')) {
            // localStorage.setItem('currentUser',JSON.stringify({ email: "", name: "",token: "" }))
            this.token = null;
            localStorage.removeItem('currentUser');
        }
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (email, password, tokens) {
        var token = "yes";
        var rules = { "dept": "IT", "position": "developer" };
        // if(token) {
        if (email == 'ss' && password == '1') {
            this.storeToken(email, password, token, tokens, rules);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(true);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(false);
            //  }
        }
    };
    AuthenticationService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.storeToken = function (email, name, token, tokens, rules) {
        this.token = token;
        localStorage.setItem('currentUser', JSON.stringify({ email: 'ss', name: name, token: token, tokens: tokens, rules: rules }));
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__user_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    UserService.prototype.getUsers = function () {
        console.log("=== get user ===");
        console.log(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // let users={user:"test"};
        // return 
        return this.http.get('http://localhost:8000/api/users', options).map(function (response) { return response.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AuthenticationService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <h2>alert</h2>\n\n    <button (click)=\"swalInternet.show()\" class=\"btn btn-success\">alert</button>\n    <swal #swalInternet title=\"alert\" text=\"That thing is alert\" type=\"question\"></swal>"

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlertComponent = (function () {
    function AlertComponent() {
    }
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alert/alert.component.css")]
    })
], AlertComponent);

//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-boostrap/app-boostrap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBoostrapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppBoostrapModule = (function () {
    function AppBoostrapModule() {
    }
    return AppBoostrapModule;
}());
AppBoostrapModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot()
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalModule */]]
    })
], AppBoostrapModule);

//# sourceMappingURL=app-boostrap.module.js.map

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

module.exports = "<!-- <div class=\"card\">\r\n  <div class=\"card-block\"> -->\r\n    <div class=\"container\">\r\n        <!-- <div class=\"col-sm-12\"> -->\r\n            <router-outlet></router-outlet>\r\n        <!-- </div> -->\r\n    </div>\r\n  <!-- </div>\r\n</div> -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_boostrap_app_boostrap_module__ = __webpack_require__("../../../../../src/app/app-boostrap/app-boostrap.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_public_api__ = __webpack_require__("../../../../../src/public_api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__i18n_i18n_component__ = __webpack_require__("../../../../../src/app/i18n/i18n.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__i18n_say_hi_say_hi_component__ = __webpack_require__("../../../../../src/app/i18n/say-hi/say-hi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__hero_form_hero_form_component__ = __webpack_require__("../../../../../src/app/hero-form/hero-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__hero_list_hero_list_component__ = __webpack_require__("../../../../../src/app/hero-list/hero-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auto_auto_component__ = __webpack_require__("../../../../../src/app/auto/auto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__auto_ng_autocomplete_ng_autocomplete_module__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/ng-autocomplete.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__auto_ng_view_ng_view_component__ = __webpack_require__("../../../../../src/app/auto/ng-view/ng-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__auto_ng_holder_ng_holder_component__ = __webpack_require__("../../../../../src/app/auto/ng-holder/ng-holder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__demo_directives_drop_zone_directive__ = __webpack_require__("../../../../../src/app/demo/directives/drop-zone.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__demo_components_input_file_component__ = __webpack_require__("../../../../../src/app/demo/components/input-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__at_at_component__ = __webpack_require__("../../../../../src/app/at/at.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__directive_directive_component__ = __webpack_require__("../../../../../src/app/directive/directive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__oneway_oneway_component__ = __webpack_require__("../../../../../src/app/oneway/oneway.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__paging_paging_component__ = __webpack_require__("../../../../../src/app/paging/paging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular_4_data_table_src_index__ = __webpack_require__("../../../../angular-4-data-table/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__http_http_component__ = __webpack_require__("../../../../../src/app/http/http.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__userinfo_userinfo_component__ = __webpack_require__("../../../../../src/app/userinfo/userinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__mydatepicker_mydatepicker_component__ = __webpack_require__("../../../../../src/app/mydatepicker/mydatepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__alert_alert_component__ = __webpack_require__("../../../../../src/app/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_responsive__ = __webpack_require__("../../../../ng2-responsive/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_ng2_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { NgxSpinnerModule } from 'ngx-spinner';
//i18n





//service






//form




//event

//autocomplete




//file











// import { LoadComponent } from './load/load.component';
// import { NgDatepickerModule } from 'ng2-datepicker';


// import { NgProgressModule  } from 'ngx-progressbar';
// import { MyDatePickerModule } from 'mydatepicker';
var createTranslateLoader = function (http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__hero_form_hero_form_component__["a" /* HeroFormComponent */],
            __WEBPACK_IMPORTED_MODULE_19__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_20__hero_list_hero_list_component__["a" /* HeroListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__events_events_component__["a" /* EventsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__i18n_i18n_component__["a" /* I18nComponent */],
            __WEBPACK_IMPORTED_MODULE_11__i18n_say_hi_say_hi_component__["a" /* SayHiComponent */],
            __WEBPACK_IMPORTED_MODULE_23__auto_auto_component__["a" /* AutoComponent */],
            __WEBPACK_IMPORTED_MODULE_25__auto_ng_view_ng_view_component__["a" /* NgViewComponent */],
            __WEBPACK_IMPORTED_MODULE_26__auto_ng_holder_ng_holder_component__["a" /* NgHolderComponent */],
            __WEBPACK_IMPORTED_MODULE_27__demo_directives_drop_zone_directive__["a" /* DropZoneDirective */],
            __WEBPACK_IMPORTED_MODULE_28__demo_components_input_file_component__["a" /* InputFileComponent */],
            __WEBPACK_IMPORTED_MODULE_29__at_at_component__["a" /* AtComponent */],
            __WEBPACK_IMPORTED_MODULE_30__directive_directive_component__["a" /* DirectiveComponent */],
            __WEBPACK_IMPORTED_MODULE_31__oneway_oneway_component__["a" /* OnewayComponent */],
            __WEBPACK_IMPORTED_MODULE_32__paging_paging_component__["a" /* PagingComponent */],
            __WEBPACK_IMPORTED_MODULE_34__http_http_component__["a" /* HttpComponent */],
            __WEBPACK_IMPORTED_MODULE_35__userinfo_userinfo_component__["a" /* UserinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_36__mydatepicker_mydatepicker_component__["a" /* MydatepickerComponent */],
            __WEBPACK_IMPORTED_MODULE_37__alert_alert_component__["a" /* AlertComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__app_boostrap_app_boostrap_module__["a" /* AppBoostrapModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_17__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_24__auto_ng_autocomplete_ng_autocomplete_module__["a" /* NgAutoCompleteModule */],
            __WEBPACK_IMPORTED_MODULE_33_angular_4_data_table_src_index__["a" /* DataTableModule */],
            // NgxSpinnerModule,
            // NgDatepickerModule,
            __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_39_ngx_bootstrap__["a" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_39_ngx_bootstrap__["b" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_38_ng2_responsive__["ResponsiveModule"],
            __WEBPACK_IMPORTED_MODULE_6__src_public_api__["SweetAlert2Module"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: createTranslateLoader,
                    deps: [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClient */]]
                }
            })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_19__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_20__hero_list_hero_list_component__["a" /* HeroListComponent */],
            __WEBPACK_IMPORTED_MODULE_27__demo_directives_drop_zone_directive__["a" /* DropZoneDirective */],
            __WEBPACK_IMPORTED_MODULE_28__demo_components_input_file_component__["a" /* InputFileComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__guards_index__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_14__services_index__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_14__services_index__["b" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_21__hero_service__["a" /* HeroService */],
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_28__demo_components_input_file_component__["a" /* InputFileComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n_i18n_component__ = __webpack_require__("../../../../../src/app/i18n/i18n.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auto_auto_component__ = __webpack_require__("../../../../../src/app/auto/auto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demo_components_input_file_component__ = __webpack_require__("../../../../../src/app/demo/components/input-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__at_at_component__ = __webpack_require__("../../../../../src/app/at/at.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hero_form_hero_form_component__ = __webpack_require__("../../../../../src/app/hero-form/hero-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hero_list_hero_list_component__ = __webpack_require__("../../../../../src/app/hero-list/hero-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__paging_paging_component__ = __webpack_require__("../../../../../src/app/paging/paging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__userinfo_userinfo_component__ = __webpack_require__("../../../../../src/app/userinfo/userinfo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });













var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_index__["a" /* AuthGuard */]] },
    { path: 'i18n', component: __WEBPACK_IMPORTED_MODULE_3__i18n_i18n_component__["a" /* I18nComponent */] },
    { path: 'AutoComponent', component: __WEBPACK_IMPORTED_MODULE_5__auto_auto_component__["a" /* AutoComponent */] },
    { path: 'EventsComponent', component: __WEBPACK_IMPORTED_MODULE_6__events_events_component__["a" /* EventsComponent */] },
    { path: 'InputFileComponent', component: __WEBPACK_IMPORTED_MODULE_7__demo_components_input_file_component__["a" /* InputFileComponent */] },
    { path: 'AtComponent', component: __WEBPACK_IMPORTED_MODULE_8__at_at_component__["a" /* AtComponent */] },
    { path: 'HeroFormComponent', component: __WEBPACK_IMPORTED_MODULE_9__hero_form_hero_form_component__["a" /* HeroFormComponent */] },
    { path: 'HeroListComponent', component: __WEBPACK_IMPORTED_MODULE_10__hero_list_hero_list_component__["a" /* HeroListComponent */] },
    { path: 'PagingComponent', component: __WEBPACK_IMPORTED_MODULE_11__paging_paging_component__["a" /* PagingComponent */] },
    { path: 'UserinfoComponent', component: __WEBPACK_IMPORTED_MODULE_12__userinfo_userinfo_component__["a" /* UserinfoComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/at/at.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/at/at.component.html":
/***/ (function(module, exports) {

module.exports = "<app-i18n></app-i18n>\r\n<body class = \"colorhome\"> \r\n<form class=\"md-form\" >\r\n  <div class=\"file-field\">\r\n      <div class=\"btn btn-outline-info waves-effect btn-sm float-left\">\r\n          <span>Choose files</span>\r\n          <input type=\"file\" multiple>\r\n      </div>\r\n      <div class=\"file-path-wrapper\">\r\n          <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload one or more files\">\r\n      </div>\r\n  </div>\r\n</form>\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/at/at.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AtComponent = (function () {
    function AtComponent() {
    }
    AtComponent.prototype.ngOnInit = function () {
    };
    return AtComponent;
}());
AtComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-at',
        template: __webpack_require__("../../../../../src/app/at/at.component.html"),
        styles: [__webpack_require__("../../../../../src/app/at/at.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AtComponent);

//# sourceMappingURL=at.component.js.map

/***/ }),

/***/ "../../../../../src/app/auto/auto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auto/auto.component.html":
/***/ (function(module, exports) {

module.exports = "<app-i18n></app-i18n>\r\n<body class = \"colorhome\"> \r\n<div>\r\n<br/>\r\n  <ng-autocomplete (selected)=\"Selected($event)\"\r\n                   (no-result)=\"NoResult($event)\"\r\n                   [classes]=\"['']\"\r\n                   [group]=\"groupStress1\" [key]=\"'item1'\"></ng-autocomplete>\r\n  <div style=\"clear: both;\"></div>\r\n</div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/auto/auto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_autocomplete_classes_AutocompleteGroup__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/classes/AutocompleteGroup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_autocomplete_ng_autocomplete_component__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/ng-autocomplete.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutoComponent = (function () {
    function AutoComponent() {
        this._removables = [];
        // public group1 = [
        //     CreateNewAutocompleteGroup(
        //         'Search / choose in / from list',
        //         'parent',
        //         [
        //             {
        //                 title: 'Option 1', id: '1', children: [
        //                 {title: 'Option 4', id: '1'},
        //                 {title: 'Option 5', id: '2'},
        //                 {title: 'Option 6', id: '3'},
        //             ]
        //             },
        //             {
        //                 title: 'Option 2', id: '2', children: [
        //                 {title: 'Option 7', id: '1'},
        //                 {title: 'Option 8', id: '2'},
        //                 {title: 'Option 9', id: '3'},
        //             ]
        //             },
        //             {
        //                 title: 'Option 3', id: '3', children: [
        //                 {title: 'Option 10', id: '1'},
        //                 {title: 'Option 11', id: '2'},
        //                 {title: 'Option 12', id: '3'},
        //             ]
        //             },
        //         ],
        //         {titleKey: 'title', childrenKey: 'children'}
        //     ),
        //     CreateNewAutocompleteGroup(
        //         'Search / choose in / from list',
        //         'child',
        //         [
        //             {title: 'Option 4', id: '1'},
        //             {title: 'Option 5', id: '2'},
        //             {title: 'Option 6', id: '3'},
        //             {title: 'Option 7', id: '4'},
        //             {title: 'Option 8', id: '5'},
        //             {title: 'Option 9', id: '6'},
        //         ],
        //         {titleKey: 'title', childrenKey: null},
        //         'parent',
        //     ),
        // ];
        // public group2 = [
        //     CreateNewAutocompleteGroup(
        //         'Search / choose in / from list',
        //         'normal',
        //         [
        //             {title: 'Option 4', id: '1'},
        //             {title: 'Option 5', id: '2'},
        //             {title: 'Option 6', id: '3'},
        //             {title: 'Option 7', id: '4'},
        //             {title: 'Option 8', id: '5'},
        //             {title: 'Option 9', id: '6'},
        //         ],
        //         {titleKey: 'title', childrenKey: null},
        //         ''
        //     ),
        //     CreateNewAutocompleteGroup(
        //         'Search / choose in / from list',
        //         'disabled.',
        //         [
        //             {title: 'Option 4', id: '1'},
        //             {title: 'Option 5', id: '2'},
        //             {title: 'Option 6', id: '3'},
        //             {title: 'Option 7', id: '4'},
        //             {title: 'Option 8', id: '5'},
        //             {title: 'Option 9', id: '6'},
        //         ],
        //         {titleKey: 'title', childrenKey: null},
        //         '',
        //         false
        //     ),
        // ];
        // public group3 = [
        //     CreateNewAutocompleteGroup(
        //         'Search / choose in / from list',
        //         'late',
        //         [],
        //         {titleKey: 'title', childrenKey: null},
        //         ''
        //     )
        // ];
        this.groupStress1 = [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ng_autocomplete_classes_AutocompleteGroup__["b" /* CreateNewAutocompleteGroup */])('Search ', 'items1', this.FillArray(), { titleKey: 'title', childrenKey: null }, '')
        ];
    }
    // public group4 = [
    //     CreateNewAutocompleteGroup(
    //         'Search / choose in / from list',
    //         'remove',
    //         [
    //             {title: 'Option 4', id: '1'},
    //             {title: 'Option 5', id: 2},
    //             {title: 'Option 6', id: '3'},
    //             {title: 'Option 7', id: 4},
    //             {title: 'Option 8', id: '5'},
    //             {title: 'Option 9', id: 6},
    //         ],
    //         {titleKey: 'title', childrenKey: null},
    //         ''
    //     )
    // ];
    /**
     *
     * @returns {Array}
     * @constructor
     */
    AutoComponent.prototype.FillArray = function () {
        var arr = [];
        for (var i = 0; i < 150; i++) {
            arr.push({ title: "List " + i + " ", id: i });
        }
        return arr;
    };
    /**
     *
     * @param {GroupNoResult} group
     * @constructor
     */
    AutoComponent.prototype.NoResult = function (group) {
        console.log('NO RESULT', group);
    };
    /**
     *
     */
    AutoComponent.prototype.ngAfterViewInit = function () {
        console.log();
    };
    /**
     *
     * @param itemt
     * @constructor
     */
    AutoComponent.prototype.Selected = function (item) {
        console.log(item);
    };
    /**
     *
     * @param item
     * @constructor
     */
    // RemoveSelected(item: SelectedAutocompleteItem) {
    //     if(item.item !== null) {
    //         this._removables.push(item.item);
    //     }
    //
    //     const component = NgAutocompleteComponent.FindCompleter('group5', this.completers);
    //     component.RemovableValues('remove', this._removables);
    // }
    /**
     *
     * @constructor
     */
    AutoComponent.prototype.SetValues = function () {
        // const component = NgAutocompleteComponent.FindCompleter('group3', this.completers);
        this.completer.SetValues('late', [
            { title: 'Option 4', id: '1' },
            { title: 'Option 5', id: '2' },
            { title: 'Option 6', id: '3' },
            { title: 'Option 7', id: '4' },
            { title: 'Option 8', id: '5' },
            { title: 'Option 9', id: '6' },
        ]);
    };
    return AutoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__ng_autocomplete_ng_autocomplete_component__["a" /* NgAutocompleteComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_autocomplete_ng_autocomplete_component__["a" /* NgAutocompleteComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_autocomplete_ng_autocomplete_component__["a" /* NgAutocompleteComponent */]) === "function" && _a || Object)
], AutoComponent.prototype, "completer", void 0);
AutoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auto',
        template: __webpack_require__("../../../../../src/app/auto/auto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auto/auto.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AutoComponent);

var _a;
//# sourceMappingURL=auto.component.js.map

/***/ }),

/***/ "../../../../../src/app/auto/ng-autocomplete/classes/AutocompleteGroup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AutocompleteItem__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/classes/AutocompleteItem.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteGroup; });
/* harmony export (immutable) */ __webpack_exports__["b"] = CreateNewAutocompleteGroup;

var AutocompleteGroup = (function () {
    function AutocompleteGroup() {
        this.removals = [];
    }
    /**
     *
     * @param value
     * @param titleKey
     * @constructor
     */
    AutocompleteGroup.prototype.SetNewValue = function (value, titleKey) {
        var values = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__AutocompleteItem__["c" /* SearchableAutoCompleteItems */])(value, titleKey);
        this.SetCopy(values);
        /**
         *
         * @type {AutocompleteItem[]}
         */
        this.value = this.FilterRemovals(this.removals, values);
    };
    /**
     *
     * @param ids
     * @constructor
     */
    AutocompleteGroup.prototype.Removables = function (ids) {
        this.removals = ids;
        /**
         *
         * @type {AutocompleteItem[]}
         */
        this.value = this.FilterRemovals(this.removals, this._copy);
    };
    /**
     *
     * @constructor
     */
    AutocompleteGroup.prototype.InitialValue = function () {
        this.value = this.FilterRemovals(this.removals, this.initialValue);
        /**
         *
         */
        this.SetCopy(this.initialValue);
    };
    /**
     *
     * @constructor
     */
    AutocompleteGroup.prototype.SetCopy = function (values) {
        this._copy = Object.assign([], values);
    };
    /**
     *
     * @param value
     * @constructor
     */
    AutocompleteGroup.prototype.SetValues = function (value) {
        this.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__AutocompleteItem__["c" /* SearchableAutoCompleteItems */])(value, this.keys.titleKey, this.keys.childrenKey);
        /**
         *
         */
        this.initialValue = Object.assign({}, this.value);
        this.SetCopy(Object.assign({}, this.value));
    };
    /**
     *
     * @param {any[]} removals
     * @param value
     * @constructor
     */
    AutocompleteGroup.prototype.FilterRemovals = function (removals, value) {
        var filtered = Object.assign({}, value);
        var key, keys = [];
        for (key in filtered) {
            if (filtered.hasOwnProperty(key)) {
                removals.forEach(function (id) {
                    // Comparable string and ID
                    var f = "_id_" + String(id);
                    var c = key.substring(key.indexOf(f), key.length);
                    if (f === c) {
                        keys.push(key);
                    }
                });
            }
        }
        keys.forEach(function (k) {
            delete filtered[k];
        });
        return filtered;
    };
    return AutocompleteGroup;
}());

/**
 *
 * @param {string} placeholder
 * @param {string} key
 * @param value
 * @param keys
 * @param {string} parent
 * @param {boolean} completion
 * @returns {AutocompleteGroup}
 * @constructor
 */
function CreateNewAutocompleteGroup(placeholder, key, value, keys, parent, completion) {
    if (parent === void 0) { parent = ''; }
    if (completion === void 0) { completion = true; }
    var group = new AutocompleteGroup();
    group.key = key;
    group.keys = keys;
    group.placeholder = placeholder;
    group.parent = parent;
    group.completion = completion;
    /**
     * Initial value needed, if we empty search box or want to clear it, it needs to be reset.
     * Setting copy, used if user wants to remove values (by id.). This _ list gets filtered.
     */
    group.SetValues(value);
    return group;
}
//# sourceMappingURL=AutocompleteGroup.js.map

/***/ }),

/***/ "../../../../../src/app/auto/ng-autocomplete/classes/AutocompleteItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AutocompleteItem */
/* harmony export (immutable) */ __webpack_exports__["c"] = SearchableAutoCompleteItems;
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchableAutoCompleteString;
/* harmony export (immutable) */ __webpack_exports__["b"] = ComparableAutoCompleteString;
/* unused harmony export TransformToAutocompleteItem */
var AutocompleteItem = (function () {
    function AutocompleteItem(title, id, original) {
        this.title = title;
        this.id = id;
        this.original = original;
    }
    return AutocompleteItem;
}());

/**
 *
 * @param items
 * @param titleKey
 * @param childrenKey
 * @constructor
 * @dynamic
 */
function SearchableAutoCompleteItems(items, titleKey, childrenKey) {
    if (childrenKey === void 0) { childrenKey = null; }
    return items.reduce(function (r, i) {
        var t = SearchableAutoCompleteString(i[titleKey], i.id);
        if (typeof r[t] === 'undefined') {
            r[t] = TransformToAutocompleteItem(i, titleKey, childrenKey);
        }
        return r;
    }, {});
}
/**
 *
 * @param key
 * @param {string | number} id
 * @returns {string}
 * @constructor
 */
function SearchableAutoCompleteString(key, id) {
    return key.replace(/ /g, "_") + "_id_" + String(id);
}
/**
 *
 * @param {string} str
 * @returns {string}
 * @constructor
 */
function ComparableAutoCompleteString(str) {
    return str.replace(/_/g, " ");
}
/**
 * object must have an ID
 * @constructor
 */
function TransformToAutocompleteItem(object, titleKey, childrenKey) {
    if (childrenKey === void 0) { childrenKey = null; }
    var item = new AutocompleteItem(object[titleKey], object.id, object);
    /**
     * if there are children, add these.
     */
    if (childrenKey !== null)
        item.children = object[childrenKey];
    return item;
}
//# sourceMappingURL=AutocompleteItem.js.map

/***/ }),

/***/ "../../../../../src/app/auto/ng-autocomplete/completer/completer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_AutocompleteGroup__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/classes/AutocompleteGroup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_AutocompleteItem__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/classes/AutocompleteItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_ng_dropdown_directive__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/dropdown/ng-dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompleterComponent = (function () {
    function CompleterComponent(_zone) {
        this._zone = _zone;
        this.cleared = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.noResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.group = {};
        this._change = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this._items = {};
        this._completer = '';
        this._highlight = '';
        this._DOM = {
            placeholder: '',
            selected: ''
        };
    }
    /**
     *
     */
    CompleterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            _this._change
                .debounceTime(300)
                .subscribe(function (value) {
                _this._zone.run(function () {
                    _this.OnModelChange(value);
                });
            });
        });
        this.SetItems();
    };
    /**
     * Only used when completion is off.
     * @constructor
     */
    CompleterComponent.prototype.RegisterClick = function () {
        if (!this.group.completion) {
            this.SwitchDropdownState();
        }
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.DropdownArray = function () {
        if (this.group.completion) {
            this.SwitchDropdownState();
        }
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.SwitchDropdownState = function () {
        if (this.dropdown._open) {
            this.CloseDropdown();
            return;
        }
        /**
         *
         */
        this.OpenDropdown();
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.CloseDropdown = function () {
        this.dropdown._open = false;
        /**
         *
         * @type {string}
         */
        this._DOM.placeholder = '';
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.OpenDropdown = function () {
        this.dropdown.Open();
        /**
         *
         * @type {string}
         */
        this._DOM.placeholder = '';
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.SetItems = function () {
        this._items = this.group.value;
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.SelectItem = function (item) {
        var i;
        if (typeof item === 'string') {
            i = this._items[item];
            this._DOM.selected = item;
        }
        else {
            i = item;
            this._DOM.selected = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__classes_AutocompleteItem__["a" /* SearchableAutoCompleteString */])(item.title, item.id);
        }
        this._completer = i.title;
        this._highlight = '';
        this.dropdown.Close(null, true);
        this.selected.emit({ group: { key: this.group.key }, item: i });
    };
    /**
     *
     * @param value
     * @constructor
     */
    CompleterComponent.prototype.OnModelChange = function (value) {
        this._completer = value;
        this._highlight = value;
        if (value.length === 0) {
            this._DOM.selected = null;
            this.cleared.emit(this.group.key);
        }
        else if (value.length > 2) {
            /**
             *
             * @type {AutocompleteItem[]}
             * @private
             */
            var obj = {};
            for (var key in this.group.value) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__classes_AutocompleteItem__["b" /* ComparableAutoCompleteString */])(key).toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    obj[key] = this.group.value[key];
                }
            }
            this._items = obj;
            this.EmptySearch(this._items, value);
        }
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.OnInputBlurred = function () {
        if (!this.HasChosenValue()) {
            /**
             * Let component know completer input has been cleared -
             * this function shows the list again, also resets children, if chosen.
             */
            this.OnModelChange('');
        }
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.OnHoverDropdownItem = function (item) {
        if (typeof item == 'string') {
            this._DOM.placeholder = this._items[item].title;
            return;
        }
        if (item == null) {
            this._DOM.placeholder = '';
            return;
        }
        this._DOM.placeholder = item.title;
    };
    // =======================================================================//
    // ! Utils                                                                //
    // =======================================================================//
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.HasChosenValue = function () {
        return this._DOM.selected !== null;
    };
    /**
     *
     * @param {Object} obj
     * @param {string} query
     * @constructor
     */
    CompleterComponent.prototype.EmptySearch = function (obj, query) {
        if (Object.keys(obj).length > 0) {
            return;
        }
        this.noResult.emit({ group: { key: this.group.key }, query: query });
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.ClearValue = function () {
        this._completer = '';
        this._DOM.selected = null;
        /**
         *
         */
        this.selected.emit({ group: { key: this.group.key }, item: null });
    };
    return CompleterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__dropdown_ng_dropdown_directive__["a" /* NgDropdownDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__dropdown_ng_dropdown_directive__["a" /* NgDropdownDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dropdown_ng_dropdown_directive__["a" /* NgDropdownDirective */]) === "function" && _a || Object)
], CompleterComponent.prototype, "dropdown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], CompleterComponent.prototype, "cleared", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], CompleterComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('no-result'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], CompleterComponent.prototype, "noResult", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__classes_AutocompleteGroup__["a" /* AutocompleteGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_AutocompleteGroup__["a" /* AutocompleteGroup */]) === "function" && _e || Object)
], CompleterComponent.prototype, "group", void 0);
CompleterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ng-completer',
        template: "\n        <div #element class=\"ng-autocomplete-dropdown\">\n\n            <!--GROUP: {{group.key}}-->\n\n            <div class=\"ng-autocomplete-inputs\" (click)=\"RegisterClick()\"\n                 [ngClass]=\"{'completion-off': !group.completion}\">\n                <span class=\"ng-autocomplete-placeholder\"\n                      *ngIf=\"_DOM.placeholder.length > 0\">{{_DOM.placeholder}}</span>\n                <input #input type=\"text\" [placeholder]=\"group.placeholder\" name=\"completer\" [(ngModel)]=\"_completer\"\n                       (ngModelChange)=\"_change.next($event);\"\n                       [value]=\"_completer\"\n                       autocomplete=\"off\"\n                       (click)=\"OpenDropdown()\"\n                       (focus)=\"OpenDropdown()\" class=\"ng-autocomplete-input\">\n\n                <span [ngClass]=\"{'open': dropdown._open}\" class=\"ng-autocomplete-dropdown-icon\"\n                      (click)=\"DropdownArray()\"></span>\n            </div>\n\n            <div class=\"ng-dropdown\" ngDropdown [list]=\"_items\" [element]=\"element\" [input]=\"input\"\n                 [active]=\"_DOM.selected\" [key]=\"group.key\"\n                 [completion]=\"group.completion\"\n                 (hover)=\"OnHoverDropdownItem($event)\"\n                 (selected)=\"SelectItem($event)\"\n                 (closed)=\"OnInputBlurred()\"\n            >\n                <div class=\"dropdown-item\" *ngFor=\"let item of _items | keys; let i = index\"\n                     (click)=\"SelectItem(_items[item])\"\n                     [innerHTML]=\"_items[item].title | highlight:_highlight\"\n                >\n                </div>\n            </div>\n        </div>",
        styles: ["\n        .ng-autocomplete-inputs {\n            position: relative;\n        }\n\n        .ng-autocomplete-inputs.completion-off {\n            cursor: pointer;\n        }\n\n        .ng-autocomplete-inputs.completion-off input {\n            pointer-events: none;\n        }\n\n        .ng-autocomplete-placeholder {\n            pointer-events: none;\n        }\n\n        .ng-autocomplete-dropdown-icon {\n\n        }\n\n        .ng-autocomplete-dropdown .ng-dropdown {\n            display: none;\n        }\n\n        .ng-autocomplete-dropdown .ng-dropdown.open {\n            display: block;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _f || Object])
], CompleterComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=completer.component.js.map

/***/ }),

/***/ "../../../../../src/app/auto/ng-autocomplete/dropdown/ng-dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/utils/utils.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgDropdownDirective; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgDropdownDirective = (function () {
    function NgDropdownDirective(_eref) {
        this._eref = _eref;
        this.list = [];
        this.active = null;
        this.input = null;
        this.element = null;
        this.key = '';
        this.completion = true;
        this.hover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._open = false;
        this._list = [];
        this._class = '';
    }
    /**
     *
     */
    NgDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._class = "dr-item-" + this.key + "-";
        if (this.RefExists()) {
            this.input.addEventListener('keydown', function (event) {
                _this.keyDown(event);
            });
        }
        if (!this.completion) {
            document.addEventListener('keydown', function (event) {
                if (_this._open) {
                    _this.keyDown(event);
                }
            });
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* IsMobileOrTablet */])()) {
            this._eref.nativeElement.addEventListener('mouseover', function (event) {
                _this.OnMouseOver(event);
            });
        }
        /**
         *
         * @private
         */
        this.PrepareList();
    };
    /**
     *
     * @param changes
     */
    NgDropdownDirective.prototype.ngOnChanges = function (changes) {
        if (typeof changes['active'] !== 'undefined' && !changes['active'].firstChange) {
            this.PrepareList();
        }
        if (typeof changes['list'] !== 'undefined') {
            this.list = changes['list'].currentValue;
            /**
             *
             */
            this.PrepareList();
        }
    };
    /**
     *
     * @param event
     */
    NgDropdownDirective.prototype.keyDown = function (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        /**
         *
         */
        switch (event.code) {
            case 'ArrowDown':
                this.Open();
                /**
                 *
                 */
                this.SetActive(this.FindActive() + 1);
                this.DropdownFocusAreaDown();
                event.preventDefault();
                break;
            case 'ArrowUp':
                this.Open();
                /**
                 *
                 */
                this.SetActive(this.FindActive() - 1);
                this.DropdownFocusAreaUp();
                event.preventDefault();
                break;
            case 'Enter':
                this.EmitSelected();
                this.Close(null, true);
                event.preventDefault();
                break;
            case 'Escape':
                this.Close(null, true);
                event.preventDefault();
                break;
            case 'Tab':
                if (!event.shiftKey) {
                    this.EmitSelected();
                }
                this.Close(null, true);
                break;
            default:
                return;
        }
    };
    /**
     *
     * @param event
     */
    NgDropdownDirective.prototype.OnMouseOver = function (event) {
        // Mouse didn't actually move, so no logic needed.
        if (event.movementX == 0 && event.movementY == 0) {
            return;
        }
        /**
         *
         */
        var el = event.target || event.srcElement;
        if (el.id.length > 0 && el.id.includes(this._class)) {
            this.SetActive(Number(el.id.slice(this._class.length, el.id.length)));
        }
    };
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.EmitSelected = function () {
        if (this.FindActive() > -1) {
            this.selected.emit(this._list[this.FindActive()].key);
        }
    };
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.DropdownFocusAreaDown = function () {
        var scroll = this._eref.nativeElement.offsetHeight + this._eref.nativeElement.scrollTop;
        /**
         *
         */
        if ((this.GetElement(this.FindActive()).offsetTop + this.GetElement(this.FindActive()).offsetHeight) > scroll) {
            this._eref.nativeElement.scrollTop = this.GetElement(this.FindActive()).offsetTop - (this._eref.nativeElement.offsetHeight - this.GetElement(this.FindActive()).offsetHeight);
        }
    };
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.DropdownFocusAreaUp = function () {
        var scroll = this._eref.nativeElement.scrollTop;
        /**
         *
         */
        if (this.GetElement(this.FindActive()).offsetTop < scroll && scroll > 0) {
            this._eref.nativeElement.scrollTop = this.GetElement(this.FindActive()).offsetTop;
        }
    };
    Object.defineProperty(NgDropdownDirective.prototype, "opened", {
        // =======================================================================//
        // ! Bindings                                                             //
        // =======================================================================//
        /**
         *
         * @returns {boolean}
         */
        get: function () {
            return this._open;
        },
        enumerable: true,
        configurable: true
    });
    // =======================================================================//
    // ! Listeners                                                            //
    // =======================================================================//
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.Close = function (event, force) {
        var _this = this;
        if (force === void 0) { force = false; }
        var close = function () {
            _this._open = false;
            /**
             * Emit NULL so listening components know what to do.
             */
            _this.ClearActive();
            _this.hover.emit(null);
            _this.closed.emit();
        };
        if (force) {
            close();
            return;
        }
        if ((this._open && (!this.element.contains(event.target)))) {
            close();
        }
    };
    // =======================================================================//
    // ! Utils                                                                //
    // =======================================================================//
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.Open = function () {
        var _this = this;
        if (!this._open) {
            this._open = true;
            this.PrepareList();
            /**
             *
             */
            if (this.FindActive() < 0) {
                setTimeout(function () {
                    _this._eref.nativeElement.scrollTop = 0;
                }, 0);
            }
            else {
                setTimeout(function () {
                    _this._eref.nativeElement.scrollTop = _this.GetElement(_this.FindActive()).offsetHeight * _this.FindActive();
                }, 0);
            }
        }
    };
    /**
     *
     * @returns {boolean}
     * @constructor
     */
    NgDropdownDirective.prototype.RefExists = function () {
        return typeof this.input !== 'undefined';
    };
    /**
     *
     * @private
     */
    NgDropdownDirective.prototype.FindActive = function () {
        return this._list.reduce(function (result, item, index) {
            if (item.active) {
                result = index;
            }
            return result;
        }, -1);
    };
    /**
     *
     * @param index
     * @private
     */
    NgDropdownDirective.prototype.SetActive = function (index) {
        if (index > this._list.length - 1 || index < 0)
            return;
        /**
         *
         */
        this.ClearActive();
        this._list[index].active = true;
        this.hover.emit(this._list[index].key);
        /**
         *
         */
        this.GetElement(index).classList.add('active');
    };
    /**
     *
     * @param index
     * @constructor
     */
    NgDropdownDirective.prototype.GetElement = function (index) {
        return this._eref.nativeElement.children[index];
    };
    /**
     *
     * @private
     */
    NgDropdownDirective.prototype.ClearActive = function () {
        var _this = this;
        this._list.forEach(function (item, index) {
            item.active = false;
            /**
             *
             * @type {string}
             */
            _this.GetElement(index).classList.remove('active');
        });
    };
    /**
     *
     * @returns {[{item: any, active: boolean}]}
     * @constructor
     */
    NgDropdownDirective.prototype.PrepareList = function () {
        var _this = this;
        this._list = Object.keys(this.list).map(function (key) {
            return {
                key: key,
                active: _this.ActiveItem(key)
            };
        });
        /**
         *
         */
        this.PrepareChildrenList();
    };
    /**
     *
     * @param item
     * @returns {boolean}
     * @constructor
     */
    NgDropdownDirective.prototype.ActiveItem = function (item) {
        return this.active !== null && item === this.active;
    };
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.DetermineActiveClass = function () {
        var _this = this;
        this._list.forEach(function (item, index) {
            if (typeof _this.GetElement(index) === 'undefined') {
                return;
            }
            /**
             *
             */
            _this.GetElement(index).classList.remove('active');
            if (item.active)
                _this.GetElement(index).classList.add('active');
        });
    };
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.PrepareChildrenList = function () {
        var _this = this;
        var list = this._eref.nativeElement.children;
        setTimeout(function () {
            for (var i = 0; i < list.length; i++) {
                list[i].id = _this._class + i;
            }
        }, 0);
        /**
         *
         */
        this.DetermineActiveClass();
    };
    ;
    /**
     *
     * @constructor
     * @param object
     */
    NgDropdownDirective.prototype.DeReference = function (object) {
        var item = object.item;
        /**
         *
         */
        return Object.assign({}, __assign({}, item));
    };
    /**
     *
     */
    NgDropdownDirective.prototype.ngOnDestroy = function () {
        if (this.RefExists()) {
            this.wheelHandler = this.removeEventListner.bind(this.input);
            // this.input.removeEventListener('keydown');
        }
        if (!this.completion) {
            this.wheelHandler = this.removeEventListner.bind(document);
            // document.removeEventListener('keydown');
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* IsMobileOrTablet */])()) {
            this.wheelHandler = this.removeEventListner.bind(this._eref);
            // this._eref.nativeElement.removeEventListener('mouseover');
        }
    };
    NgDropdownDirective.prototype.removeEventListner = function (elem) {
        elem.removeEventListener('wheel', this.wheelHandler, true);
    };
    return NgDropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], NgDropdownDirective.prototype, "list", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgDropdownDirective.prototype, "active", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgDropdownDirective.prototype, "input", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgDropdownDirective.prototype, "element", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NgDropdownDirective.prototype, "key", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NgDropdownDirective.prototype, "completion", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NgDropdownDirective.prototype, "hover", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], NgDropdownDirective.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], NgDropdownDirective.prototype, "closed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NgDropdownDirective.prototype, "opened", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean]),
    __metadata("design:returntype", void 0)
], NgDropdownDirective.prototype, "Close", null);
NgDropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[ngDropdown]'
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], NgDropdownDirective);

var _a, _b, _c, _d;
//# sourceMappingURL=ng-dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/auto/ng-autocomplete/ng-autocomplete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__completer_completer_component__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/completer/completer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgAutocompleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NgAutocompleteComponent = (function () {
    function NgAutocompleteComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.noResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.group = [];
        this.key = '';
        this.classes = [];
        this._viewHasBeenInit = false;
    }
    NgAutocompleteComponent.prototype.ngOnChanges = function (changes) {
    };
    /**
     *
     */
    NgAutocompleteComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     */
    NgAutocompleteComponent.prototype.ngAfterViewChecked = function () {
        var el = this.init.nativeElement.querySelector('.after-view-init');
        if (window.getComputedStyle(el).length > 0) {
            this._viewHasBeenInit = true;
        }
    };
    /**
     *
     * @constructor
     * @param selected
     */
    NgAutocompleteComponent.prototype.ListenToSelected = function (selected) {
        this.selected.emit(selected);
        /**
         *
         */
        this.SetChildren(selected);
    };
    /**
     *
     * @constructor
     * @param group
     */
    NgAutocompleteComponent.prototype.NoResult = function (group) {
        this.noResult.emit(group);
    };
    /**
     *
     * @constructor
     */
    NgAutocompleteComponent.prototype.InputCleared = function (key) {
        var _this = this;
        this.group.forEach(function (group) {
            if (group.key === key) {
                _this.ResetInput(group.key);
            }
            /**
             *
             */
            if (group.parent === key) {
                _this.ResetInput(group.key);
                group.InitialValue();
            }
        });
        /**
         * Items may have changed, need to te re-set list in completer components.
         */
        this.TriggerChange();
    };
    /**
     *
     * @param selected
     * @constructor
     */
    NgAutocompleteComponent.prototype.SetChildren = function (selected) {
        var _this = this;
        this.group.forEach(function (item) {
            if (item.parent == selected.group.key) {
                _this.ResetInput(item.key);
                /**
                 *
                 */
                if (selected.item !== null && typeof selected.item.children !== 'undefined') {
                    item.SetNewValue(selected.item.children, selected.group.keys.titleKey);
                }
            }
        });
        /**
         * Items may have changed, need to te re-set list in completer components.
         */
        this.TriggerChange();
    };
    /**
     *
     * @constructor
     */
    NgAutocompleteComponent.prototype.TriggerChange = function () {
        this.completers.forEach(function (completer) {
            completer.SetItems();
        });
    };
    // =======================================================================//
    // ! Utils                                                                //
    // =======================================================================//
    /**
     *
     * @param {string} key
     * @returns {CompleterComponent}
     * @constructor
     */
    NgAutocompleteComponent.prototype.GetInput = function (key) {
        return this.completers.reduce(function (result, completer) {
            if (completer.group.key === key) {
                result = completer;
            }
            return result;
        }, {});
    };
    /**
     *
     * @param {string} key
     * @param {(completer: CompleterComponent) => void} f
     * @constructor
     */
    NgAutocompleteComponent.prototype.SubscribeInput = function (key, f) {
        if (this._viewHasBeenInit) {
            var completer = this.GetInput(key);
            /**
             *
             */
            f(completer);
            return;
        }
        var s = this.FindInput(key).subscribe(function (completer) {
            f(completer);
            /**
             *
             */
            s.unsubscribe();
        });
    };
    /**
     *
     * @param key
     * @returns {CompleterComponent}
     * @constructor
     */
    NgAutocompleteComponent.prototype.FindInput = function (key) {
        var _this = this;
        var s = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var i = setInterval(function () {
            if (_this._viewHasBeenInit) {
                s.next(_this.GetInput(key));
                s.complete();
                /**
                 *
                 */
                clearInterval(i);
            }
        }, 1000);
        return s;
    };
    /**
     *
     * @param key
     * @constructor
     */
    NgAutocompleteComponent.prototype.ResetInput = function (key) {
        this.SubscribeInput(key, function (completer) {
            completer.ClearValue();
        });
    };
    /**
     *
     * @param key
     * @param values
     * @constructor
     */
    NgAutocompleteComponent.prototype.SetValues = function (key, values) {
        var _this = this;
        this.SubscribeInput(key, function (completer) {
            completer.group.SetValues(values);
            /**
             * Items may have changed, need to te re-set list in completer components.
             */
            _this.TriggerChange();
        });
    };
    /**
     *
     * @param key
     * @param id
     * @constructor
     */
    NgAutocompleteComponent.prototype.SelectItem = function (key, id) {
        this.SubscribeInput(key, function (completer) {
            Object.keys(completer._items).forEach(function (key) {
                var f = "_id_" + String(id);
                var c = key.substring(key.indexOf(f), key.length);
                if (f === c) {
                    completer.SelectItem(completer._items[key]);
                }
            });
        });
    };
    /**
     *
     * @param key
     * @param ids
     * @constructor
     */
    NgAutocompleteComponent.prototype.RemovableValues = function (key, ids) {
        var _this = this;
        this.SubscribeInput(key, function (completer) {
            completer.group.Removables(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils__["b" /* ReturnStringArrayByID */])(ids));
            /**
             * Items may have changed, need to te re-set list in completer components.
             */
            _this.TriggerChange();
        });
    };
    /**
     *
     * @constructor
     */
    NgAutocompleteComponent.prototype.ResetInputs = function () {
        var _this = this;
        this.group.forEach(function (item) {
            _this.ResetInput(item.key);
        });
    };
    // =======================================================================//
    // ! Static (utils)                                                       //
    // =======================================================================//
    /**
     *
     * @constructor
     */
    NgAutocompleteComponent.FindCompleter = function (key, list) {
        var completer = list.filter(function (completer) {
            return key === completer.key;
        });
        if (typeof completer[0] !== 'undefined') {
            return completer[0];
        }
        return null;
    };
    return NgAutocompleteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1__completer_completer_component__["a" /* CompleterComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], NgAutocompleteComponent.prototype, "completers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('init'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], NgAutocompleteComponent.prototype, "init", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], NgAutocompleteComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('no-result'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], NgAutocompleteComponent.prototype, "noResult", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], NgAutocompleteComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NgAutocompleteComponent.prototype, "key", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], NgAutocompleteComponent.prototype, "classes", void 0);
NgAutocompleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ng-autocomplete',
        template: "\n        <div  style=\"display: none;\"><span class=\"after-view-init\"></span></div>\n        <ng-completer [ngClass]=\"classes\" *ngFor=\"let item of group\" (cleared)=\"InputCleared($event)\"\n                      (no-result)=\"NoResult($event)\"\n                      (selected)=\"ListenToSelected($event)\"\n                      [group]=\"item\"></ng-completer>\n    "
    }),
    __metadata("design:paramtypes", [])
], NgAutocompleteComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=ng-autocomplete.component.js.map

/***/ }),

/***/ "../../../../../src/app/auto/ng-autocomplete/ng-autocomplete.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_autocomplete_component__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/ng-autocomplete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__completer_completer_component__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/completer/completer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_ng_dropdown_directive__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/dropdown/ng-dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_highlight__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/pipes/highlight.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_key_value__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/pipes/key-value.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgAutoCompleteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NgAutoCompleteModule = (function () {
    function NgAutoCompleteModule() {
    }
    return NgAutoCompleteModule;
}());
NgAutoCompleteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ng_autocomplete_component__["a" /* NgAutocompleteComponent */],
            __WEBPACK_IMPORTED_MODULE_3__completer_completer_component__["a" /* CompleterComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ng_autocomplete_component__["a" /* NgAutocompleteComponent */],
            __WEBPACK_IMPORTED_MODULE_3__completer_completer_component__["a" /* CompleterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__dropdown_ng_dropdown_directive__["a" /* NgDropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_highlight__["a" /* HighlightPipe */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_key_value__["a" /* KeyValuePipe */]
        ]
    })
], NgAutoCompleteModule);

//# sourceMappingURL=ng-autocomplete.module.js.map

/***/ }),

/***/ "../../../../../src/app/auto/ng-autocomplete/pipes/highlight.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (text, search) {
        if (typeof search === 'undefined') {
            return text;
        }
        var pattern = search.replace(/[\-\[\]\/{}()*+?.\\^$|]/g, '\\$&');
        pattern = pattern.split(' ').filter(function (t) { return t.length > 0; }).join('|');
        /**
         *
         */
        return text.replace(new RegExp(pattern, 'gi'), function (match) { return "<span class=\"dropdown-item-highlight\">" + match + "</span>"; });
    };
    return HighlightPipe;
}());
HighlightPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'highlight'
    })
], HighlightPipe);

//# sourceMappingURL=highlight.js.map

/***/ }),

/***/ "../../../../../src/app/auto/ng-autocomplete/pipes/key-value.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyValuePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeyValuePipe = (function () {
    function KeyValuePipe() {
    }
    KeyValuePipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    };
    return KeyValuePipe;
}());
KeyValuePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'keys'
    })
], KeyValuePipe);

//# sourceMappingURL=key-value.js.map

/***/ }),

/***/ "../../../../../src/app/auto/ng-autocomplete/utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = ReturnStringArrayByID;
/* unused harmony export FilterRemovals */
/* harmony export (immutable) */ __webpack_exports__["a"] = IsMobileOrTablet;
/* unused harmony export NotUsedKey */
var UsedCodeList = {
    ArrowDown: 40,
    ArrowUp: 38,
    Enter: 13,
    Escape: 27,
    Tab: 9,
    MetaLeft: 91,
    AltLeft: 18,
    ControlLeft: 17,
    ShiftLeft: 16,
    ArrowLeft: 37,
    ArrowRight: 39,
    MetaRight: 93,
    AltRight: 18
};
/**
 *
 * @param array
 * @returns {Array}
 * @constructor
 */
function ReturnStringArrayByID(array) {
    return array.reduce(function (result, item) {
        result.push(item.id.toString());
        return result;
    }, []);
}
/**
 *
 * @param removals
 * @param list
 * @returns {Array}
 * @constructor
 */
function FilterRemovals(removals, list) {
    return list.filter(function (item) {
        return removals.indexOf(item.id.toString()) <= -1;
    });
}
/**
 *
 * @returns {boolean}
 * @constructor
 */
function IsMobileOrTablet() {
    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }
    return isMobile;
}
function NotUsedKey(code) {
    return typeof UsedCodeList[code] === 'undefined';
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../src/app/auto/ng-holder/ng-holder.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-autocomplete (selected)=\"Selected($event)\" [classes]=\"['']\"\r\n                 [group]=\"group\" [key]=\"'group'\"></ng-autocomplete>\r\n<div style=\"clear: both;\"></div>"

/***/ }),

/***/ "../../../../../src/app/auto/ng-holder/ng-holder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_autocomplete_classes_AutocompleteGroup__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/classes/AutocompleteGroup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_autocomplete_ng_autocomplete_component__ = __webpack_require__("../../../../../src/app/auto/ng-autocomplete/ng-autocomplete.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgHolderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgHolderComponent = (function () {
    function NgHolderComponent() {
        this.group = [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ng_autocomplete_classes_AutocompleteGroup__["b" /* CreateNewAutocompleteGroup */])('Search / choose in / from list', 'group', [
                { title: 'Option 4', id: '1' },
                { title: 'Option 5', id: 2 },
                { title: 'Option 6', id: '3' },
                { title: 'Option 7', id: 4 },
                { title: 'Option 8', id: '5' },
                { title: 'Option 9', id: 6 },
            ], { titleKey: 'title', childrenKey: null }, '')
        ];
    }
    /**
     *
     */
    NgHolderComponent.prototype.ngOnInit = function () {
        this.completer.SelectItem('group', 5);
    };
    /**
     *
     * @constructor
     */
    NgHolderComponent.prototype.Selected = function () {
    };
    return NgHolderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__ng_autocomplete_ng_autocomplete_component__["a" /* NgAutocompleteComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_autocomplete_ng_autocomplete_component__["a" /* NgAutocompleteComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_autocomplete_ng_autocomplete_component__["a" /* NgAutocompleteComponent */]) === "function" && _a || Object)
], NgHolderComponent.prototype, "completer", void 0);
NgHolderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ng-holder',
        template: __webpack_require__("../../../../../src/app/auto/ng-holder/ng-holder.component.html")
    }),
    __metadata("design:paramtypes", [])
], NgHolderComponent);

var _a;
//# sourceMappingURL=ng-holder.component.js.map

/***/ }),

/***/ "../../../../../src/app/auto/ng-view/ng-view.component.html":
/***/ (function(module, exports) {

module.exports = "<hr />\r\n<button (click)=\"SetView()\">VIEW!</button>\r\n<hr />\r\n\r\n<div *ngIf=\"View\">\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auto/ng-view/ng-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgViewComponent = (function () {
    function NgViewComponent() {
        this.View = false;
    }
    /**
     *
     */
    NgViewComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     * @constructor
     */
    NgViewComponent.prototype.SetView = function () {
        this.View = !this.View;
    };
    return NgViewComponent;
}());
NgViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ng-view',
        template: __webpack_require__("../../../../../src/app/auto/ng-view/ng-view.component.html")
    }),
    __metadata("design:paramtypes", [])
], NgViewComponent);

//# sourceMappingURL=ng-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/data-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return heroes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return states; });
var Hero = (function () {
    function Hero() {
        this.id = 0;
        this.name = '';
    }
    return Hero;
}());

var Address = (function () {
    function Address() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    return Address;
}());

var heroes = [
    {
        id: 1,
        name: 'nuttakon',
        addresses: [
            { street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801' },
            { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226' },
        ]
    },
    {
        id: 2,
        name: 'peerapong',
        addresses: [
            { street: '789 Elm', city: 'Smallville', state: 'OH', zip: '04501' },
        ]
    },
    {
        id: 3,
        name: 'saroch',
        addresses: []
    },
];
var states = ['single', 'married'];
//# sourceMappingURL=data-model.js.map

/***/ }),

/***/ "../../../../../src/app/demo/components/input-file.component.html":
/***/ (function(module, exports) {

module.exports = "<app-i18n></app-i18n>\r\n<body class = \"colorhome\"> \r\n\r\n<div class=\"row input-file\" dropZone [disabled]=\"dropZoneDisabled\" (fileDragOver)=\"onFileDragOver()\" (fileDragLeave)=\"onFileDragLeave()\" (fileDrop)=\"onFileDrop($event)\">\r\n    <ng-container *ngIf=\"!minimal; else minimalButton\">    \r\n        <div class=\"col-12\" *ngIf=\"isDragOver\">\r\n            <div class=\"drop-zone\"></div>\r\n        </div>\r\n        <div class=\"col-12\" *ngIf=\"isNotNullOrEmpty() && !isDragOver\">\r\n            <div class=\"file-preview\">\r\n                <button type=\"button\" class=\"close\" (click)=\"onRemove()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <div class=\"file-preview-container\">\r\n                    <div class=\"file-preview-item\" *ngFor=\"let file of model; let i = index\">\r\n                        <button type=\"button\" class=\"close\" (click)=\"onRemoveFile(i)\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                        <div class=\"file-content\">\r\n                            <img src=\"{{ file.icon }}\" *ngIf=\"file.icon\"> \r\n                        </div>\r\n                        <div class=\"file-thumbnail-footer\">\r\n                            <div class=\"file-footer-caption\" *ngIf=\"file.file\">\r\n                                <p>{{ file.file?.name }}</p>\r\n                                <samp>{{ file.size }}</samp>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 input-group file-caption-main\" *ngIf=\"!isDragOver\">\r\n            <div class=\"form-control\">\r\n                <div class=\"file-caption-name\">\r\n                    <i class=\"fas fa-file\" aria-hidden=\"true\" *ngIf=\"isNotNullOrEmpty()\"></i>\r\n                    <span>{{ getInputText() }}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-secondary btn-action\" type=\"button\" title=\"Clear selected files\" (click)=\"onRemove()\" *ngIf=\"isNotNullOrEmpty()\">\r\n                    <i class=\"fas fa-trash\" aria-hidden=\"true\"></i>  \r\n                    <span class=\"d-none d-md-inline-flex\">{{ textRemove }}</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"input-group-append\" *ngIf=\"!disableUpload\">\r\n                <button class=\"btn btn-secondary btn-action\" type=\"button\" title=\"Upload selected files\" (click)=\"onUpload()\" *ngIf=\"isNotNullOrEmpty()\">\r\n                    <i class=\"fas fa-cloud-upload-alt\" aria-hidden=\"true\"></i>  \r\n                    <span class=\"d-none d-md-inline-flex\">{{ textUpload }}</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"input-group-append\">\r\n                <div class=\"btn btn-primary btn-file\" [ngClass]=\"{'disabled': dropZoneDisabled}\">\r\n                    <i class=\"fas fa-folder-open\" aria-hidden=\"true\"></i>\r\n                    <span class=\"d-none d-md-inline-flex\">{{ textBrowse }}</span>\r\n                    <input id=\"{{ inputId }}\" class=\"file\" name=\"input-file-name\" type=\"file\" \r\n                        accept=\"{{ inputAccept }}\" \r\n                        [attr.multiple]=\"inputMaxFiles > 1 ? true : null\" \r\n                        [disabled]=\"dropZoneDisabled\"\r\n                        (change)=\"onChange($event)\" \r\n                        (blur)=\"onBlur()\" \r\n                        (focus)=\"onFocus()\" \r\n                        #inputFile>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <ng-template #minimalButton>\r\n        <div class=\"col-12\" *ngIf=\"isDragOver; else minimalInput\">\r\n            <div class=\"drop-zone-minimal\"></div>\r\n        </div>\r\n        <ng-template #minimalInput>\r\n            <div class=\"col-12\">\r\n                <div class=\"btn btn-primary btn-file\">\r\n                    <span class=\"d-none d-md-inline-flex\">{{ textBrowse }}</span>\r\n                    <input id=\"{{ inputId }}\" class=\"file\" name=\"input-file-name\" type=\"file\" \r\n                        accept=\"{{ inputAccept }}\"\r\n                        [attr.multiple]=\"inputMaxFiles > 1 ? true : null\"\r\n                        (change)=\"onChange($event)\"\r\n                        #inputFile>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </ng-template>\r\n</div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/demo/components/input-file.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-file .drop-zone {\n  border: 1px dashed #a2958a;\n  border-radius: 5px;\n  height: 320px;\n  text-align: center; }\n\n.input-file .drop-zone-minimal {\n  border: 1px dashed #a2958a;\n  border-radius: 5px;\n  height: 38px; }\n\n.input-file .file-preview {\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  overflow: auto;\n  padding: 5px;\n  width: 100%; }\n  .input-file .file-preview .file-preview-item {\n    border: 1px solid #ddd;\n    box-shadow: 1px 1px 5px 0 #a2958a;\n    display: table;\n    float: left;\n    margin: 8px;\n    padding: 6px;\n    position: relative;\n    text-align: center; }\n    .input-file .file-preview .file-preview-item .file-content {\n      height: 170px; }\n      .input-file .file-preview .file-preview-item .file-content img {\n        height: 160px;\n        width: auto; }\n    .input-file .file-preview .file-preview-item .file-thumbnail-footer {\n      height: 70px;\n      padding-top: 10px; }\n      .input-file .file-preview .file-preview-item .file-thumbnail-footer .file-footer-caption {\n        color: #777;\n        display: block;\n        font-size: 11px;\n        margin: 5px auto;\n        overflow: hidden;\n        padding-top: 4px;\n        text-align: center;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        width: 160px; }\n    .input-file .file-preview .file-preview-item:hover {\n      box-shadow: 3px 3px 5px 0 #333; }\n\n.input-file .file-caption-main {\n  width: 100%; }\n  .input-file .file-caption-main .input-active {\n    background-color: #fff;\n    border-color: #5cb3fd;\n    color: #464a4c;\n    outline: 0; }\n  .input-file .file-caption-main .file-caption-name :focus {\n    outline: 0; }\n  .input-file .file-caption-main .form-control,\n  .input-file .file-caption-main .btn-action {\n    z-index: 10; }\n\n.input-file .btn-file input[type='file'] {\n  background: none;\n  cursor: inherit;\n  display: block;\n  min-height: 100%;\n  min-width: 100%;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  text-align: right;\n  top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/components/input-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dto_file__ = __webpack_require__("../../../../../src/app/demo/dto/file.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputFileComponent = (function () {
    function InputFileComponent() {
        this.disableUpload = false;
        this.inputMaxFiles = 1;
        this.minimal = false;
        this.model = new Array();
        this.textBrowse = 'Browse';
        this.textFileSelected = 'files selected';
        this.textNoFile = 'No file selected';
        this.textRemove = 'Remove';
        this.textUpload = 'Upload';
        // #endregion
        // #region output
        this.limitReached = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.acceptedFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.rejectedFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removedFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.uploadFiles = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // #region view child
        this.dropZoneDisabled = false;
        this.isDragOver = false;
        this.isInputActive = false;
        // #endregion
        // #region public attributes
        this.iconExtension = '.png';
        this.pathIcon = 'assets/img/';
        this.typeImage = 'image/';
        // #endregion
    }
    // #endregion
    // #region public functions
    // #region events
    /**
     * Blur event handler.
     */
    InputFileComponent.prototype.onBlur = function () {
        this.isInputActive = false;
    };
    /**
     * Change event handler.
     * @param event
     */
    InputFileComponent.prototype.onChange = function (event) {
        this.addInputFile(event.target.files);
    };
    /**
     * Focus event handler
     */
    InputFileComponent.prototype.onFocus = function () {
        this.isInputActive = true;
    };
    /**
     * File Drag Over event handler.
     */
    InputFileComponent.prototype.onFileDragOver = function () {
        this.isDragOver = true;
    };
    /**
     * File Drag Leave event handler.
     */
    InputFileComponent.prototype.onFileDragLeave = function () {
        this.isDragOver = false;
    };
    /**
     * File Drop event handler.
     * @param files.
     */
    InputFileComponent.prototype.onFileDrop = function (files) {
        this.isDragOver = false;
        this.addInputFile(files);
    };
    /**
     * Remove event handler.
     * Removes all files of the model.
     */
    InputFileComponent.prototype.onRemove = function () {
        for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
            var file = _a[_i];
            this.removedFileHandler(file);
        }
        this.removeHandler();
    };
    /**
     * Remove file event handler.
     * @param index
     */
    InputFileComponent.prototype.onRemoveFile = function (index) {
        this.removedFileHandler(this.model[index]);
        this.model.splice(index, 1);
        this.dropZoneDisabled = false;
        if (!this.model.length) {
            this.removeHandler();
        }
    };
    /**
     * Upload event handler;
     */
    InputFileComponent.prototype.onUpload = function () {
        this.uploadFiles.emit();
    };
    // #endregion
    // #region functions
    /**
     * Gets the text of the input.
     */
    InputFileComponent.prototype.getInputText = function () {
        var inputText;
        if (this.model == null || !this.model.length) {
            inputText = this.textNoFile;
        }
        else if (this.model.length < 2 && this.model[0].file != null) {
            inputText = this.model[0].file.name;
        }
        else {
            inputText = this.model.length + ' ' + this.textFileSelected;
        }
        return inputText;
    };
    /**
     * Checks if the model is null or empty.
     */
    InputFileComponent.prototype.isNotNullOrEmpty = function () {
        return this.model != null && this.model.length != null && this.model.length > 0;
    };
    // #endregion
    // #endregion
    // #region private functions
    /**
     * Accepted file handler.
     * @param file
     */
    InputFileComponent.prototype.acceptedFileHandler = function (file) {
        this.acceptedFile.emit(file);
    };
    /**
     * Adds multiple files to the model.
     * @param files
     */
    InputFileComponent.prototype.addInputFile = function (files) {
        var limit = +this.inputMaxFiles;
        for (var index = 0; index < files.length; index++) {
            // Checks the limit
            if (this.model.length < limit) {
                // Checks the type
                if (this.isTypeEnabled(files[index])) {
                    var file = new __WEBPACK_IMPORTED_MODULE_1__dto_file__["a" /* File */]();
                    this.setSize(file, files[index]);
                    // Checks the icon
                    if (FileReader && this.isTypeImage(files[index])) {
                        this.readFileHandler(file, files[index]);
                    }
                    else {
                        this.setFileIcon(file, files[index]);
                    }
                    file.file = files[index];
                    this.model.push(file);
                    this.acceptedFileHandler(file);
                }
                else {
                    this.rejectedFileHandler(files[index]);
                }
            }
            else {
                // Limit reached
                break;
            }
        }
        if (this.model.length >= limit && !this.minimal) {
            this.limitReachedHandler();
        }
    };
    /**
     * Checks if the file is an image.
     * @param file
     */
    InputFileComponent.prototype.isTypeImage = function (file) {
        return file.type.startsWith(this.typeImage);
    };
    /**
     * Checks if the type of the file is enabled.
     * @param file
     */
    InputFileComponent.prototype.isTypeEnabled = function (file) {
        var enabled = this.inputAccept == null;
        if (this.inputAccept) {
            var accept = this.inputAccept.replace('*', '');
            var types = accept.split(',');
            for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
                var type = types_1[_i];
                if (file.type.startsWith(type) || (type.charAt(0) === '.' && file.name != null && file.name.endsWith(type))) {
                    enabled = true;
                    break;
                }
            }
        }
        return enabled;
    };
    /**
     * Limit reached handler.
     */
    InputFileComponent.prototype.limitReachedHandler = function () {
        this.dropZoneDisabled = true;
        this.limitReached.emit();
    };
    /**
     * Read file handler.
     * @param image.
     */
    InputFileComponent.prototype.readFileHandler = function (file, image) {
        var fr = new FileReader();
        fr.onload = function () {
            file.icon = fr.result;
        };
        fr.readAsDataURL(image);
    };
    /**
     * Rejected file handler.
     * @param file
     */
    InputFileComponent.prototype.rejectedFileHandler = function (file) {
        this.rejectedFile.emit(file);
    };
    /**
     * Removed file handler.
     * @param file
     */
    InputFileComponent.prototype.removedFileHandler = function (file) {
        this.removedFile.emit(file);
    };
    /**
     * Remove handler.
     */
    InputFileComponent.prototype.removeHandler = function () {
        this.dropZoneDisabled = false;
        this.inputFile.nativeElement.value = '';
        this.model = new Array();
    };
    /**
     * Sets the icon of the file.
     * @param file
     * @param inputFile
     */
    InputFileComponent.prototype.setFileIcon = function (file, inputFile) {
        var icon;
        switch (inputFile.type) {
            case 'application/pdf':
                icon = 'pdf';
                break;
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                icon = 'doc';
                break;
            case 'application/zip':
                icon = 'zip';
                break;
            default:
                icon = 'file';
        }
        file.icon = this.pathIcon + icon + this.iconExtension;
    };
    /**
     * Gets the size of the file to display.
     * @param file
     */
    InputFileComponent.prototype.setSize = function (file, inputFile) {
        var size = Math.round(inputFile.size / 1024);
        file.size = '(' + size + ' KB)';
    };
    return InputFileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputFileComponent.prototype, "inputId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputFileComponent.prototype, "inputAccept", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "disableUpload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "inputMaxFiles", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "minimal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "textBrowse", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "textFileSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "textNoFile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "textRemove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "textUpload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], InputFileComponent.prototype, "limitReached", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], InputFileComponent.prototype, "acceptedFile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], InputFileComponent.prototype, "rejectedFile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], InputFileComponent.prototype, "removedFile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], InputFileComponent.prototype, "uploadFiles", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputFile'),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "inputFile", void 0);
InputFileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'input-file',
        styles: [__webpack_require__("../../../../../src/app/demo/components/input-file.component.scss")],
        template: __webpack_require__("../../../../../src/app/demo/components/input-file.component.html")
    })
], InputFileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=input-file.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/directives/drop-zone.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropZoneDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropZoneDirective = (function () {
    function DropZoneDirective() {
        this.disabled = false;
        this.fileDragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fileDragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fileDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isDragOverDisabled = false;
    }
    /**
     * Drag Over event handler.
     * @param event
     */
    DropZoneDirective.prototype.onDragOver = function (event) {
        this.preventAndStopEventPropagation(event);
        if (!this.isDragOverDisabled && !this.disabled) {
            this.isDragOverDisabled = true;
            this.fileDragOver.emit();
        }
    };
    /**
     * Drag Leave event handler.
     * @param event
     */
    DropZoneDirective.prototype.onDragLeave = function (event) {
        this.preventAndStopEventPropagation(event);
        if (this.isDragOverDisabled && !this.disabled) {
            this.isDragOverDisabled = false;
            this.fileDragLeave.emit();
        }
    };
    /**
     * Drop event handler.
     * @param event
     */
    DropZoneDirective.prototype.onDrop = function (event) {
        if (!this.disabled) {
            this.isDragOverDisabled = false;
            this.preventAndStopEventPropagation(event);
            this.fileDrop.emit(event.dataTransfer.files);
        }
    };
    /**
     * Prevents and stops event propagration.
     * @param event
     */
    DropZoneDirective.prototype.preventAndStopEventPropagation = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    return DropZoneDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DropZoneDirective.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DropZoneDirective.prototype, "fileDragOver", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DropZoneDirective.prototype, "fileDragLeave", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DropZoneDirective.prototype, "fileDrop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDragOver", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDragLeave", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDrop", null);
DropZoneDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[dropZone]'
    })
], DropZoneDirective);

//# sourceMappingURL=drop-zone.directive.js.map

/***/ }),

/***/ "../../../../../src/app/demo/dto/file.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
var File = (function () {
    function File() {
    }
    return File;
}());

//# sourceMappingURL=file.js.map

/***/ }),

/***/ "../../../../../src/app/directive/directive.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/directive/directive.component.html":
/***/ (function(module, exports) {

module.exports = "<span [appShadow]=\"'hotpink'\"\r\n      [appShadowX]=\"'12px'\"\r\n      [appShadowY]=\"'6px'\"\r\n      [appShadowBlur]=\"'30px'\">Alligator</span>"

/***/ }),

/***/ "../../../../../src/app/directive/directive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectiveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DirectiveComponent = (function () {
    function DirectiveComponent(elem, renderer) {
        renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
    }
    return DirectiveComponent;
}());
DirectiveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[appShadow]'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-directive',
        template: __webpack_require__("../../../../../src/app/directive/directive.component.html"),
        styles: [__webpack_require__("../../../../../src/app/directive/directive.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], DirectiveComponent);

var _a, _b;
//# sourceMappingURL=directive.component.js.map

/***/ }),

/***/ "../../../../../src/app/events/events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-i18n></app-i18n> -->\r\n<h1>{{'Form user input'|translate}}</h1>\r\n      \r\n          <br/>\r\n          <p>on keyup</p>\r\n          <input (keyup)=\"onKey($event)\"/>\r\n            \r\n          <p>{{values}}</p>\r\n            <br/>\r\n            <p>on keyup</p>\r\n            <input #box (keyup)=\"0\">\r\n              <p>{{box.value}}</p>\r\n              <br/>\r\n              <p>keyup on enter</p>\r\n              <input #box1 (keyup.enter)=\"onEnter(box1.value)\">\r\n              <p>{{value}}</p>\r\n              <br/>\r\n              <input #newList\r\n              (keyup.enter)=\"addList(newList.value)\"\r\n              (blur)=\"addList(newList.value); newList.value='' \">\r\n\r\n              <button (click)=\"addList(newList.value)\" class=\"btn btn-success\">Add</button>\r\n\r\n               <ul><li *ngFor=\"let list of lists\">{{list}}</li></ul>"

/***/ }),

/***/ "../../../../../src/app/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = (function () {
    function EventsComponent() {
        this.clickMessage = '';
        this.values = '';
        this.value = '';
        this.value1 = '';
        this.lists = ['FrontEnd', 'Backend', 'DBA'];
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent.prototype.onClickMe = function () {
        this.clickMessage = 'You are my hero!';
    };
    EventsComponent.prototype.onKey = function (event) {
        this.values += event.target.value + ' | ';
    };
    EventsComponent.prototype.onEnter = function (value) {
        this.value = value;
    };
    EventsComponent.prototype.update = function (value1) {
        this.value1 = value1;
    };
    EventsComponent.prototype.addList = function (newList) {
        if (newList) {
            this.lists.push(newList);
        }
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-events',
        template: __webpack_require__("../../../../../src/app/events/events.component.html"),
        styles: [__webpack_require__("../../../../../src/app/events/events.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EventsComponent);

//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"heroForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div style=\"margin-bottom: 1em\">\r\n    <button type=\"submit\"\r\n            [disabled]=\"heroForm.pristine\" class=\"btn btn-success\">Save</button> &nbsp;\r\n    <button type=\"button\" (click)=\"revert()\"\r\n            [disabled]=\"heroForm.pristine\" class=\"btn btn-danger\">Revert</button>\r\n  </div>\r\n\r\n  <!-- Hero Detail Controls -->\r\n  <div class=\"form-group\">\r\n      <label class=\"center-block\">{{'name'|translate}}\r\n        <input class=\"form-control\" formControlName=\"name\">\r\n      </label>\r\n  </div>\r\n\r\n  <div formArrayName=\"secretLairs\" class=\"well well-lg\">\r\n    <div *ngFor=\"let address of secretLairs.controls; let i=index\" [formGroupName]=\"i\" >\r\n      <!-- The repeated address template -->\r\n      <h4>{{'Address'|translate}} #{{i + 1}}</h4>\r\n      <div style=\"margin-left: 1em;\">\r\n        <div class=\"form-group\">\r\n          <label class=\"center-block\">{{'Street'|translate}}\r\n            <input class=\"form-control\" formControlName=\"street\">\r\n          </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"center-block\">{{'City'|translate}}\r\n            <input class=\"form-control\" formControlName=\"city\">\r\n          </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"center-block\">{{'State'|translate}}\r\n            <select class=\"form-control\" formControlName=\"state\">\r\n              <option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"center-block\">{{'Zip Code'|translate}}\r\n            <input class=\"form-control\" formControlName=\"zip\">\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <!-- End of the repeated address template -->\r\n    </div>\r\n    <button (click)=\"addLair()\" type=\"button\" class=\"btn btn-success\">Add a Detail</button>\r\n  </div>\r\n  <!-- <div class=\"form-group radio\">\r\n    <h4>Super power:</h4>\r\n    <label class=\"center-block\"><input type=\"radio\" formControlName=\"power\" value=\"flight\">Flight</label>\r\n    <label class=\"center-block\"><input type=\"radio\" formControlName=\"power\" value=\"x-ray vision\">X-ray vision</label>\r\n    <label class=\"center-block\"><input type=\"radio\" formControlName=\"power\" value=\"strength\">Strength</label>\r\n  </div> -->\r\n  <!-- <div class=\"checkbox\">\r\n    <label class=\"center-block\">\r\n      <input type=\"checkbox\" formControlName=\"sidekick\">I have a sidekick.\r\n    </label>\r\n  </div>\r\n</form>\r\n\r\n<p>heroForm value: {{ heroForm.value | json}}</p>\r\n\r\n<h4>Name change log</h4>\r\n<div *ngFor=\"let name of nameChangeLog\">{{name}}</div> -->"

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_model__ = __webpack_require__("../../../../../src/app/data-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroDetailComponent = (function () {
    function HeroDetailComponent(fb, heroService) {
        this.fb = fb;
        this.heroService = heroService;
        this.nameChangeLog = [];
        this.states = __WEBPACK_IMPORTED_MODULE_2__data_model__["b" /* states */];
        this.createForm();
        this.logNameChange();
    }
    HeroDetailComponent.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            name: '',
            secretLairs: this.fb.array([]),
            power: '',
            sidekick: ''
        });
    };
    HeroDetailComponent.prototype.ngOnChanges = function () {
        this.rebuildForm();
    };
    HeroDetailComponent.prototype.rebuildForm = function () {
        this.heroForm.reset({
            name: this.hero.name
        });
        this.setAddresses(this.hero.addresses);
    };
    Object.defineProperty(HeroDetailComponent.prototype, "secretLairs", {
        get: function () {
            return this.heroForm.get('secretLairs');
        },
        enumerable: true,
        configurable: true
    });
    ;
    HeroDetailComponent.prototype.setAddresses = function (addresses) {
        var _this = this;
        var addressFGs = addresses.map(function (address) { return _this.fb.group(address); });
        var addressFormArray = this.fb.array(addressFGs);
        this.heroForm.setControl('secretLairs', addressFormArray);
    };
    HeroDetailComponent.prototype.addLair = function () {
        this.secretLairs.push(this.fb.group(new __WEBPACK_IMPORTED_MODULE_2__data_model__["c" /* Address */]()));
    };
    HeroDetailComponent.prototype.onSubmit = function () {
        this.hero = this.prepareSaveHero();
        this.heroService.updateHero(this.hero).subscribe();
        this.rebuildForm();
    };
    HeroDetailComponent.prototype.prepareSaveHero = function () {
        var formModel = this.heroForm.value;
        // deep copy of form model lairs
        var secretLairsDeepCopy = formModel.secretLairs.map(function (address) { return Object.assign({}, address); });
        // return new `Hero` object containing a combination of original hero value(s)
        // and deep copies of changed form model values
        var saveHero = {
            id: this.hero.id,
            name: formModel.name,
            // addresses: formModel.secretLairs // <-- bad!
            addresses: secretLairsDeepCopy
        };
        return saveHero;
    };
    HeroDetailComponent.prototype.revert = function () { this.rebuildForm(); };
    HeroDetailComponent.prototype.logNameChange = function () {
        var _this = this;
        var nameControl = this.heroForm.get('name');
        nameControl.valueChanges.forEach(function (value) { return _this.nameChangeLog.push(value); });
    };
    return HeroDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_model__["d" /* Hero */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_model__["d" /* Hero */]) === "function" && _a || Object)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-hero-detail',
        template: __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */]) === "function" && _c || Object])
], HeroDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=hero-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/hero-form/hero-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-form/hero-form.component.html":
/***/ (function(module, exports) {

module.exports = "<app-i18n></app-i18n>\r\n<body class = \"colorhome\"> \r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12  \">\r\n       <div class=\"col-sm-6 \">\r\n  <div [hidden]=\"submitted\">\r\n    <h1>{{'Employee Form'|translate}}</h1>\r\n    \r\n    <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{'name'|translate}}</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\"\r\n               required\r\n               [(ngModel)]=\"model.name\" name=\"name\"\r\n               #name=\"ngModel\">\r\n        <div [hidden]=\"name.valid || name.pristine\"\r\n             class=\"alert alert-danger\">\r\n          Name is required\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"alterEgo\">{{'last name'|translate}}</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"alterEgo\"\r\n               [(ngModel)]=\"model.alterEgo\" name=\"alterEgo\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"power\"> {{'position'|translate}}</label>\r\n        <select class=\"form-control\" id=\"power\"\r\n                required\r\n                [(ngModel)]=\"model.power\" name=\"power\"\r\n                #power=\"ngModel\">\r\n          <option *ngFor=\"let pow of powers\" [value]=\"pow\">{{pow}}</option>\r\n        </select>\r\n        <div [hidden]=\"power.valid || power.pristine\" class=\"alert alert-danger\">\r\n          Power is required\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroForm.form.valid\"> {{'Submit'|translate}}</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"newHero(); heroForm.reset()\"> {{'New employee'|translate}}</button>\r\n    </form>\r\n  </div>\r\n\r\n  <div [hidden]=\"!submitted\">\r\n    <h3>{{'You submitted the following:'|translate}}</h3>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-3\">{{'name'|translate}}</div>\r\n      <div class=\"col-xs-9  pull-left\">{{ model.name }}</div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-3\">{{'last name'|translate}}</div>\r\n      <div class=\"col-xs-9 pull-left\">{{ model.alterEgo }}</div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-3\">{{'position'|translate}}</div>\r\n      <div class=\"col-xs-9 pull-left\">{{ model.power }}</div>\r\n    </div>\r\n    <br>\r\n    <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\r\n  </div>\r\n    <br/>\r\n    <h3>Date picker</h3>\r\n    <app-mydate></app-mydate>\r\n    <br/>\r\n    <div class=\"progress\">\r\n        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:10%\">\r\n          <span class=\"sr-only\">10% Complete</span>\r\n        </div>\r\n      </div>\r\n      </div> \r\n      \r\n      <div class=\"col-sm-6 \">\r\n        <app-events></app-events>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/hero-form/hero-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero__ = __webpack_require__("../../../../../src/app/hero.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeroFormComponent = (function () {
    function HeroFormComponent() {
        this.powers = ['Front End', 'Back End',
        ];
        this.model = new __WEBPACK_IMPORTED_MODULE_1__hero__["a" /* Hero */](18, 'nuttakon', this.powers[0], 'taweepool');
        this.submitted = false;
    }
    HeroFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    HeroFormComponent.prototype.newHero = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__hero__["a" /* Hero */](42, '', '');
    };
    return HeroFormComponent;
}());
HeroFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-hero-form',
        template: __webpack_require__("../../../../../src/app/hero-form/hero-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hero-form/hero-form.component.css")]
    })
], HeroFormComponent);

//# sourceMappingURL=hero-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/hero-list/hero-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-list/hero-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-i18n></app-i18n>\r\n<body class = \"colorhome\"> \r\n<div class=\"contrainer\">\r\n  <div class=\"col-sm-7\">\r\n  <h3 *ngIf=\"isLoading\"><i>{{'Loading employee ...'| translate}} </i></h3>\r\n  <h3 *ngIf=\"!isLoading\">{{'Select a employee:'| translate}}</h3>\r\n  \r\n  <nav>\r\n    <button (click)=\"getHeroes()\" class=\"btn btn-primary\">{{'Refresh'| translate}}</button><br>\r\n    <a *ngFor=\"let hero of heroes | async\" (click)=\"select(hero)\">{{hero.name }}<br></a>\r\n  </nav>\r\n  \r\n  <div *ngIf=\"selectedHero\">\r\n    <hr>\r\n    <h2>{{'employee detail'| translate}}</h2>\r\n    <h3>{{'Editing'| translate}} {{selectedHero.name}}</h3>\r\n    <app-hero-detail [hero]=\"selectedHero\"></app-hero-detail>\r\n  </div>\r\n</div>\r\n</div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/hero-list/hero-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroListComponent = (function () {
    function HeroListComponent(heroService) {
        this.heroService = heroService;
        this.isLoading = false;
    }
    HeroListComponent.prototype.ngOnInit = function () { this.getHeroes(); };
    HeroListComponent.prototype.getHeroes = function () {
        var _this = this;
        this.isLoading = true;
        this.heroes = this.heroService.getHeroes()
            .finally(function () { return _this.isLoading = false; });
        this.selectedHero = undefined;
    };
    HeroListComponent.prototype.select = function (hero) { this.selectedHero = hero; };
    return HeroListComponent;
}());
HeroListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-hero-list',
        template: __webpack_require__("../../../../../src/app/hero-list/hero-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hero-list/hero-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */]) === "function" && _a || Object])
], HeroListComponent);

var _a;
//# sourceMappingURL=hero-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_model__ = __webpack_require__("../../../../../src/app/data-model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeroService = (function () {
    function HeroService() {
        this.delayMs = 500;
    }
    // Fake server get; assume nothing can go wrong
    HeroService.prototype.getHeroes = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_3__data_model__["a" /* heroes */]).delay(this.delayMs); // simulate latency with delay
    };
    // Fake server update; assume nothing can go wrong
    HeroService.prototype.updateHero = function (hero) {
        var oldHero = __WEBPACK_IMPORTED_MODULE_3__data_model__["a" /* heroes */].find(function (h) { return h.id === hero.id; });
        var newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(newHero).delay(this.delayMs); // simulate latency with delay
    };
    return HeroService;
}());
HeroService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], HeroService);

//# sourceMappingURL=hero.service.js.map

/***/ }),

/***/ "../../../../../src/app/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var Hero = (function () {
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());

//# sourceMappingURL=hero.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\"><a [routerLink]=\"['/home']\">Standard</a></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li ><a [routerLink]=\"['/home']\">home</a></li>\r\n      <li><a [routerLink]=\"['/i18n']\">i18n</a></li>\r\n      <li><a [routerLink]=\"['/AutoComponent']\">auto</a></li>\r\n     \r\n      <li><a [routerLink]=\"['/InputFileComponent']\">InputFile</a></li>\r\n      <li><a [routerLink]=\"['/AtComponent']\">Autocompplete</a></li>\r\n      <li dropdown>\r\n        <a dropdownToggle class=\"dropdown-toggle\" role=\"button\">Form <span class=\"caret\"></span></a>\r\n        <ul *dropdownMenu class=\"dropdown-menu\">\r\n            <li><a [routerLink]=\"['/HeroFormComponent']\">Template-driven Forms</a></li>\r\n            <li><a [routerLink]=\"['/HeroListComponent']\">Form Validation</a></li>\r\n          \r\n             <li><a [routerLink]=\"['/EventsComponent']\">event</a></li>\r\n        </ul>\r\n    </li>  \r\n      <li><a [routerLink]=\"['/PagingComponent']\">paging</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n         <li> <a  (click)=\"switchLanguage('en')\"><img src=\"assets/img/TH.png\" alt=\"Avatar\" style=\"width: 30px;\" ></a><li>\r\n          <li> <a (click)=\"switchLanguage('th')\"><img src=\"assets/img/๊US.png\" alt=\"Avatar\" style=\"width: 30px;\" ></a><li>\r\n        <li><a [routerLink]=\"['/UserinfoComponent']\"><i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"> Userinfo</i></a></li>\r\n      <li><a [routerLink]=\"['/login']\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"> Logout</i></a></li>\r\n    </ul>\r\n  </div>\r\n\r\n</nav> -->\r\n\r\n<app-i18n></app-i18n>\r\n    <body class = \"colorhome\"> \r\n<div class=\"contrainer\">\r\n\r\n\r\n<div class=\"col-sm-5 \">\r\n  <br/>  \r\n  <h1>{{'home'| translate}}</h1>\r\n\r\n    <!-- <div>\r\n        Users from secure api end point:\r\n          <br/>  {{users.email}}\r\n          <br/>   {{users.name}}\r\n          <br/>      {{users.tokens}}\r\n          <br/> {{users.rules.dept}}\r\n          <br/> {{users.rules.position}}\r\n    </div> -->\r\n    \r\n\r\n                    \r\n            <table class=\"table \"  >\r\n              <thead bgcolor=\"#5eb1ff\" >\r\n                <tr>\r\n                  <th>{{'name'|translate}}</th>\r\n                  <th>{{'nickname'|translate}}</th>\r\n                  <th>{{'age'|translate}}</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody bgcolor=\"#84b3ff\" >\r\n                <tr *ngFor=\"let test of test\">\r\n                  <td>{{test.name}}</td>\r\n                  <td>{{test.nickname}}</td>\r\n                  <td>{{test.age}}</td>\r\n             \r\n                  \r\n                </tr>\r\n               <tr>\r\n                 <td></td>\r\n                 <td></td>\r\n                <td>sum = {{sum}}</td>\r\n               </tr>\r\n              </tbody>\r\n            </table>\r\n      \r\n           \r\n                \r\n                                    \r\n</div>\r\n\r\n<app-http></app-http>\r\n\r\n</div>\r\n\r\n\r\n<!-- <app-load></app-load> -->\r\n\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(modalService, http) {
        this.modalService = modalService;
        this.http = http;
        // name = "aaa"
        this.sum = 0;
        this.clickMessage = '';
        this.values = '';
        this.value = '';
        this.value1 = '';
        this.test = [
            { 'name': 'nuttakon', 'nickname': 'phu', 'age': 23 },
            { 'name': 'peerapong', 'nickname': 'boss', 'age': 22 },
            { 'name': 'saroch', 'nickname': 'aon', 'age': 24 }
        ];
        this.users = [];
        this.users = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.users);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.sumNumber();
        // this.userService.getUsers()
        //   .subscribe(users => {
        //     this.users = users;
        //   console.log("============="+users)
        //   })
    };
    // sumNumber(){
    //   var a = 0;
    //   for(var i=0;i<this.test.length;i++){
    //     a += this.test[i].age
    //   }
    //   return a;
    // }
    HomeComponent.prototype.sumNumber = function () {
        var a = 0;
        for (var i = 0; i < this.test.length; i++) {
            this.sum += this.test[i].age;
        }
    };
    HomeComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/http/http.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/http/http.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<h3>$http</h3>\r\n<button type=\"button\" (click)=\"makeRequest()\">Make Request</button>\r\n<div *ngIf=\"loading\">loading...</div>\r\n<pre>Data Obtained is: {{ data | json }}</pre>"

/***/ }),

/***/ "../../../../../src/app/http/http.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpComponent = (function () {
    function HttpComponent(http) {
        this.http = http;
        this.title = 'app';
        this.results = '';
    }
    HttpComponent.prototype.ngOnInit = function () {
        // console.log("------")
        // this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
        //   console.log(data);
        // });
    };
    HttpComponent.prototype.makeRequest = function () {
        var _this = this;
        this.loading = true;
        this.http.get('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
        });
    };
    return HttpComponent;
}());
HttpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-http',
        template: __webpack_require__("../../../../../src/app/http/http.component.html"),
        styles: [__webpack_require__("../../../../../src/app/http/http.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], HttpComponent);

var _a;
//# sourceMappingURL=http.component.js.map

/***/ }),

/***/ "../../../../../src/app/i18n/i18n.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .item {\r\n    width: 50px;\r\n    height: 100px;\r\n    height: auto;\r\n    float: left;\r\n    margin: 3px;\r\n    padding: 3px;\r\n}\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n} */\r\n.active {\r\n    background-color: #0040ff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/i18n/i18n.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-default\" >\r\n        <div class=\"container-fluid\">\r\n          <div class=\"navbar-header\">\r\n              <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\" aria-expanded=\"false\">\r\n                  <span class=\"sr-only\">Toggle navigation</span>\r\n                  <span class=\"icon-bar\"></span>\r\n                  <span class=\"icon-bar\"></span>\r\n                  <span class=\"icon-bar\"></span>\r\n                </button>\r\n            <a class=\"navbar-brand\"><a [routerLink]=\"['/home']\">Standard</a></a>\r\n          </div>\r\n          <div class=\"collapse navbar-collapse\" [collapse]=isCollapsed>\r\n              <ul class=\"nav navbar-nav\">\r\n                \r\n            \r\n            <li ><a [routerLink]=\"['/home']\">home</a></li>\r\n           \r\n            <li><a [routerLink]=\"['/AutoComponent']\">Auto complete</a></li>\r\n            <li dropdown>\r\n                    <a dropdownToggle class=\"dropdown-toggle\" role=\"button\">Upload file <span class=\"caret\"></span></a>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\">\r\n                        <li><a [routerLink]=\"['/AtComponent']\">Upload file1</a></li>\r\n                      \r\n                       \r\n                    </ul>\r\n                </li>  \r\n                \r\n            <li dropdown>\r\n              <a dropdownToggle class=\"dropdown-toggle\" role=\"button\">Form <span class=\"caret\"></span></a>\r\n              <ul *dropdownMenu class=\"dropdown-menu\">\r\n                  <li><a [routerLink]=\"['/HeroFormComponent']\">Template-driven Forms and event</a></li>\r\n                  <li><a [routerLink]=\"['/HeroListComponent']\">Form Validation</a></li>\r\n                \r\n                 \r\n              </ul>\r\n          </li>  \r\n            <li><a [routerLink]=\"['/PagingComponent']\">paging</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n               <li> <a  (click)=\"switchLanguage('th')\"><img src=\"assets/img/TH.png\" alt=\"Avatar\" style=\"width: 30px;\" ></a><li>\r\n                <li> <a (click)=\"switchLanguage('en')\"><img src=\"assets/img/US.png\" alt=\"Avatar\" style=\"width: 30px;\" ></a><li>\r\n              <li><a [routerLink]=\"['/UserinfoComponent']\"><i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"> Userinfo</i></a></li>\r\n            <li><a [routerLink]=\"['/login']\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"> Logout</i></a></li>\r\n          </ul>\r\n          </div>\r\n        </div>\r\n      \r\n      </nav>\r\n   "

/***/ }),

/***/ "../../../../../src/app/i18n/i18n.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18nComponent = (function () {
    function I18nComponent(translate) {
        var _this = this;
        this.isCollapsed = true;
        this.switchLanguage = function (lang) {
            console.log('a+++++');
            _this.translate.use(lang);
            _this.translate.setDefaultLang(lang);
        };
        this.translate = translate;
        // translate.setDefaultLang('en');
    }
    return I18nComponent;
}());
I18nComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-i18n',
        template: __webpack_require__("../../../../../src/app/i18n/i18n.component.html"),
        styles: [__webpack_require__("../../../../../src/app/i18n/i18n.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], I18nComponent);

var _a;
//# sourceMappingURL=i18n.component.js.map

/***/ }),

/***/ "../../../../../src/app/i18n/say-hi/say-hi.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/i18n/say-hi/say-hi.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  {{ 'say-hi works!' | translate }}\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/i18n/say-hi/say-hi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SayHiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SayHiComponent = (function () {
    function SayHiComponent() {
    }
    SayHiComponent.prototype.ngOnInit = function () {
    };
    return SayHiComponent;
}());
SayHiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-say-hi',
        template: __webpack_require__("../../../../../src/app/i18n/say-hi/say-hi.component.html"),
        styles: [__webpack_require__("../../../../../src/app/i18n/say-hi/say-hi.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SayHiComponent);

//# sourceMappingURL=say-hi.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cp-spinner{width:48px;height:48px;display:inline-block;box-sizing:border-box;position:relative}\r\n\r\n.cp-skeleton{border-radius:50%;border-top:solid 6px #f56151;border-right:solid 6px transparent;border-bottom:solid 6px transparent;border-left:solid 6px transparent;animation:cp-skeleton-animate 1s linear infinite}.cp-skeleton:before{border-radius:50%;content:\" \";width:48px;height:48px;display:inline-block;box-sizing:border-box;border-top:solid 6px transparent;border-right:solid 6px transparent;border-bottom:solid 6px transparent;border-left:solid 6px #f56151;position:absolute;top:-6px;left:-6px;transform:rotateZ(-30deg)}.cp-skeleton:after{border-radius:50%;content:\" \";width:48px;height:48px;display:inline-block;box-sizing:border-box;border-top:solid 6px transparent;border-right:solid 6px #f56151;border-bottom:solid 6px transparent;border-left:solid 6px transparent;position:absolute;top:-6px;right:-6px;transform:rotateZ(30deg)}@keyframes cp-skeleton-animate{0%{transform:rotate(0);opacity:1}50%{opacity:.7}100%{transform:rotate(360deg);opacity:1}}\r\n\r\n\r\nbody {\r\n    color:white;\r\n    /* background-image: url(\"/img/default-avatar.png\"); */\r\n    background-repeat:no-repeat;\r\n    /* background-color: red;  */\r\n    font-family: 'Roboto', sans-serif;\r\n    background-attachment: scroll;\r\n}\r\n.form-control {\r\n    background: white;\r\n    font-size: 16px;\r\n    border-color: transparent;\r\n    box-shadow: none !important;\r\n}\r\n.form-control:focus {\r\n    border-color: #91d5a8;\r\n    background: #e9f5ee;\r\n}\r\n.form-control, .btn {        \r\n    border-radius: 2px;\r\n}\r\n.login-form {\r\n    width: 380px;\r\n    margin: 0 auto;\r\n}\r\n.login-form h2 {\r\n    margin: 0;\r\n    padding: 30px 0;\r\n    font-size: 34px;\r\n}\r\n.login-form .avatar {\r\n    margin: 0 auto 30px;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    z-index: 9;\r\n    background: #4aba70;\r\n    padding: 15px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n.login-form .avatar img {\r\n    width: 100%;\r\n}\r\n.login-form form {\r\n    color: #7a7a7a;\r\n    border-radius: 4px;\r\n    margin-bottom: 20px;\r\n    background: #f7f7f7;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\t\t\r\n}\r\n.login-form .btn {\r\n    font-size: 16px;\r\n    line-height: 26px;\r\n    min-width: 120px;\r\n    font-weight: bold;\r\n    background: #4aba70;\r\n    border: none;\t\t\r\n}\r\n.login-form .btn:hover, .login-form .btn:focus{\r\n    background: #40aa65;\r\n    outline: none !important;\r\n}\r\n.checkbox-inline {\r\n    margin-top: 14px;\r\n}\r\n.checkbox-inline input {\r\n    margin-top: 3px;\r\n}\r\n.login-form a {\r\n    color: #4aba70;\r\n}\t\r\n.login-form a:hover {\r\n    text-decoration: underline;\r\n}\r\n.hint-text {\r\n    color: white;\r\n    text-align: center;\r\n    padding-bottom: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <body>\r\n<div class=\"col-sm-4 col-sm-offset-4\">\r\n    <h2>Login</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">email is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div> -->\r\n        <!-- <div class=\"form-group\">\r\n            <label for=\"tokens\">tokens</label>\r\n            <select class=\"form-control\" name=\"tokens\" [(ngModel)]=\"model.tokens\" #tokens=\"ngModel\" required>\r\n                    <option>1</option>\r\n                    <option>2</option>\r\n            </select>        \r\n        </div> -->\r\n        <!-- <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <img *ngIf=\"loading\" class=\"cp-spinner cp-skeleton\" />\r\n        </div>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n    </form>\r\n</div>\r\n</body> -->\r\n\r\n<body [ngStyle]=\"{'background' : 'url(assets/img/a.jpg)'}\">\r\n    <div class=\"container;ex1\">\r\n<div class=\"login-form\">\r\n\t<h2 class=\"text-center\">Member Login</h2>\r\n    <form action=\"/examples/actions/confirmation.php\" method=\"post\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n\t\t<div class=\"avatar\">\r\n\t\t\t<img src=\"assets/img/default-avatar.png\" alt=\"Avatar\">\r\n\t\t</div>           \r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n        \t<input type=\"text\" class=\"form-control input-lg\" name=\"username\" placeholder=\"Username\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required=\"required\">\t\r\n            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">email is required</div>\r\n        </div>\r\n\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <input type=\"password\" class=\"form-control input-lg\" name=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"   required=\"required\">\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>        \r\n        <div class=\"form-group clearfix\">\r\n\t\t\t<label class=\"pull-left checkbox-inline\"><input type=\"checkbox\"> Remember me</label>\r\n            <button type=\"submit\" class=\"btn btn-primary btn-lg pull-right\">Sign in</button>\r\n        </div>\t\r\n        \t\r\n    </form>\r\n    <div class=\"hint-text\">Don't have an account? <a href=\"#\">Sign up here</a></div>\r\n    \r\n</div>\r\n</div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password, this.model.tokens)
            .subscribe(function (result) {
            if (result === true)
                _this.router.navigate(['/']);
            else
                _this.error = 'Email or Password is incorrect';
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/mydatepicker/mydatepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\r\n  <div class=\"columns is-multiline\">\r\n    <div class=\"column is-6 is-offset-3\">\r\n      <div class=\"datepicker-container\">\r\n        model value: {{ date }}\r\n      </div>\r\n    </div>\r\n    <div class=\"column is-6 is-offset-3\">\r\n      <div class=\"datepicker-container\">\r\n        <ng-datepicker [(ngModel)]=\"date\" [options]=\"options\"></ng-datepicker>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/mydatepicker/mydatepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_locale_en__ = __webpack_require__("../../../../date-fns/locale/en/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_locale_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_locale_en__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MydatepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MydatepickerComponent = (function () {
    function MydatepickerComponent() {
        this.options = {
            locale: __WEBPACK_IMPORTED_MODULE_1_date_fns_locale_en__,
            displayFormat: 'DD/MM/YYYY',
        };
        this.date = new Date();
    }
    return MydatepickerComponent;
}());
MydatepickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mydate',
        template: __webpack_require__("../../../../../src/app/mydatepicker/mydatepicker.component.html"),
    }),
    __metadata("design:paramtypes", [])
], MydatepickerComponent);

//# sourceMappingURL=mydatepicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/oneway/oneway.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/oneway/oneway.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>Welcome to {{version}}</h1>\r\n  </div>\r\n\r\n  <div>\r\n    Case 1 : Using Interpolation binding : <br><br>\r\n    <b>{{Username}} and {{Password}}</b> <br><br>\r\n    Case 2 : Using Proprety binding : <br><br>\r\n    <span [innerHtml]=\"Username\" [style.color]=\"Color\"></span>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/oneway/oneway.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnewayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnewayComponent = (function () {
    function OnewayComponent() {
        this.version = "1.0";
        this.myMsg = "";
        this.Username = "Test";
        this.Password = "1234";
        this.Color = "#FF0000";
    }
    OnewayComponent.prototype.ngOnInit = function () {
    };
    return OnewayComponent;
}());
OnewayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-oneway',
        template: __webpack_require__("../../../../../src/app/oneway/oneway.component.html"),
        styles: [__webpack_require__("../../../../../src/app/oneway/oneway.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OnewayComponent);

//# sourceMappingURL=oneway.component.js.map

/***/ }),

/***/ "../../../../../src/app/paging/data-table-demo1-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    { 'name': 'Aaron 2Moore', 'email': 'Heath44@hotmail.com', 'jobTitle': 'Regional Configuration Producer',
        'active': true, 'phoneNumber': '611-898-6201', 'date': '2015-11-06T07:21:25.510Z' },
    { 'name': 'Yvonne Conroy Mrs.', 'email': 'Gideon9@yahoo.com', 'jobTitle': 'Global Mobility Orchestrator',
        'active': false, 'phoneNumber': '115-850-0969', 'date': '2014-12-20T00:48:40.276Z' },
    { 'name': 'Laron Padberg', 'email': 'Laney_Huels@hotmail.com', 'jobTitle': 'Senior Directives Supervisor',
        'active': false, 'phoneNumber': '632-654-3034', 'date': '2015-09-29T04:33:38.544Z' },
    { 'name': 'Dr. Maryam Spinka', 'email': 'Aletha.Labadie@hotmail.com', 'jobTitle': 'Dynamic Mobility Associate',
        'active': true, 'phoneNumber': '547-345-0067', 'date': '2015-09-23T01:13:39.320Z' },
    { 'name': 'Kiley Baumbach', 'email': 'Rogelio24@hotmail.com', 'jobTitle': 'Principal Metrics Orchestrator',
        'active': true, 'phoneNumber': '958-524-5164', 'date': '2014-12-05T23:39:27.340Z' },
    { 'name': 'Hollis MacGyver', 'email': 'Yazmin.Heidenreich97@gmail.com', 'jobTitle': 'Direct Markets Assistant',
        'active': true, 'phoneNumber': '603-607-3241', 'date': '2015-02-12T10:40:52.977Z' },
    { 'name': 'Axel McLaughlin', 'email': 'Deon_Heaney@gmail.com', 'jobTitle': 'Forward Mobility Architect',
        'active': false, 'phoneNumber': '983-639-0705', 'date': '2015-03-01T02:28:26.030Z' },
    { 'name': 'Ricardo Botsford', 'email': 'Melisa73@yahoo.com', 'jobTitle': 'Direct Quality Consultant',
        'active': true, 'phoneNumber': '408-082-9480', 'date': '2015-01-31T03:41:54.611Z' },
    { 'name': 'Corbin Funk Mrs.', 'email': 'Marjory.Morissette51@gmail.com', 'jobTitle': 'Human Configuration Manager',
        'active': true, 'phoneNumber': '386-937-8683', 'date': '2014-12-05T15:07:36.843Z' },
    { 'name': 'Rosalind Paucek', 'email': 'Ivy_Stanton@gmail.com', 'jobTitle': 'Future Creative Supervisor',
        'active': true, 'phoneNumber': '977-661-7403', 'date': '2015-06-10T17:42:38.644Z' },
    { 'name': 'Henderson Moore', 'email': 'Randi_Corkery@hotmail.com', 'jobTitle': 'Internal Accountability Director',
        'active': true, 'phoneNumber': '078-101-6377', 'date': '2015-09-26T05:14:34.913Z' },
    { 'name': 'Kelli Schoen', 'email': 'Reva.Kiehn54@yahoo.com', 'jobTitle': 'National Accountability Architect',
        'active': false, 'phoneNumber': '654-591-6561', 'date': '2015-05-04T06:50:37.482Z' },
    { 'name': 'Kenna Fritsch', 'email': 'Wilburn2@gmail.com', 'jobTitle': 'Legacy Response Administrator',
        'active': true, 'phoneNumber': '790-480-2859', 'date': '2015-10-10T23:37:05.867Z' },
    { 'name': 'Judge Marquardt', 'email': 'Letha_Champlin69@hotmail.com', 'jobTitle': 'Human Program Specialist',
        'active': true, 'phoneNumber': '100-494-1787', 'date': '2015-04-04T23:29:48.588Z' },
    { 'name': 'Kurtis Hane', 'email': 'Mona.Gaylord47@yahoo.com', 'jobTitle': 'International Optimization Director',
        'active': false, 'phoneNumber': '008-800-2959', 'date': '2014-12-04T21:09:50.722Z' },
    { 'name': 'Nicolette Lind', 'email': 'Thurman30@yahoo.com', 'jobTitle': 'Legacy Marketing Facilitator',
        'active': true, 'phoneNumber': '007-908-2460', 'date': '2015-06-22T08:11:57.381Z' },
    { 'name': 'Idella Green', 'email': 'Fernando_Ward@yahoo.com', 'jobTitle': 'Dynamic Division Orchestrator',
        'active': false, 'phoneNumber': '147-865-1578', 'date': '2015-02-12T23:00:31.283Z' },
    { 'name': 'Mackenzie Bartell', 'email': 'Price25@yahoo.com', 'jobTitle': 'National Directives Associate',
        'active': false, 'phoneNumber': '235-649-0980', 'date': '2015-06-24T20:21:51.356Z' },
    { 'name': 'Mose Kohler', 'email': 'Malika56@hotmail.com', 'jobTitle': 'Lead Implementation Executive',
        'active': true, 'phoneNumber': '614-886-4868', 'date': '2015-03-04T13:05:23.698Z' },
    { 'name': 'Cielo Kuphal', 'email': 'Jude_Terry24@gmail.com', 'jobTitle': 'Dynamic Division Analyst',
        'active': false, 'phoneNumber': '590-976-7492', 'date': '2015-06-02T20:52:32.664Z' },
    { 'name': 'Haleigh Stokes', 'email': 'Belle_Herman64@yahoo.com', 'jobTitle': 'Global Intranet Executive',
        'active': false, 'phoneNumber': '418-255-9365', 'date': '2015-04-10T00:32:10.283Z' },
    { 'name': 'Tyrese Walter', 'email': 'Garland.Veum52@hotmail.com', 'jobTitle': 'Senior Web Liason',
        'active': false, 'phoneNumber': '041-555-9831', 'date': '2015-08-18T20:05:08.839Z' },
    { 'name': 'Barney Shields', 'email': 'Anika27@gmail.com', 'jobTitle': 'District Web Administrator',
        'active': true, 'phoneNumber': '379-438-0217', 'date': '2015-06-01T09:28:46.778Z' },
    { 'name': 'Favian Abbott Miss', 'email': 'Palma_Little@hotmail.com', 'jobTitle': 'Lead Implementation Facilitator',
        'active': false, 'phoneNumber': '642-808-5400', 'date': '2015-08-09T07:38:06.588Z' },
    { 'name': 'Carissa Kunze', 'email': 'Merl_Frami@yahoo.com', 'jobTitle': 'Regional Division Technician',
        'active': true, 'phoneNumber': '949-983-0342', 'date': '2015-11-05T08:09:09.463Z' },
    { 'name': 'Aaron 2Moore', 'email': 'Heath44@hotmail.com', 'jobTitle': 'Regional Configuration Producer',
        'active': true, 'phoneNumber': '611-898-6201', 'date': '2015-11-06T07:21:25.510Z' },
    { 'name': 'Yvonne Conroy Mrs.', 'email': 'Gideon9@yahoo.com', 'jobTitle': 'Global Mobility Orchestrator',
        'active': false, 'phoneNumber': '115-850-0969', 'date': '2014-12-20T00:48:40.276Z' },
    { 'name': 'Laron Padberg', 'email': 'Laney_Huels@hotmail.com', 'jobTitle': 'Senior Directives Supervisor',
        'active': false, 'phoneNumber': '632-654-3034', 'date': '2015-09-29T04:33:38.544Z' },
    { 'name': 'Dr. Maryam Spinka', 'email': 'Aletha.Labadie@hotmail.com', 'jobTitle': 'Dynamic Mobility Associate',
        'active': true, 'phoneNumber': '547-345-0067', 'date': '2015-09-23T01:13:39.320Z' },
    { 'name': 'Kiley Baumbach', 'email': 'Rogelio24@hotmail.com', 'jobTitle': 'Principal Metrics Orchestrator',
        'active': true, 'phoneNumber': '958-524-5164', 'date': '2014-12-05T23:39:27.340Z' },
    { 'name': 'Hollis MacGyver', 'email': 'Yazmin.Heidenreich97@gmail.com', 'jobTitle': 'Direct Markets Assistant',
        'active': true, 'phoneNumber': '603-607-3241', 'date': '2015-02-12T10:40:52.977Z' },
    { 'name': 'Axel McLaughlin', 'email': 'Deon_Heaney@gmail.com', 'jobTitle': 'Forward Mobility Architect',
        'active': false, 'phoneNumber': '983-639-0705', 'date': '2015-03-01T02:28:26.030Z' },
    { 'name': 'Ricardo Botsford', 'email': 'Melisa73@yahoo.com', 'jobTitle': 'Direct Quality Consultant',
        'active': true, 'phoneNumber': '408-082-9480', 'date': '2015-01-31T03:41:54.611Z' },
    { 'name': 'Corbin Funk Mrs.', 'email': 'Marjory.Morissette51@gmail.com', 'jobTitle': 'Human Configuration Manager',
        'active': true, 'phoneNumber': '386-937-8683', 'date': '2014-12-05T15:07:36.843Z' },
    { 'name': 'Rosalind Paucek', 'email': 'Ivy_Stanton@gmail.com', 'jobTitle': 'Future Creative Supervisor',
        'active': true, 'phoneNumber': '977-661-7403', 'date': '2015-06-10T17:42:38.644Z' },
    { 'name': 'Henderson Moore', 'email': 'Randi_Corkery@hotmail.com', 'jobTitle': 'Internal Accountability Director',
        'active': true, 'phoneNumber': '078-101-6377', 'date': '2015-09-26T05:14:34.913Z' },
    { 'name': 'Kelli Schoen', 'email': 'Reva.Kiehn54@yahoo.com', 'jobTitle': 'National Accountability Architect',
        'active': false, 'phoneNumber': '654-591-6561', 'date': '2015-05-04T06:50:37.482Z' },
    { 'name': 'Kenna Fritsch', 'email': 'Wilburn2@gmail.com', 'jobTitle': 'Legacy Response Administrator',
        'active': true, 'phoneNumber': '790-480-2859', 'date': '2015-10-10T23:37:05.867Z' },
    { 'name': 'Judge Marquardt', 'email': 'Letha_Champlin69@hotmail.com', 'jobTitle': 'Human Program Specialist',
        'active': true, 'phoneNumber': '100-494-1787', 'date': '2015-04-04T23:29:48.588Z' },
    { 'name': 'Kurtis Hane', 'email': 'Mona.Gaylord47@yahoo.com', 'jobTitle': 'International Optimization Director',
        'active': false, 'phoneNumber': '008-800-2959', 'date': '2014-12-04T21:09:50.722Z' },
    { 'name': 'Nicolette Lind', 'email': 'Thurman30@yahoo.com', 'jobTitle': 'Legacy Marketing Facilitator',
        'active': true, 'phoneNumber': '007-908-2460', 'date': '2015-06-22T08:11:57.381Z' },
    { 'name': 'Idella Green', 'email': 'Fernando_Ward@yahoo.com', 'jobTitle': 'Dynamic Division Orchestrator',
        'active': false, 'phoneNumber': '147-865-1578', 'date': '2015-02-12T23:00:31.283Z' },
    { 'name': 'Mackenzie Bartell', 'email': 'Price25@yahoo.com', 'jobTitle': 'National Directives Associate',
        'active': false, 'phoneNumber': '235-649-0980', 'date': '2015-06-24T20:21:51.356Z' },
    { 'name': 'Mose Kohler', 'email': 'Malika56@hotmail.com', 'jobTitle': 'Lead Implementation Executive',
        'active': true, 'phoneNumber': '614-886-4868', 'date': '2015-03-04T13:05:23.698Z' },
    { 'name': 'Cielo Kuphal', 'email': 'Jude_Terry24@gmail.com', 'jobTitle': 'Dynamic Division Analyst',
        'active': false, 'phoneNumber': '590-976-7492', 'date': '2015-06-02T20:52:32.664Z' },
    { 'name': 'Haleigh Stokes', 'email': 'Belle_Herman64@yahoo.com', 'jobTitle': 'Global Intranet Executive',
        'active': false, 'phoneNumber': '418-255-9365', 'date': '2015-04-10T00:32:10.283Z' },
    { 'name': 'Tyrese Walter', 'email': 'Garland.Veum52@hotmail.com', 'jobTitle': 'Senior Web Liason',
        'active': false, 'phoneNumber': '041-555-9831', 'date': '2015-08-18T20:05:08.839Z' },
    { 'name': 'Barney Shields', 'email': 'Anika27@gmail.com', 'jobTitle': 'District Web Administrator',
        'active': true, 'phoneNumber': '379-438-0217', 'date': '2015-06-01T09:28:46.778Z' },
    { 'name': 'Favian Abbott Miss', 'email': 'Palma_Little@hotmail.com', 'jobTitle': 'Lead Implementation Facilitator',
        'active': false, 'phoneNumber': '642-808-5400', 'date': '2015-08-09T07:38:06.588Z' },
    { 'name': 'Carissa Kunze', 'email': 'Merl_Frami@yahoo.com', 'jobTitle': 'Regional Division Technician',
        'active': true, 'phoneNumber': '949-983-0342', 'date': '2015-11-05T08:09:09.463Z' }
]);
//# sourceMappingURL=data-table-demo1-data.js.map

/***/ }),

/***/ "../../../../../src/app/paging/paging.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\r\n    padding: 10px 16px;\r\n    background: #555;\r\n    color: #f1f1f1;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paging/paging.component.html":
/***/ (function(module, exports) {

module.exports = "<app-i18n></app-i18n>\r\n\r\n<body class = \"colorhome\"> \r\n<div style=\"margin: auto; max-width: 1000px; margin-bottom: 50px;\" class=\"colorhome\">\r\n    <br/><data-table id=\"persons-grid\"\r\n        headerTitle=\"Employees\"\r\n                [pagination_limit]=\"true\"\r\n        [items]=\"items\"\r\n        [itemCount]=\"itemCount\"\r\n        (reload)=\"reloadItems($event)\"\r\n\r\n        (rowClick)=\"rowClick($event)\"\r\n        (rowDoubleClick)=\"rowDoubleClick($event)\"\r\n        [rowTooltip]=\"rowTooltip\"\r\n        id = \"header\" >\r\n        <data-table-column\r\n            [property]=\"'name'\"\r\n            [header]=\"'Name'\"\r\n            [sortable]=\"true\"\r\n            [resizable]=\"true\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'date'\"\r\n            [header]=\"'Date'\"\r\n            [sortable]=\"true\">\r\n            <ng-template #dataTableCell let-item=\"item\">\r\n                <span>{{item.date | date:'yyyy-MM-dd'}}</span>\r\n            </ng-template>\r\n        </data-table-column>\r\n        <data-table-column\r\n            property=\"phoneNumber\"\r\n            header=\"Phone number\"\r\n            width=\"150px\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'jobTitle'\"\r\n            [header]=\"'Job title'\"\r\n            [visible]=\"false\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'active'\"\r\n            [header]=\"'Active'\"\r\n            [width]=\"100\"\r\n            [resizable]=\"true\">\r\n            <ng-template #dataTableHeader let-item=\"item\">\r\n                <span style=\"color: rgb(232, 0, 0)\">Active</span>\r\n            </ng-template>\r\n            <ng-template #dataTableCell let-item=\"item\">\r\n                <span style=\"color: grey\">\r\n                <span class=\"glyphicon glyphicon-ok\" *ngIf=\"item.active\"></span>\r\n                <span class=\"glyphicon glyphicon-remove\" *ngIf=\"!item.active\"></span>\r\n                </span>\r\n            </ng-template>\r\n        </data-table-column>\r\n    </data-table>\r\n</div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/paging/paging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table_src_index__ = __webpack_require__("../../../../angular-4-data-table/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_table_demo1_data__ = __webpack_require__("../../../../../src/app/paging/data-table-demo1-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagingComponent = (function () {
    function PagingComponent() {
        var _this = this;
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table_src_index__["b" /* DataTableResource */](__WEBPACK_IMPORTED_MODULE_2__data_table_demo1_data__["a" /* default */]);
        this.items = [];
        this.itemCount = 0;
        this.itemResource.count().then(function (count) { return _this.itemCount = count; });
    }
    PagingComponent.prototype.reloadItems = function (params) {
        var _this = this;
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    // special properties:
    PagingComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    PagingComponent.prototype.rowDoubleClick = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    };
    PagingComponent.prototype.rowTooltip = function (item) { return item.jobTitle; };
    return PagingComponent;
}());
PagingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paging',
        template: __webpack_require__("../../../../../src/app/paging/paging.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paging/paging.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PagingComponent);

//# sourceMappingURL=paging.component.js.map

/***/ }),

/***/ "../../../../../src/app/userinfo/userinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userinfo/userinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<app-i18n></app-i18n>\r\n      \r\n        <div class=\"colorhome\">\r\n      <p>{{'You logged in with JWT'| translate}}</p>\r\n      <div >\r\n          {{'Users from secure api end point:'|translate}}\r\n            <br/>  {{users.email}}\r\n            <br/>   {{users.name}}\r\n            <br/>      {{users.tokens}}\r\n            <br/> {{users.rules.dept}}\r\n            <br/> {{users.rules.position}}\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/userinfo/userinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserinfoComponent = (function () {
    function UserinfoComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.users = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.users);
    }
    UserinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            console.log("=============" + users);
        });
    };
    return UserinfoComponent;
}());
UserinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userinfo',
        template: __webpack_require__("../../../../../src/app/userinfo/userinfo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userinfo/userinfo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* UserService */]) === "function" && _a || Object])
], UserinfoComponent);

var _a;
//# sourceMappingURL=userinfo.component.js.map

/***/ }),

/***/ "../../../../../src/di.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SwalDefaults; });
/* harmony export (immutable) */ __webpack_exports__["a"] = swalDefaultsProvider;

var SwalDefaults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('SwalDefaults');
function swalDefaultsProvider(options) {
    if (options === void 0) { options = {}; }
    return {
        provide: SwalDefaults,
        useValue: options
    };
}
//# sourceMappingURL=di.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swal_partial_targets__ = __webpack_require__("../../../../../src/swal-partial-targets.ts");
/* unused harmony reexport SwalPartialTargets */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swal_events__ = __webpack_require__("../../../../../src/swal-events.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swal_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swal_events__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swal_component__ = __webpack_require__("../../../../../src/swal.component.ts");
/* unused harmony reexport SwalComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swal_directive__ = __webpack_require__("../../../../../src/swal.directive.ts");
/* unused harmony reexport SwalDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swal_partial_directive__ = __webpack_require__("../../../../../src/swal-partial.directive.ts");
/* unused harmony reexport SwalPartialDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sweetalert2_module__ = __webpack_require__("../../../../../src/sweetalert2.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlert2Module", function() { return __WEBPACK_IMPORTED_MODULE_5__sweetalert2_module__["a"]; });






//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ "../../../../../src/swal-events.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=swal-events.js.map

/***/ }),

/***/ "../../../../../src/swal-partial-targets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwalPartialTargets; });

/**
 * Represents an object of targets for <swal> partials (use with *swalPartial directive).
 * We must use thunks to access the swal.* functions listed below, because they get created after the first modal is
 * shown, so this object lets us reference those functions safely and in a statically-typed manner.
 */
var SwalPartialTargets = (function () {
    function SwalPartialTargets() {
        this.title = function () { return __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.getTitle(); };
        this.content = function () { return __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.getContent(); };
        /**
         * @deprecated Will be removed in the next major version, please use {@link SwalPartialTargets#actions} instead.
         */
        this.buttonsWrapper = function () { return __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.getButtonsWrapper(); };
        this.actions = function () { return __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.getActions(); };
        this.confirmButton = function () { return __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.getConfirmButton(); };
        this.cancelButton = function () { return __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.getCancelButton(); };
        this.footer = function () { return __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.getFooter(); };
    }
    return SwalPartialTargets;
}());

//# sourceMappingURL=swal-partial-targets.js.map

/***/ }),

/***/ "../../../../../src/swal-partial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwalPartialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * @internal
 * Holds a consumer's Angular template and displays it on a Sweet Alert.
 * See SwalPartialDirective for info about the covered feature.
 */
var SwalPartialComponent = (function () {
    function SwalPartialComponent() {
    }
    return SwalPartialComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], SwalPartialComponent.prototype, "template", void 0);
SwalPartialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: '<ng-container *ngTemplateOutlet="template"></ng-container>',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], SwalPartialComponent);

var _a;
//# sourceMappingURL=swal-partial.component.js.map

/***/ }),

/***/ "../../../../../src/swal-partial.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swal_partial_targets__ = __webpack_require__("../../../../../src/swal-partial-targets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swal_partial_component__ = __webpack_require__("../../../../../src/swal-partial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swal_component__ = __webpack_require__("../../../../../src/swal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwalPartialDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/**
 * A structural directive that lets you use Angular templates inside of Sweet Alerts.
 * There are different targetable zones in a Sweet Alert: title, content, confirmButton, cancelButton, buttonsWrapper.
 * The default target is the content zone.
 *
 * Usage in your component's TypeScript code-behind (if you use another target than "content"):
 *
 *     @Component({ ... })
 *     export class MyComponent {
 *         public constructor(public readonly swalTargets: SwalPartialTargets) {
 *         }
 *     }
 *
 * Usage in the template:
 *
 *     <swal title="Fill the form" (confirm)="confirmHandler()">
 *         <!-- This form will be displayed as the alert main content
 *              Targets the alert's main content zone by default -->
 *         <form *swalPartial [formControl]="myForm">
 *             ...
 *         </form>
 *
 *         <!-- This targets the confirm button's inner content
 *              Notice the usage of ng-container to avoid creating an useless DOM element inside the button -->
 *         <ng-container *swalPartial="swalTargets.confirmButton">
 *              Send ({{ secondsLeft }} seconds left)
 *         </ng-container>
 *     <swal>
 */
var SwalPartialDirective = (function () {
    function SwalPartialDirective(resolver, injector, app, templateRef, swalTargets, swalComponent) {
        this.resolver = resolver;
        this.injector = injector;
        this.app = app;
        this.templateRef = templateRef;
        this.swalTargets = swalTargets;
        this.swalComponent = swalComponent;
    }
    /**
     * Subscribes to the the Sweet Alert appearance/disappearance to create/destroy the SwalPartialComponent that will
     * receive the consumer's template.
     */
    SwalPartialDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.beforeOpenSubscription = this.swalComponent.beforeOpen.asObservable().subscribe(function () {
            //=> Create the SwalPartialComponent on the target DOM node in the Sweet Alert
            var targetEl = _this.swalPartial ? _this.swalPartial() : _this.swalTargets.content();
            var factory = _this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__swal_partial_component__["a" /* SwalPartialComponent */]);
            _this.partialRef = factory.create(_this.injector, [], targetEl);
            //=> Apply the consumer's template on the component
            _this.partialRef.instance.template = _this.templateRef;
            //=> Make the Angular app aware of that detached view so change detection works
            _this.app.attachView(_this.partialRef.hostView);
        });
        this.closeSubscription = this.swalComponent.close.asObservable().subscribe(function () {
            //=> Detach the partial component from the app and destroy it
            _this.app.detachView(_this.partialRef.hostView);
            _this.partialRef.destroy();
        });
    };
    /**
     * Unsubscribes from the Sweet Alert appearance/disappearance.
     */
    SwalPartialDirective.prototype.ngOnDestroy = function () {
        this.beforeOpenSubscription.unsubscribe();
        this.closeSubscription.unsubscribe();
    };
    return SwalPartialDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], SwalPartialDirective.prototype, "swalPartial", void 0);
SwalPartialDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[swalPartial]'
    }),
    __param(5, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__swal_partial_targets__["a" /* SwalPartialTargets */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swal_partial_targets__["a" /* SwalPartialTargets */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__swal_component__["a" /* SwalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__swal_component__["a" /* SwalComponent */]) === "function" && _f || Object])
], SwalPartialDirective);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=swal-partial.directive.js.map

/***/ }),

/***/ "../../../../../src/swal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__di__ = __webpack_require__("../../../../../src/di.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwalComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * <swal> component. See the README.md for usage.
 *
 * It contains a bunch of @Inputs that have a perfect 1:1 mapping with SweetAlert2 options.
 * Their types are directly coming from SweetAlert2 types defintitions, meaning that ngx-sweetalert2 is tightly coupled
 * to SweetAlert2, but also is type-safe.
 *
 * /!\ Some SweetAlert options aren't @Inputs but @Outputs: onBeforeOpen, onOpen, and onClose (without "on*" prefix).
 *     However, preConfirm and inputValidtor are still @Inputs because there are not event handlers, there can't be
 *     multiple listeners and we need the Promise they must return.
 *
 * /!\ You can notice that the SweetAlert2 `useRejections` and `expectRejections` are the only one to not have
 *     an @Input(). That's because they are deprecated and not using the default value of these parameters leads to
 *     clunky control flow. They are supported (use [options]="{}"), but please don't use them.
 */
var SwalComponent = (function () {
    function SwalComponent(defaultSwalOptions) {
        this.defaultSwalOptions = defaultSwalOptions;
        /**
         * Emits a BeforeOpenEvent when the modal DOM element has been created.
         * Useful to perform DOM mutations before the modal is shown.
         */
        this.beforeOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Emits an OpenEvent when the modal is shown.
         */
        this.open = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Emits a CloseEvent when modal get closed.
         */
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Emits when the user clicks "Confirm".
         * Bears a value when using "input", resolved "preConfirm", etc.
         *
         * Example:
         *     public handleConfirm(email: string): void {
         *         // ... save user email
         *     }
         */
        this.confirm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Emits when the user clicks "Cancel" (or dismisses the modal by any other way).
         * By default, it will emit a string representing the reason for which the SweetAlert has been closed, or the
         * value of a rejected "preConfirm".
         *
         * Example:
         *     public handleCancel(reason: string): void {
         *         // reason can be 'cancel', 'overlay', 'close', and 'timer'
         *         // ... do something
         *     }
         */
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nativeSwal = __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a;
        this.isCurrentlyShown = false;
        this.touchedProps = new Set();
        this.markTouched = this.touchedProps.add.bind(this.touchedProps);
        //=> Force `this` scope of show() on this component
        //   Useful for doing things like (click)="mySwal.show()".
        this.show = this.show.bind(this);
    }
    Object.defineProperty(SwalComponent.prototype, "options", {
        get: function () {
            var _this = this;
            var options = {};
            //=> We will compute the options object based on the option keys that are known to have changed.
            // That avoids passing a gigantic object to SweetAlert2, making debugging easier and potentially avoiding
            // side effects.
            this.touchedProps.forEach(function (prop) {
                options[prop] = _this[prop];
            });
            return options;
        },
        /**
         * An object of SweetAlert2 native options, useful if:
         *  - you don't want to use the @Inputs for practical/philosophical reasons ;
         *  - there are missing @Inputs because ngx-sweetalert2 isn't up-to-date with SweetAlert2's latest changes.
         *
         * /!\ Be aware that the options defined in this object will override the @Inputs of the same name.
         */
        set: function (options) {
            Object.assign(this, options);
            Object.keys(options).forEach(this.markTouched);
        },
        enumerable: true,
        configurable: true
    });
    SwalComponent.prototype.ngOnChanges = function (changes) {
        Object.keys(changes)
            .filter(function (prop) { return prop !== 'options'; })
            .forEach(this.markTouched);
    };
    SwalComponent.prototype.ngOnDestroy = function () {
        if (this.isCurrentlyShown) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a.close();
        }
    };
    /**
     * Shows the SweetAlert.
     *
     * Returns the SweetAlert2 promise for convenience and use in code behind templates.
     * Otherwise, (confirm)="myHandler($event)" and (cancel)="myHandler($event)" can be used in templates.
     */
    SwalComponent.prototype.show = function () {
        var _this = this;
        //=> Build the SweetAlert2 options
        var options = __assign({}, this.defaultSwalOptions, this.options, { 
            //=> Handle modal lifecycle events
            onBeforeOpen: function (modalElement) {
                _this.beforeOpen.emit({ modalElement: modalElement });
            }, onOpen: function (modalElement) {
                _this.isCurrentlyShown = true;
                _this.open.emit({ modalElement: modalElement });
            }, onClose: function (modalElement) {
                _this.isCurrentlyShown = false;
                _this.close.emit({ modalElement: modalElement });
            } });
        //=> Show the Swal!
        var promise = __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()(options);
        //=> Handle (confirm) and (cancel) @Outputs
        // tslint:disable-next-line:no-string-literal
        var useRejections = options.useRejections;
        promise.then(function (result) {
            if (useRejections) {
                _this.confirm.emit(result);
            }
            else if ('value' in result) {
                _this.confirm.emit(result.value);
            }
            else {
                _this.cancel.emit(result.dismiss);
            }
        }, function (err) {
            if (useRejections) {
                _this.cancel.emit(err);
            }
        });
        //=> Return the unaltered promise
        return promise;
    };
    return SwalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "titleText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "html", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "footer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "backdrop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "toast", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "target", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "input", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "padding", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "background", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "grow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "customClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "timer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "animation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "allowOutsideClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "allowEscapeKey", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "allowEnterKey", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "showConfirmButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "showCancelButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "confirmButtonText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "cancelButtonText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "confirmButtonColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "cancelButtonColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "confirmButtonClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "cancelButtonClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "confirmButtonAriaLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "cancelButtonAriaLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "buttonsStyling", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "reverseButtons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "focusConfirm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "focusCancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "showCloseButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "closeButtonAriaLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "showLoaderOnConfirm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "preConfirm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "imageUrl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "imageWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "imageHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "imageAlt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "imageClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "inputPlaceholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "inputValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "inputOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "inputAutoTrim", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "inputAttributes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "inputValidator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "inputClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "progressSteps", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "currentProgressStep", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "progressStepsDistance", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "beforeOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "open", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "close", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "confirm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SwalComponent.prototype, "cancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["SweetAlertOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["SweetAlertOptions"]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["SweetAlertOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["SweetAlertOptions"]) === "function" && _b || Object])
], SwalComponent.prototype, "options", null);
SwalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'swal',
        template: '',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__di__["b" /* SwalDefaults */])),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["SweetAlertOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["SweetAlertOptions"]) === "function" && _c || Object])
], SwalComponent);

var _a, _b, _c;
//# sourceMappingURL=swal.component.js.map

/***/ }),

/***/ "../../../../../src/swal.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swal_component__ = __webpack_require__("../../../../../src/swal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwalDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * [swal] directive. It takes a value that defines the Sweet Alert and can be of three types:
 *
 * 1) A simple array of two or three strings defining [title, text, type] - the type being optional, ex:
 *
 *    <button [swal]="['Title', 'Text']">Click me</button>
 *
 * 2) A native SweetAlert2 options object, ex:
 *
 *    <button [swal]="{ title: 'Title', text: 'Text' }">Click me</button>
 *
 * 3) A reference to an existing SwalComponent instance for more advanced uses, ex:
 *
 *    <button [swal]="mySwal">Click me</button>
 *    <swal #mySwal title="Title" text="Text"></swal>
 */
var SwalDirective = (function () {
    function SwalDirective(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        /**
         * Emits when the user clicks "Confirm".
         * Bears a value when using "input", resolved "preConfirm", etc.
         *
         * Example:
         *     public handleConfirm(email: string): void {
         *         // ... save user email
         *     }
         */
        this.confirm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Emits when the user clicks "Cancel" (or dismisses the modal by any other way).
         * By default, it will emit a string representing the reason for which the SweetAlert has been closed, or the
         * value of a rejected "preConfirm".
         *
         * Example:
         *     public handleCancel(reason: string): void {
         *         // reason can be 'cancel', 'overlay', 'close', and 'timer'
         *         // ... do something
         *     }
         */
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(SwalDirective.prototype, "swal", {
        /**
         * SweetAlert2 options or a SwalComponent instance.
         * See the class doc block for more informations.
         */
        set: function (options) {
            if (options instanceof __WEBPACK_IMPORTED_MODULE_2__swal_component__["a" /* SwalComponent */]) {
                this.swalInstance = options;
            }
            else if (Array.isArray(options)) {
                this.swalOptions = __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a.argsToParams(options);
            }
            else {
                this.swalOptions = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * OnInit lifecycle handler.
     * Creates a SwalComponent instance if the user didn't provided one and binds on that component (confirm) and
     * (cancel) outputs to reemit on the directive.
     */
    SwalDirective.prototype.ngOnInit = function () {
        if (!this.swalInstance) {
            var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__swal_component__["a" /* SwalComponent */]);
            this.swalRef = this.viewContainerRef.createComponent(factory);
            this.swalInstance = this.swalRef.instance;
        }
    };
    /**
     * OnDestroy lifecycle handler.
     * Destroys the dynamically-created SwalComponent and unsubscribes from that component's (confirm) and (cancel).
     */
    SwalDirective.prototype.ngOnDestroy = function () {
        if (this.swalRef) {
            this.swalRef.destroy();
        }
    };
    /**
     * Click handler.
     * The directive listens for onclick events on its host element.
     * When this happens, it shows the <swal> attached to this directive.
     */
    SwalDirective.prototype.onHostClicked = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (this.swalOptions) {
            this.swalInstance.options = this.swalOptions;
        }
        var confirmSub = this.swalInstance.confirm.asObservable().subscribe(function (v) { return _this.confirm.emit(v); });
        var cancelSub = this.swalInstance.cancel.asObservable().subscribe(function (v) { return _this.cancel.emit(v); });
        this.swalInstance.show().then(unsubscribe);
        function unsubscribe() {
            confirmSub.unsubscribe();
            cancelSub.unsubscribe();
        }
    };
    return SwalDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SwalDirective.prototype, "swal", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SwalDirective.prototype, "confirm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SwalDirective.prototype, "cancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SwalDirective.prototype, "onHostClicked", null);
SwalDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[swal]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _b || Object])
], SwalDirective);

var _c, _d, _e, _f, _a, _b;
//# sourceMappingURL=swal.directive.js.map

/***/ }),

/***/ "../../../../../src/sweetalert2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__di__ = __webpack_require__("../../../../../src/di.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swal_partial_targets__ = __webpack_require__("../../../../../src/swal-partial-targets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swal_partial_component__ = __webpack_require__("../../../../../src/swal-partial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swal_partial_directive__ = __webpack_require__("../../../../../src/swal-partial.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swal_component__ = __webpack_require__("../../../../../src/swal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swal_directive__ = __webpack_require__("../../../../../src/swal.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SweetAlert2Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SweetAlert2Module = SweetAlert2Module_1 = (function () {
    function SweetAlert2Module() {
    }
    SweetAlert2Module.forRoot = function (defaultSwalOptions) {
        return {
            ngModule: SweetAlert2Module_1,
            providers: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__di__["a" /* swalDefaultsProvider */])(defaultSwalOptions)]
        };
    };
    return SweetAlert2Module;
}());
SweetAlert2Module = SweetAlert2Module_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__swal_component__["a" /* SwalComponent */], __WEBPACK_IMPORTED_MODULE_5__swal_partial_directive__["a" /* SwalPartialDirective */], __WEBPACK_IMPORTED_MODULE_4__swal_partial_component__["a" /* SwalPartialComponent */],
            __WEBPACK_IMPORTED_MODULE_7__swal_directive__["a" /* SwalDirective */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__swal_partial_targets__["a" /* SwalPartialTargets */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__swal_component__["a" /* SwalComponent */], __WEBPACK_IMPORTED_MODULE_5__swal_partial_directive__["a" /* SwalPartialDirective */],
            __WEBPACK_IMPORTED_MODULE_7__swal_directive__["a" /* SwalDirective */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__swal_component__["a" /* SwalComponent */], __WEBPACK_IMPORTED_MODULE_4__swal_partial_component__["a" /* SwalPartialComponent */]
        ]
    })
], SweetAlert2Module);

var SweetAlert2Module_1;
//# sourceMappingURL=sweetalert2.module.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map