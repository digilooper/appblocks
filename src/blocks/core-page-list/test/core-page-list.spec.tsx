import { newSpecPage } from '@stencil/core/testing';
import { CorePageList } from '../core-page-list';

describe('core-page-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CorePageList],
      html: `<core-page-list></core-page-list>`,
    });
    expect(page.root).toEqualHtml(`
      <core-page-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-page-list>
    `);
  });
});
