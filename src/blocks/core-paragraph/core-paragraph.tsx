import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'core-paragraph',
  styleUrl: 'core-paragraph.css',
})
export class CoreParagraph implements ComponentInterface {

  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
  }

  render() {
    return (
      <Host class="ion-padding-start ion-padding-end" innerHTML={ this.data.innerHTML }>
        <slot />
      </Host>
    );
  }

}