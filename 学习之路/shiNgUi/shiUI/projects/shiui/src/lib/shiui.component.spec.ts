import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiuiComponent } from './shiui.component';

describe('ShiuiComponent', () => {
  let component: ShiuiComponent;
  let fixture: ComponentFixture<ShiuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
