import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Profile } from '../../models/profile.model'
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private profile: Profile = null;
  constructor(
    private storeSvc: StoreService
  ) { }

  ngOnInit() {

    this.profile = this.storeSvc.state;
  
  }

}
