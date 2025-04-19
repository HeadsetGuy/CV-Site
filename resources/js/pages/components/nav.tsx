import { Link } from '@inertiajs/react';

export default function Nav() {
    return (
        <nav className="topNavContainer">
            <div className='top-nav'>
                <div className="navLeft">
                    <span id="nameAndTitle">
                        JEROEN BERKHOF - GAME DESIGNER
                    </span>
                </div>
                <div className="navRight">
                    <ul className='list'>
                        <li>
                            <Link className="page-link" href="/">Portfolio</Link>
                        </li>
                        <li><Link className="page-link" href="/cv">CV</Link></li>
                        <li><Link className="page-link" href="/projects">School</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
