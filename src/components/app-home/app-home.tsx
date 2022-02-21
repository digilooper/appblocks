import { Component, ComponentInterface, h, State } from '@stencil/core';
import { state } from '../../services/store';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome implements ComponentInterface {

  @State() data: any;

  componentWillLoad(): void | Promise<void> {
      this.loadPosts();
  }

  async loadPosts() {
    const baseUrl = 'https://appp.dev.apppresser.com/wp-json/';
    const headers = { 'Content-Type': 'application/json' };
  
    var request = new Request(`${baseUrl}wp/v2/posts`, {
      method: 'GET',
      headers: new Headers(headers),
    });
  
    try {
      const response = await fetch(request);
      const rsp = await response.json();
console.log(rsp)
      this.data = [...rsp];
      state.posts = this.data;
    }catch (error) {
      console.log(error);
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
            <ion-list>
              {
                this.data && this.data.map( item => (
                  <ion-item href={item.slug} innerHTML={item.title.rendered}></ion-item>
                ))
              }
            </ion-list>
          </div>
      </ion-content>,
    ];
  }
}