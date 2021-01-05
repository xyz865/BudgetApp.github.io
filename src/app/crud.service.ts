import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) {}

  createIncome(Record) {
    return this.firestore.collection("income").add(Record);
  }

  showIncome() {
    return this.firestore.collection("income").snapshotChanges();
  }

  deleteIncome(id) {
    return this.firestore.collection("income").doc(id).delete();
  }



  createExpense(Record) {
    return this.firestore.collection("expense").add(Record);
  }

  showExpense() {
    return this.firestore.collection("expense").snapshotChanges();
  }

  deleteExpense(id) {
    return this.firestore.collection("expense").doc(id).delete();
  }
}
