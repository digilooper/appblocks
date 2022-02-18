import { newSpecPage } from '@stencil/core/testing';
import { CoreImage } from '../core-image';

describe('core-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreImage],
      html: `<core-image></core-image>`,
    });
    expect(page.root).toEqualHtml(`
      <core-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-image>
    `);
  });
});
