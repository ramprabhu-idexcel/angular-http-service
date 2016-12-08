import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// Import and use below directive
import { FORM_DIRECTIVES } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PaginatePipe, PaginationControlsCmp, PaginationService, IPaginationInstance } from 'ng2-pagination';
/*
 * Sorting records
 */
import { Column } from '../sorting/column';
import { Sorter } from '../sorting/sorter';
import { CurrentRecords } from '../sorting/current.records'
import { OrderBy } from 'app/sorting/order.by';
/*
 * Report generate
 */
import { CsvReportComponent } from '../reports/csv-report.component';

@Component({
    templateUrl: 'app/quiz/quiz.component.html',
    styleUrls: ['app/quiz/quiz.css'],
    pipes: [PaginatePipe, OrderBy],
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, PaginationControlsCmp],
    providers: [PaginationService]
})

export class QuizComponent implements OnInit{
    public showQuiz: boolean = true;
    public question1;
    public question2;
    public question3;
    public question4;
    public question5;
    public question6;
    public question7;
    public question8;
    public question9;
    public question10;

    constructor() {  }

    OnChange(question, answer){
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
    }


    OnSubmit(){

    }

}
