import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'core-archives',
  styleUrl: 'core-archives.css',
})
export class CoreArchives {

  @Element() el: HTMLElement;
  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);

      const domParser = new DOMParser();
      const doc = domParser.parseFromString(this.data.links, "text/html");

      const a = doc.querySelectorAll('a');

      const list = document.createElement("ion-list");

      Array.from(a).map( item => {
        const ionItem = document.createElement("ion-item");

        ionItem.setAttribute('href', item.href);

        ionItem.innerHTML = item.innerText;

        list.appendChild(ionItem);
        
      })
  
      this.el.appendChild(list);

  }

  render() {
    return (
      <Host>
      </Host>
    );
  }

}
