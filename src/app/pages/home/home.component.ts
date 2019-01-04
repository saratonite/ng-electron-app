import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeAnimation } from '../../animations';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ fadeAnimation ]
})
export class HomeComponent implements OnInit {

  private isLoading: boolean = true;

  constructor(

    private activeRoute:ActivatedRoute,
    private router: Router,
    private storeSvc: StoreService

  ) { }

  ngOnInit() {

    console.log(this.activeRoute.snapshot.data)

    this.storeSvc.setState(this.activeRoute.snapshot.data.profile)

    console.log('Store set')

    //this.router.navigate(['/welcome']);

    
  }

}
