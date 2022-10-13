package com.cody.relationships.controllers;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.cody.relationships.models.License;

public class LicenseController {
	@PostMapping("/licenses")
	public String licenses(@Valid @ModelAttribute("license") License license) {
		// error handling with binding result omitted
		licenseService.create(license); // Already has the person!

		return "redirect:/persons";
	}

}
