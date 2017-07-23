import { Pes6Page } from './app.po';

describe('pes6 App', () => {
  let page: Pes6Page;

  beforeEach(() => {
    page = new Pes6Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
