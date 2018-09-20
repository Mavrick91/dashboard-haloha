declare type CMSSidebar = {
  cmsProgression: {
    title: string,
    subtitle: string,
  },
  cmsSteps: {
    title: string,
  },
};

declare type HeaderType = {
  myEvent: string,
  attendees: string,
  help: string,
  update: string,
};

declare type CMSType = {
  header: HeaderType,
  sidebar: CMSSidebar,
};
