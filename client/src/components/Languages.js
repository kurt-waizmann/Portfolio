// import packages
import styled from 'styled-components'
import { v4 as uuid } from 'uuid';

//import info
import { languages } from './info';

const Languages = () => {

    return (
        <div>
            <Wrapper>
                {languages.map(lang => {
                    return (
                        <BoxWrap>
                            <Box key={uuid()} name={lang.name}>
                                <Image src={lang.pic} alt="technologies" />
                            </Box>
                            <Shadow />
                        </BoxWrap>
                    )
                })}
            </Wrapper>
        </div>
    )
}

export default Languages


const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: flex-start;
    margin: 2rem 0px;
    width: 28rem;
`
const BoxWrap = styled.div`
    position: relative;
`
const Box = styled.div`
    width: 81.29px;
    height: 81.29px;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    background-color: white;
    transition: transform .2s ease-out;
    overflow: hidden;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    word-wrap: break-word;
    text-align: center;

    @media (min-width:770px) {
        &:hover {
        transform: translate(.5rem, -.5rem);
        }

        &:after {
        content: '${prop => prop.name}';
        position: absolute;
        background-color: #4C5272;
        width: 100%;
        height: 100%;
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.2s;  
        }

        &:hover:after{
            opacity: 1;
        }
    }
`
const Shadow = styled.div`
    width: 81.29px;
    height: 81.29px;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    position: absolute;
    top: 5px;
    right: 5px;
    transform: unset;
    z-index: -1;
`
const Image = styled.img`
    width: 5rem;
`