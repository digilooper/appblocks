import { newE2EPage } from '@stencil/core/testing';

describe('core-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-video></core-video>');

    const element = await page.find('core-video');
    expect(element).toHaveClass('hydrated');
  });
});
