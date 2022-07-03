import { Link } from 'react-router-dom'
const MainNavigation = () => {
    return(
        <header>
            <div>Json Place Holder</div>
            <nav>
                <ul>
                    <li><Link to='/'>Root</Link></li>
                    <li><Link to='/albums'>Albums</Link></li>
                    <li><Link to='/comments'>Comments</Link></li>
                    <li><Link to='/photos'>Photos</Link></li>
                    <li><Link to='/posts'>Posts</Link></li>
                    <li><Link to='/todos'>Todos</Link></li>
                    <li><Link to='/Users'>users</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation