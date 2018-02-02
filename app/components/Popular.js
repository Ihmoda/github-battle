const React = require('react');
const PropTypes = require('prop-types');
const api = require('../utils/api');

function SelectLanguage(props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="languages">
      {languages.map(lang => (
        <li
          style={
            lang === props.selectedLanguage
              ? {
                color: '#d0021b:'
              }
              : null
          }
          onClick={props.onSelect.bind(null, lang)}
          key={lang}
        >
          {lang}
        </li>
      ))}
    </ul>
  );
}

// function RepoGrid(props) {
//   return (
//     <ul className="popular-list">
//       {props.repos.map((repo, index) => {
//         <li key={repo.name} className={repo.list}>
//           <div className="popular-rank">#{index + 1}</div>
//           <ul className="space-list-item">Hello</ul>
//         </li>;
//       })}
//     </ul>
//   );
// }

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(() => ({selectedLanguage: lang, repos: null}));

    api.fetchPopularRepos(lang).then(repos => {
      this.setState(() => ({repos: repos}));
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} />
      </div>
    );
  }
}

module.exports = Popular;
