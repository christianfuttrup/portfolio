import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsComponent } from './socials.component';

describe('SocialsComponent', () => {
  let component: SocialsComponent;
  let fixture: ComponentFixture<SocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display icons', () => {
    expect(component.mail).toBeDefined();
    expect(component.linkedIn).toBeDefined();
    expect(component.twitter).toBeDefined();
  })
});
