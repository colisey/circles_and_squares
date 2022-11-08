// import 'styled-components';

// interface Text {
//   main: string;
//   secondary: string;
//   disabled: string;
//   accent: string;
// }

// export interface DefaultTheme {
//   red: string;
//   dark_red: string;
//   blue: string;
//   dark_blue: string;
//   green : string;
//   dark_green : string;
//   yellow : string;
//   dark_yellow : string;
// }

interface IText {
  main: string;
  secondary: string;
  disabled: string;
  accent: string;
}

interface IFigure {
  red: string,
  dark_red: string,
  blue: string,
  dark_blue: string,
  green: string,
  dark_green: string,
  yellow: string,
  dark_yellow: string,
}

export interface DefaultTheme {
    main: string;
    secondary: string;
    text: IText;
    danger: string;
    warning: string;
    success: string;
    info: string;
    figure: IFigure;
}
