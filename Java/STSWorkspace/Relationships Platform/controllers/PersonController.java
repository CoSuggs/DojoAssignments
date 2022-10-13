package com.cody.relationships.controllers;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.cody.relationships.models.Person;

public class PersonController {

	@GetMapping("/persons/{person_id}")
	public String showPerson(@PathVariable Long person_id, Model model) {
	    
	    Person someAwesomePerson = personService.findById(person_id);
	    model.addAttribute("person", someAwesomePerson);
	    
	    return "showPerson.jsp";
	}
}
