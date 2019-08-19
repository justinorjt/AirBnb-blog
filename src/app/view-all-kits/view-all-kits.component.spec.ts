import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllKitsComponent } from './view-all-kits.component';

describe('ViewAllKitsComponent', () => {
  let component: ViewAllKitsComponent;
  let fixture: ComponentFixture<ViewAllKitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllKitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
