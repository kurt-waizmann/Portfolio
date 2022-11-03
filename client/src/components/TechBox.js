// import packages
import styled from 'styled-components'
import { v4 as uuid } from 'uuid';

const TechBox = ({ tech }) => {
    return (
        <Wrapper>
            {tech.map(tek => {
                let color = "white";
                switch (tek) {
                    case "react":
                        color = "#61DAFB"
                        break;
                    case "javascript":
                        color = "#F0DB4F"
                        break;
                    case "framer-motion":
                        color = "#FF6FDF"
                        break;
                    case "node.js":
                        color = "#4FAA41"
                        break;
                    case "mongodb":
                        color = "#CC8BFF"
                        break;
                    case "express.js":
                        color = "#F63402"
                        break;
                }
                return <Box key={uuid()} color={color}>{tek}</Box>
            })
            }
        </Wrapper>
    )
}

export default TechBox

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: .5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;

`
const Box = styled.div`
    height: 22px;
    background: #4C5272;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px .5rem;
    color: ${prop => prop.color};
`