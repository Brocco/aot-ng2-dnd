import { AotNg2DndPage } from './app.po';

describe('aot-ng2-dnd App', function() {
  let page: AotNg2DndPage;

  beforeEach(() => {
    page = new AotNg2DndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
