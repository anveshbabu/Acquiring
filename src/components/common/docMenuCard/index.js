import Link from 'next/link'
export default function DocMenuCards(props) {
    let {
        children = '',
        data={}
    } = props;

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title mb-3">
                    <span className="theme-icon-holder card-icon-holder me-2">
                        <i className={data.icon}/>
                    </span>
                    <span className="card-title-text">{data.title}</span>
                </h5>
                <div className="card-text">
                {data.discussion}
                </div>
                <Link className="card-link-mask" href={data.url}></Link>
            </div>
        </div>
    )

}