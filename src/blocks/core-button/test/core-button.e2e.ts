import { newE2EPage } from '@stencil/core/testing';

describe('core-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-button></core-button>');

    const element = await page.find('core-button');
    expect(element).toHaveClass('hydrated');
  });
});
