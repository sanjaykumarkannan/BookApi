package com.sanjay.bookapi.dao;

import java.util.List;

import com.sanjay.bookapi.model.Book;

public interface BookDao {
	// insert a book to db
	long save(Book book);

	// get a single book from db
	Book getBook(long id);

	// get all books from db
	List<Book> getAllBooks();

	// update a single book in db
	void update(long id, Book book);

	// delete a particular book from db
	void delete(long id);
	
	
	

}
