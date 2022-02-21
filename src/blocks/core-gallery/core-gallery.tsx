import { Component, Host, h, ComponentInterface, Prop, Element } from '@stencil/core';

@Component({
  tag: 'core-gallery',
  styleUrl: 'core-gallery.css',
})
export class CoreGallery implements ComponentInterface {

  @Element() el: HTMLElement;
  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
  }

  processHTML() {
 
    const div = document.createElement('div');
    div.setAttribute('class', 'appp-gallery');
    

    this.data && this.data.innerBlocks.map( item => {

      const domParser = new DOMParser();
      const doc = domParser.parseFromString(item.innerHTML, "text/html");
      const img = doc.querySelector('img');  
      const slide = document.createElement('div');

      slide.setAttribute('style', `background-image: url(${img.src}); background-size: cover; background-position: center;`);
      slide.setAttribute('class', 'app-slide');
      
      div.appendChild(slide);
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
