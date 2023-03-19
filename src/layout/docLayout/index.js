
import { SideBar } from '@/layout'
import Script from 'next/script'
import { useEffect } from 'react';
export default function DocLayout(props) {

    let {
        children = '',
        menuList=[]
    } = props;


    useEffect(()=>{
        console.log('props-------->',props.menuList)
    },[])
    return (

        <div className="docs-wrapper">
            <Script src={'/js/simplelightbox/simple-lightbox.min.js'}></Script>
            <Script src={'/js/gumshoe/gumshoe.polyfills.min.js'}></Script>
            <Script src={'/js/docs.js'}></Script>

            <SideBar  menuList={menuList}/>
            <div class="docs-content">
                <div class="container">
                    <article class="docs-article" id="section-1">
                        {children && children}
                    </article>
                </div>
            </div>
        </div>
    )

}