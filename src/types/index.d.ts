type TContext = {
  [key: string]: string | number | boolean | TContext | undefined | (() => void);
};

type TWindow = Window & {
  [key: string]: any;
};
