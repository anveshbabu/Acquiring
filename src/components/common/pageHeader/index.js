

export default function PageHeader(props) {
    let {
        children=''
    } = props;

    return (
        <div className="page-header theme-bg-dark py-5 text-center position-relative">
            <div className="theme-bg-shapes-right"></div>
            <div className="theme-bg-shapes-left"></div>
            <div className="container">
                <h1 className="page-heading single-col-max mx-auto">Documentation</h1>
                <div className="page-intro single-col-max mx-auto">Everything you need to get your software documentation online.</div>
                {children && children}
            </div>
        </div>
    )

}