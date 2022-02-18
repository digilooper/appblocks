import { newSpecPage } from '@stencil/core/testing';
import { CoreFile } from '../core-file';

describe('core-file', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreFile],
      html: `<core-file></core-file>`,
    });
    expect(page.root).toEqualHtml(`
      <core-file>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-file>
    `);
  });
});
