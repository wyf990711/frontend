import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

export default {
    path: '/auth',
    meta,
    component: BasicLayout,
    redirect: { name: 'user' },
    children: [
        {
            path: 'user',
            name: 'user',
            meta: {
                ...meta,
                title: '用户管理',
                closable: true
            },
            component: () => import('@/pages/auth/user')
        },
        {
            path: 'role',
            name: 'role',
            meta: {
                ...meta,
                title: '角色管理',
                closable: true
            },
            component: () => import('@/pages/auth/role')
        },
        {
            path: 'org',
            name: 'org',
            meta: {
                ...meta,
                title: '组织管理',
                closable: true
            },
            component: () => import('@/pages/auth/org')
        }
    ]
};
