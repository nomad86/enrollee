import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IEnrollee } from '../../models/IEnrollee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EnrolleeDataService } from '../../services/enrollee-data.service';

@Component({
  selector: 'app-enrollee-dialog',
  templateUrl: './edit-enrollee-dialog.component.html',
  styleUrls: ['./edit-enrollee-dialog.component.scss']
})
export class EditEnrolleeDialogComponent {

  form: FormGroup;
  dialogTitle: string;
  enrollee: IEnrollee;
  loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditEnrolleeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private enrolleeService: EnrolleeDataService) {

    this.dialogTitle = 'Edit ' + data.enrollee.name;
    this.enrollee = data.enrollee;

    const formControls = {
      name: [this.enrollee.name, Validators.required],
      active: [this.enrollee.active, []]
    };

    this.form = this.fb.group({
      ...formControls
    });

  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {

    const formData: IEnrollee = {
      ...this.enrollee,
      ...this.form.value
    };

    this.enrolleeService.update(formData)
      .subscribe(
        () => this.dialogRef.close()
      );

  }

}
