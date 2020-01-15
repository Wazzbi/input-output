import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-grand-child",
  templateUrl: "./grand-child.component.html",
  styleUrls: ["./grand-child.component.scss"]
})
export class GrandChildComponent implements OnInit {
  funQuote = "It's working from grand-child";

  @Output() funFact = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendFunFact(): void {
    this.funFact.emit(this.funQuote);
  }
}
