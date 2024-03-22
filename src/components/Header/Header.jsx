import { useState, Fragment } from 'react';
import styles from './Header.module.scss'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Header = ({ data }) => {
  const [hint, setHint] = useState([])
  const [input, setInput] = useState('')
  const [focus, setFocus] = useState(false)
  let timeoutSearch

  const handleInputChange = ({ target }) => {
    // search API-query
    setInput(target.value)
    const url = `https://api.weatherapi.com/v1/search.json?key=${data.apiKey}&q=${input.trim()}`
    if (input.trim()) {
      clearTimeout(timeoutSearch)

      timeoutSearch = setTimeout(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => setHint(data))
          .catch(error => console.error('Error while retrieving weather data:', error))
      }, 500);
    }
  }

  const handleSubmitForm = e => {
    e.preventDefault()
    if (input.trim() && hint.length) {
      data.setLocation(`${hint[0].name}, ${hint[0].country}`)
      setInput('')
      setHint([])
    }
  }

  const handleChooseOption = (name, country) => {
    data.setLocation(`${name}, ${country}`)
    setInput('')
    setHint([])
  }

  const formClassActive = (hint.length && input.trim() && focus) ? styles.active : ''

  return (
    <header>
      <form
        onSubmit={handleSubmitForm}
        className={formClassActive}
        onFocus={() => setFocus(true)}
        onBlur={() => { setTimeout(() => setFocus(false), 100) }}
      >
        <button type="submit">
          <SearchRoundedIcon />
        </button>
        <input
          type="text"
          list="options"
          value={input}
          onChange={handleInputChange}
        />
        <div className={styles.options}>
          {hint.length !== 0 && hint.map((option, i) => (
            <Fragment key={i}>
              <div onClick={() => handleChooseOption(option.name, option.country)}>
                <p>{`${option.name} (${option.country})`}</p>
              </div>
              <hr />
            </Fragment>
          )).slice(0, 5)}
        </div>
      </form>
      {data.updateTime && <p className='text-center'>Last updated at: {data.updateTime} </p>}
    </header>
  );
}

export default Header;
