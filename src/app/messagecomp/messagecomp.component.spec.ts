import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagecompComponent } from './messagecomp.component';

describe('MessagecompComponent', () => {
  let component: MessagecompComponent;
  let fixture: ComponentFixture<MessagecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagecompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
