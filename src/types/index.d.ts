type TContext = {
  [key: string]: string | number | boolean | TContext;
};

type TWindow = Window & {
  [key: string]: any;
};
