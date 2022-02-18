import { Component, Host, h, ComponentInterface, Prop, Element } from '@stencil/core';

@Component({
  tag: 'core-heading',
  styleUrl: 'core-heading.css',
})
export class CoreHeading implements ComponentInterface {

  @Element() el: HTMLElement;
  @Prop() data: any;
 
  componentWillLoad(): void | Promise<void> {
    console.log(this.data);

    const domParser = new DOMParser();
    const doc = domParser.parseFromString(this.data.innerHTML, "text/html");
    const h2 = doc.querySelector('h2');

    h2.removeAttribute('class');
    //h2.removeAttribute('id');
 
    this.el.appendChild(h2);

    console.log(this.el);
}

  render() {
    return (
      <Host></Host>
    );
  }

}
