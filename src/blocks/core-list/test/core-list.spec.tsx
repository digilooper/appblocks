import { newSpecPage } from '@stencil/core/testing';
import { CoreList } from '../core-list';

describe('core-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreList],
      html: `<core-list></core-list>`,
    });
    expect(page.root).toEqualHtml(`
      <core-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-list>
    `);
  });
});
