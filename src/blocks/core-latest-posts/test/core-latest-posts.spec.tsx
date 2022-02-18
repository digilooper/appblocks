import { newSpecPage } from '@stencil/core/testing';
import { CoreLatestPosts } from '../core-latest-posts';

describe('core-latest-posts', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreLatestPosts],
      html: `<core-latest-posts></core-latest-posts>`,
    });
    expect(page.root).toEqualHtml(`
      <core-latest-posts>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-latest-posts>
    `);
  });
});
