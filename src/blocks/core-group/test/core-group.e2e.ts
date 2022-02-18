import { newE2EPage } from '@stencil/core/testing';

describe('core-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-group></core-group>');

    const element = await page.find('core-group');
    expect(element).toHaveClass('hydrated');
  });
});
