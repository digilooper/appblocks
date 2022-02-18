import { newE2EPage } from '@stencil/core/testing';

describe('core-gallery', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-gallery></core-gallery>');

    const element = await page.find('core-gallery');
    expect(element).toHaveClass('hydrated');
  });
});
