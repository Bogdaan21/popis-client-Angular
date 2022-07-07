import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikalpostputComponent } from './artikalpostput.component';

describe('ArtikalpostputComponent', () => {
  let component: ArtikalpostputComponent;
  let fixture: ComponentFixture<ArtikalpostputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikalpostputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtikalpostputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
