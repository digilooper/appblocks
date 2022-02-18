import { newE2EPage } from '@stencil/core/testing';

describe('core-pullquote', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-pullquote></core-pullquote>');

    const element = await page.find('core-pullquote');
    expect(element).toHaveClass('hydrated');
  });
});
