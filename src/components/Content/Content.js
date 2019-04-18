import styled from 'styled-components'

import '../../styles/code-theme.css'

const Content = styled.div`
  /* General */
  font-size: 1rem;
  line-height: 1.5;

  /* Overrides */
  blockquote, details, dl, ol, p, pre, table, ul {
    margin-bottom: 1rem;
    margin-top: 0;
  }

  /* Lists */
  ol, ul {
    margin-top: 0;
    padding-left: 2rem;
  }

  /* Code and Syntax  Highlighting */
  pre {
    background-color: ${props => props.theme.colour.offWhite};
    border-radius: 3px;
    font-size: 0.875rem;
    line-height: 1.45;
    overflow: auto;
    word-wrap: normal;
    padding: 1rem;
  }

  /* Tables */
  table {
    display: block;
    overflow: auto;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;

    tr  {
      background-color: ${props => props.theme.colour.white};
      border-top: 1px solid ${props => props.theme.colour.lightGrey};

      &:nth-child(2n) {
        background-color: ${props => props.theme.colour.offWhite};
      }
    }

    th, td {
      border: 1px solid ${props => props.theme.colour.lightGrey};
      padding: 0.375rem 0.75rem;
    }
  }

  /* Blockquotes */
  blockquote {
    margin: 0;
    border-left: 0.25rem solid ${props => props.theme.colour.lightGrey};
    color: ${props => props.theme.lightTextColour};
    padding: 0 1rem;
  }

  /* Horizontal Rule */
  hr {
    overflow: hidden;
    background: transparent;
    background-color: ${props => props.theme.colour.lightGrey};
    border: 0;
    height: 0.25rem;
    margin: 1.5rem 0;
    padding: 0;
  }
`

export default Content;