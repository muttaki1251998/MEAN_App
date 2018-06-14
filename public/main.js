(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n    <br>\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>    \n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authGuard/auth.guard */ "./src/app/authGuard/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: "dashboard", component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
];
function tokenGetter() {
    return localStorage.getItem('id_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__["FlashMessagesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:3001'],
                        blacklistedRoutes: ['localhost:3001/auth/']
                    }
                })
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authGuard/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/authGuard/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"content-wrapper\">\n    <div class=\"container-fluid\">\n      <!-- Breadcrumbs-->\n      \n      <!-- Icon Cards-->\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-primary o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fa fa-fw fa-comments\"></i>\n              </div>\n              <div class=\"mr-5\">26 New Messages!</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fa fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-warning o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fa fa-fw fa-list\"></i>\n              </div>\n              <div class=\"mr-5\">11 New Tasks!</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fa fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-success o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fa fa-fw fa-shopping-cart\"></i>\n              </div>\n              <div class=\"mr-5\">123 New Orders!</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fa fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-danger o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fa fa-fw fa-support\"></i>\n              </div>\n              <div class=\"mr-5\">13 New Tickets!</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fa fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <!-- Example Bar Chart Card-->\n          <div class=\"card mb-3\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-bar-chart\"></i> Bar Chart Example</div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-sm-8 my-auto\">\n                  <canvas id=\"myBarChart\" width=\"100\" height=\"50\"></canvas>\n                </div>\n                <div class=\"col-sm-4 text-center my-auto\">\n                  <div class=\"h4 mb-0 text-primary\">$34,693</div>\n                  <div class=\"small text-muted\">YTD Revenue</div>\n                  <hr>\n                  <div class=\"h4 mb-0 text-warning\">$18,474</div>\n                  <div class=\"small text-muted\">YTD Expenses</div>\n                  <hr>\n                  <div class=\"h4 mb-0 text-success\">$16,219</div>\n                  <div class=\"small text-muted\">YTD Margin</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div>\n          </div>\n          <!-- Card Columns Example Social Feed-->\n          <div class=\"mb-0 mt-4\">\n            <i class=\"fa fa-newspaper-o\"></i> News Feed</div>\n          <hr class=\"mt-2\">\n          <div class=\"card-columns\">\n            <!-- Example Social Card-->\n            <div class=\"card mb-3\">\n              <a href=\"#\">\n                <img class=\"card-img-top img-fluid w-100\" src=\"https://unsplash.it/700/450?image=610\" alt=\"\">\n              </a>\n              <div class=\"card-body\">\n                <h6 class=\"card-title mb-1\"><a href=\"#\">David Miller</a></h6>\n                <p class=\"card-text small\">These waves are looking pretty good today!\n                  <a href=\"#\">#surfsup</a>\n                </p>\n              </div>\n              <hr class=\"my-0\">\n              <div class=\"card-body py-2 small\">\n                <a class=\"mr-3 d-inline-block\" href=\"#\">\n                  <i class=\"fa fa-fw fa-thumbs-up\"></i>Like</a>\n                <a class=\"mr-3 d-inline-block\" href=\"#\">\n                  <i class=\"fa fa-fw fa-comment\"></i>Comment</a>\n                <a class=\"d-inline-block\" href=\"#\">\n                  <i class=\"fa fa-fw fa-share\"></i>Share</a>\n              </div>\n              <hr class=\"my-0\">\n              <div class=\"card-body small bg-faded\">\n                <div class=\"media\">\n                  <img class=\"d-flex mr-3\" src=\"http://placehold.it/45x45\" alt=\"\">\n                  <div class=\"media-body\">\n                    <h6 class=\"mt-0 mb-1\"><a href=\"#\">John Smith</a></h6>Very nice! I wish I was there! That looks amazing!\n                    <ul class=\"list-inline mb-0\">\n                      <li class=\"list-inline-item\">\n                        <a href=\"#\">Like</a>\n                      </li>\n                      <li class=\"list-inline-item\">·</li>\n                      <li class=\"list-inline-item\">\n                        <a href=\"#\">Reply</a>\n                      </li>\n                    </ul>\n                    <div class=\"media mt-3\">\n                      <a class=\"d-flex pr-3\" href=\"#\">\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\n                      </a>\n                      <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\"><a href=\"#\">David Miller</a></h6>Next time for sure!\n                        <ul class=\"list-inline mb-0\">\n                          <li class=\"list-inline-item\">\n                            <a href=\"#\">Like</a>\n                          </li>\n                          <li class=\"list-inline-item\">·</li>\n                          <li class=\"list-inline-item\">\n                            <a href=\"#\">Reply</a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-footer small text-muted\">Posted 32 mins ago</div>\n            </div>\n            <!-- Example Social Card-->\n            <div class=\"card mb-3\">\n              <a href=\"#\">\n                <img class=\"card-img-top img-fluid w-100\" src=\"https://unsplash.it/700/450?image=180\" alt=\"\">\n              </a>\n              <div class=\"card-body\">\n                <h6 class=\"card-title mb-1\"><a href=\"#\">John Smith</a></h6>\n                <p class=\"card-text small\">Another day at the office...\n                  <a href=\"#\">#workinghardorhardlyworking</a>\n                </p>\n              </div>\n              <hr class=\"my-0\">\n            \n              <hr class=\"my-0\">\n              <div class=\"card-body small bg-faded\">\n                <div class=\"media\">\n                  <img class=\"d-flex mr-3\" src=\"http://placehold.it/45x45\" alt=\"\">\n                  <div class=\"media-body\">\n                    <h6 class=\"mt-0 mb-1\"><a href=\"#\">Jessy Lucas</a></h6>Where did you get that camera?! I want one!\n                    <ul class=\"list-inline mb-0\">\n                      <li class=\"list-inline-item\">\n                        <a href=\"#\">Like</a>\n                      </li>\n                      <li class=\"list-inline-item\">·</li>\n                      <li class=\"list-inline-item\">\n                        <a href=\"#\">Reply</a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-footer small text-muted\">Posted 46 mins ago</div>\n            </div>\n            <!-- Example Social Card-->\n            <div class=\"card mb-3\">\n              <a href=\"#\">\n                <img class=\"card-img-top img-fluid w-100\" src=\"https://unsplash.it/700/450?image=281\" alt=\"\">\n              </a>\n              <div class=\"card-body\">\n                <h6 class=\"card-title mb-1\"><a href=\"#\">Jeffery Wellings</a></h6>\n                <p class=\"card-text small\">Nice shot from the skate park!\n                  <a href=\"#\">#kickflip</a>\n                  <a href=\"#\">#holdmybeer</a>\n                  <a href=\"#\">#igotthis</a>\n                </p>\n              </div>\n              <hr class=\"my-0\">\n              <div class=\"card-body py-2 small\">\n                <a class=\"mr-3 d-inline-block\" href=\"#\">\n                  <i class=\"fa fa-fw fa-thumbs-up\"></i>Like</a>\n                <a class=\"mr-3 d-inline-block\" href=\"#\">\n                  <i class=\"fa fa-fw fa-comment\"></i>Comment</a>\n                <a class=\"d-inline-block\" href=\"#\">\n                  <i class=\"fa fa-fw fa-share\"></i>Share</a>\n              </div>\n              <div class=\"card-footer small text-muted\">Posted 1 hr ago</div>\n            </div>\n            <!-- Example Social Card-->\n            <div class=\"card mb-3\">\n              <a href=\"#\">\n                <img class=\"card-img-top img-fluid w-100\" src=\"https://unsplash.it/700/450?image=185\" alt=\"\">\n              </a>\n              <div class=\"card-body\">\n                <h6 class=\"card-title mb-1\"><a href=\"#\">David Miller</a></h6>\n                <p class=\"card-text small\">It's hot, and I might be lost...\n                  <a href=\"#\">#desert</a>\n                  <a href=\"#\">#water</a>\n                  <a href=\"#\">#anyonehavesomewater</a>\n                  <a href=\"#\">#noreally</a>\n                  <a href=\"#\">#thirsty</a>\n                  <a href=\"#\">#dehydration</a>\n                </p>\n              </div>\n              <hr class=\"my-0\">\n              <div class=\"card-body py-2 small\">\n                <a class=\"mr-3 d-inline-block\" href=\"#\">\n                  <i class=\"fa fa-fw fa-thumbs-up\"></i>Like</a>\n                <a class=\"mr-3 d-inline-block\" href=\"#\">\n                  <i class=\"fa fa-fw fa-comment\"></i>Comment</a>\n                <a class=\"d-inline-block\" href=\"#\">\n                  <i class=\"fa fa-fw fa-share\"></i>Share</a>\n              </div>\n              <hr class=\"my-0\">\n              <div class=\"card-body small bg-faded\">\n                <div class=\"media\">\n                  <img class=\"d-flex mr-3\" src=\"http://placehold.it/45x45\" alt=\"\">\n                  <div class=\"media-body\">\n                    <h6 class=\"mt-0 mb-1\"><a href=\"#\">John Smith</a></h6>The oasis is a mile that way, or is that just a mirage?\n                    <ul class=\"list-inline mb-0\">\n                      <li class=\"list-inline-item\">\n                        <a href=\"#\">Like</a>\n                      </li>\n                      <li class=\"list-inline-item\">·</li>\n                      <li class=\"list-inline-item\">\n                        <a href=\"#\">Reply</a>\n                      </li>\n                    </ul>\n                   \n                  </div>\n                </div>\n              </div>\n              <div class=\"card-footer small text-muted\">Posted yesterday</div>\n            </div>\n          </div>\n          <!-- /Card Columns-->\n        </div>\n        <div class=\"col-lg-4\">\n          <!-- Example Pie Chart Card-->\n          <div class=\"card mb-3\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-pie-chart\"></i> Pie Chart Example</div>\n            <div class=\"card-body\">\n              <canvas id=\"myPieChart\" width=\"100%\" height=\"100\"></canvas>\n            </div>\n            <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div>\n          </div>\n          <!-- Example Notifications Card-->\n          <div class=\"card mb-3\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-bell-o\"></i> Feed Example</div>\n            <div class=\"list-group list-group-flush small\">\n              <a class=\"list-group-item list-group-item-action\" href=\"#\">\n                <div class=\"media\">\n                  <img class=\"d-flex mr-3 rounded-circle\" src=\"http://placehold.it/45x45\" alt=\"\">\n                  <div class=\"media-body\">\n                    <strong>David Miller</strong>posted a new article to\n                    <strong>David Miller Website</strong>.\n                    <div class=\"text-muted smaller\">Today at 5:43 PM - 5m ago</div>\n                  </div>\n                </div>\n              </a>\n              <a class=\"list-group-item list-group-item-action\" href=\"#\">\n                <div class=\"media\">\n                  <img class=\"d-flex mr-3 rounded-circle\" src=\"http://placehold.it/45x45\" alt=\"\">\n                  <div class=\"media-body\">\n                    <strong>Samantha King</strong>sent you a new message!\n                    <div class=\"text-muted smaller\">Today at 4:37 PM - 1hr ago</div>\n                  </div>\n                </div>\n              </a>\n              <a class=\"list-group-item list-group-item-action\" href=\"#\">\n                <div class=\"media\">\n                  <img class=\"d-flex mr-3 rounded-circle\" src=\"http://placehold.it/45x45\" alt=\"\">\n                  <div class=\"media-body\">\n                    <strong>Jeffery Wellings</strong>added a new photo to the album\n                    <strong>Beach</strong>.\n                    <div class=\"text-muted smaller\">Today at 4:31 PM - 1hr ago</div>\n                  </div>\n                </div>\n              </a>\n              <a class=\"list-group-item list-group-item-action\" href=\"#\">\n                <div class=\"media\">\n                  <img class=\"d-flex mr-3 rounded-circle\" src=\"http://placehold.it/45x45\" alt=\"\">\n                  <div class=\"media-body\">\n                    <i class=\"fa fa-code-fork\"></i>\n                    <strong>Monica Dennis</strong>forked the\n                    <strong>startbootstrap-sb-admin</strong>repository on\n                    <strong>GitHub</strong>.\n                    <div class=\"text-muted smaller\">Today at 3:54 PM - 2hrs ago</div>\n                  </div>\n                </div>\n              </a>\n              <a class=\"list-group-item list-group-item-action\" href=\"#\">View all activity...</a>\n            </div>\n            <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div>\n          </div>\n        </div>\n      </div>\n    \n    </div>\n    <!-- /.container-fluid-->\n    <!-- /.content-wrapper-->\n    <footer class=\"sticky-footer\">\n      <div class=\"container\">\n        <div class=\"text-center\">\n          <span>Copyright © Muttaki Khan</span>\n        </div>\n      </div>\n    </footer>\n\n  \n\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body{\n    height: 100%;  \n    margin: 0;\n    padding: 0;      \n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 id=\"header\" class=\"align-middle\">Ask anonymously!</h1>\n  <p>Spill it out || Let it go || Burn it dwon</p>\n  <a [routerLink] = \"['/register']\"> \n    <input  class=\"btn btn-primary homeBtn\" type=\"submit\" value=\"Get Started\" style=\"text-align: center\">\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_router) {
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\n    color: rgb(57, 54, 82);\n    font-weight: bold;\n}\n.form-control{\n    width: 40%;\n    border-radius: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit) = \"OnLogin()\">\n            \n    <div class=\"page-header\"><h3>Login</h3></div>\n\n  <div class=\"form-group\">      \n      <label>Username</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)] = \"username\" name=\"username\"><br>\n      <label>Password</label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)] = \"password\" name=\"password\"><br>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"><br>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMsg, router) {
        this.authService = authService;
        this.flashMsg = flashMsg;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.OnLogin = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMsg.show(("Welcome to TrueHeart"), { cssClass: "alert-success", timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMsg.show(("Invalid credentials"), { cssClass: "alert-danger", timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"user\">\n  <h2 class=\"pager-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\n    color: rgb(57, 54, 82);\n    font-weight: bold;\n}\n.form-control{\n    width: 40%;\n    border-radius: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"registerBody\">\n    <div class=\"container-fluid registerBody\">\n        <form (submit) = \"OnRegister()\">\n            \n            <div class=\"page-header\"><h2>Registration</h2></div>\n\n          <div class=\"form-group\">\n              <label>Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)] = \"name\" name=\"name\"><br>\n              <label>Username</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)] = \"username\" name=\"username\"><br>\n              <label>Email</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)] = \"email\" name=\"email\"><br>\n              <label>Password</label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)] = \"password\" name=\"password\"><br>\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"><br>\n          </div>\n        </form>\n      </div>\n    </div>\n\n\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_validateService, _flashMsg, _authService, _routers) {
        this._validateService = _validateService;
        this._flashMsg = _flashMsg;
        this._authService = _authService;
        this._routers = _routers;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.OnRegister = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Verify user
        if (!this._validateService.validateRegister(user)) {
            this._flashMsg.show(("Fill in all the fields"), { cssClass: "alert-danger", timeout: 3000 });
            return false;
        }
        // Verify email
        if (!this._validateService.validateEmail(user.email)) {
            this._flashMsg.show(("Enter a valid email"), { cssClass: "alert-danger", timeout: 3000 });
            return false;
        }
        // Register user
        this._authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this._flashMsg.show(("You have been registered! Please Log in."), { cssClass: "alert-success", timeout: 3000 });
                _this._routers.navigate(['/login']);
            }
            else {
                _this._flashMsg.show(("Something went wrong. Please try again"), { cssClass: "alert-danger", timeout: 3000 });
                _this._routers.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\n    background-color: rgb(57, 54, 82);\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: #fff\">TrueHeart</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink] = \"['/']\" >Home <span class=\"sr-only\">(current)</span></a>\n      </li>          \n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n\n        <li *ngIf = \"_authService.loggedIn()\" class=\"nav-item\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink] = \"['/dashboard']\" >Dashboard</a>\n        </li>\n        <li *ngIf = \"_authService.loggedIn()\" class=\"nav-item\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink] = \"['/profile']\" >Profile</a>\n        </li>\n\n        <li *ngIf = \"!_authService.loggedIn()\" class=\"nav-item\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink] = \"['/register']\" >Sign Up</a>\n        </li> \n        <li *ngIf = \"!_authService.loggedIn()\" class=\"nav-item\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink] = \"['/login']\" >Log In</a>\n        </li> \n        <li class=\"nav-item\" *ngIf = \"_authService.loggedIn()\">\n            <a href=\"#\" class=\"nav-link\" (click) = \"onLogoutClick()\">Log Out</a>\n        </li>\n    </ul>    \n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_authService, _flashMsg, _router) {
        this._authService = _authService;
        this._flashMsg = _flashMsg;
        this._router = _router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this._authService.logout();
        this._flashMsg.show("You have been logged out", { cssClass: "alert-success", timeout: 5000 });
        this._router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { tokenNotExpired } from 'angular2-jwt';

var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post("users/register", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post("users/authenticate", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get("users/profile", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.id_token == undefined) {
            console.log("id Undefined");
        }
        else {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
            //console.log(helper.isTokenExpired(localStorage.id_token));
            return !helper.isTokenExpired(localStorage.id_token);
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username == undefined || user.name == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/muttaki/Drives/Nodejs/MeanApp/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map