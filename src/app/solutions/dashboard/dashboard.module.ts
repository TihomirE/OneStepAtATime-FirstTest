import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  { path: '', component: DashboardComponent } // , canActivate: [AuthGuard]
  ];

@NgModule({
    declarations: [DashboardComponent],
    imports: [
      CommonModule,
      IonicModule,
      RouterModule.forChild(routes)
    ]
  })
  export class DashboardModule { }