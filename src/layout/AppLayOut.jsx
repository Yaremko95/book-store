import React, {Component} from 'react';
import AppNav from "./AppNav";
import AppFooter from "./AppFooter";

function AppLayOut (props){

        return (
            <>
                <AppNav/>
                {props.children}
                <AppFooter/>
            </>
        );

}

export default AppLayOut;