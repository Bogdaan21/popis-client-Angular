import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImenikComponent } from './imenik.component';

describe('ImenikComponent', () => {
  let component: ImenikComponent;
  let fixture: ComponentFixture<ImenikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImenikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
