import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/admin/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Category', 
    icon: 'layout-outline',
    children: [
      {
        title: 'Add Category',
        link: 'category/add',
      },
      {
        title: 'Category Listing',
        link: 'category/list',
      }
    ],
  },
  {
    title: 'Users', 
    icon: 'people-outline',
    children: [
      {
        title: 'Manage Users',
        link: '/admin/layout/stepper',
      }
    ],
  },
  {
    title: 'Directories', 
    icon: 'folder-outline',
    children: [
      {
        title: 'Manage Directories',
        link: '/admin/layout/stepper',
      }
    ],
  },
  {
    title: 'Blogs', 
    icon: 'camera-outline',
    children: [
      {
        title: 'Add Blogs',
        link: '/admin/layout/stepper',
      }
    ],
  },
  {
    title: 'Testimonials', 
    icon: 'person-add-outline',
    children: [
      {
        title: 'Manage Testimonials',
        link: '/admin/layout/stepper',
      }
    ],
  }
];
