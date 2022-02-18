import { newE2EPage } from '@stencil/core/testing';

describe('core-text-columns', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-text-columns></core-text-columns>');

    const element = await page.find('core-text-columns');
    expect(element).toHaveClass('hydrated');
  });
});
