import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import List from './List';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  border: 1px solid #BCB5B9;
  border-radius: ${(props) => props.isHoliday ? '1px' : '10px'};
  padding: 20px 40px;
  background: #F2F2F2;
  max-width: 640px;
`;

const items = [
  'create-react-app',
  'styled-components',
  'testing-library',
  'redux',
  'npm'
];

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <ContentWrapper isHoliday={Math.random() > 0.5}>
        <h1>react-base based on:</h1>
        <List items={items} />
      </ContentWrapper>
    </AppWrapper>
  )
}

export default App;
