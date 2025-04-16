import { Link } from '@inertiajs/react';

export default function Nav() {
    return (
        <nav className="topNav">
            <div className="navLeft">
                <p id="nameAndTitle">
                    JEROEN BERKHOF - GAME DESIGNER
                </p>
            </div>
            <div className="navRight">
                <ul>
                    <li>
                        <Link className="page-link" href="/">Portfolio</Link>
                    </li>
                    <li><Link className="page-link" href="/resume">Resume</Link></li>
                    <li><Link className="page-link" href="/projects">Projects</Link></li>
                </ul>
            </div>
        </nav>
    );
}
