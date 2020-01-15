import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ChildComponent } from "./child/child.component";

import { MatButtonModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { GrandChildComponent } from './grand-child/grand-child.component';

@NgModule({
   declarations: [
      AppComponent,
      ChildComponent,
      GrandChildComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      MatButtonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
