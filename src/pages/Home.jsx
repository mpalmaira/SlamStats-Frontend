import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const getTeamLogo = (teamId) => {
    return `https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`;
  };

  const exampleData = {
    meta: {
      version: 1,
      request:
        "https://nba-prod-us-east-1-mediaops-stats.s3.amazonaws.com/NBA/liveData/scoreboard/todaysScoreboard_00.json",
      time: "2024-01-28 02:16:47.1647",
      code: 200,
    },
    scoreboard: {
      gameDate: "2024-01-28",
      leagueId: "00",
      leagueName: "National Basketball Association",
      games: [
        {
          gameId: "0022300654",
          gameCode: "20240128/OKCDET",
          gameStatus: 2,
          gameStatusText: "Q1 8:33",
          period: 1,
          gameClock: "PT08M33.00S",
          gameTimeUTC: "2024-01-28T19:00:00Z",
          gameEt: "2024-01-28T14:00:00-05:00",
          regulationPeriods: 4,
          ifNecessary: false,
          seriesGameNumber: "",
          seriesText: "",
          seriesConference: "",
          poRoundDesc: "",
          gameSubtype: "",
          homeTeam: {
            teamId: 1610612765,
            teamName: "Pistons",
            teamCity: "Detroit",
            teamTricode: "DET",
            wins: 5,
            losses: 40,
            score: 5,
            seed: null,
            inBonus: "0",
            timeoutsRemaining: 6,
            periods: [
              { period: 1, periodType: "REGULAR", score: 5 },
              { period: 2, periodType: "REGULAR", score: 0 },
              { period: 3, periodType: "REGULAR", score: 0 },
              { period: 4, periodType: "REGULAR", score: 0 },
            ],
          },
          awayTeam: {
            teamId: 1610612760,
            teamName: "Thunder",
            teamCity: "Oklahoma City",
            teamTricode: "OKC",
            wins: 32,
            losses: 13,
            score: 15,
            seed: null,
            inBonus: "0",
            timeoutsRemaining: 7,
            periods: [
              { period: 1, periodType: "REGULAR", score: 15 },
              { period: 2, periodType: "REGULAR", score: 0 },
              { period: 3, periodType: "REGULAR", score: 0 },
              { period: 4, periodType: "REGULAR", score: 0 },
            ],
          },
          gameLeaders: {
            homeLeaders: {
              personId: 1631105,
              name: "Jalen Duren",
              jerseyNum: "0",
              position: "C",
              teamTricode: "DET",
              playerSlug: "jalen-duren",
              points: 2,
              rebounds: 3,
              assists: 0,
            },
            awayLeaders: {
              personId: 1631096,
              name: "Chet Holmgren",
              jerseyNum: "7",
              position: "CF",
              teamTricode: "OKC",
              playerSlug: "chet-holmgren",
              points: 7,
              rebounds: 4,
              assists: 0,
            },
          },
          pbOdds: { team: null, odds: 0.0, suspended: 0 },
        },
        {
          gameId: "0022300652",
          gameCode: "20240128/MEMIND",
          gameStatus: 1,
          gameStatusText: "3:30 pm ET",
          period: 0,
          gameClock: "",
          gameTimeUTC: "2024-01-28T20:30:00Z",
          gameEt: "2024-01-28T15:30:00Z",
          regulationPeriods: 4,
          ifNecessary: false,
          seriesGameNumber: "",
          seriesText: "",
          seriesConference: "",
          poRoundDesc: "",
          gameSubtype: "",
          homeTeam: {
            teamId: 1610612754,
            teamName: "Pacers",
            teamCity: "Indiana",
            teamTricode: "IND",
            wins: 26,
            losses: 20,
            score: 0,
            seed: null,
            inBonus: null,
            timeoutsRemaining: 0,
            periods: [
              { period: 1, periodType: "REGULAR", score: 0 },
              { period: 2, periodType: "REGULAR", score: 0 },
              { period: 3, periodType: "REGULAR", score: 0 },
              { period: 4, periodType: "REGULAR", score: 0 },
            ],
          },
          awayTeam: {
            teamId: 1610612763,
            teamName: "Grizzlies",
            teamCity: "Memphis",
            teamTricode: "MEM",
            wins: 18,
            losses: 27,
            score: 0,
            seed: null,
            inBonus: null,
            timeoutsRemaining: 0,
            periods: [
              { period: 1, periodType: "REGULAR", score: 0 },
              { period: 2, periodType: "REGULAR", score: 0 },
              { period: 3, periodType: "REGULAR", score: 0 },
              { period: 4, periodType: "REGULAR", score: 0 },
            ],
          },
          gameLeaders: {
            homeLeaders: {
              personId: 0,
              name: "",
              jerseyNum: "",
              position: "",
              teamTricode: "IND",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
            awayLeaders: {
              personId: 0,
              name: "",
              jerseyNum: "",
              position: "",
              teamTricode: "MEM",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
          },
          pbOdds: { team: null, odds: 0.0, suspended: 0 },
        },
        {
          gameId: "0022300653",
          gameCode: "20240128/TORATL",
          gameStatus: 1,
          gameStatusText: "6:00 pm ET",
          period: 0,
          gameClock: "",
          gameTimeUTC: "2024-01-28T23:00:00Z",
          gameEt: "2024-01-28T18:00:00Z",
          regulationPeriods: 4,
          ifNecessary: false,
          seriesGameNumber: "",
          seriesText: "",
          seriesConference: "",
          poRoundDesc: "",
          gameSubtype: "",
          homeTeam: {
            teamId: 1610612737,
            teamName: "Hawks",
            teamCity: "Atlanta",
            teamTricode: "ATL",
            wins: 18,
            losses: 27,
            score: 0,
            seed: null,
            inBonus: null,
            timeoutsRemaining: 0,
            periods: [
              { period: 1, periodType: "REGULAR", score: 0 },
              { period: 2, periodType: "REGULAR", score: 0 },
              { period: 3, periodType: "REGULAR", score: 0 },
              { period: 4, periodType: "REGULAR", score: 0 },
            ],
          },
          awayTeam: {
            teamId: 1610612761,
            teamName: "Raptors",
            teamCity: "Toronto",
            teamTricode: "TOR",
            wins: 16,
            losses: 29,
            score: 0,
            seed: null,
            inBonus: null,
            timeoutsRemaining: 0,
            periods: [
              { period: 1, periodType: "REGULAR", score: 0 },
              { period: 2, periodType: "REGULAR", score: 0 },
              { period: 3, periodType: "REGULAR", score: 0 },
              { period: 4, periodType: "REGULAR", score: 0 },
            ],
          },
          gameLeaders: {
            homeLeaders: {
              personId: 0,
              name: "",
              jerseyNum: "",
              position: "",
              teamTricode: "ATL",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
            awayLeaders: {
              personId: 0,
              name: "",
              jerseyNum: "",
              position: "",
              teamTricode: "TOR",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
          },
          pbOdds: { team: null, odds: 0.0, suspended: 0 },
        },
        {
          gameId: "0022300655",
          gameCode: "20240128/PHXORL",
          gameStatus: 1,
          gameStatusText: "6:00 pm ET",
          period: 0,
          gameClock: "",
          gameTimeUTC: "2024-01-28T23:00:00Z",
          gameEt: "2024-01-28T18:00:00Z",
          regulationPeriods: 4,
          ifNecessary: false,
          seriesGameNumber: "",
          seriesText: "",
          seriesConference: "",
          poRoundDesc: "",
          gameSubtype: "",
          homeTeam: {
            teamId: 1610612753,
            teamName: "Magic",
            teamCity: "Orlando",
            teamTricode: "ORL",
            wins: 23,
            losses: 22,
            score: 0,
            seed: null,
            inBonus: null,
            timeoutsRemaining: 0,
            periods: [
              { period: 1, periodType: "REGULAR", score: 0 },
              { period: 2, periodType: "REGULAR", score: 0 },
              { period: 3, periodType: "REGULAR", score: 0 },
              { period: 4, periodType: "REGULAR", score: 0 },
            ],
          },
          awayTeam: {
            teamId: 1610612756,
            teamName: "Suns",
            teamCity: "Phoenix",
            teamTricode: "PHX",
            wins: 26,
            losses: 19,
            score: 0,
            seed: null,
            inBonus: null,
            timeoutsRemaining: 0,
            periods: [
              { period: 1, periodType: "REGULAR", score: 0 },
              { period: 2, periodType: "REGULAR", score: 0 },
              { period: 3, periodType: "REGULAR", score: 0 },
              { period: 4, periodType: "REGULAR", score: 0 },
            ],
          },
          gameLeaders: {
            homeLeaders: {
              personId: 0,
              name: "",
              jerseyNum: "",
              position: "",
              teamTricode: "ORL",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
            awayLeaders: {
              personId: 0,
              name: "",
              jerseyNum: "",
              position: "",
              teamTricode: "PHX",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
          },
          pbOdds: { team: null, odds: 0.0, suspended: 0 },
        },
        {
          gameId: "0022300656",
          gameCode: "20240128/CHIPOR",
          gameStatus: 1,
          gameStatusText: "9:00 pm ET",
          period: 0,
          gameClock: "",
          gameTimeUTC: "2024-01-29T02:00:00Z",
          gameEt: "2024-01-28T21:00:00Z",
          regulationPeriods: 4,
          ifNecessary: false,
          seriesGameNumber: "",
          seriesText: "",
          seriesConference: "",
          poRoundDesc: "",
          gameSubtype: "",
          homeTeam: {
            teamId: 1610612757,
            teamName: "Trail Blazers",
            teamCity: "Portland",
            teamTricode: "POR",
            wins: 13,
            losses: 32,
            score: 0,
            seed: null,
            inBonus: null,
            timeoutsRemaining: 0,
            periods: [
              { period: 1, periodType: "REGULAR", score: 0 },
              { period: 2, periodType: "REGULAR", score: 0 },
              { period: 3, periodType: "REGULAR", score: 0 },
              { period: 4, periodType: "REGULAR", score: 0 },
            ],
          },
          awayTeam: {
            teamId: 1610612741,
            teamName: "Bulls",
            teamCity: "Chicago",
            teamTricode: "CHI",
            wins: 21,
            losses: 25,
            score: 0,
            seed: null,
            inBonus: null,
            timeoutsRemaining: 0,
            periods: [
              { period: 1, periodType: "REGULAR", score: 0 },
              { period: 2, periodType: "REGULAR", score: 0 },
              { period: 3, periodType: "REGULAR", score: 0 },
              { period: 4, periodType: "REGULAR", score: 0 },
            ],
          },
          gameLeaders: {
            homeLeaders: {
              personId: 0,
              name: "",
              jerseyNum: "",
              position: "",
              teamTricode: "POR",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
            awayLeaders: {
              personId: 0,
              name: "",
              jerseyNum: "",
              position: "",
              teamTricode: "CHI",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
          },
          pbOdds: { team: null, odds: 0.0, suspended: 0 },
        },
      ],
    },
  };

  const generateBox = (
    awayTeamId,
    awayTeamName,
    awayLosses,
    awayWins,
    homeTeamId,
    homeTeamName,
    homeLosses,
    homeWins,
    date
  ) => {
    return (
      <div className="p-2 bg-dark rounded ">
        <div className="p-2 text-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-calendar4"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
          <span>{date}</span>
        </div>
        <div>
          <div>
            <img
              src={getTeamLogo(awayTeamId)}
              alt="away team logo"
              className="w-25"
            />
            <span>{awayTeamName}</span>
            <small>
              ({awayWins} - {awayLosses})
            </small>
          </div>
          <div>
            <img
              src={getTeamLogo(homeTeamId)}
              className="w-25"
              alt="home team logo"
            />
            <span>{homeTeamName}</span>
            <small className="text-small">
              ({homeWins} - {homeLosses})
            </small>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Container className="p-4 text-start text-white">
      <Row>
        {exampleData["scoreboard"]["games"].map((game) => {
          return (
            <Col>
              {generateBox(
                game.awayTeam.teamId,
                game.awayTeam.teamName,
                game.awayTeam.wins,
                game.awayTeam.losses,
                game.homeTeam.teamId,
                game.homeTeam.teamName,
                game.homeTeam.wins,
                game.homeTeam.losses,
                game.gameEt
              )}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Home;
