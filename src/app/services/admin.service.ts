import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WebItem} from '../entity/web-item';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseURL = environment.apiHost + '/admin/vocab/image';
  private getImageFromWebURL = this.baseURL + '/get-from-web/';
  private saveImageURL = this.baseURL + '/save/';
  private getPendingWordsURL = this.baseURL + '/pending-words/get';
  private deletePendingWordURL = this.baseURL + '/pending-words/delete/';

  constructor(private http: HttpClient) {}

  httpOptions = () => {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('user:' + localStorage.getItem('password'))
      })
    };
  }

  getImageFromWeb(word: string, start: number = 1): Observable<WebItem[]> {
    const url = this.getImageFromWebURL + word + '?start=' + start;
    return this.http.get<WebItem[]>(url, this.httpOptions());
  }

  saveImage(word: string, base64Image: string): Observable<any> {
    const url = this.saveImageURL + word;
    console.log(`post to ${url}`);
    return this.http.post(url, base64Image, this.httpOptions());
  }

  getPendingWords(): Observable<string[]> {
    return this.http.get<string[]>(this.getPendingWordsURL, this.httpOptions());
  }

  deletePendingWord(word: string): void {
    this.http.delete(this.deletePendingWordURL + word, this.httpOptions()).subscribe();
  }
}
