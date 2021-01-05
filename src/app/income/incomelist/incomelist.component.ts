import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-incomelist',
  templateUrl: './incomelist.component.html',
  styleUrls: ['./incomelist.component.css']
})
export class IncomelistComponent implements OnInit {

  constructor(private service: CrudService) { }

  incomeArray = [];

  delete(id) {
    this.service.deleteIncome(id);
  }

  ngOnInit(): void {
    this.service.showIncome()
    .subscribe(data => {
      this.incomeArray = data.map(e => {
        return {
          id: e.payload.doc.id,
          income: e.payload.doc.data()["income"],
          incomeAmount: e.payload.doc.data()["incomeAmount"]
        }
      })
    })
  }

}
