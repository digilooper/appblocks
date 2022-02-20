import { newSpecPage } from '@stencil/core/testing';
import { CoreMediaText } from '../core-media-text';

describe('core-media-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreMediaText],
      html: `<core-media-text></core-media-text>`,
    });
    expect(page.root).toEqualHtml(`
      <core-media-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-media-text>
    `);
  });
});
