import { newE2EPage } from '@stencil/core/testing';

describe('core-columns', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-columns></core-columns>');

    const element = await page.find('core-columns');
    expect(element).toHaveClass('hydrated');
  });
});
