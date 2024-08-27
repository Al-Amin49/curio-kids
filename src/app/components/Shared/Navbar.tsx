import Link from "next/link";


const Navbar = () => {
    return (
        <div >
         <nav className="flex items-center justify-around py-4">
            <h1 className="text-xl lg:text-3xl font-bold"><span className="text-primary">C</span>urio <span className="text-secondary">K</span>ids</h1>

            <ul className="flex items-center space-x-4 text-black font-semibold ">
                <Link href="/">Home</Link>
                <Link href="/">Instructors</Link>
                <Link href="/">Events</Link>
                <Link href="/">Blogs</Link>
                <Link href="/">About</Link>
                <Link href="/contact-us">
                <button className="btn btn-lg">Contact Us</button>
                </Link>
            </ul>
         </nav>
        </div>
    );
};

export default Navbar;