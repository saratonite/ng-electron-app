import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhprofileComponent } from './components/ghprofile/ghprofile.component';
import { WelcomeComponent } from './pages/welcome/welcome.component'

// Services

import { GithubService } from './services/github.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { MessageService } from './services/message.service';
import { StoreService } from './services/store.service';
import { HomeResolver } from './services/resolvers/home-resolver'
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageNavigationComponent } from './components/page-navigation/page-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    GhprofileComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    ProfileComponent,
    LoaderComponent,
    PageNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [GithubService,
    MessageService,
    StoreService,
    HomeResolver,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
