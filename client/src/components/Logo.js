// import packages
import styled from 'styled-components'

// import svg files
import Door from '../assets/logo-door.svg'
import Name from '../assets/logo-name.svg'


const Logo = () => {
    return (
        <>
            <LogoWrapper>
                <ImageDoor src={Door} alt="Logo Door" />
                <ImageName src={Name} alt="Logo Name" />
            </LogoWrapper>
        </>
    )
}

export default Logo

const LogoWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-top: 3.5rem;
    margin-bottom: 1rem;
`
const ImageDoor = styled.img`
    width: 8rem;
`
const ImageName = styled.img`
    position: absolute;
    top: 5.2rem;
    left: 4.4rem;
    width: 7rem;
`