import { newE2EPage } from '@stencil/core/testing';

describe('core-page-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-page-list></core-page-list>');

    const element = await page.find('core-page-list');
    expect(element).toHaveClass('hydrated');
  });
});
