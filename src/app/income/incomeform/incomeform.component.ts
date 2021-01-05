import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-incomeform',
  templateUrl: './incomeform.component.html',
  styleUrls: ['./incomeform.component.css']
})
export class IncomeformComponent implements OnInit {

  constructor(private service: CrudService) { }

  income: String;
  incomeAmount: Number

  onSubmit(form) {
    let Record = {}

    Record["income"] = this.income
    Record["incomeAmount"] = this.incomeAmount

    this.service.createIncome(Record)
    .then(() => { 
      this.income = ""
      this.incomeAmount = null
    });
  }

  ngOnInit(): void {
  }

}
