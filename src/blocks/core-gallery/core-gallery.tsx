import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'core-gallery',
  styleUrl: 'core-gallery.css',
})
export class CoreGallery implements ComponentInterface {

  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
  }

  render() {
    return (
      <Host class="ion-padding" innerHTML={ this.data.innerHTML }>
        gallery broken
      </Host>
    );
  }
}
