import FromVerification from '@/components/auth/From-Verification';
import { cookies } from 'next/headers';
import Image from 'next/image';

const Page = async () => {
  const cookieStore = await cookies();
  const verifyEmail = cookieStore.get('VERIFY_EMAIL')?.value ?? null;

  return (
    <section>
      <div className="app-container max-w-3xl min-h-screen flex justify-center items-center">
        <div className="w-full flex flex-col-reverse  md:flex-row md:border border-border rounded-xl ">
          {/* left */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-center justify-center gap-5 mt-10 md:mt-0 md:p-10">
            <div className="text-start ">
              <h2>Check your email </h2>
              <p>We sent a 6-digit code to your email</p>
            </div>
            <FromVerification verifyEmail={verifyEmail} />
          </div>
          {/* right */}
          <div className=" flex md:w-1/2 relative justify-center items-center bg-yellow p-5">
            <Image src={'/login_.webp'} alt="login" width={500} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
