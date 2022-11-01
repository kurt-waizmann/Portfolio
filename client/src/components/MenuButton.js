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
    position: fixed;
    right: 3rem;
    z-index: 1;
`
const Line = styled.div`
  border: 2px solid #E5E0DE;
  border-radius: 5px;
  width: 3.7rem;
  height: 0px;
  margin-bottom: 1rem;
  opacity: 80%;
`