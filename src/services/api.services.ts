import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Todo } from "src/models/todo.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn : 'root'
})

export class ApiService {
    
    private readonly baseUrl = environment.baseUrl;

    constructor(
        private http : HttpClient
    ){

    }

    addTask(title : string, description: string): Observable<Todo>{
        return this.http.post<Todo>(this.baseUrl, { title, description});
    }

    getTodos():Observable<Todo[]>{
        return this.http.get<Todo[]>(this.baseUrl);
    }

    deleteTo(id : string) : Observable<Todo> {
        return this.http.delete<Todo>(`${this.baseUrl}/${id}`);
    }

    updateTodo(id : string, changes : Todo): Observable<Todo>{
        return this.http.put<Todo>(`${this.baseUrl}/${id}`, changes);
    }
}