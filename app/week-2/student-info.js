//week 2 page
'use client';

import Link from 'next/link';
//student info component
export default function StudentInfo() {
  return (
    <main>
      <h1>Shopping List</h1>
      <h1>Name: Temi Bankole</h1>
      <p>
        Github:
        <Link href="https://github.com/Temsters/cprg306-assignments.git"> <u>Temsters/cprg306-assignments</u>
        </Link>
      </p>
    </main>
  );
}
