import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { User } from "../models/user";

@Injectable({
    providedIn: "root"
})
export class ApiService {
    basePath = 'http://192.168.0.107:3000/api';

    constructor(private http: HttpClient) { }

    get headers() {
        return new HttpHeaders({
            "Content-Type": "application/json",
        });
    }
    getItems(): Observable<User[]> {
        return this.http.get<User[]>(this.basePath + '/users', { headers: this.headers });
    }

    getItem(id: number): Observable<User> {
        return this.http.get<User>(this.basePath + '/users/' + id, { headers: this.headers });
    }
    searchItem(searchValue: string): Observable<User[]> {
        return this.http.get<User[]>(this.basePath + '/users?name_like=' + searchValue);
    }
}
