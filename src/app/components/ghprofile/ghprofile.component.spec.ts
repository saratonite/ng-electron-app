import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhprofileComponent } from './ghprofile.component';

describe('GhprofileComponent', () => {
  let component: GhprofileComponent;
  let fixture: ComponentFixture<GhprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
