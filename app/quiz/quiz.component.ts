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
    constructor() {  }

}
