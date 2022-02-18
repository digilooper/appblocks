import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'core-spacer',
  styleUrl: 'core-spacer.css',
})
export class CoreSpacer {

  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
  }

  render() {
    return (
      <Host innerHTML={ this.data.innerHTML }>
      </Host>
    );
  }

}
