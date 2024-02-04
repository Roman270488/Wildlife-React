import './header.scss';
import Logo from "../logo/Logo";
import Nav from '../navigation/Nav';
import Search from '../search/Search';
import Button from '../button/Button';

const Header = () => {

  /* навигация */
  const headerLinks = [
    {
      link: '#',
      text: 'Blog'
    },
    {
      link: '#',
      text: 'Contacts'
    },
  ]

  return (
    <header className="header">
      <Logo />
      <div className="header__block-right">
        <Nav navigation={headerLinks}/>
        <Search />
        <Button text={'Sign in'}/>
      </div>
    </header>
  )
}

export default Header;