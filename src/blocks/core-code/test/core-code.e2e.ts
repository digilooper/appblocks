import { newE2EPage } from '@stencil/core/testing';

describe('core-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-code></core-code>');

    const element = await page.find('core-code');
    expect(element).toHaveClass('hydrated');
  });
});
