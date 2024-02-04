import './nav.scss';

const Nav = (props) => {
  return (
    <ul className="navigation">
      {props.navigation.map(elem => {
        return (
          <li className='navigation__list' key={elem.text}>
            <a href={elem.link} className='navigation__link'>{elem.text}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default Nav;