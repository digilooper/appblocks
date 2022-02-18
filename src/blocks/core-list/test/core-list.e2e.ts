import { newE2EPage } from '@stencil/core/testing';

describe('core-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-list></core-list>');

    const element = await page.find('core-list');
    expect(element).toHaveClass('hydrated');
  });
});
