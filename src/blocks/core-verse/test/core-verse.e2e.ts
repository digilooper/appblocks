import { newE2EPage } from '@stencil/core/testing';

describe('core-verse', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-verse></core-verse>');

    const element = await page.find('core-verse');
    expect(element).toHaveClass('hydrated');
  });
});
