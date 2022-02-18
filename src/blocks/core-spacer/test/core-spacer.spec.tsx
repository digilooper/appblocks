import { newSpecPage } from '@stencil/core/testing';
import { CoreSpacer } from '../core-spacer';

describe('core-spacer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreSpacer],
      html: `<core-spacer></core-spacer>`,
    });
    expect(page.root).toEqualHtml(`
      <core-spacer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-spacer>
    `);
  });
});
