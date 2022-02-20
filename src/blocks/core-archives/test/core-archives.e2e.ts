import { newE2EPage } from '@stencil/core/testing';

describe('core-archives', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-archives></core-archives>');

    const element = await page.find('core-archives');
    expect(element).toHaveClass('hydrated');
  });
});
