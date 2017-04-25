import { SmmPage } from './app.po';

describe('smm App', () => {
  let page: SmmPage;

  beforeEach(() => {
    page = new SmmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
