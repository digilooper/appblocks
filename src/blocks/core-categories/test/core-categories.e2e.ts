import { newE2EPage } from '@stencil/core/testing';

describe('core-categories', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-categories></core-categories>');

    const element = await page.find('core-categories');
    expect(element).toHaveClass('hydrated');
  });
});
