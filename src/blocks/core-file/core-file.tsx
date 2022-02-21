import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'core-file',
  styleUrl: 'core-file.css',
})
export class CoreFile {

  @Element() el: HTMLElement;
  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
  }

  processHTML() {

    const domParser = new DOMParser();
    const doc = domParser.parseFromString(this.data.innerHTML, "text/html");
    const div = doc.querySelector('.wp-block-file');
    const link = div.firstChild;
    const button = div.querySelector('.wp-block-file__button') as HTMLAnchorElement;

    const ionItem = document.createElement("ion-item");
    const ionLabel = document.createElement("ion-label");
    
    ionItem.setAttribute('lines', 'none');

    ionLabel.appendChild(link)
    ionItem.appendChild(ionLabel)

    if ( button ) {
      const ionButton = document.createElement("ion-button");
      ionButton.setAttribute('href', button.href);
      ionButton.innerHTML = button.innerText;
      ionItem.appendChild(ionButton);
    }

    this.el.appendChild(ionItem);

  }


  render() {
    return (
      <Host class="ion-padding">
        {this.processHTML()}
      </Host>
    );
  }

}
