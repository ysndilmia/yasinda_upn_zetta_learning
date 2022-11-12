import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardsComponent } from './item-cards.component';

describe('ItemCardsComponent', () => {
  let component: ItemCardsComponent;
  let fixture: ComponentFixture<ItemCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});