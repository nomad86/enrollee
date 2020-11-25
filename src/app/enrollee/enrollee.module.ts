import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { EnrolleeCardListComponent } from './components/enrollee-list/enrollee-list.component';
import { EditEnrolleeDialogComponent } from './components/enrollee-dialog/edit-enrollee-dialog.component';
import { EnrolleeComponent } from './components/enrollee/enrollee.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

export const enrolleeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: ':enrolleeId',
        component: EnrolleeComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatDialogModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        ReactiveFormsModule,
        RouterModule.forChild(enrolleeRoutes)
    ],
    declarations: [
        HomeComponent,
        EnrolleeCardListComponent,
        EditEnrolleeDialogComponent,
        EnrolleeComponent
    ],
    exports: [
        HomeComponent,
        EnrolleeCardListComponent,
        EditEnrolleeDialogComponent,
        EnrolleeComponent
    ],
    entryComponents: [EditEnrolleeDialogComponent]
})
export class EnrolleeModule {

    constructor() {

    }


}
