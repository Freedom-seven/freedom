import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bench-shell">
      <section className="page-intro">
        <h1>Nothing on the bench at this address.</h1>
        <p className="lede">
          The URL asked for something this bench doesn't hold. The doors below
          all lead somewhere real.
        </p>
      </section>
      <ul className="notfound-links">
        <li>
          <Link href="/">The bench</Link>
        </li>
        <li>
          <Link href="/desk">The desk — enter by need</Link>
        </li>
        <li>
          <Link href="/record">The record</Link>
        </li>
        <li>
          <Link href="/contact">Correspondence</Link>
        </li>
      </ul>
    </div>
  );
}
