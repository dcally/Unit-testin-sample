import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { testString } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  getText(): Observable<any> {
    const fakeString = of(testString)
    return fakeString;
  }

  constructor(){ }
}
