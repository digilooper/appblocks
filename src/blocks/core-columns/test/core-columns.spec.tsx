import { newSpecPage } from '@stencil/core/testing';
import { CoreColumns } from '../core-columns';

describe('core-columns', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreColumns],
      html: `<core-columns></core-columns>`,
    });
    expect(page.root).toEqualHtml(`
      <core-columns>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-columns>
    `);
  });
});
