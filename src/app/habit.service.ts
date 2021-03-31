import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits: Habit[] = [
    {
      id: 1,
      title: "Play games",
      count: 5
    },
    {
      id: 2,
      title: "Take names",
      count: 6
    }
  ]

  constructor(private http: HttpClient) { }

  getHabits() : Observable<Habit[]> {
    // return of(this.habits);
    return this.http.get<Habit[]>("/api/habits")
  }

  addHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
