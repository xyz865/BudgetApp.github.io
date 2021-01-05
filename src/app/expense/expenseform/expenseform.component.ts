import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-expenseform',
  templateUrl: './expenseform.component.html',
  styleUrls: ['./expenseform.component.css']
})
export class ExpenseformComponent implements OnInit {

  constructor(private service: CrudService) { }

  expense: String;
  expenseAmount: Number

  onSubmit(form) {
    let Record = {}

    Record["expense"] = this.expense
    Record["expenseAmount"] = this.expenseAmount

    this.service.createExpense(Record)
    .then(() => { 
      this.expense = ""
      this.expenseAmount = null
    });
  }

  ngOnInit(): void {
  }

}
