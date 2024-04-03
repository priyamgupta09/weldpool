import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
})
export class Products {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Products - Weldpool')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Products - Weldpool',
      },
    ])
  }
}
