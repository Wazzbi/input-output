import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})
export class ChildComponent implements OnInit {
  @Input() name: string;

  @Output() rate = new EventEmitter();

  @Output() funFactHigher = new EventEmitter();

  dummy = "It's working from child";

  getName(): void {
    this.rate.emit(this.dummy);
  }

  constructor() {}

  ngOnInit() {}
}
