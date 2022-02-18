import { newSpecPage } from '@stencil/core/testing';
import { CoreCover } from '../core-cover';

describe('core-cover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreCover],
      html: `<core-cover></core-cover>`,
    });
    expect(page.root).toEqualHtml(`
      <core-cover>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-cover>
    `);
  });
});
