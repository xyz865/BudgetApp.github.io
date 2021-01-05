import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-expenselist',
  templateUrl: './expenselist.component.html',
  styleUrls: ['./expenselist.component.css']
})
export class ExpenselistComponent implements OnInit {

  constructor(private service: CrudService) { }

  expenseArray = [];

  delete(id) {
    this.service.deleteExpense(id);
  }

  ngOnInit(): void {
    this.service.showExpense()
    .subscribe(data => {
      this.expenseArray = data.map(e => {
        return {
          id: e.payload.doc.id,
          expense: e.payload.doc.data()["expense"],
          expenseAmount: e.payload.doc.data()["expenseAmount"]
        }
      })
    })
  }

}
