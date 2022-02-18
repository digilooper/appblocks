import { newSpecPage } from '@stencil/core/testing';
import { CorePullquote } from '../core-pullquote';

describe('core-pullquote', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CorePullquote],
      html: `<core-pullquote></core-pullquote>`,
    });
    expect(page.root).toEqualHtml(`
      <core-pullquote>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-pullquote>
    `);
  });
});
