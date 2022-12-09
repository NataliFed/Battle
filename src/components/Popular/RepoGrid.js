import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import { memo } from "react";

const RepoGrid = memo((props) => {
  return (
    <>
      {props.repos === true ? (
        <Skeleton animation="wave" />
      ) : (
        <ul className="popular-list">
          {props.repos.map((repo, index) => {
            return (
              <li key={repo.name} className="popular-item">
                <div className="popular-rank">#{index + 1}</div>
                <ul className="space-list-items">
                  <li>
                    <img
                      src={repo.owner.avatar_url}
                      alt="Avatar"
                      className="avatar"
                    />
                  </li>
                  <li>
                    <a href={repo.html_url}>{repo.name}</a>
                  </li>
                  <li>@{repo.owner.login}</li>
                  <li>{repo.stargazers_count} stars</li>
                </ul>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
});

export default RepoGrid;
