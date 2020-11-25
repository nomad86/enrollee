import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEnrollee } from '../../models/IEnrollee';

import { Observable } from 'rxjs';
import {
  concatMap,
  delay, filter,
  first,
  map,
  shareReplay,
  tap,
  withLatestFrom
} from 'rxjs/operators';

import { EnrolleeDataService } from '../../services/enrollee-data.service';
import * as momentImported from 'moment';
const moment = momentImported;

@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss']
})
export class EnrolleeComponent implements OnInit {

  enrollee: IEnrollee;
  status: string;
  loading = true;

  constructor(
    private enrolleeService: EnrolleeDataService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    // tslint:disable-next-line: no-string-literal
    const enrolleeId = this.route.snapshot.params['enrolleeId'];

    this.enrolleeService.getById(enrolleeId)
      .subscribe(e => {
        let dateOfBirth: string;
        if (e.dateOfBirth) {

          const dt = moment(e.dateOfBirth);

          if (dt.isValid()) {
            dateOfBirth = dt.format('MM/DD/YYYY');
          } else {
            dateOfBirth = '';
          }
        } else {
          dateOfBirth = 'Not Available';
        }

        this.enrollee = e;
        this.enrollee.dateOfBirth = dateOfBirth;
        this.loading = false;
      });

  }

}
