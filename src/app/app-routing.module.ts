import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomePageModule } from './modules/welcome-page/welcome-page.module';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/welcome-page/welcome-page.module").then(
        m => m.WelcomePageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),WelcomePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
