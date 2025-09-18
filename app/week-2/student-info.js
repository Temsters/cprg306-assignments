'use client';

import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h2>Name: Temi Bankole</h2>
      <p>
        Github:
        <Link href="https://github.com/Temsters/cprg306-assignments.git" target="_blank" rel="noopener noreferrer"> <u>Temsters/cprg306-assignments</u>
        </Link>
      </p>
    </div>
  );
}

export default StudentInfo;