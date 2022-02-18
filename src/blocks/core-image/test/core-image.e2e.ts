import { newE2EPage } from '@stencil/core/testing';

describe('core-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-image></core-image>');

    const element = await page.find('core-image');
    expect(element).toHaveClass('hydrated');
  });
});
