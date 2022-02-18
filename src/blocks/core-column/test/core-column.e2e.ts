import { newE2EPage } from '@stencil/core/testing';

describe('core-column', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-column></core-column>');

    const element = await page.find('core-column');
    expect(element).toHaveClass('hydrated');
  });
});
