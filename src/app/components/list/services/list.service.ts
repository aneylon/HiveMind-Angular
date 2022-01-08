import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ListItem } from '../models/list-item';
import { List } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private listUrl = 'api/list';
  private listItemUrl = 'api/listItem';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(this.listUrl)
  }

  getList(id: number): Observable<List> {
    return this.http.get<List>(`${this.listUrl}/${id}`)
  }

  addList(list: List): Observable<List> {
    return this.http.post<List>(this.listUrl, list, this.httpOptions)
  }

  updateList(list: List): Observable<List> {
    return this.http.put<List>(this.listUrl, list, this.httpOptions)
  }

  deleteList(id: number): Observable<List> {
    return this.http.delete<List>(`${this.listUrl}/${id}`, this.httpOptions)
  }

  getListItem(id: number): Observable<ListItem> {
    return this.http.get<ListItem>(`${this.listItemUrl}/${id}`)
  }

  addListItem(listItem: ListItem): Observable<ListItem> {
    return this.http.post<ListItem>(this.listItemUrl, listItem, this.httpOptions)
  }

  updateListItem(listItem: ListItem): Observable<ListItem> {
    return this.http.put<ListItem>(this.listItemUrl, listItem, this.httpOptions)
  }

  deleteListItem(id: number): Observable<ListItem> {
    return this.http.delete<ListItem>(`${this.listItemUrl}/${id}`, this.httpOptions)
  }
}
