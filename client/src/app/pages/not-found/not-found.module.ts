import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NotFound1 } from './not-found.component'

const routes = [
  {
    path: '',
    component: NotFound1,
  },
]

@NgModule({
  declarations: [NotFound1],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [NotFound1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotFoundModule {}
