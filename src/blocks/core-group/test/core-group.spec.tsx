import { newSpecPage } from '@stencil/core/testing';
import { CoreGroup } from '../core-group';

describe('core-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreGroup],
      html: `<core-group></core-group>`,
    });
    expect(page.root).toEqualHtml(`
      <core-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-group>
    `);
  });
});
