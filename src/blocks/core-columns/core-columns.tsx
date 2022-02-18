import { Component, Host, h, ComponentInterface, Prop, Element } from '@stencil/core';
import { createElement } from '../../helpers/create-comp';

@Component({
  tag: 'core-columns',
  styleUrl: 'core-columns.css',
})
export class CoreColumns implements ComponentInterface {

  @Element() el: HTMLElement;
  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
  }

  processHTML() {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(this.data.innerHTML, "text/html");
    const div = doc.querySelector('.wp-block-columns');

    console.log(div);

    this.data && this.data.innerBlocks.map( item => {
      const name = item.blockName.replace("/", "-");
      const comp = Object.assign( document.createElement(`${name}`), {data: item});
      //comp.setAttribute('data', {item});
      div.appendChild(comp);
    })

    this.el.appendChild(div);

  }

  render() {
    return (
      <Host>
        { this.processHTML() }
      </Host>
    );
  }
}
