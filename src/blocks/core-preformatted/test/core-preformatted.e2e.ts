import { newE2EPage } from '@stencil/core/testing';

describe('core-preformatted', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-preformatted></core-preformatted>');

    const element = await page.find('core-preformatted');
    expect(element).toHaveClass('hydrated');
  });
});
