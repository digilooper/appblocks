import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'core-code',
  styleUrl: 'core-code.css',
})
export class CoreCode implements ComponentInterface {

  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
  }

  render() {
    return (
      <Host class="ion-padding" innerHTML={ this.data.innerHTML }>
      </Host>
    );
  }
}
