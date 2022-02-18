import { Component, ComponentInterface, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome implements ComponentInterface {

  blocks = [
    'core/heading',
    'core/list',
    'core/paragraph',
    'core/cover',
    'core/image',
    'core/gallery',
    'core/quote',
    'core/pullquote',
    'core/verse',
    'core/buttons',
    'core/separator',
    'core/social-links',
    'core/text-columns',
    'core/columns',
    'core/audio',
    'core/video',
    'core/code',
    'core/page-list',
    'core/latest-posts',
    'core/categories',
    'core/table',
    'core/embed',
  ];

  @State() data: any;

  componentWillLoad(): void | Promise<void> {
      this.loadPost();
  }

  async loadPost() {
    const baseUrl = 'https://appp.dev.apppresser.com/wp-json/';
    const headers = { 'Content-Type': 'application/json' };
  
    var request = new Request(`${baseUrl}wp/v2/posts`, {
      method: 'GET',
      headers: new Headers(headers),
    });
  
    try {
      const response = await fetch(request);
      const rsp = await response.json();

      const blocks = rsp[0].appp_blocks.map( item => {
        const obj = Object.assign({}, item);
        obj['blockName'] = item.blockName.replace("/", "-");
        return obj;
      })

      this.data = blocks;
      console.log(blocks);
      return rsp;
    } catch (err) {
      window.console.log(err);
    } finally {
      window.console.log('Load Post finished');
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
          <div style={{'max-width': '820px', 'margin': '0 auto'}}>
            {!this.data && <ion-spinner style={{'display': 'flex', 'justify-content': 'center', 'align-items': 'center', 'margin': '40px auto'}}></ion-spinner>}
          {
            this.data && this.data.map( item => {
              return ( <item.blockName data={item}></item.blockName> )
            })
          }
          </div>
      </ion-content>,
    ];
  }
}
