import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesummaryComponent } from './pagesummary.component';

describe('PagesummaryComponent', () => {
  let component: PagesummaryComponent;
  let fixture: ComponentFixture<PagesummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
