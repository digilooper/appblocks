import { newE2EPage } from '@stencil/core/testing';

describe('core-file', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-file></core-file>');

    const element = await page.find('core-file');
    expect(element).toHaveClass('hydrated');
  });
});
