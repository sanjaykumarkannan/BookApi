import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Options } from '../../../node_modules/@types/selenium-webdriver/edge';

@Injectable()
export class BookService {

  constructor(private _httpService: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this._httpService.get<Book[]>("http://localhost:8485/bookapi/api/book")
      .pipe(
        catchError(this.handleError)
      );
  }

  getBookById(bookId: String): Observable<Book> {
    return this._httpService.get<Book>("http://localhost:8485/bookapi/api/book/" + bookId)
      .pipe(
        catchError(this.handleError)
      );
  }

  addBook(book: Book) {
    let body = JSON.stringify(book);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //let options = { headers: headers ,responseType: 'text'};
    if (book.id) {
      return this._httpService.put("http://localhost:8485/bookapi/api/book/"+book.id, body, { headers: headers, responseType: 'text' });;
    }
    else {
      return this._httpService.post("http://localhost:8485/bookapi/api/book", body, { headers: headers, responseType: 'text' });
    }

  }

  //added response type in http option because ,by default response type is json,and if you 
  //dont mention this you will get HttpErrorResponse error in console..adding it because spring endpoint
  //respone is a string
  deleteBook(bookId: String) {
    return this._httpService.delete("http://localhost:8485/bookapi/api/book/" + bookId, { responseType: 'text' });
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }
}



















