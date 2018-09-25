import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinVerifictionComponent } from './pin-verifiction.component';

describe('PinVerifictionComponent', () => {
  let component: PinVerifictionComponent;
  let fixture: ComponentFixture<PinVerifictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinVerifictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinVerifictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
