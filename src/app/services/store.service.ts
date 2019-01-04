import { Injectable } from '@angular/core';
import { Store } from './store'
import { Profile } from '../models/profile.model'

@Injectable({
  providedIn: 'root'
})


export class StoreService extends Store<Profile> {

  constructor() { 
    super(null)
  }
}
