import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from "@angular/forms";
import { PersonalInfomationComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { PersonalInfoService } from "./app.service";

@NgModule({
    declarations: [ PersonalInfomationComponent ],
    imports: [ BrowserModule,FormsModule,HttpModule ],
    providers:[PersonalInfoService],
    bootstrap: [PersonalInfomationComponent]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule)