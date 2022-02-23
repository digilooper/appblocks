import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'core-media-text',
  styleUrl: 'core-media-text.css',
})
export class CoreMediaText {

  @Element() el: HTMLElement;
  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
      this.processHTML();
  }

  processHTML() {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(this.data.innerHTML, "text/html");
    const div = doc.querySelector('.wp-block-media-text');

    const content = div.querySelector('.wp-block-media-text__content');

    this.data && this.data.innerBlocks.map( item => {
      const name = item.blockName.replace("/", "-");
      const comp = Object.assign( document.createElement(`${name}`), {data: item});
      //comp.setAttribute('data', {item});
      content.appendChild(comp);
    })

    div.appendChild(content);

    this.el.appendChild(div);

  }

  render() {
    return (
      <Host>
      </Host>
    );
  }

}
