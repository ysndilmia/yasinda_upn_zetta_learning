import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModullComponent } from './modull.component';

describe('ModullComponent', () => {
  let component: ModullComponent;
  let fixture: ComponentFixture<ModullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
