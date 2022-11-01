// import packages
import styled from 'styled-components'

//import components
import Languages from '../Languages'

const Fold2 = () => {
  return (
    <>
    <h1>About Me</h1>
    <Details>I'm fascinated with the possibilities of storytelling using web technologies. Previously, I studied filmmaking, worked briefly on independent films as both a sound and lighting technician, as well as working within the hospital industry during the pandemic.</Details>
    <Languages />
    </>

  )
}

export default Fold2

const Details = styled.p`
  line-height: 34px;
  margin-top: 2rem;
`