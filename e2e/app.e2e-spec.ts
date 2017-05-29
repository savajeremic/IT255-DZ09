import { IT255DZ09Page } from './app.po';

describe('it255-dz09 App', () => {
  let page: IT255DZ09Page;

  beforeEach(() => {
    page = new IT255DZ09Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
