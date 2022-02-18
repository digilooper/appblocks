import { newSpecPage } from '@stencil/core/testing';
import { CoreSeperator } from '../core-seperator';

describe('core-seperator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreSeperator],
      html: `<core-seperator></core-seperator>`,
    });
    expect(page.root).toEqualHtml(`
      <core-seperator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-seperator>
    `);
  });
});
