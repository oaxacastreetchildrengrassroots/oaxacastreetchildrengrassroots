webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutpage/aboutpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aboutpage/aboutpage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  aboutpage works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/aboutpage/aboutpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutpageComponent = /** @class */ (function () {
    function AboutpageComponent() {
    }
    AboutpageComponent.prototype.ngOnInit = function () {
    };
    AboutpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-aboutpage',
            template: __webpack_require__("./src/app/aboutpage/aboutpage.component.html"),
            styles: [__webpack_require__("./src/app/aboutpage/aboutpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutpageComponent);
    return AboutpageComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<homepage></homepage>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aboutpage_aboutpage_component__ = __webpack_require__("./src/app/aboutpage/aboutpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__donationpage_donationpage_component__ = __webpack_require__("./src/app/donationpage/donationpage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__aboutpage_aboutpage_component__["a" /* AboutpageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__donationpage_donationpage_component__["a" /* DonationpageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/donationpage/donationpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/donationpage/donationpage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  donationpage works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/donationpage/donationpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DonationpageComponent = /** @class */ (function () {
    function DonationpageComponent() {
    }
    DonationpageComponent.prototype.ngOnInit = function () {
    };
    DonationpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-donationpage',
            template: __webpack_require__("./src/app/donationpage/donationpage.component.html"),
            styles: [__webpack_require__("./src/app/donationpage/donationpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DonationpageComponent);
    return DonationpageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body>\n<!-- Navbar -->\n<div class=\"w3-top\">\n  <div class=\"w3-bar w3-black w3-card\">\n    <a class=\"w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right\" href=\"javascript:void(0)\" onclick=\"myFunction()\" title=\"Toggle Navigation Menu\"><i class=\"fa fa-bars\"></i></a>\n    <a href=\"#\" class=\"w3-bar-item w3-button w3-padding-large\" style=\"color: #67C385\">Home</a>\n    <a href=\"#band\" class=\"w3-bar-item w3-button w3-padding-large w3-hide-small\">About</a>\n    <a href=\"#tour\" class=\"w3-bar-item w3-button w3-padding-large w3-hide-small\">Donate</a>\n    <a href=\"#contact\" class=\"w3-bar-item w3-button w3-padding-large w3-hide-small\">Contact</a>\n    <a href=\"#contact\" class=\"w3-bar-item w3-button w3-padding-large w3-hide-small\">Annual Campaign</a>\n    <div class=\"w3-dropdown-hover w3-hide-small\">\n      <button class=\"w3-padding-large w3-button\" title=\"More\" style=\"color: #67C385\">More <i class=\"fa fa-caret-down\"></i></button>     \n      <div class=\"w3-dropdown-content w3-bar-block w3-card-4\">\n        <a href=\"#\" class=\"w3-bar-item w3-button\">Merchandise</a>\n        <a href=\"#\" class=\"w3-bar-item w3-button\">Extras</a>\n        <a href=\"#\" class=\"w3-bar-item w3-button\">Media</a>\n      </div>\n    </div>\n    <a href=\"javascript:void(0)\" class=\"w3-padding-large w3-hover-red w3-hide-small w3-right\"><i class=\"fa fa-search\"></i></a>\n  </div>\n</div>\n\n<!-- Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) -->\n<div id=\"navDemo\" class=\"w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top\" style=\"margin-top:46px\">\n  <a href=\"#band\" class=\"w3-bar-item w3-button w3-padding-large\" onclick=\"myFunction()\">BAND</a>\n  <a href=\"#tour\" class=\"w3-bar-item w3-button w3-padding-large\" onclick=\"myFunction()\">TOUR</a>\n  <a href=\"#contact\" class=\"w3-bar-item w3-button w3-padding-large\" onclick=\"myFunction()\">CONTACT</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button w3-padding-large\" onclick=\"myFunction()\">MERCH</a>\n</div>\n\n<!-- Page content -->\n<div class=\"w3-content\" style=\"max-width:2000px;margin-top:46px\">\n\n\n <div class=\"w3-container w3-content w3-center w3-padding-64\" style=\"max-width:800px\" id=\"band\">\n    <h2 class=\"w3-wide\" style=\"color: #67C385\">Oaxaca Streetchildren Grassroots</h2>\n    <p class=\"w3-opacity\"><i>Welcome</i></p>\n    <p class=\"w3-justify\" style=\"font-size: 18px\">Oaxaca Streetchildren Grassroots serves children living in poverty in Oaxaca, Mexico who do not have access to an education. We believe in education as a human right and help the poorest of Oaxaca’s children realize their dream of going to school.\n\n    When you give a child money on the street you feed them for a day - when you give a child an education you feed them for life!</p>\n <div class=\"mySlides w3-display-container w3-center\">\n    <img src=\"/oaxacastreetchildrengrassroots/colorlogo.jpg\">\n    <div class=\"w3-display-bottommiddle w3-container w3-text-white w3-hide-small\"> \n    </div>\n  </div>\n  </div>\n \n\n  <div class=\"mySlides w3-display-container w3-center\">\n    <img src=\"/oaxacastreetchildrengrassroots/city.jpg\" style=\"width:100%; height: 25%\">\n    <div class=\"w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small\"> \n    </div>\n  </div>\n  <!-- The Tour Section -->\n  <div class=\"w3-black\" id=\"tour\">\n    <div class=\"w3-container w3-content w3-padding-64\" style=\"max-width:800px\">\n      <h2 class=\"w3-wide w3-center\" style=\"color: #67C385\">CONNECT</h2>\n      <p class=\"w3-opacity w3-center\"><i>We'd love to meet you!</i></p><br>\n\n      <div class=\"w3-row-padding w3-padding-32\" style=\"margin:0 -16px\">\n        <div class=\"w3-third w3-margin-bottom\">\n        \t<h4 class=\"w3-wide\" style=\"color: #3B5998\">SOCIAL MEDIA</h4>\n          <div class=\"w3-container w3-white\">\n            <p><b>Facebook</b></p>\n            <p>Follow us on our Facebook page to stay connected, learn more about past and future events, and to contact us directly</p>\n            <button class=\"w3-button w3-black w3-margin-bottom\" onclick=\"javascript:location.href='https://www.facebook.com/pages/Centro-de-Esperanza-Infantil-A-C/55554141467?fref=ts'\">View Page</button>\n          </div>\n        </div>\n\n        <div class=\"w3-third w3-margin-bottom\">\n          <h4 class=\"w3-wide\" style=\"color: white\">NEWSLETTER</h4>\n          <div class=\"w3-container w3-white\">\n            <p><b>Email</b></p>\n            <p>Sign up to be included in our monthly newsletter. Where we keep you updated with the latest organizational news</p>\n            <button class=\"w3-button w3-black w3-margin-bottom\" onclick=\"document.getElementById('ticketModal').style.display='block'\">Sign Up</button>\n          </div>\n        </div>\n        <div class=\"w3-third w3-margin-bottom\">\n         <h4 class=\"w3-wide\" style=\"color: #ff9900\">AMAZON</h4>\n          <div class=\"w3-container w3-white\">\n            <p><b>Amazon Smile</b></p>\n            <p>Amazon donates 0.5% of the price of your eligible AmazonSmile purchases to the charitable organization of your choice!</p>\n            <button class=\"w3-button w3-black w3-margin-bottom\" onclick=\"javascript:location.href='https://smile.amazon.com/ch/35-1988669'\">Visit Site</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Ticket Modal -->\n  <div id=\"ticketModal\" class=\"w3-modal\">\n    <div class=\"w3-modal-content w3-animate-top w3-card-4\">\n      <header class=\"w3-container w3-teal w3-center w3-padding-32\"> \n        <span onclick=\"document.getElementById('ticketModal').style.display='none'\" \n       class=\"w3-button w3-teal w3-xlarge w3-display-topright\">×</span>\n        <h2 class=\"w3-wide\"><i class=\"fa fa-suitcase w3-margin-right\"></i>Newsletter</h2>\n      </header>\n      <div class=\"w3-container\">\n        <p><label><i class=\"fa fa-shopping-cart\"></i>Full Name</label></p>\n        <input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Enter Name\">\n        <p><label><i class=\"fa fa-user\"></i> Email</label></p>\n        <input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Enter email\">\n        <button class=\"w3-button w3-block w3-teal w3-padding-16 w3-section w3-right\">Submit <i class=\"fa fa-check\"></i></button>\n        <button class=\"w3-button w3-red w3-section\" onclick=\"document.getElementById('ticketModal').style.display='none'\">Close <i class=\"fa fa-remove\"></i></button>\n      </div>\n    </div>\n  </div>\n\n  <!-- The Contact Section -->\n  <div class=\"w3-container w3-content w3-padding-64\" style=\"max-width:800px\" id=\"contact\">\n    <h2 class=\"w3-wide w3-center\">Contact</h2>\n    <p class=\"w3-opacity w3-center\"><i>Inquiries? Drop a note!</i></p>\n    <div class=\"w3-row w3-padding-32\">\n      <div class=\"w3-col m6 w3-large w3-margin-bottom\">\n        <i class=\"fa fa-map-marker\" style=\"width:30px\"></i> OAXACA STREETCHILDREN GRASSROOTS, INC.<br>\n        <i class=\"fa fa-phone\" style=\"width:30px\"></i> P.O. Box 2219<br>\n        <i class=\"fa fa-envelope\" style=\"width:30px\"> </i> Benton, Arkansas U.S.A. 72018<br>\n      </div>\n      <div class=\"w3-col m6\">\n        <form action=\"/action_page.php\" target=\"_blank\">\n          <div class=\"w3-row-padding\" style=\"margin:0 -16px 8px -16px\">\n            <div class=\"w3-half\">\n              <input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Name\" required name=\"Name\">\n            </div>\n            <div class=\"w3-half\">\n              <input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Email\" required name=\"Email\">\n            </div>\n          </div>\n          <input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Message\" required name=\"Message\">\n          <button class=\"w3-button w3-black w3-section w3-right\" type=\"submit\">SEND</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  \n<!-- End Page Content -->\n</div>\n\n\n<!-- Footer -->\n<footer class=\"w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge\">\n  <i class=\"fa fa-facebook-official w3-hover-opacity\"></i>\n  <i class=\"fa fa-instagram w3-hover-opacity\"></i>\n  <i class=\"fa fa-snapchat w3-hover-opacity\"></i>\n  <i class=\"fa fa-pinterest-p w3-hover-opacity\"></i>\n  <i class=\"fa fa-twitter w3-hover-opacity\"></i>\n  <i class=\"fa fa-linkedin w3-hover-opacity\"></i>\n  <p class=\"w3-medium\"><a href=\"https://www.w3schools.com/w3css/default.asp\" target=\"_blank\"> Copyright © 2017 Oaxaca Streetchildren Grassroots. All Rights Reserved. </a></p>\n</footer>\n\n<script>\n// Automatic Slideshow - change image every 4 seconds\nvar myIndex = 0;\ncarousel();\n\nfunction carousel() {\n    var i;\n    var x = document.getElementsByClassName(\"mySlides\");\n    for (i = 0; i < x.length; i++) {\n       x[i].style.display = \"none\";  \n    }\n    myIndex++;\n    if (myIndex > x.length) {myIndex = 1}    \n    x[myIndex-1].style.display = \"block\";  \n    setTimeout(carousel, 4000);    \n}\n\n// Used to toggle the menu on small screens when clicking on the menu button\nfunction myFunction() {\n    var x = document.getElementById(\"navDemo\");\n    if (x.className.indexOf(\"w3-show\") == -1) {\n        x.className += \" w3-show\";\n    } else { \n        x.className = x.className.replace(\" w3-show\", \"\");\n    }\n}\n\n// When the user clicks anywhere outside of the modal, close it\nvar modal = document.getElementById('ticketModal');\nwindow.onclick = function(event) {\n  if (event.target == modal) {\n    modal.style.display = \"none\";\n  }\n}\n</script>\n \n       \n</body>\n\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map