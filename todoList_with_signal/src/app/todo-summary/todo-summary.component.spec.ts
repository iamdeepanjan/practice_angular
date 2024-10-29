import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSummaryComponent } from './todo-summary.component';

describe('TodoSummaryComponent', () => {
  let component: TodoSummaryComponent;
  let fixture: ComponentFixture<TodoSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
