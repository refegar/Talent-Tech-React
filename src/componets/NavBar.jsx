import MenuItems from "./MenuItems"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand roboto-black fs-3 pe-2 ps-4" href="#">React!</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <MenuItems/>
       
      </div>
    </div>
  </nav>
  )
}

export default NavBar