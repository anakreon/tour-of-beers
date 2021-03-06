import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DialogflowService {

    private baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
    private token: string = environment.dialogflow.token;

    constructor (private http: HttpClient) {}

    public getResponse (query: string) {
        const data = {
            query: query,
            lang: 'en',
            sessionId: '12345'
        };
        return this.http.post(this.baseURL, data, { headers: this.getHeaders() });
    }

    private getHeaders () {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        });
    }
}