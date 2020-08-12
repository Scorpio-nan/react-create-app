import AsyncComponent from './AsyncComponent';

const Home = AsyncComponent(() => import('../pages/Home'));
const Login = AsyncComponent(() => import('../pages/Login'));
const Register = AsyncComponent(() => import('../pages/Register'));

const routes = [
    {
        path:"/",
        name:"Home",
        title:"首页",
        authority:false,
        component: Home
    },
    {
        path:'/Login',
        name:"Login",
        title:"登录",
        authority:false,
        component: Login
    },
    {
        path:'/Register',
        name:"Register",
        title:"登录",
        authority:false,
        component: Register
    }
]

export default  routes;

