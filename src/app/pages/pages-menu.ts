import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },

  {
    title: 'USER PROFILES',
    icon: 'nb-compose',
    children: [
      {
        title: 'Add User Profiles',
        link: '/pages/forms/inputs',
      },


    ],
  },



  {
    title: 'Table Space',
    icon: 'nb-tables',
    children: [
      {
        title: 'Show table space',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Show Usre Profiles',
        link: '/pages/tables/user-profiles',
      },
    ],
  },

];
