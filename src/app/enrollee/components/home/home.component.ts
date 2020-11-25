import { Component, OnInit } from '@angular/core';
import { IEnrollee } from '../../models/IEnrollee';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EnrolleeDataService } from '../../services/enrollee-data.service';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading$: Observable<boolean>;

  enrolleeList$: Observable<IEnrollee[]>;

  constructor(
    private dialog: MatDialog,
    private enrolleeHttpService: EnrolleeDataService) {

  }

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {

    this.enrolleeList$ = this.enrolleeHttpService.getAll();
    this.loading$ = this.enrolleeList$.pipe(map(e => !!e));
  }

}
