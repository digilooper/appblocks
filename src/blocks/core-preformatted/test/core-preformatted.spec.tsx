import { newSpecPage } from '@stencil/core/testing';
import { CorePreformatted } from '../core-preformatted';

describe('core-preformatted', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CorePreformatted],
      html: `<core-preformatted></core-preformatted>`,
    });
    expect(page.root).toEqualHtml(`
      <core-preformatted>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-preformatted>
    `);
  });
});
