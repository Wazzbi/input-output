import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "input-output";
  text = "";
  check = false;

  getText(data: string): void {
    this.check = true;
    this.text = data;
  }
}
