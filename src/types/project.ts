export type project = {
  name: string;
  description: string;
  github: string;
  page?: string;
  imageDesktop: string;
  imageIpad: string;
  imageMobile: string;
  technologies: Array<JSX.Element>;
};
