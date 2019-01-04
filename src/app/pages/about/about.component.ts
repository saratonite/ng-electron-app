import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Profile } from '../../models/profile.model';
import { Subscriber } from 'rxjs'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  private profile: Profile = null;

  private subscription: any =  null;

  constructor(private storeSvc: StoreService) {

   }

  ngOnInit() {

    //console.log(this.storeSvc.state);

    //this.profile = this.storeSvc.state;

    this.subscription = this.storeSvc.state$.subscribe(

      data => {

        console.log('About page > ', data)
        this.profile = data;
      }

    )

  }

  ngOnDestroy() {

    this.subscription.unsubscribe();

  }

}
