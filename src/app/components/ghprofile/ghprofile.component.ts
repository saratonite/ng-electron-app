import { Component, OnInit, Input } from '@angular/core';

import { GithubService } from '../../services/github.service'
import { MessageService } from '../../services/message.service'

@Component({
  selector: 'app-ghprofile',
  templateUrl: './ghprofile.component.html',
  styleUrls: ['./ghprofile.component.scss']
})
export class GhprofileComponent implements OnInit {

  @Input() username: string = '';

  private user:any = null;

  constructor(
    private githubSvc: GithubService,
    private msgSvc: MessageService
    ) { 

      
    }

  ngOnInit() {

    console.log('User name ', this.username)

    this.fetchProfile();

  }


  fetchProfile() {

    this.githubSvc.getProfile(this.username).subscribe(
      res => {
        console.log('Res : ', res)

        this.user = res;

        //this.msgSvc.info('Profile data fetched')
      },
      error => {

      },
      () => {
        console.log('Completed')
      }

    )
  }

}
