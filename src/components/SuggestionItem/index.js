const SearchOfResults = props => {
  const {eachSuggest, resultList} = props
  const {suggestion} = eachSuggest
  const buttonSuggest = () => {
    resultList(suggestion)
  }
  return (
    <li>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={buttonSuggest}
      />
    </li>
  )
}

export default SearchOfResults
