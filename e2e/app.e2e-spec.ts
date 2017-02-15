import { Ngfbauth01Page } from './app.po';

describe('ngfbauth01 App', function() {
  let page: Ngfbauth01Page;

  beforeEach(() => {
    page = new Ngfbauth01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
