import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResestComponent } from './request-resest.component';

describe('RequestResestComponent', () => {
  let component: RequestResestComponent;
  let fixture: ComponentFixture<RequestResestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestResestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestResestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
