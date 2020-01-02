import React from "react"
import styled, { css } from "styled-components"
import { Search } from "styled-icons/fa-solid/Search"
import { Algolia } from "styled-icons/fa-brands/Algolia"
export const Root = styled.div`  
  position: relative;
  display: grid;
  grid-gap: 1em;
  justify-content: center;
  margin: 65px auto 0 auto;
  .search-box{
    width: max-content;
    position: relative;
  }
`
export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`
const focus = css`
  background: white;
  color: ${props => props.theme.darkBlue};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${props => props.theme.darkBlue};
    margin: 0.3em;
  }
`
const collapse = css`
  width: 0;
  cursor: pointer;
  color: ${props => props.theme.lightBlue};
  + ${SearchIcon} {
    color: white;
  }
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${props => props.theme.gray};
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: #fff;
  transition: ${props => props.theme.shortTrans};
  border-radius: 3px;
  width: 50em;
  margin-left: -2.2em;
  padding: 1.1em 1.1em 1.1em 3.5em;
  border-radius: 50px;
  height: 60px;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,0.1);
  + ${SearchIcon} {
    margin: 0.3em;
    color: #BDBDBD;
    transform: translateX(10px);
  }
  &::placeholder {
    color: #BDBDBD;
  }
  @media (max-width: 420px){
    width: 100%;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  @media (max-width: 420px){
   margin: auto;
  }
`
export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 5;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 50em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: white;
  border-radius: ${props => props.theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${props => props.theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid #cccccc7a;
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  .s-content{
    width: 25em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
  }
  ul {
    list-style: none;
    padding-bottom: 15px;
  }
  mark {
    color: ${props => props.theme.lightBlue};
    background: ${props => props.theme.darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: white;
      background: ${props => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`

export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
)