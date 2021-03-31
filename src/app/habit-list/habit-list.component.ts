import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-item *ngFor="let habit of habits" [habit]="habit"></app-habit-item>
    </ul>
  `,
  styles: [
  ]
})
export class HabitListComponent implements OnInit {
  habitForm;
  habits = [
    {
      id: 1,
      title: "Play games"
    },
    {
      id: 2,
      title: "Take names"
    }
  ]

  constructor(private formBuilder: FormBuilder) { 
    this.habitForm = this.formBuilder.group({
      title: '',
    })
  }

  onAddHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }

  ngOnInit(): void {
  }

}
