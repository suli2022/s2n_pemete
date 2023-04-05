import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('létrehozható az app komponens', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`A title értéke 'pemete'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pemete');
  });

  it('A title megjelenik', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('pemete');
  });
  it('Egy darab nav elem létzik', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const nav = fixture.debugElement.queryAll(By.css('nav'));
    expect(nav.length).toEqual(1);
  });
  it('A nav elemben két a elem van', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const nav_a = fixture.debugElement.queryAll(By.css('nav a'));
    expect(nav_a.length).toEqual(2);
  });
});
