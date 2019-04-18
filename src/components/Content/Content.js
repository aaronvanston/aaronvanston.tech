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
    background-color: #f6f8fa;
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
      background-color: #fff;
      border-top: 1px solid #c6cbd1;

      &:nth-child(2n) {
        background-color: #f6f8fa;
      }
    }

    th, td {
      border: 1px solid #dfe2e5;
      padding: 0.375rem 0.75rem;
    }
  }

  /* Blockquotes */
  blockquote {
    margin: 0;
    border-left: 0.25rem solid #dfe2e5;
    color: ${props => props.theme.lightTextColour};
    padding: 0 1rem;
  }

  /* Horizontal Rule */
  hr {
    overflow: hidden;
    background: transparent;
    background-color: #e1e4e8;
    border: 0;
    height: 0.25rem;
    margin: 1.5rem 0;
    padding: 0;
  }
`

export default Content;