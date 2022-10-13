package com.cody.relationships.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.cody.relationships.models.Player;
import com.cody.relationships.models.Team;
import com.cody.relationships.services.PlayerService;
import com.cody.relationships.services.TeamService;

@Controller
public class MainController {
	@Autowired
	TeamService teamService;
	
	@Autowired
	PlayerService playerService;
	
	@GetMapping("/basketball")
	public String index(Model model) {
		model.addAttribute("teams", teamService.allTeams());
		return "basketball.jsp";
	}
	
	@GetMapping("/teams/new")
	public String newTeam(@ModelAttribute("team") Team team) {
		return "new_team.jsp";
	}
	
	@PostMapping("/teams/new")
	public String createNewTeam(@Valid @ModelAttribute("team") Team team, BindingResult result) {
		if(result.hasErrors()) {
			return "new_team.jsp";
		}else {
			teamService.createTeam(team);
			return "redirect:/basketball";
		}
	}
	
	@GetMapping("/teams/{id}")
	public String newTeam(@PathVariable("id") Long id, Model model) {
		model.addAttribute("team", teamService.findTeam(id));
		return "view_team.jsp";
	}
	
	@GetMapping("/players/new")
	public String newPlayer(Model model, @ModelAttribute("player") Player player) {
		model.addAttribute("teams", teamService.allTeams());
		return "new_player.jsp";
	}
	
	@PostMapping("/players/new")
	public String createNewTeam(Model model, @Valid @ModelAttribute("player") Player player, BindingResult result) {
		if(result.hasErrors()) {
			model.addAttribute("teams", teamService.allTeams());
			return "new_player.jsp";
		} else {
			playerService.createPlayer(player);
			return "redirect:/basketball";
		}
	}
	
}
