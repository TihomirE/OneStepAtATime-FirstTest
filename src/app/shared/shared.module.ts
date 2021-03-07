import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MainLayoutComponent } from "./layout/main-layout.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [
        MainLayoutComponent
    ],
    exports: [
        MainLayoutComponent
    ]
})
export class SharedModule { }