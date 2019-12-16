package com.sanjay.bookapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sanjay.bookapi.model.Book;
import com.sanjay.bookapi.service.BookService;

@CrossOrigin("*")
@RestController
public class BookController {

	@Autowired
	BookService bookService;

	@GetMapping("/api/book")
	public ResponseEntity<List<Book>> getAllBooks() {
		List<Book> books = bookService.getAllBooks();

		return ResponseEntity.ok().body(books);
	}
	
	@PostMapping("/api/book")
	public ResponseEntity<?> save(@RequestBody Book book)
	{
		long id=bookService.save(book);
		
		return ResponseEntity.ok().body("Book created with id :"+id);
	}
	
	@GetMapping("/api/book/{id}")
	public ResponseEntity<Book> getBook(@PathVariable("id") long id)
	{
		Book book=bookService.getBook(id);
		
		return ResponseEntity.ok().body(book);
	}
	
	
	@PutMapping("api/book/{id}")
	public ResponseEntity<?> update(@PathVariable("id") long id,@RequestBody Book book)
	{
		bookService.update(id, book);
		return ResponseEntity.ok().body("Book succesfully updated");
	}
	
	
	@DeleteMapping("api/book/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") long id)
	{
		bookService.delete(id);
		return ResponseEntity.ok().body("Book successfully deleted");
	}
	
	

}
