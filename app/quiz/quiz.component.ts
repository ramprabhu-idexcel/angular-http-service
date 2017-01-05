import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// Import and use below directive
import { FORM_DIRECTIVES } from '@angular/forms';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
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
import { QuizService } from './quiz.service';

@Component({
    templateUrl: 'app/quiz/quiz.component.html',
    styleUrls: ['app/quiz/quiz.css'],
    pipes: [PaginatePipe, OrderBy],
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, PaginationControlsCmp],
    providers: [PaginationService]
})

export class QuizComponent implements OnInit{
    constructor(private _quizService: QuizService, private _router:Router) {
        this.LoadQuestions();
    }

    public showQuiz: boolean = true;
    public evaluation: Object = { };
    public message_green: boolean = false;
    public message_blue: boolean = false;
    public marks: string;
    public attempt: string;
    public questions: Array<any>;


    /*
     * On changing radio button
     */
    OnChange(question, answer){
        this.evaluation[question] = answer;
    }

    /*
     * On submit button
     */
    OnSubmit(){
        $.blockUI();
        var type = "Computer";
        this._quizService.validate(type, this.evaluation)
            .subscribe(result => {
                if(result){
                    this.message_green = true;
                    this.marks = result.marks;
                    this.attempt = result.attempt;
                    this.message_blue = true;
                    $("html, body").animate({ scrollTop: 0 }, 600);
                    $.unblockUI();
                }
            });
    }

    /*
     * Load all quiz question with options
     */
    LoadQuestions(){
        this._quizService.getQuestions()
            .subscribe(result => {
                if(result){
                    this.questions = result;
                }
            });
    }

}
