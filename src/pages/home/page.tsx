import React from 'react';
import {Page} from 'features/common';
import {Frame} from './styled';
import {shapes} from 'api/shapes/shapes';
import {Figure} from 'ui/Figure';
import {Dialog} from 'ui/Dialog';

// import {Page} from 'features/common';
// import {Pagination} from 'ui/pagination';

export const Home = () => {
  return (
    <Page title="Главная">
      <Dialog>
        <Frame>
          {shapes.map(i => (
            <Figure key={i.id} {...i} />
          ))}
        </Frame>
      </Dialog>
    </Page>
  );
};
