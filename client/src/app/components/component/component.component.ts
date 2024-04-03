import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component',
  templateUrl: 'component.component.html',
  styleUrls: ['component.component.css'],
})
export class AppComponent {
  @Input()
  subHeading: string =
    'Our products are known for their precision and durability, ensuring top-notch welding results.'
  @Input()
  heading: string = 'High-Quality Welding Equipment'
  constructor() {}
}
