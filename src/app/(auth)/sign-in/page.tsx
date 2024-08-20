import { redirect } from 'next/navigation';

import { SignInCard } from '@/features/auth/components/sign-in-card';

import { auth } from '@/auth';

const SignInPage = async () => {
  const session = await auth();

  if (session) redirect('/');

  return (
    <div className="h-full flex items-center justify-center">
      <div className="h-full w-full md:h-auto md:w-[420px]">
        <SignInCard />
      </div>
    </div>
  );
};

export default SignInPage;
