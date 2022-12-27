import Link from "next/link";

export default function FooLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav>
          Nav links to a base path of `/`:
          <ul>
            <li>
              <Link href="/">Foo Home</Link>
            </li>
            <li>
              <Link href="/about">Foo About</Link>
            </li>
          </ul>
        </nav>
        <nav>
          Nav links to a base path of `/sites/foo`:
          <ul>
            <li>
              <Link href="/sites/foo">Foo Home</Link>
            </li>
            <li>
              <Link href="/sites/foo/about">Foo About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
