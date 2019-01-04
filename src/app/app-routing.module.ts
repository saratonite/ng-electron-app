import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeResolver} from './services/resolvers/home-resolver'
const routes: Routes = [
  { path: '', component: HomeComponent,
    data: {username: 'sarath'},
    resolve: {profile: HomeResolver},
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
        pathMatch: 'full'
      },
      { path: 'profile',
        component: ProfileComponent
      }
    ]

  },
  { path: 'about', 
    component: AboutComponent,
    data: {message: 'Hello World'},
    children: [{
      path: 'welcome',
      component: WelcomeComponent,
      pathMatch: 'full'
    }]
  
  },
  { path: '**', redirectTo:'/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
