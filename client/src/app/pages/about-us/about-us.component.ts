import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.css'],
})
export class AboutUs {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('About-Us - Weldpool')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'About-Us - Weldpool',
      },
    ])
  }
}
