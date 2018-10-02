import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    getUser(userId: Number): Observable<User> {
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    }

    getPosts(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}
