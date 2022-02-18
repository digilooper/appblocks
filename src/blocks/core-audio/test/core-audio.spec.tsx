import { newSpecPage } from '@stencil/core/testing';
import { CoreAudio } from '../core-audio';

describe('core-audio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreAudio],
      html: `<core-audio></core-audio>`,
    });
    expect(page.root).toEqualHtml(`
      <core-audio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </core-audio>
    `);
  });
});
