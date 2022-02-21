import { Component, Host, h, ComponentInterface, State, Prop } from '@stencil/core';
import { state } from '../../services/store';

@Component({
  tag: 'app-single-post',
  styleUrl: 'app-single-post.css',
})
export class AppSinglePost implements ComponentInterface {

  @Prop() slug: string;

  @State() post: any;

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

    const post = state.posts.filter( item => item.slug === this.slug );

    this.post = {...post[0]};

    const blocks = post[0].appp_blocks.map( item => {
      const obj = Object.assign({}, item);
      obj['blockName'] = item.blockName.replace("/", "-");
      return obj;
    })

    this.data = blocks;
  }

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title innerHTML={this.post && this.post.title && this.post.title.rendered}></ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
            <div style={{'max-width': '820px', 'margin': '0 auto'}}>
              {!this.data && <ion-spinner style={{'display': 'flex', 'justify-content': 'center', 'align-items': 'center', 'margin': '40px auto'}}></ion-spinner>}
            {
              this.data && this.data.map( item => {
                return ( <item.blockName data={item}></item.blockName> )
              })
            }
            </div>
        </ion-content>
      </Host>
    );
  }

}
