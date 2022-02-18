import { newE2EPage } from '@stencil/core/testing';

describe('core-cover', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-cover></core-cover>');

    const element = await page.find('core-cover');
    expect(element).toHaveClass('hydrated');
  });
});
