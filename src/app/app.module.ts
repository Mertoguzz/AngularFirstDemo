import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './shared/todo.service'; // Tüm bileşenlerde kullanabilmek için TodoServie modülünü bildirip alttaki providers özelliğine de ekledik
import {ReactiveFormsModule} from '@angular/forms'; // Service tarafında FormControl ve FormGroup modüllerini kullanabilmek için bildirdik ve aşağıdaki import kısmında ekledik
import { CoreModule } from './core/components/core.module';
import { HomeComponent } from './home/home.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // AngularFireModule' ü environment.ts içerisindeki firebaseConfig ayarları ile başlatmış olduk
    AngularFirestoreModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [TodoService], 
  bootstrap: [AppComponent]
})
export class AppModule { };