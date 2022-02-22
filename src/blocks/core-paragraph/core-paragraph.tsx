import { Component, Host, h, ComponentInterface, Prop, Element } from '@stencil/core';
import { state } from '../../services/store';

@Component({
  tag: 'core-paragraph',
  styleUrl: 'core-paragraph.css',
})
export class CoreParagraph implements ComponentInterface {

  @Element() el: HTMLElement;
  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);

      const textColor = state.colors.filter( color => color.slug === this.data.attrs.textColor );
      const fontSize = (state.fonts as any).sizes.filter( size => size.slug === this.data.attrs.fontSize );

      if ( textColor[0] ) {
        this.el.style.color = textColor[0].color;
        this.el.style.fontSize = fontSize[0].size;
      }
  }

  render() {
    return (
      <Host class="ion-padding-start ion-padding-end" innerHTML={ this.data.innerHTML }>
        <slot />
      </Host>
    );
  }

}
