package com.cody.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cody.relationships.models.Team;
import com.cody.relationships.repositories.TeamRepository;

@Service
public class TeamService {
	@Autowired
	TeamRepository teamRepository;

	public List<Team> allTeams() {
		return teamRepository.findAll();
	}

	public Team createTeam(Team team) {
		return teamRepository.save(team);
	}

	public Team findTeam(Long id) {
		Optional<Team> optionalTeam = teamRepository.findById(id);
		if (optionalTeam.isPresent()) {
			return optionalTeam.get();
		} else {
			return null;
		}
	}
}
