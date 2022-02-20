import { Component, Host, h, ComponentInterface, Prop, Element } from '@stencil/core';

@Component({
  tag: 'core-list',
  styleUrl: 'core-list.css',
})
export class CoreList implements ComponentInterface {

  @Element() el: HTMLElement;
  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);

      const domParser = new DOMParser();
      const doc = domParser.parseFromString(this.data.innerHTML, "text/html");
      const ul = doc.querySelector('ul');

      ul.removeAttribute('class');
      ul.removeAttribute('id');

      const list = document.createElement("ion-list");
      const li = ul.querySelectorAll('li');

      Array.from(li).map( item => {
        const a = item.querySelector('a');
        const ionItem = document.createElement("ion-item");

        if ( a ) {
          const href = a.href.split("/").pop();
          ionItem.setAttribute('href', a.href);
  
          if ( '#' === href.charAt(0) ) {
            ionItem.onclick = () => this.scrollToID(href.substring(1));
          }
  
        }
   
        ionItem.innerHTML = item.innerText;

        list.appendChild(ionItem);
        
      })
  
      this.el.appendChild(list);

  }

  scrollToID(id) {
    const el = document.getElementById(id);
    const content = document.querySelector('ion-content');
    content.scrollToPoint(0, el.offsetTop, 500);
  }


  render() {
    return (
      <Host></Host>
    );
  }

}
