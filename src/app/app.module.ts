import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';
import { AuthGuard } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';



import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { HelpComponent } from './help/help.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { GridDetailsComponent } from './grid-details/grid-details.component';
import { AdminComponent } from './admin/admin.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProblemListComponent,
    HelpComponent,
    UserInfoComponent,
    GridDetailsComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
