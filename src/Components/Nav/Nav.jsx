import './Nav.scss';

function Nav() {
    return (
      <>
       <nav>
          <div className="logo">
            CoLearn
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Location</a></li>
          </ul>
       </nav>
      </>
    );
  }
  
export default Nav;
  