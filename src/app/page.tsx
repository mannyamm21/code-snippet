'use client'
// page.tsx
import { useAuth } from '@clerk/nextjs';
import CodeIcon from '@mui/icons-material/Code';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
      <CTASection />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-mainColor p-[6px] rounded-md">
        <CodeIcon sx={{ fontSize: 27, color: 'white' }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className="font-bold text-mainColor">Snippet</span>
        <span className="text-slate-600">Master</span>
      </div>
    </div>
  );
}

function Buttons() {
  const { userId } = useAuth();
  return (
    <div className='max-sm:w-full'>
      {userId ? (
        <Link href="/my-codes">
          <button className='max-sm:w-full bg-mainColor p-[8px] px-6 text-sm text-white rounded-md'>
            Access To The App
          </button>
        </Link>
      ) : (
        <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
          <Link href="/sign-in">
            <button className="max-sm:w-full bg-mainColor p-[8px] px-6 text-sm text-white rounded-md">
              Sign In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="text-sm border border-mainColor text-mainColor hover:bg-mainColor hover:text-white p-[8px] px-6 rounded-md">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>

  );
}

function CTASection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center">
        Organize Your Code Snippets
        <span className="text-mainColor"> Efficiently!</span>
      </h2>
      <p className="text-center text-sm w-[450px] max-sm:w-full text-slate-500">
        With our advanced tagging and search feature, you can quickly find the snippet you need, right when you need it. Spend less time searching for code and more time writing it.
      </p>
      <button className="block px-9 py-3 text-sm font-medium text-white bg-mainColor transition focus:outline-none" type="button">
        {`Let's get Started`}
      </button>
    </div>
  );
}
