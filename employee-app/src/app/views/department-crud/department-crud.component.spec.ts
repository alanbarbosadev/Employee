import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCrudComponent } from './department-crud.component';

describe('DepartmentCrudComponent', () => {
  let component: DepartmentCrudComponent;
  let fixture: ComponentFixture<DepartmentCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
