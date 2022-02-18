import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'core-group',
  styleUrl: 'core-group.css',
})
export class CoreGroup {

  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
  }

  processHTML() {
    let html = '';

    html += this.data.innerContent[0];

    this.data.innerBlocks.map( block => {
      html += block.innerHTML;
    });

    html += this.data.innerContent.pop();

    return html;

  }

  render() {
    return (
      <Host class="ion-padding" innerHTML={this.processHTML()}>
      </Host>
    );
  }

}
