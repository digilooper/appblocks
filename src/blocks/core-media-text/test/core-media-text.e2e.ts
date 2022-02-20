import { newE2EPage } from '@stencil/core/testing';

describe('core-media-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-media-text></core-media-text>');

    const element = await page.find('core-media-text');
    expect(element).toHaveClass('hydrated');
  });
});
