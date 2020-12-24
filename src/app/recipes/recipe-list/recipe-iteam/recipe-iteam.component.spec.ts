import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIteamComponent } from './recipe-iteam.component';

describe('RecipeIteamComponent', () => {
  let component: RecipeIteamComponent;
  let fixture: ComponentFixture<RecipeIteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeIteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
