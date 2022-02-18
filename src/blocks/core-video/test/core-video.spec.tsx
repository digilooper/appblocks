import { newSpecPage } from '@stencil/core/testing';
import { CoreVideo } from '../core-video';

describe('core-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreVideo],
      html: `<core-video></core-video>`,
    });
    expect(page.root).toEqualHtml(`
      <core-video>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-video>
    `);
  });
});
