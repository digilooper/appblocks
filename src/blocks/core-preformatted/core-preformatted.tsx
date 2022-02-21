import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'core-preformatted',
  styleUrl: 'core-preformatted.css',
  shadow: true,
})
export class CorePreformatted {

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
