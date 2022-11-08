import {ReactNode} from 'react';

export interface PageProps {
  children: ReactNode;
  title?: string;
  button?: ReactNode;
}

// export interface Props {
//     title: string;
//     icon: ReactNode;
//     data: {};
//     modalContent: ReactNode;
//     className?: string;
//   }
  
//   export interface State {
//     showDangerDetail: boolean;
//     showWarningDetail: boolean;
//     modalOpened: boolean;
//   }
  
