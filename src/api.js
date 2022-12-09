import axios from "axios";

export const fetchPopularRepos = (language) =>
  axios
    .get(
      "https://api.github.com/search/repositories?q=stars:>1+language:" +
        language +
        "&sort=stars&order=desc&type=Repositories"
    )
    .then((response) => response.data.items);

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const params = "?client_id=" + id + "?client_secret=" + sec;

const handleError = (error) => console.error(error);

const getProfile = (username) => {
  return axios
    .get("https://api.github.com/users/" + username + params)
    .then((user) => user.data)
    .catch(handleError);
};

const getRepos = (username) => {
  return axios
    .get(
      "https://api.github.com/users/" +
        username +
        "/repos" +
        params +
        "&per_page=100"
    )
    .then((repos) => repos.data)
    .catch(handleError);
};

const getStarCount = (repos) => {
  return repos.reduce((acc, repo) => {
    return acc + repo.stargazers_count;
  }, 0);
};

const calculateScore = (profile, repos) => {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);

  return followers + totalStars;
};

const getUserData = (username) => {
  return Promise.all([getProfile(username), getRepos(username)]).then(
    ([profile, repos]) => {
      return {
        profile,
        score: calculateScore(profile, repos),
      };
    }
  );
};

const sortPlayers = (player) => {
  return player.sort((a, b) => b.score - a.score);
};

export const startBattle = (players) => {
  return Promise.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
};
