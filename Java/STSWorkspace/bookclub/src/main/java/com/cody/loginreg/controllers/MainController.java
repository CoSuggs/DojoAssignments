package com.cody.loginreg.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.cody.loginreg.models.Book;
import com.cody.loginreg.services.BookService;

@Controller
public class MainController {

	@Autowired
	private BookService bookService;

	@GetMapping("/dashboard")
	public String dashboard(HttpSession session, Model model) {
		if (session.getAttribute("userId") == null) {
			session.invalidate();
			return "redirect:/logout";
		}
		model.addAttribute("bookList", bookService.allBooks());
		return "dashboard.jsp";
	}

	@GetMapping("/books/new")
	public String renderNewBook(@ModelAttribute("newBook") Book newBook) {
		return "new_book.jsp";
	}

	@PostMapping("/books/process")
	public String processBookForm(@Valid @ModelAttribute("newBook") Book book, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "new_book.jsp";
		} else {
			bookService.createBook(book);
			return "redirect:/dashboard";
		}
	}

	@GetMapping("/books/{id}")
	public String bookDetails(@PathVariable("id") Long id, Model model) {
		Book foundBook = bookService.oneBook(id);
		model.addAttribute("book", foundBook);
		return "view_book.jsp";
	}

	@GetMapping("/books/{id}/edit")
	public String showEditForm(@PathVariable("id") Long id, Model model, HttpSession session) {
		Book foundBook = bookService.oneBook(id);
		model.addAttribute("book", foundBook);
		if(foundBook.getUser().getId() != (Long) session.getAttribute("userId")) {
			return "redirect:/dashboard";
		}
		return "edit_book.jsp";
	}

	@PutMapping("/books/{id}/edit")
	public String processEditForm(@Valid @ModelAttribute("book") Book book, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "edit_book.jsp";
		} else {
			bookService.editBook(book);
			return "redirect:/dashboard";
		}
	}
	
	@DeleteMapping("/books/{id}/delete")
	public String deleteBook(@PathVariable("id") Long id) {
		bookService.deleteBook(id);
		return "redirect:/dashboard";
	}
}
