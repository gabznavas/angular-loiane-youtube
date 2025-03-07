import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaTestarComponent } from './diretiva-testar.component';

describe('DiretivaTestarComponent', () => {
  let component: DiretivaTestarComponent;
  let fixture: ComponentFixture<DiretivaTestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiretivaTestarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiretivaTestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
