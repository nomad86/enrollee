import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { IEnrollee } from '../../models/IEnrollee';
import { MatDialog } from '@angular/material/dialog';
import { EditEnrolleeDialogComponent } from '../enrollee-dialog/edit-enrollee-dialog.component';
import { defaultDialogConfig } from '../../shared/default-dialog-config';

@Component({
  selector: 'app-enrollee-list',
  templateUrl: './enrollee-list.component.html',
  styleUrls: ['./enrollee-list.component.scss']
})
export class EnrolleeCardListComponent implements OnInit {

  @Input()
  enrolleeList: IEnrollee[];

  @Output()
  enrolleeChanged = new EventEmitter();

  constructor(
    private dialog: MatDialog) {
  }

  getStatusStyle(isActive: boolean): any {
    if (!isActive) {
      return { color: '#ff1a1a', fontStyle: 'italic' };
    }
  }

  getStatus(isActive: boolean): string {
    if (isActive) {
      return 'Active';
    } else {
      return 'Inactive';
    }
  }

  ngOnInit(): void {

  }

  editEnrollee(enrollee: IEnrollee): void {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      enrollee
    };

    this.dialog.open(EditEnrolleeDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.enrolleeChanged.emit());

  }

  reload(): void {

  }

}









