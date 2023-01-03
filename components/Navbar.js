import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link href="/" passHref><h1>Company Directory</h1></Link>
            </div>
            <Link href="/" passHref>Home</Link>
            <Link href="/about" passHref>About</Link>
            <Link href="/directory" passHref>Directory</Link>
        </nav>
     );
}
 
export default Navbar;