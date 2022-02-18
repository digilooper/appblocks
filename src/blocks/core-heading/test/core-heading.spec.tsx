import { newSpecPage } from '@stencil/core/testing';
import { CoreHeading } from '../core-heading';

describe('core-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreHeading],
      html: `<core-heading></core-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <core-heading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-heading>
    `);
  });
});
