import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBrComponent } from './search-br.component';

describe('SearchBrComponent', () => {
  let component: SearchBrComponent;
  let fixture: ComponentFixture<SearchBrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
