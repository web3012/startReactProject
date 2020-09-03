import React from 'react'
import "./App.scss"
import {useRoutes, A} from 'hookrouter';

const routes = {
    '/': () => <HomePage />,
    '/about': () => <AboutPage />,
    '/offline': () => <Offline />,
}
const HomePage = () => {
    return <div className="pageContent">Главная страница</div>
}
const AboutPage = () => {
    return <div className="pageContent">О компании</div>
}
const NotFoundPage = () => {
    return <div className="pageContent">404</div>
}
const Offline = () => {
    return <div className="pageContent">Offline !</div>
}
const Menu = () => {
    return (
        <div className="pageMenu">
        <A href="/">Главная</A>&nbsp;|&nbsp;<A href="/about">О компании</A>
        </div>
    )
}

const App = () => {

    const routeResult = useRoutes(routes)

    return (
        <div className="App">
            {routeResult || <NotFoundPage />}
            <Menu/>
        </div>
    );
};

export default App