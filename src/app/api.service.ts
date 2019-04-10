import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
    constructor (
        private http: HttpClient
    ) {}

    getData() {
        return this.http.get('https://jsonplaceholder.typicode.com/photos');
    }
}
