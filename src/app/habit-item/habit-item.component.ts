import { Component, Input, OnInit } from '@angular/core';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-item',
  template: `<li [style.color]="habit.streak ? 'red' : 'black' ">
    {{habit.title}} (Count: {{habit.count}})<button type="button">Delete</button>
  </li>`,
  styles: [
  ]
})
export class HabitItemComponent implements OnInit {
  @Input() habit: Habit;
  constructor() { }

  ngOnInit(): void {
  }

}
