
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App.js'
const MainPage = () =>{
    return(   
     <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={App}></Route>
            /*
            Route 패스 지정 , 세션 지정(로그인 정보를 바탕으로 접근), 각 페이지 패스 별로 접근 가능. 강력한 기능 제공.
             */
        </Switch>
        </BrowserRouter>
    )  
}

export default MainPage;