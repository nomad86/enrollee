import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEnrollee } from 'src/app/enrollee/models/IEnrollee';

@Injectable({ providedIn: 'root' })
export class EnrolleeDataService {
    constructor(private http: HttpClient) {

    }

    getAll(): Observable<IEnrollee[]> {

        const url = `${environment.domain}Enrollees`;
        return this.http.get<IEnrollee[]>(url);
    }


    getById(id: string): Observable<IEnrollee> {

        const url = `${environment.domain}Enrollees/${id}`;
        return this.http.get<IEnrollee>(url);
    }

    update(enrollee: IEnrollee): Observable<IEnrollee> {

        const url = `${environment.domain}Enrollees/${enrollee.id}`;
        return this.http.put<IEnrollee>(url, enrollee);
    }
}
