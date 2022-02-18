import { newSpecPage } from '@stencil/core/testing';
import { CoreEmbed } from '../core-embed';

describe('core-embed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreEmbed],
      html: `<core-embed></core-embed>`,
    });
    expect(page.root).toEqualHtml(`
      <core-embed>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-embed>
    `);
  });
});
