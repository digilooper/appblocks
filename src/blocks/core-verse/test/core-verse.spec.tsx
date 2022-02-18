import { newSpecPage } from '@stencil/core/testing';
import { CoreVerse } from '../core-verse';

describe('core-verse', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreVerse],
      html: `<core-verse></core-verse>`,
    });
    expect(page.root).toEqualHtml(`
      <core-verse>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-verse>
    `);
  });
});
