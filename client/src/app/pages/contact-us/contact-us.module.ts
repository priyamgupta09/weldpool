import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ContactUs } from './contact-us.component'

const routes = [
  {
    path: '',
    component: ContactUs,
  },
]

@NgModule({
  declarations: [ContactUs],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ContactUs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactUsModule {}
