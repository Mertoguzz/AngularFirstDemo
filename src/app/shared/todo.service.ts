import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore"; 
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private firestore: AngularFirestore) { }
 
  /* 
  Yeni bir FormGroup nesnesi örnekliyoruz.
  title, summary isimli FormControl nesneleri içeriyor.
  bu özelliklere atanan değerleri Firebase tarafına yazacağız.
  element adları arayüz tarafında da birebir kullanılacaklar
  */
  todoForm = new FormGroup({
    title: new FormControl(''),
    summary: new FormControl(''),
  })
 
  
  addTodo(p) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("todo").add(p).
        then(res => { }, err => reject(err));
    });
  }
 
  getTodoList() {
    return this.firestore.collection("todo").snapshotChanges();
}

 
 deleteTodo(p) {
  return this.firestore
    .collection("todo")
    .doc(p.payload.doc.id) // firestrore tarafındaki id bilgisini kullanacak.
    .delete();
}
}