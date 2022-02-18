import { newE2EPage } from '@stencil/core/testing';

describe('core-seperator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-seperator></core-seperator>');

    const element = await page.find('core-seperator');
    expect(element).toHaveClass('hydrated');
  });
});
