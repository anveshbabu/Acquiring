export default function NormalSearch() {

    return (

        <div className="main-search-box pt-3 d-block mx-auto">
            <form className="search-form w-100">
                <input type="text" placeholder="Search the docs..." name="search" className="form-control search-input" />
                <button type="submit" className="btn search-btn" value="Search"><i className="fas fa-search"></i></button>
            </form>
        </div>
    )

}