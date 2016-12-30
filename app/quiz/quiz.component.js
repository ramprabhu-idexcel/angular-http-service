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
var core_1 = require("@angular/core");
// Import and use below directive
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var ng2_pagination_1 = require("ng2-pagination");
var order_by_1 = require("app/sorting/order.by");
var quiz_service_1 = require("./quiz.service");
var config_1 = require("app/config/config");
var QuizComponent = (function () {
    function QuizComponent(_quizService, _router, _config) {
        this._quizService = _quizService;
        this._router = _router;
        this._config = _config;
        this.showQuiz = true;
        this.evaluation = {};
        this.message_green = false;
        this.message_blue = false;
        this.questions = this._config.quizDetails();
    }
    /*
     * On changing radio button
     */
    QuizComponent.prototype.OnChange = function (question, answer) {
        this.evaluation[question] = answer;
    };
    /*
     * On submit button
     */
    QuizComponent.prototype.OnSubmit = function () {
        var _this = this;
        var type = "Computer";
        this._quizService.validate(type, this.evaluation)
            .subscribe(function (result) {
            if (result) {
                _this.message_green = true;
                _this.marks = result.marks;
                _this.attempt = result.attempt;
                _this.message_blue = true;
                $("html, body").animate({ scrollTop: 0 }, 600);
            }
        });
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/quiz/quiz.component.html',
        styleUrls: ['app/quiz/quiz.css'],
        pipes: [ng2_pagination_1.PaginatePipe, order_by_1.OrderBy],
        directives: [forms_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp],
        providers: [ng2_pagination_1.PaginationService]
    }),
    __metadata("design:paramtypes", [quiz_service_1.QuizService, router_1.Router, typeof (_a = typeof config_1.Config !== "undefined" && config_1.Config) === "function" && _a || Object])
], QuizComponent);
exports.QuizComponent = QuizComponent;
var _a;
//# sourceMappingURL=quiz.component.js.map