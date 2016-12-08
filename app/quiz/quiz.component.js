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
var QuizComponent = (function () {
    function QuizComponent() {
        this.showQuiz = true;
    }
    QuizComponent.prototype.OnChange = function (question, answer) {
        switch (question) {
            case 'question1':
                this.question1 = answer;
                break;
            case 'question2':
                this.question2 = answer;
                break;
            case 'question3':
                this.question3 = answer;
                break;
            case 'question4':
                this.question4 = answer;
                break;
            case 'question5':
                this.question5 = answer;
                break;
            case 'question6':
                this.question6 = answer;
                break;
            case 'question7':
                this.question7 = answer;
                break;
            case 'question8':
                this.question8 = answer;
                break;
            case 'question9':
                this.question9 = answer;
                break;
            case 'question10':
                this.question10 = answer;
                break;
        }
    };
    QuizComponent.prototype.OnSubmit = function () {
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
    __metadata("design:paramtypes", [])
], QuizComponent);
exports.QuizComponent = QuizComponent;
//# sourceMappingURL=quiz.component.js.map