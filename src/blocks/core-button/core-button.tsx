import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'core-button',
  styleUrl: 'core-button.css',
})
export class CoreButton {

  @Element() el: HTMLElement;
  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
  }

  processHTML() {

    const domParser = new DOMParser();
    const doc = domParser.parseFromString(this.data.innerHTML, "text/html");
    const a = doc.querySelector('a');

    const ionButton = document.createElement("ion-button");

    if ( a.href ) {
      ionButton.setAttribute('href', a.href);
    }

    ionButton.innerHTML = a.innerText;

    this.el.appendChild(ionButton);

  }

  render() {
    return (
      <Host class="ion-padding">
        {this.processHTML()}
      </Host>
    );
  }

}
