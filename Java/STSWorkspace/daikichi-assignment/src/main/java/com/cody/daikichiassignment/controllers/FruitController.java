package com.cody.daikichiassignment.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FruitController {
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
}

