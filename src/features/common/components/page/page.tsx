import React from 'react';
import { ErrorBoundary } from 'ui/error-boundary';

import {Header, Root, Title} from './styled';
import {PageProps} from './types';

export const Page = ({
  children,
  title = 'Заголовок страницы',
  button = null,
}: PageProps) => (
  <Root>
    <Header>
      <Title>{title}</Title>
    </Header>
    <ErrorBoundary>{children}</ErrorBoundary>
  </Root>
);
