import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepostputComponent } from './homepostput.component';

describe('HomepostputComponent', () => {
  let component: HomepostputComponent;
  let fixture: ComponentFixture<HomepostputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepostputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepostputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
