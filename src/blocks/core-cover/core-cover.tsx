import { Component, Host, h, ComponentInterface, Prop, Element } from '@stencil/core';
import { state } from '../../services/store';

@Component({
  tag: 'core-cover',
  styleUrl: 'core-cover.css',
})
export class CoreCover implements ComponentInterface {

  @Element() el: HTMLElement;
  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
  }

  processHTML() {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(this.data.innerHTML, "text/html");
    const div = doc.querySelector('.wp-block-cover');
    const innerContainer = doc.querySelector('.wp-block-cover__inner-container');
    const span = div.querySelector('span');

    const overlayColor = state.colors.filter( color => color.slug === this.data.attrs.overlayColor );

    if ( overlayColor[0] ) {
      span.style.backgroundColor = overlayColor[0].color;
    }

    this.data && this.data.innerBlocks.map( item => {
      const name = item.blockName.replace("/", "-");
      const comp = Object.assign( document.createElement(`${name}`), {data: item});
      //comp.setAttribute('data', {item});
    
      innerContainer.appendChild(comp) ;
    });

    this.el.appendChild(div);

  }

  render() {
    return (
      <Host class="ion-padding">
        {this.processHTML()}
      </Host>
    );
  }

}
