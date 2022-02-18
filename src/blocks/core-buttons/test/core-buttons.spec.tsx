import { newSpecPage } from '@stencil/core/testing';
import { CoreButtons } from '../core-buttons';

describe('core-buttons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreButtons],
      html: `<core-buttons></core-buttons>`,
    });
    expect(page.root).toEqualHtml(`
      <core-buttons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-buttons>
    `);
  });
});
