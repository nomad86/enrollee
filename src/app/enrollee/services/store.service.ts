import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { IEnrollee } from '../models/IEnrollee';

@Injectable({ providedIn: 'root' })
export class StoreService {

    enrollees$: Observable<IEnrollee>;
    private enrolleeSubject = new BehaviorSubject<Map<string, IEnrollee> | null>(null);

    initialize(enrolleList: IEnrollee[]): void {
        const cache = new Map<string, IEnrollee>();
        if (enrolleList && Array.isArray(enrolleList)) {
            enrolleList.forEach(e => {
                cache.set(e.id, e);
            });
            this.enrolleeSubject.next(cache);
        } else {
            console.error('Input list is empty or not an array');
        }
    }

    getById(key: string): IEnrollee {
        const cache = this.enrolleeSubject.getValue();
        return cache.get(key);
    }

    updateById(key: string, enrollee: IEnrollee): void {
        const cache = this.enrolleeSubject.getValue();
        cache.set(key, enrollee);
        this.enrolleeSubject.next(cache);
    }

    getAllAsArray(): IEnrollee[] {
        const cache = this.enrolleeSubject.getValue();
        return [...cache.values()];
    }
}
