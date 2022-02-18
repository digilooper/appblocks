import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'core-audio',
  styleUrl: 'core-audio.css',
})
export class CoreAudio implements ComponentInterface {

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
