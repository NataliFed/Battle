import React from "react";
import SelectedLanguges from "./SelectedLanguages";
import { fetchPopularRepos } from "../../api";
import RepoGrid from "./RepoGrid";

export class Popular extends React.Component {
  state = {
    selectedLanguage: "All",
    repos: [],
  };

  componentDidMount() {
    fetchPopularRepos(this.state.selectedLanguage).then((repos) => {
      this.setState({ repos });
    });
  }

  onSelectLanguage = (selectedLanguage) => {
    this.setState({ selectedLanguage });

    fetchPopularRepos(selectedLanguage).then((repos) => {
      this.setState({ repos });
    });
  };

  render() {
    return (
      <>
        <SelectedLanguges
          selectedLanguage={this.state.selectedLanguage}
          onSelectLanguage={this.onSelectLanguage}
        />
        <RepoGrid repos={this.state.repos} />
      </>
    );
  }
}

export default Popular;
