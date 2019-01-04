import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service';

import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  private profile: Profile = null;
  constructor(
    private storeSvc: StoreService

  ) { }

  ngOnInit() {

    console.log('Welcome comp')

    this.profile = this.storeSvc.state;
  }

}
