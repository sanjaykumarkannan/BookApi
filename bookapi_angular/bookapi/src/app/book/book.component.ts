import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { Subscriber } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  //for get all books
  books: Book[];
  //for posting a single book
  //book : Book=<Book>{};
  book=new Book();

  constructor(private _bookService: BookService) {

  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this._bookService.getAllBooks()
      .subscribe((bookData: Book[]) => {
        this.books = bookData,
          console.log(this.books)
      },
        (error) => {
          console.log(error)
        }
      )
  }

  getBookById(bookId: String): void {
    this._bookService.getBookById(bookId).subscribe(
      (bookData: Book) => {
        this.book = bookData;
        console.log(bookData);
      }
      ,
      (error) => {
        console.log(error);
      });
  }



  addBook(): void {
    this._bookService.addBook(this.book)
      .subscribe(
        (response) => {
          console.log(response),
          this.getBooks(),
            this.reset()
        },
        (error) => {
          console.log(error)
        });
 
    
  }


  deleteBook(bookId: String): void {
    this._bookService.deleteBook(bookId).subscribe(
      (response) => {
        console.log(response);
        this.getBooks();
      },
      (error) => {
        console.log(error);

      });
  }


  reset(): void {
    this.book.title = null;
    this.book.author = null;
    this.book.id=null;
  }
}


