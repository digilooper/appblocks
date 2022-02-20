import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'core-buttons',
  styleUrl: 'core-buttons.css',
})
export class CoreButtons {

  @Element() el: HTMLElement;
  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
  }

  processHTML() {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(this.data.innerHTML, "text/html");
    const div = doc.querySelector('.wp-block-buttons');

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
        {this.processHTML()}
      </Host>
    );
  }

}
