import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImenikpostpustComponent } from './imenikpostpust.component';

describe('ImenikpostpustComponent', () => {
  let component: ImenikpostpustComponent;
  let fixture: ComponentFixture<ImenikpostpustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImenikpostpustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImenikpostpustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
