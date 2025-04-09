import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTableDataComponent } from './delete-table-data.component';

describe('DeleteTableDataComponent', () => {
  let component: DeleteTableDataComponent;
  let fixture: ComponentFixture<DeleteTableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTableDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
