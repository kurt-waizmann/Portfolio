// import packages
import styled from 'styled-components'

const NavBar = () => {
    return (
        <Wrapper>
            <Link href="#fold_2">About</Link>
            <Link href="#fold_3">Work</Link>
            <Link href="#fold_4">Contact</Link>
            <CV href='https://drive.google.com/file/d/192-w0SLVz4kNtf_eL_pgIPm_mIBfy5iH/view' target="_blank"></CV>
        </Wrapper>
    )
}

export default NavBar

const Wrapper = styled.nav`
    width: 100%;
    display: none;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 8rem;
    margin-bottom: 5rem;
    @media (min-width:770px) {
		display: flex;
    }
`
const Link = styled.a`
    position: relative;
    text-decoration: none;
    font-family: 'PT Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 22px;
    color: #FFFFFF;
    padding: 0 3px;
    text-shadow: -1px 1px 0px black;


    &:after {
        content: "";
        position: absolute;
        background-color: #4C5272;
        height: 2px;
        width: 0;
        left: 0;
        bottom: -5px;
        transition: 0.3s;

    }
    &:hover:after {
        width: 100%;
    }

`
const CV = styled.a`
    position: relative;
    text-decoration: none;
    font-family: 'PT Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 22px;
    color: #FFFFFF;

    width: 10rem;
    height: 5rem;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:after {
    content: "Resumé";
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: -1px 1px 0px black;

    width: 10rem;
    height: 5rem;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    bottom: -1px;
    right: -1px;
    transition: 0.3s;
    }

    &:hover:after {
    bottom: -1rem;
    right: -1rem;
    }
`