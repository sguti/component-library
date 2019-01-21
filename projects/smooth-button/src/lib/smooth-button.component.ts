import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "smooth-button, [smoothButton]",
  template: `
    <button smooth smooth-button>smooth-button</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmoothButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
