// import packages
import styled from 'styled-components'
import { useState } from 'react'

//import images
import Spiral from "../assets/spiral.svg"

const MenuButton = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = event => {
    setIsActive(current => !current);
  }

  return (
    <>
      <Nav className={isActive ? "mobile-nav is-active" : "mobile-nav"}>
        <Links>
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Works</Link>
        <Link href="#">Contact</Link>
        </Links>
        <Divider/>
        <CV href='#'>Resumé</CV>
        <img src={Spiral} alt="spiral decoration"/>
      </Nav>
      <Button className={isActive ? "hamburger is-active" : "hamburger"} onClick={handleClick}>
        <Line className="bar" />
      </Button>
    </>
  )
}

export default MenuButton

const Button = styled.button`
    position: fixed;
    right: 3rem;
    z-index: 100;
    display: block;
    cursor: pointer;
    width: 3.2rem;
  
    border: none;
    appearance: none;
    background: none;
    outline: none;

  & .bar, &:after, &:before{
  content: "";
  display: block;
  width: 100%;
  height: 5px;
  background-color: white;
  margin: 6px 0px;
  transition: 0.4s;
  border-radius: 5px;
}

&.is-active:before{
  transform: rotate(-45deg) translate(-8px, 6px);
  background-color: #4C5272;
}

&.is-active .bar{
  opacity: 0;
}

&.is-active:after{
  transform: rotate(45deg) translate(-9px, -8px);
  background-color: #4C5272;
}

@media (min-width:770px) {
		display: none;
  }
`
const Line = styled.div`
  border: 2px solid white;
  border-radius: 5px;
  width: 100%;
  height: 0px;
  margin-bottom: 1rem;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.mobile-nav{
    
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    min-height: 100vh;
    z-index: 98;
    background-color: #E5E0DE;
    padding-top: 10rem;
    transition: 0.4s;
  }
  &.mobile-nav.is-active{
    left: 0;
  }
`
const Link = styled.a`
  display: block;
  text-align: center;
  margin-bottom: 2rem;
  width: fit-content;
  text-decoration: none;
  border: none;
  color: #4C5272;
  font-family: 'PT Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 42px;
`
const Links = styled.div`
display: flex;
flex-direction: column;

`
const CV = styled.a`
  color: #4C5272;
  text-decoration: none;
  width: 12rem;
  height:7rem;
  border: 2px solid #8B96A7;
  border-radius: 10px;
  font-family: 'PT Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0px 5rem;
`
const Divider = styled.hr `
  border-radius: 10px;
  width: 25rem;
  height: 0px;
  left: 70px;
  top: 402px;
  border: 2px solid #8B96A7;
`