import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AuthService } from "./services/auth.service";
import { AddReviewComponent } from './add-review/add-review.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegisterService } from './services/registerService';
import { NgFlashMessagesModule} from "ng-flash-messages";
import { ValidateService } from "./services/validateService";
import { AuthGuard } from "./services/auth.guard";
import { JwtHelperService} from "@auth0/angular-jwt";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    NavigationBarComponent,
    FrontPageComponent,
    AddReviewComponent,
    AddCompanyComponent,
    ReviewListComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    NgFlashMessagesModule,
    HttpClientModule,
    RouterModule.forRoot([

      {
        path: 'company',
        component: CompanyListComponent
      },
      {
        path: 'reviews',
        component: ReviewListComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'addreview',
        component: AddReviewComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add_company',
        component: AddCompanyComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: FrontPageComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign_up',
        component: SignUpComponent
      }

      ]
    ),
    AppRoutingModule
  ],
  providers: [JwtHelperService, ValidateService, AuthGuard, AuthService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
