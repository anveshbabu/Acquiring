
import { PageHeader, NormalSearch } from '@/components/common'
import Image from 'next/image';
import { Fragment } from 'react';
export default function Header(props) {

    let {
        pageHeader = false,
    } = props;

    return (
        <Fragment>
            <header class="header fixed-top">

                <div class="branding docs-branding">
                    <div class="container-fluid position-relative py-2">
                        <div class="docs-logo-wrapper">
                            <button id="docs-sidebar-toggler" class="docs-sidebar-toggler docs-sidebar-visible me-2 d-xl-none" type="button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            <div class="site-logo"><a class="navbar-brand" href="index.html">
                                <Image
                                    src="/images/logo.svg"
                                    alt="LOGO"
                                    class="logo-icon me-2"
                                    width={40}
                                    height={40}
                                />
                                <span class="logo-text">Coder<span class="text-alt">Docs</span></span></a></div>
                        </div>
                        {/* <div class="docs-logo-wrapper">
                            
                        </div> */}
                        <div class="docs-top-utilities d-flex justify-content-end align-items-center">

                            <ul class="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
                                <li class="list-inline-item"><a href="#"><i class="fab fa-github fa-fw"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-twitter fa-fw"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-slack fa-fw"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-product-hunt fa-fw"></i></a></li>
                            </ul>
                            <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderdocs-free-bootstrap-5-documentation-template-for-software-projects/" class="btn btn-primary d-none d-lg-flex">Download</a>
                        </div>
                    </div>
                </div>
            </header>
            {pageHeader && <PageHeader >
                <NormalSearch />
            </PageHeader>}


        </Fragment>

    )


}