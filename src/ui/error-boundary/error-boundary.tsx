import React, {ErrorInfo} from 'react';
import styled from 'styled-components';

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
  state: ErrorBoundaryState = {error: null, errorInfo: null};

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    const {error, errorInfo} = this.state;

    if (errorInfo === null || error === null) {
      return this.props.children;
    }

    return (
      <Root>
        <Title>Что-то пошло не так :(</Title>
        <Description>
          Обратитесь в службу поддержки с информацией об ошибке.
        </Description>

        <ErrorAreaRoot>
          <ErrorArea>
            <ErrorName>{error.toString()}</ErrorName>
            <ErrorStack>{errorInfo.componentStack}</ErrorStack>
          </ErrorArea>
        </ErrorAreaRoot>
      </Root>
    );
  }
}

const Root = styled.div`
  padding: 15px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  margin-bottom: 20px;
`;

const ErrorName = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  color: #cc0000;
`;

const ErrorAreaRoot = styled.div`
  padding: 20px;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const ErrorArea = styled.div`
  max-height: 300px;
  overflow: auto;
  user-select: all;
`;

const ErrorStack = styled.div`
  white-space: pre-wrap;
`;
