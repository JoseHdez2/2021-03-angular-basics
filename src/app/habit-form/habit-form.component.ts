import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-form',
  template: `
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add habit" formControlName="title" />
      <button type="submit">Add</button>
    </form>
  `,
  styles: [
  ]
})
export class HabitFormComponent implements OnInit {
  habitForm: any;

  @Output() addHabit = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { 
    this.habitForm = this.formBuilder.group({
      title: '',
    })
  }

  onSubmit(newHabit) {
    this.addHabit.emit(newHabit);
    this.habitForm.reset();
  }

  ngOnInit(): void {
  }

}
