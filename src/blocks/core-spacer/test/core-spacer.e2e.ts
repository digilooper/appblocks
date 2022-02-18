import { newE2EPage } from '@stencil/core/testing';

describe('core-spacer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-spacer></core-spacer>');

    const element = await page.find('core-spacer');
    expect(element).toHaveClass('hydrated');
  });
});
