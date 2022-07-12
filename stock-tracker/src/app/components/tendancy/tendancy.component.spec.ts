import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendancyComponent } from './tendancy.component';

describe('TendancyComponent', () => {
  let component: TendancyComponent;
  let fixture: ComponentFixture<TendancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TendancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TendancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
