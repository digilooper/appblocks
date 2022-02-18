import { newSpecPage } from '@stencil/core/testing';
import { CoreTable } from '../core-table';

describe('core-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreTable],
      html: `<core-table></core-table>`,
    });
    expect(page.root).toEqualHtml(`
      <core-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-table>
    `);
  });
});
