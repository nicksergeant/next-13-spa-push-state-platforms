import Link from "next/link";

export default function FooLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Foo Home</Link>
            </li>
            <li>
              <Link href="/about">Foo About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
