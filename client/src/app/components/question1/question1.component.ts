import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-question1',
  templateUrl: 'question1.component.html',
  styleUrls: ['question1.component.css'],
})
export class Question1 {
  @Input()
  answer: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.'
  @Input()
  question: string = 'What types of cars do you sell?'
  constructor() {}
}
