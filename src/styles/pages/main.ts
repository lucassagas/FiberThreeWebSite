import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: red;

  width: 100%;

  > section {
    > div {
      background: blue;
    }
  }
`
