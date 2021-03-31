import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-item',
  template: `<li>{{habit.title}}</li>`,
  styles: [
  ]
})
export class HabitItemComponent implements OnInit {
  @Input() habit;
  constructor() { }

  ngOnInit(): void {
  }

}
