// import packages
import styled from 'styled-components'

const MenuButton = () => {
  return (
    <Button>
        <Line />
        <Line />
        <Line />
    </Button>
  )
}

export default MenuButton

const Button = styled.div`
    position: absolute;
    right: 3rem;
`
const Line = styled.div`
    border: 1px solid white;
    border-radius: 5px;
    width: 4.5rem;
    margin-bottom: 1rem;
`