import { newSpecPage } from '@stencil/core/testing';
import { CoreGallery } from '../core-gallery';

describe('core-gallery', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreGallery],
      html: `<core-gallery></core-gallery>`,
    });
    expect(page.root).toEqualHtml(`
      <core-gallery>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-gallery>
    `);
  });
});
