import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@inject(HttpClient)
export class Todos {
    todoItems: Array<ITodoItem>;

    constructor(private http: HttpClient) { }

    activate() {
        return this.http.fetch("http://localhost:53403/api/todos").
            then(response => response.json()).then(data => {
                this.todoItems = data;
            });
    }
}

export interface ITodoItem {
    id: number;
    name: string;
    isCompleted: boolean;
    createdAt: Date;
    dueDate: Date;
}