import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomComponentsComponent } from './chat-room-components.component';

describe('ChatRoomComponentsComponent', () => {
  let component: ChatRoomComponentsComponent;
  let fixture: ComponentFixture<ChatRoomComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRoomComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
