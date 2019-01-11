import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://reqres.in/api/'

  constructor(
    private http: HttpClient
  ) { }


  getUsers(): any {


    return this.http.get(`${this.baseUrl}users`)
      .pipe(map((res) => {
        return res;

      }))


  }
}
