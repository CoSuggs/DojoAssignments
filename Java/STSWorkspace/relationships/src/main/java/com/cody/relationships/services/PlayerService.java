package com.cody.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cody.relationships.models.Player;
import com.cody.relationships.repositories.PlayerRepository;

@Service
public class PlayerService {
	@Autowired
	PlayerRepository playerRepository;

	public List<Player> allPlayers() {
		return playerRepository.findAll();
	}

	public Player createPlayer(Player player) {
		return playerRepository.save(player);
	}

	public Player findPlayer(long id) {
		Optional<Player> optionalPlayer = playerRepository.findById(id);
		if (optionalPlayer.isPresent()) {
			return optionalPlayer.get();
		} else {
			return null;
		}
	}
}
