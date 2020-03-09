import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercontainerComponent } from './uppercontainer.component';

describe('UppercontainerComponent', () => {
  let component: UppercontainerComponent;
  let fixture: ComponentFixture<UppercontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppercontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppercontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
