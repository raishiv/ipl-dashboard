package io.javashiv.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.javashiv.ipldashboard.Model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);
}
