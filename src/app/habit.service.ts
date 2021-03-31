import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  private refetchSubject = new BehaviorSubject(null);

  get refetch() {
    return this.refetchSubject.asObservable();
  }

  constructor(private http: HttpClient) { }

  getHabits() : Observable<Habit[]> {
    // return of(this.habits);
    return this.http.get<Habit[]>("/api/habits");
  }

  addHabit(newHabit) {
    // const id = this.habits.length + 1;
    // newHabit.id = id;
    // this.habits.push(newHabit);

    return this.http
      .post<Habit>('/api/habits', newHabit)
      .pipe(tap(() => this.refetchSubject.next(null)));
  }

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
}
