package com.cody.loginreg.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cody.loginreg.models.Book;
import com.cody.loginreg.repositories.BookRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository bookRepo;

	// CREATE
	public Book createBook(Book book) {
		return bookRepo.save(book);
	}

	// FIND ALL
	public List<Book> allBooks() {
		return bookRepo.findAll();
	}

	// FIND ONE
	public Book oneBook(Long id) {
		Optional<Book> optionalBook = bookRepo.findById(id);
		if (optionalBook.isPresent()) {
			return optionalBook.get();
		} else {
			return null;
		}
	}

	// EDIT PROCESS
	public Book editBook(Book book) {
		return bookRepo.save(book);
	}

	// DELETE
	public void deleteBook(Long id) {
		bookRepo.deleteById(id);
	}
}
