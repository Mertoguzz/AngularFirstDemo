import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service'; // ProductService modülünü bildiriyoruz
 
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoService) { } // servisi constructor üzerinden enjekte ettik
  allTodos; // Firestore koleksiyonundaki tüm dokümanları temsil edecen değişkenimiz
  ngOnInit() {
    /*
    Bileşen initialize aşamasındayken servisten tüm taskları çekiyoruz.
    Subscribe metoduyla da servisin getTodos metodundan dönen sonuç kümesini,
    allTodos isimli değişkene bağlıyoruz ki bunu bileşenin ön yüzü kullanıyor
    */
    this.todoService
      .getTodoList()
      .subscribe(res => this.allTodos = res);
  }
 
  /*
    Bir taskı silmek için kullandığımız metod. 
    Servis tarafındaki deleteTodo çağrılıyor.
    Parametre olarak o anki todo içeriği gönderilmekte. Burada direkt nesneyi değil de nesneye ait bir unique id tanımlayıp onu gönderebilirdik.
  */
  delete = p => this.todoService.deleteTodo(p).then(r => {
    //alert('silindi');
  });
 
}