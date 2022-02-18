import { newE2EPage } from '@stencil/core/testing';

describe('core-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<core-table></core-table>');

    const element = await page.find('core-table');
    expect(element).toHaveClass('hydrated');
  });
});
