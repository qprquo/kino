import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TTheme } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: TTheme }>`
  body {
    overflow-x: hidden;
    margin: 0;
    font-family: ${({ theme }) => `${theme.font.family}`};
    font-size: ${({ theme }) => `${theme.font.sizes[1]}px`};
    background-color: ${({ theme }) => `${theme.colors.background.base}`};
    color: ${({ theme }) => `${theme.colors.body.base}`};
    line-height: 1.4;
  }

  main {
    min-height: 800px;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
    font-weight: 700;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  button {
    font-family: ${({ theme }) => `${theme.font.family}`};
    font-size: ${({ theme }) => `${theme.font.sizes[1]}px`};
    line-height: 1;
    cursor: pointer;
  }

  .link {
    color: ${({theme}) => `${theme.colors.primary.base}`};
    &:hover {
      color: ${({theme}) => `${theme.colors.primary.lightest}`};
    }
  }

  .modal-is-shown {
    overflow-y: hidden;
    padding-right: 17px;
  }

  .d-block {
    display: block;
  }

  .d-iblock {
    display: inline-block;
  }

  .d-flex {
    display: flex;
  }

  .aic {
    align-items: center;
  }

  .jcc {
    justify-content: center;
  }

  .fontless {
    font-size: 0;
  }

  .ml-auto {
    margin-left: auto;
  }

  .mt-4 {
    margin-top: ${({theme}) => `${theme.spaces[4]}px`} !important;
  }

  .mt-5 {
    margin-top: ${({theme}) => `${theme.spaces[5]}px`} !important;
  }

  .mt-10 {
    margin-top: ${({theme}) => `${theme.spaces[10]}px`} !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .mb-1 {
    margin-bottom: ${({theme}) => `${theme.spaces[1]}px`} !important;
  }

  .mb-2 {
    margin-bottom: ${({theme}) => `${theme.spaces[2]}px`} !important;
  }
  
  .mb-3 {
    margin-bottom: ${({theme}) => `${theme.spaces[3]}px`} !important;
  }

  .mb-4 {
    margin-bottom: ${({theme}) => `${theme.spaces[4]}px`} !important;
  }

  .mb-5 {
    margin-bottom: ${({theme}) => `${theme.spaces[5]}px`} !important;
  }

  .mb-10 {
    margin-bottom: ${({theme}) => `${theme.spaces[10]}px`} !important;
  }

  .mb-20 {
    margin-bottom: ${({theme}) => `${theme.spaces[20]}px`} !important;
  }

  .mr-1 {
    margin-right: ${({theme}) => `${theme.spaces[1]}px`};
  }

  .mr-2 {
    margin-right: ${({theme}) => `${theme.spaces[2]}px`};
  }

  .mr-3 {
    margin-right: ${({theme}) => `${theme.spaces[3]}px`};
  }

  .mr-4 {
    margin-right: ${({theme}) => `${theme.spaces[4]}px`};
  }

  .mr-5 {
    margin-right: ${({theme}) => `${theme.spaces[5]}px`};
  }

  .mr-6 {
    margin-right: ${({theme}) => `${theme.spaces[6]}px`};
  }

  .mr-7 {
    margin-right: ${({theme}) => `${theme.spaces[7]}px`};
  }

  .mr-8 {
    margin-right: ${({theme}) => `${theme.spaces[8]}px`};
  }

  .mr-9 {
    margin-right: ${({theme}) => `${theme.spaces[9]}px`};
  }

  .mr-10 {
    margin-right: ${({theme}) => `${theme.spaces[10]}px`};
  }

  .pr-10 {
    padding-right: ${({theme}) => `${theme.spaces[10]}px`};
  }

  .pl-10 {
    padding-left: ${({theme}) => `${theme.spaces[10]}px`};
  }

  .pt-10 {
    padding-top: ${({theme}) => `${theme.spaces[10]}px`};
  }

  .relative {
    position: relative;
  }

  .lazy {
    opacity: 0;
    transition: opacity .4s ease;
    &.loaded {
      opacity: 1;
    }
  }
`;

export default GlobalStyle;
