export const Index = '/';

const Route = {
  home: '',
  about: 'about',
};

type SiteRoute = Record<
  keyof typeof Route,
  {
    path: string;
    fullPath: string;
    name: string;
    displayName: string;
  }
>;

export const SiteRoute: SiteRoute = Object.entries(Route).reduce(
  (acc, [name, path]) => ({
    ...acc,
    [name]: {
      path,
      fullPath: `${Index}${path}`,
      name,
      displayName: name.toUpperCase(),
    },
  }),
  {} as SiteRoute,
);
