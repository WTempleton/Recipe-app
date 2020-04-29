import { Component, OnInit } from "@angular/core";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}
  public scrollToAbout(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit(): void {}
}
