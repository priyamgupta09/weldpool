import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component1',
  templateUrl: 'component1.component.html',
  styleUrls: ['component1.component.css'],
})
export class Component1 {
  @Input()
  heading: string = 'High-Quality Welding Equipment'
  @Input()
  subHeading: string =
    'Our products are known for their precision and durability, ensuring top-notch welding results.'
  constructor() {}
}
