import { Component, Host, h, ComponentInterface, Prop, Element } from '@stencil/core';
import { state } from '../../services/store';

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

      // ul.removeAttribute('class');
      // ul.removeAttribute('id');

      const ulClass = ul.getAttribute('class');
      const ulStyle = ul.getAttribute('style');

      const list = document.createElement("ion-list");
      const li = ul.querySelectorAll('li');

      const backgroundColor = state.colors.filter( item => item.slug === this.data.attrs.backgroundColor );

      Array.from(li).map( item => {
        const a = item.querySelector('a');
        const ionItem = document.createElement("ion-item");

        if ( a ) {
          const href = a.href.split("/").pop();
          ionItem.setAttribute('href', a.href);
          ionItem.setAttribute('target', a.target);
  
          if ( '#' === href.charAt(0) ) {
            ionItem.onclick = () => this.scrollToID(href.substring(1));
          }
  
        }
   
        ionItem.innerHTML = item.innerText;
        console.log(ulClass)
        //ionItem.classList.add(`${ulClass}`);
        ionItem.setAttribute( 'class', ulClass);
        ionItem.setAttribute( 'style', ulStyle);

        ionItem.style.setProperty('--background', 'transparent');

        list.appendChild(ionItem);
        
      })

      list.style.setProperty('--background', backgroundColor[0].color);
  
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
