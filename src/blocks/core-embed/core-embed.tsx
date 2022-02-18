import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'core-embed',
  styleUrl: 'core-embed.css',
})
export class CoreEmbed implements ComponentInterface {

  @Prop() data: any;

  componentWillLoad(): void | Promise<void> {
      console.log(this.data);
  }

  addScript() {

    switch ( this.data.attrs.providerNameSlug ) {
      case 'twitter':
         return (
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      );

      case 'wordpress-news':

      return (
        <script async src="/assets/wp-embed.min.js" charset="utf-8"></script>
      )
       
    
     
    }

  }

  render() {
    return (
      <Host class="ion-padding" innerHTML={ this.data.embed }>
        { this.addScript() }
      </Host>
    );
  }

}


