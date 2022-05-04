// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill')
  },
  {
    title: 'brands',
    path: '/dashboard/brand',
    icon: getIcon('bxs:category-alt')
  },
  {
    title: 'comment',
    path: '/dashboard/comment',
    icon: getIcon('ep:comment')
  },
  {
    title: 'rating',
    path: '/dashboard/rating',
    icon: getIcon('ant-design:star-filled')

  },
  {
    title: 'categories',
    path: '/dashboard/category',
    icon: getIcon('bxs:category-alt')
  },

  {
    title: 'event',
    path: '/dashboard/event',
    icon: getIcon('eva:file-text-fill')
  },

  {
    title: 'coupons',
    path: '/dashboard/coupons',
    icon: getIcon('bxs:coupon')
  },
   
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill')
  }
];

export default sidebarConfig;
