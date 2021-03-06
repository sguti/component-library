import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SmoothButtonModule } from "projects/smooth-button/src/public_api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SmoothButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
