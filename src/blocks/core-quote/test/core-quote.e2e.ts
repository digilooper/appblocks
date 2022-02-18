import { newE2EPage } from '@stencil/core/testing';

describe('core-quote', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-quote></core-quote>');

    const element = await page.find('core-quote');
    expect(element).toHaveClass('hydrated');
  });
});
