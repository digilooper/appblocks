import { newE2EPage } from '@stencil/core/testing';

describe('core-embed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-embed></core-embed>');

    const element = await page.find('core-embed');
    expect(element).toHaveClass('hydrated');
  });
});
