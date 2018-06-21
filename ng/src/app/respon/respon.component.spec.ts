import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponComponent } from './respon.component';

describe('ResponComponent', () => {
  let component: ResponComponent;
  let fixture: ComponentFixture<ResponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
