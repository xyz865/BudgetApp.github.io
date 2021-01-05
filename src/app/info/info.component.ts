import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private service: CrudService) { }

  public totalExpense;
  public totalExp;

  public totalIncome;
  public totalInc;

  ngOnInit(): void {
    this.service.showIncome()
    .subscribe(data => {
      this.totalIncome = data.map(e => {
        return e.payload.doc.data()["incomeAmount"]
      })
      this.totalInc = this.totalIncome.reduce((a, b) => a+b, 0)
    })

    this.service.showExpense()
    .subscribe(data => {
      this.totalExpense = data.map(e => {
        return e.payload.doc.data()["expenseAmount"]
      })
      this.totalExp = this.totalExpense.reduce((a, b) => a+b, 0)
    })
  }
}
