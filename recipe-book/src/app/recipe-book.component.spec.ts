/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RecipeBookComponent } from './recipe-book.component';

describe('RecipeBookComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipeBookComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(RecipeBookComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'rb works!'`, async(() => {
    let fixture = TestBed.createComponent(RecipeBookComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rb works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(RecipeBookComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('rb works!');
  }));
});
