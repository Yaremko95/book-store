import  React from 'react'
import AppLayOut from "../layout/AppLayOut";
import Home from "../pages/Home";
import About from "../pages/About";
import Browse from "../pages/Browse";
import Book from "../pages/Book";

export default  [
    {
        path:'/',
        layout: AppLayOut,
        component:Home,
        exact:true
    },
    {
        path:'/about',
        layout: AppLayOut,
        component:About,
        exact:false
    },
    {
        path:'/browse',
        layout: AppLayOut,
        component:Browse,
        exact:false
    },
    {
        path:'/book/:bookId',
        layout: AppLayOut,
        component:Book,
        exact:false
    }
]