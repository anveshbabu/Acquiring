
import Link from 'next/link';

export default function SideBar(props) {
    let {
        menuList = []
    } = props;

    return (

        <div id="docs-sidebar" className="docs-sidebar">
            <div className="top-search-box d-lg-none p-3">
                <form className="search-form">
                    <input type="text" placeholder="Search the docs..." name="search" className="form-control search-input" />
                    <button type="submit" className="btn search-btn" value="Search"><i className="fas fa-search"></i></button>
                </form>
            </div>
            <nav id="docs-nav" className="docs-nav navbar">
                <ul className="section-items list-unstyled nav flex-column pb-3">
                    {menuList?.map(({ title = '', subMenu = [] }, i) =>
                        <li className="nav-item section-title mb-0" key={i} >
                            <a className="nav-link scrollto active" href="#section-1"><span className="theme-icon-holder me-2">
                                <i className="fas fa-map-signs"></i></span>{title}</a>

                            <nav id="docs-nav" className="docs-nav navbar p-0" >
                                <ul className="section-items list-unstyled nav flex-column pb-3">
                                    {subMenu.map((data, j) =>
                                        <li key={j} className="nav-item"><Link className="nav-link scrollto" href={data.url}>{data.title}</Link></li>
                                    )}
                                </ul>
                            </nav>


                        </li>)}

                        <li className="nav-item"><a className="nav-link scrollto" href="#item-1-2">Section Item 1.2</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#item-1-3">Section Item 1.3</a></li>

                </ul>

            </nav>
        </div>
    )

}