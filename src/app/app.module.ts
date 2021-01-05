import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { CrudService } from './crud.service';

import { environment } from '../environments/environment';
import { InfoComponent } from './info/info.component';
import { ExpenseformComponent } from './expense/expenseform/expenseform.component';
import { IncomeformComponent } from './income/incomeform/incomeform.component';
import { IncomelistComponent } from './income/incomelist/incomelist.component';
import { ExpenselistComponent } from './expense/expenselist/expenselist.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ExpenseformComponent,
    IncomeformComponent,
    IncomelistComponent,
    ExpenselistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
