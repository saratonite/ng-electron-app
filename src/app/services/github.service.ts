import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { StoreService } from '../services/store.service';
import { Profile } from '../models/profile.model';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient,
    private storeSvc: StoreService
    ) {

  }
  


  getProfile(username: string): Observable<Profile>{

     return this.http.get(`https://api.github.com/users/${username}`)
     .pipe(map((data:Profile) => {

      this.storeSvc.setState(data);

      return data;

     }))
  }


  
}
