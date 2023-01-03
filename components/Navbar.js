import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link href="/" passHref></Link><h1>Company Directory</h1>
            </div>
            <Link href="/" passHref>Home</Link>
            <Link href="/about" passHref>About</Link>
            <Link href="/directory" passHref>Directory</Link>
        </nav>
     );
}
 
export default Navbar;