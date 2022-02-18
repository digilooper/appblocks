import { newSpecPage } from '@stencil/core/testing';
import { CoreCategories } from '../core-categories';

describe('core-categories', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreCategories],
      html: `<core-categories></core-categories>`,
    });
    expect(page.root).toEqualHtml(`
      <core-categories>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-categories>
    `);
  });
});
