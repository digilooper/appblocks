import { newE2EPage } from '@stencil/core/testing';

describe('core-latest-posts', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-latest-posts></core-latest-posts>');

    const element = await page.find('core-latest-posts');
    expect(element).toHaveClass('hydrated');
  });
});
