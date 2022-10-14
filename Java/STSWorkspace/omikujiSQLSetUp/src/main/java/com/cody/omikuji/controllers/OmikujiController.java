package com.cody.omikuji.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.cody.omikuji.models.OmikujiModel;

@Controller
public class OmikujiController {

	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}

	@RequestMapping(value = "/omikuji", method = RequestMethod.POST)
	public String omikuji(@RequestParam(value = "num") Integer num, @RequestParam(value = "cityName") String cityName,
			@RequestParam(value = "realName") String realName, @RequestParam(value = "hobby") String hobby,
			@RequestParam(value = "livingThing") String livingThing, @RequestParam(value = "comment") String comment) {
		return "redirect:/omikuji/show";
	}

	@RequestMapping(value = "/omikuji/show")
	public String showOmikuji(Model model) {
		ArrayList<OmikujiModel> omikuji = new ArrayList<OmikujiModel>();
		omikuji.add(new OmikujiModel(10, "Seattle", "Robert Frost", "Programming", "Dog", "I really hope this works"));
		omikuji.add(new OmikujiModel(20, "Portland", "Robert Denero", "Engineer", "Tiger",
				"I really hope this works as well or this was all for not."));
		model.addAttribute("omikujiFromController", omikuji);
		return "OmikujiShow.jsp";
	}
}
