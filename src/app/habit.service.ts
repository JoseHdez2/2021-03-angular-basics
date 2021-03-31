import { Injectable } from '@angular/core';

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
}
