import { newSpecPage } from '@stencil/core/testing';
import { CoreCode } from '../core-code';

describe('core-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreCode],
      html: `<core-code></core-code>`,
    });
    expect(page.root).toEqualHtml(`
      <core-code>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-code>
    `);
  });
});
