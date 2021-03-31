import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
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

  constructor() { }

  getHabits() : Observable<any> {
    return of(this.habits);
  }

  addHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
