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
    this.processHTML()
  }

  processHTML() {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(this.data.innerHTML, "text/html");
    const body = doc.querySelector('body');

    this.el.appendChild(body.childNodes[0]);

    console.log(this.el);
  }

  render() {
    return (
      <Host></Host>
    );
  }

}
