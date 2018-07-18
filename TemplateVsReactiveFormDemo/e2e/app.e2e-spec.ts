import { TemplateDrivenFormPage } from './app.po';

describe('template-driven-form App', () => {
  let page: TemplateDrivenFormPage;

  beforeEach(() => {
    page = new TemplateDrivenFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
