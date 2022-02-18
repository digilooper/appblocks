import { newE2EPage } from '@stencil/core/testing';

describe('core-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-heading></core-heading>');

    const element = await page.find('core-heading');
    expect(element).toHaveClass('hydrated');
  });
});
