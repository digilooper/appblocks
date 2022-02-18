import { newSpecPage } from '@stencil/core/testing';
import { CoreColumn } from '../core-column';

describe('core-column', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreColumn],
      html: `<core-column></core-column>`,
    });
    expect(page.root).toEqualHtml(`
      <core-column>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-column>
    `);
  });
});
