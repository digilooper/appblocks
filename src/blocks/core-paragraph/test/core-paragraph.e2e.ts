import { newE2EPage } from '@stencil/core/testing';

describe('core-paragraph', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-paragraph></core-paragraph>');

    const element = await page.find('core-paragraph');
    expect(element).toHaveClass('hydrated');
  });
});
