import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundeslanderComponent } from './bundeslander.component';

describe('BundeslanderComponent', () => {
  let component: BundeslanderComponent;
  let fixture: ComponentFixture<BundeslanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundeslanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundeslanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
