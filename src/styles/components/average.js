import styled from 'styled-components'
import colors from '../bases/colors'

export const AverageContainer = styled.article`
  background-color: ${colors.primary};
  border-radius: 0.35rem;
  width: 100%;
  height: 263px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 1200px) {
    margin-top: 2rem;
  }
`
export const Title = styled.h2`
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  max-width: 9.5rem;
  line-height: 1.5rem;
  padding: 2rem 0 1rem 2rem;
  opacity: 0.5;
  align-self: flex-start;
  position: absolute;
`
export const TooltipStyle = styled.div`
  background-color: white;
  color: black;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  height: 1.5rem;
`
export const Days = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 1.2rem;
  width: 90%;
  color: white;
  opacity: 0.5;
  font-size: 0.75rem;
`