import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

const Home = () => {
  const getTeamLogo = (teamId) => {
    return `https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`;
  };

  const getPlayerHeadshot = (playerid) => {
    return `https://cdn.nba.com/headshots/nba/latest/260x190/${playerid}.png`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = { weekday: "short", month: "numeric", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const exampleData = {
    meta: {
      version: 1,
      request:
        "https://nba-prod-us-east-1-mediaops-stats.s3.amazonaws.com/NBA/liveData/scoreboard/todaysScoreboard_00.json",
      time: "2024-02-05 12:55:40.5540",
      code: 200,
    },
    scoreboard: {
      gameDate: "2024-02-05",
      leagueId: "00",
      leagueName: "National Basketball Association",
      games: [
        {
          gameId: "0022300713",
          gameCode: "20240205/LALCHA",
          gameStatus: 1,
          gameStatusText: "7:00 pm ET",
          period: 0,
          gameClock: "",
          gameTimeUTC: "2024-02-06T00:00:00Z",
          gameEt: "2024-02-05T19:00:00Z",
          regulationPeriods: 4,
          ifNecessary: false,
          seriesGameNumber: "",
          seriesText: "",
          seriesConference: "",
          poRoundDesc: "",
          gameSubtype: "",
          homeTeam: {
            teamId: 1610612766,
            teamName: "Hornets",
            teamCity: "Charlotte",
            teamTricode: "CHA",
            wins: 10,
            losses: 38,
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
            teamId: 1610612747,
            teamName: "Lakers",
            teamCity: "Los Angeles",
            teamTricode: "LAL",
            wins: 26,
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
              teamTricode: "CHA",
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
              teamTricode: "LAL",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
          },
          pbOdds: { team: null, odds: 0.0, suspended: 0 },
        },
        {
          gameId: "0022300714",
          gameCode: "20240205/SACCLE",
          gameStatus: 1,
          gameStatusText: "7:00 pm ET",
          period: 0,
          gameClock: "",
          gameTimeUTC: "2024-02-06T00:00:00Z",
          gameEt: "2024-02-05T19:00:00Z",
          regulationPeriods: 4,
          ifNecessary: false,
          seriesGameNumber: "",
          seriesText: "",
          seriesConference: "",
          poRoundDesc: "",
          gameSubtype: "",
          homeTeam: {
            teamId: 1610612739,
            teamName: "Cavaliers",
            teamCity: "Cleveland",
            teamTricode: "CLE",
            wins: 31,
            losses: 16,
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
            teamId: 1610612758,
            teamName: "Kings",
            teamCity: "Sacramento",
            teamTricode: "SAC",
            wins: 29,
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
              teamTricode: "CLE",
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
              teamTricode: "SAC",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
          },
          pbOdds: { team: null, odds: 0.0, suspended: 0 },
        },
        {
          gameId: "0022300715",
          gameCode: "20240205/DALPHI",
          gameStatus: 1,
          gameStatusText: "7:00 pm ET",
          period: 0,
          gameClock: "",
          gameTimeUTC: "2024-02-06T00:00:00Z",
          gameEt: "2024-02-05T19:00:00Z",
          regulationPeriods: 4,
          ifNecessary: false,
          seriesGameNumber: "",
          seriesText: "",
          seriesConference: "",
          poRoundDesc: "",
          gameSubtype: "",
          homeTeam: {
            teamId: 1610612755,
            teamName: "76ers",
            teamCity: "Philadelphia",
            teamTricode: "PHI",
            wins: 30,
            losses: 18,
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
            teamId: 1610612742,
            teamName: "Mavericks",
            teamCity: "Dallas",
            teamTricode: "DAL",
            wins: 26,
            losses: 23,
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
              teamTricode: "PHI",
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
              teamTricode: "DAL",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
          },
          pbOdds: { team: null, odds: 0.0, suspended: 0 },
        },
        {
          gameId: "0022300716",
          gameCode: "20240205/LACATL",
          gameStatus: 1,
          gameStatusText: "7:30 pm ET",
          period: 0,
          gameClock: "",
          gameTimeUTC: "2024-02-06T00:30:00Z",
          gameEt: "2024-02-05T19:30:00Z",
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
            wins: 22,
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
            teamId: 1610612746,
            teamName: "Clippers",
            teamCity: "LA",
            teamTricode: "LAC",
            wins: 33,
            losses: 15,
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
              teamTricode: "LAC",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
          },
          pbOdds: { team: null, odds: 0.0, suspended: 0 },
        },
        {
          gameId: "0022300717",
          gameCode: "20240205/GSWBKN",
          gameStatus: 1,
          gameStatusText: "7:30 pm ET",
          period: 0,
          gameClock: "",
          gameTimeUTC: "2024-02-06T00:30:00Z",
          gameEt: "2024-02-05T19:30:00Z",
          regulationPeriods: 4,
          ifNecessary: false,
          seriesGameNumber: "",
          seriesText: "",
          seriesConference: "",
          poRoundDesc: "",
          gameSubtype: "",
          homeTeam: {
            teamId: 1610612751,
            teamName: "Nets",
            teamCity: "Brooklyn",
            teamTricode: "BKN",
            wins: 20,
            losses: 28,
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
            teamId: 1610612744,
            teamName: "Warriors",
            teamCity: "Golden State",
            teamTricode: "GSW",
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
              teamTricode: "BKN",
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
              teamTricode: "GSW",
              playerSlug: null,
              points: 0,
              rebounds: 0,
              assists: 0,
            },
          },
          pbOdds: { team: null, odds: 0.0, suspended: 0 },
        },
        {
          gameId: "0022300718",
          gameCode: "20240205/TORNOP",
          gameStatus: 1,
          gameStatusText: "8:00 pm ET",
          period: 0,
          gameClock: "",
          gameTimeUTC: "2024-02-06T01:00:00Z",
          gameEt: "2024-02-05T20:00:00Z",
          regulationPeriods: 4,
          ifNecessary: false,
          seriesGameNumber: "",
          seriesText: "",
          seriesConference: "",
          poRoundDesc: "",
          gameSubtype: "",
          homeTeam: {
            teamId: 1610612740,
            teamName: "Pelicans",
            teamCity: "New Orleans",
            teamTricode: "NOP",
            wins: 28,
            losses: 21,
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
            wins: 17,
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
          gameLeaders: {
            homeLeaders: {
              personId: 0,
              name: "",
              jerseyNum: "",
              position: "",
              teamTricode: "NOP",
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
      ],
    },
  };

  const generateBox = (
    awayTeamId,
    awayTeamName,
    awayLosses,
    awayWins,
    awayScore,
    homeTeamId,
    homeTeamName,
    homeLosses,
    homeWins,
    homeScore,
    gameStatus,
    gameStatusText,
    gameDate,
    homeGameLeader,
    awayGameLeader
  ) => {
    console.log(homeGameLeader.personId);
    return (
      <Container className="border-light1 rounded m-2 bg-dark">
        <Row>
          <Col sm={5}>
            <Row className="mb-2">
              <Col className="d-flex flex-column align-items-center text-light">
                <img
                  src={getTeamLogo(awayTeamId)}
                  alt="away team logo"
                  height={100}
                  width={100}
                />
                {/* If gamestatus = 1 -> scehduled
              If gamestatus = 2 -> Live
              
              if period = 0 -> game not started yet
              
              
              */}
                {gameStatus === 2 ? (
                  <>
                    <h3>{awayScore}</h3>
                  </>
                ) : (
                  <>
                    <span>{awayTeamName}</span>
                    <span>
                      {awayLosses} - {awayWins}
                    </span>
                  </>
                )}
              </Col>

              <Col className="d-flex flex-column align-items-center py-4">
                {gameStatus === 2 ? (
                  <>
                    <h2 className="my-2">{gameStatusText}</h2>
                  </>
                ) : (
                  <>
                    <h2>{gameStatusText}</h2>
                    <span className="my-3">{formatDate(gameDate)}</span>
                  </>
                )}
              </Col>
              <Col className="w-50 d-flex flex-column align-items-center text-light">
                {" "}
                <img
                  src={getTeamLogo(homeTeamId)}
                  alt="away team logo"
                  height={100}
                  width={100}
                />
                {gameStatus === 2 ? (
                  <>
                    <h3>{homeScore}</h3>
                  </>
                ) : (
                  <>
                    <span>{homeTeamName}</span>
                    <span>
                      {homeLosses} - {homeWins}
                    </span>
                  </>
                )}
              </Col>
            </Row>
            <Row>
              <Col
                className="d-flex justify-content-center align-items-center text-center"
                style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
              >
                <span className="mt-2 fw-bold">PREVIEW</span>
              </Col>
            </Row>
          </Col>
          <Col
            style={{
              borderLeft: " 1px solid rgba(255, 255, 255, 0.1)",
            }}
            className="text-start"
          >
            {homeGameLeader.personId === 0 && awayGameLeader.personId === 0 ? (
              <div>
                <span className="fw-bold mx-5">SEASON LEADERS</span>
              </div>
            ) : (
              <div>
                <span className="fw-bold mx-5">GAME LEADERS</span>
                <Table className="table-dark mb-0 pb-0" borderless>
                  <thead className="text-center">
                    <tr>
                      <th colSpan={2} scope="col"></th>
                      <th>PNTS</th>
                      <th>REB</th>
                      <th>AST</th>
                    </tr>
                  </thead>
                  <tbody className="text-center text-small">
                    <tr
                      style={{
                        borderTop: " 1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <td></td>
                      <td className="d-flex align-items-center text-start">
                        <img
                          className="rounded-circle"
                          height={50}
                          width={75}
                          src={getPlayerHeadshot(awayGameLeader.personId)}
                          alt="home player id"
                        />
                        <div>
                          <span>
                            <small>{awayGameLeader.name}</small>
                          </span>
                          <div>
                            <span>
                              <small>{awayGameLeader.teamTricode} |</small>{" "}
                            </span>

                            <span>
                              <small>#{awayGameLeader.jerseyNum} |</small>{" "}
                            </span>
                            <span>{awayGameLeader.position} </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>{awayGameLeader.points}</span>
                      </td>
                      <td>
                        <span>{awayGameLeader.rebounds}</span>
                      </td>
                      <td>
                        <span>{awayGameLeader.assists}</span>
                      </td>
                    </tr>
                    <tr
                      style={{
                        borderTop: " 1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <td></td>
                      <td className="d-flex align-items-center text-start">
                        <img
                          className="rounded-circle"
                          height={50}
                          width={75}
                          src={getPlayerHeadshot(homeGameLeader.personId)}
                          alt="home player id"
                        />
                        <div>
                          <span>
                            <small>{homeGameLeader.name}</small>
                          </span>
                          <div>
                            {" "}
                            <span>
                              <small>{homeGameLeader.teamTricode} | </small>
                            </span>
                            <span>
                              <small>#{homeGameLeader.jerseyNum} | </small>
                            </span>
                            <span>
                              <small>{homeGameLeader.position}</small>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>{homeGameLeader.points}</span>
                      </td>
                      <td>
                        <span>{homeGameLeader.rebounds}</span>
                      </td>
                      <td>
                        <span>{homeGameLeader.assists}</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}
          </Col>
          <Col
            style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.1)" }}
          ></Col>
        </Row>
      </Container>
    );
  };

  return (
    <Container className="p-4 text-start text-white">
      <h3 className="p-2">NBA</h3>
      {exampleData["scoreboard"]["games"].map((game) => {
        return (
          <>
            {generateBox(
              game.awayTeam.teamId,
              game.awayTeam.teamName,
              game.awayTeam.wins,
              game.awayTeam.losses,
              game.awayTeam.score,
              game.homeTeam.teamId,
              game.homeTeam.teamName,
              game.homeTeam.wins,
              game.homeTeam.losses,
              game.homeTeam.score,
              game.gameStatus,
              game.gameStatusText,
              game.gameEt,
              game.gameLeaders.homeLeaders,
              game.gameLeaders.awayLeaders
            )}
          </>
        );
      })}
    </Container>
  );
};
export default Home;
