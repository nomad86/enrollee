import { Component, OnInit } from '@angular/core';
import { EnrolleeDataService } from 'src/app/enrollee/services/enrollee-data.service';
import { StoreService } from 'src/app/enrollee/services/store.service';
import { IEnrollee } from 'src/app/enrollee/models/IEnrollee';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loading = false;

  constructor(
    private enrolleeDataService: EnrolleeDataService,
    private storeService: StoreService) {

  }

  ngOnInit(): void {

    /*  this.enrolleeDataService.getAll().subscribe(e => {
        const data = e as IEnrollee[];
        this.storeService.initialize(data);
        this.loading = false;
      }); */

  }
}
