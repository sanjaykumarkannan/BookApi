package com.sanjay.bookapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sanjay.bookapi.dao.BookDao;
import com.sanjay.bookapi.model.Book;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	private BookDao bookDao;

	@Override
	public long save(Book book) {
		
		return bookDao.save(book);
	}

	@Override
	public Book getBook(long id) {
		
		return bookDao.getBook(id);
	}

	@Override
	public List<Book> getAllBooks() {
		
		return bookDao.getAllBooks();
	}

	@Override
	public void update(long id, Book book) {
		
		bookDao.update(id, book);
	}

	@Override
	public void delete(long id) {
		bookDao.delete(id);
	}

}
