import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  sub: any = new Subject();
  constructor() { }


  info(text) {

    this.sub.next(text)
  }

  getMessage(): Observable<any> {
    return this.sub.asObservable();
  }

  
}
