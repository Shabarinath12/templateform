import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPageComponent } from "../../components/login-page/login-page.component";
import { WelcomePageComponent } from "./welcome-page.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignupPageComponent } from 'src/app/components/signup-page/signup-page.component';

const routes: Routes = 
[{ path: "", component: WelcomePageComponent},
 { path:"signup-page",component:SignupPageComponent}];

@NgModule({
  declarations: [WelcomePageComponent, LoginPageComponent,SignupPageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    SharedModule,
    BrowserAnimationsModule
  ]
})
export class WelcomePageModule {}
