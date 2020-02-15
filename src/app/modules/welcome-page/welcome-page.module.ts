import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPageComponent } from "../../components/login-page/login-page.component";
import { WelcomePageComponent } from "./welcome-page.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignupPageComponent } from 'src/app/components/signup-page/signup-page.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
 
const routes: Routes = 
[{ path: "", component: WelcomePageComponent},
 { path:"signup-page",component:SignupPageComponent},
 { path:"dashboard",component:DashboardComponent},
{ path:"",component:LoginPageComponent},
{ path:"forgot-password",component:ForgotPasswordComponent}];


@NgModule({
  declarations: [WelcomePageComponent, LoginPageComponent,SignupPageComponent,DashboardComponent,ForgotPasswordComponent,

  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    SharedModule,
    BrowserAnimationsModule,
     
  ]
})
export class WelcomePageModule {}
