import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconContainerComponent } from './icon-container.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [IconContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    IconContainerComponent
  ],
  entryComponents: [
    IconContainerComponent
  ]
})

export class IconContainerModule {

  constructor(private injector: Injector) {
    const iconContainerComponentElement = createCustomElement(IconContainerComponent, { injector: this.injector });
    customElements.define('icon-container-element', iconContainerComponentElement);
  }
}
