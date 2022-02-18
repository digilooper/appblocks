import { newSpecPage } from '@stencil/core/testing';
import { CoreParagraph } from '../core-paragraph';

describe('core-paragraph', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreParagraph],
      html: `<core-paragraph></core-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <core-paragraph>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-paragraph>
    `);
  });
});
