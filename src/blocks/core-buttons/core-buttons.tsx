import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'core-buttons',
  styleUrl: 'core-buttons.css',
  shadow: true,
})
export class CoreButtons {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
