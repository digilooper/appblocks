import { newSpecPage } from '@stencil/core/testing';
import { CoreQuote } from '../core-quote';

describe('core-quote', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreQuote],
      html: `<core-quote></core-quote>`,
    });
    expect(page.root).toEqualHtml(`
      <core-quote>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-quote>
    `);
  });
});
