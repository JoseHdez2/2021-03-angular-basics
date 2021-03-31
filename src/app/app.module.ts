import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component';
import { HabitItemComponent } from './habit-item/habit-item.component';
import { HabitFormComponent } from './habit-form/habit-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitDetailComponent,
    HabitItemComponent,
    HabitFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
