const pre = '/auth/';

export default {
    path: '/auth',
    title: '权限管理',
    header: 'system-setting',
    icon: 'md-speedometer',
    children: [
        {
            path: `${pre}user`,
            title: '用户管理'
        },
        {
            path: `${pre}role`,
            title: '角色管理'
        },
        {
            path: `${pre}org`,
            title: '组织管理'
        }
    ]
}
