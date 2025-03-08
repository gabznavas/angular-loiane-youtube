import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploPipeAsyncComponent } from './exemplo-pipe-async.component';

describe('ExemploPipeAsyncComponent', () => {
  let component: ExemploPipeAsyncComponent;
  let fixture: ComponentFixture<ExemploPipeAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExemploPipeAsyncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExemploPipeAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
