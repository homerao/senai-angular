import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaTableComponent } from './vaga-table.component';

describe('VagaTableComponent', () => {
  let component: VagaTableComponent;
  let fixture: ComponentFixture<VagaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
