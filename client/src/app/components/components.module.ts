import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { AppComponent } from './component/component.component'
import { TestimonialCard2 } from './testimonial-card2/testimonial-card2.component'
import { GalleryCard2 } from './gallery-card2/gallery-card2.component'
import { FeatureCard } from './feature-card/feature-card.component'
import { TestimonialCard4 } from './testimonial-card4/testimonial-card4.component'
import { Question1 } from './question1/question1.component'
import { Component1 } from './component1/component1.component'

@NgModule({
  declarations: [
    AppComponent,
    TestimonialCard2,
    GalleryCard2,
    FeatureCard,
    TestimonialCard4,
    Question1,
    Component1,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AppComponent,
    TestimonialCard2,
    GalleryCard2,
    FeatureCard,
    TestimonialCard4,
    Question1,
    Component1,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
