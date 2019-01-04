import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service'
import { fadeAnimation } from './animations';
import { StoreService } from './services/store.service';
import { Profile } from './models/profile.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'ng-electron-app';
  $messageSvc: any;

  private isLoading: boolean = true;

  private profile: Profile = null;

  constructor(
    private messageSvc: MessageService,
    private storeSvc: StoreService
    ) {

    this.$messageSvc = messageSvc.getMessage();
  }

  ngOnInit() {

    console.log('App component init')

    this.isLoading = true;

    // Subscribe Message Service 

    this.$messageSvc.subscribe(
      data => {
        console.log(`>> ${data}`)
        alert(data)

      }
      )
      
      
      // Subscibe Store Service
      
      this.storeSvc.state$.subscribe(
        
        (data) => {

          console.log('AppCom::StoreSvc:Sub', data)
          
          if(data) {
            console.log('data', data)
            this.isLoading = false;

            this.profile = data;
          }
        


      }

    )


    setInterval(() => {
      console.count('App Component')
    },3000)
  }
}
