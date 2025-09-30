//main page
import Link from 'next/link';

//weekly pages page
export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p><Link href="/week-2">Go to week 2</Link></p>
      <p><Link href="/week-3">Go to week 3</Link></p>
      <p><Link href="/week-4">Go to week 4</Link></p>
    </main>
  );
}
