import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable, of} from 'rxjs';
import {delay } from 'rxjs/operators';

import { GithubService } from '../github.service';

import { StoreService } from '../store.service';

@Injectable()
export class HomeResolver implements Resolve<Observable<any>> {
  constructor(
      private storeSvc: StoreService,
      private githubSvc: GithubService

  ) {}

  resolve() {
    //this.storeSvc.setState({name:'ddd'})
    //return of('Hello Alligator!').pipe(delay(3000));
    return this.githubSvc.getProfile('saratonite')
  }
}