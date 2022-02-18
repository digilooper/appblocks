import { newSpecPage } from '@stencil/core/testing';
import { CoreTextColumns } from '../core-text-columns';

describe('core-text-columns', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreTextColumns],
      html: `<core-text-columns></core-text-columns>`,
    });
    expect(page.root).toEqualHtml(`
      <core-text-columns>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-text-columns>
    `);
  });
});
