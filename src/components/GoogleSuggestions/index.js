import {Component} from 'react'

import SearchOfResults from '../SuggestionItem/index'

import './index.css'

class GoogleSuggestions extends Component {
  state = {value: ''}

  searchInput = event => {
    this.setState({value: event.target.value})
  }

  resultList = suggestion => {
    this.setState({value: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {vlaue} = this.state
    let resultSuggestion
    const {value} = this.state
    if (vlaue === '') {
      resultSuggestion = suggestionsList
    } else {
      resultSuggestion = suggestionsList.filter(eachList => {
        const {suggestion} = eachList
        return suggestion.toLowerCase().includes(value.toLowerCase())
      })
    }
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.searchInput}
              value={value}
            />
          </div>
          <ul className="ul-list-item">
            {resultSuggestion.map(eachSuggest => (
              <SearchOfResults
                eachSuggest={eachSuggest}
                key={eachSuggest.id}
                resultList={this.resultList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
