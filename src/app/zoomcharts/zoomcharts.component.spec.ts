import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomchartsComponent } from './zoomcharts.component';

describe('ZoomchartsComponent', () => {
  let component: ZoomchartsComponent;
  let fixture: ComponentFixture<ZoomchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
