import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Home } from './home.component'

const routes = [
  {
    path: '',
    component: Home,
  },
]

@NgModule({
  declarations: [Home],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [Home],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
