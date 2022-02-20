import { newSpecPage } from '@stencil/core/testing';
import { CoreArchives } from '../core-archives';

describe('core-archives', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreArchives],
      html: `<core-archives></core-archives>`,
    });
    expect(page.root).toEqualHtml(`
      <core-archives>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-archives>
    `);
  });
});
