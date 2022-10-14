package com.cody.omikuji.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class OmikujiController {
	@GetMapping("/")
	public String index() {
		return "omikujiform.jsp";
	}

	@PostMapping("/process")
	public String process(@RequestParam("num") String num, @RequestParam("cityName") String cityName,
			@RequestParam("realName") String realName, @RequestParam("hobby") String hobby,
			@RequestParam("livingThing") String livingThing, @RequestParam("comment") String comment,
			HttpSession session) {
		session.setAttribute("num", num);
		session.setAttribute("cityName", cityName);
		session.setAttribute("realName", realName);
		session.setAttribute("hobby", hobby);
		session.setAttribute("livingThing", livingThing);
		session.setAttribute("comment", comment);
		return "redirect:/show";
	}

	@GetMapping("/show")
	public String display() {
		return "omikujidisplay.jsp";
	}
}
