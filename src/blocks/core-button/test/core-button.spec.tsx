import { newSpecPage } from '@stencil/core/testing';
import { CoreButton } from '../core-button';

describe('core-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreButton],
      html: `<core-button></core-button>`,
    });
    expect(page.root).toEqualHtml(`
      <core-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-button>
    `);
  });
});
