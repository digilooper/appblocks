import { newE2EPage } from '@stencil/core/testing';

describe('core-audio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-audio></core-audio>');

    const element = await page.find('core-audio');
    expect(element).toHaveClass('hydrated');
  });
});
