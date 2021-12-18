import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

export default {
    path: '/study',
    meta,
    component: BasicLayout,
    redirect: { name: 'study' },
    children: [
        {
            path: 'demo1',
            name: 'demo1',
            meta: {
                ...meta,
                title: 'demo1',
                closable: true
            },
            component: () => import('@/pages/study/demo1')
      },
      {
        path: 'echarts',
        name: 'echarts',
        meta: {
            ...meta,
            title: 'echarts',
            closable: true
        },
        component: () => import('@/pages/study/echarts')
    },
    ]
};
