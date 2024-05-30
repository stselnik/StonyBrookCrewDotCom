import Link from "next/link";


export default function NavigationBar() {
    return (
        <nav>
            <Link href="/">Homepage</Link>
            <br />
            <Link href="/aboutus">About us</Link>
            <br />
            <Link href="/history">History</Link>
            <br />
            <Link href="/prospectiverowers">Prospective Rowers</Link>
        </nav>
    )
}