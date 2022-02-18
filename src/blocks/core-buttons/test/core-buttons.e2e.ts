import { newE2EPage } from '@stencil/core/testing';

describe('core-buttons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-buttons></core-buttons>');

    const element = await page.find('core-buttons');
    expect(element).toHaveClass('hydrated');
  });
});
