'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';

export const SignInCard = () => {
  const onProviderSignIn = (provider: 'github' | 'google') => {
    signIn(provider, { callbackUrl: '/' });
  };

  return (
    <Card className="w-full h-full p-8 bg-slate-50">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5 px-0 pb-0">
        <div className="flex flex-col gap-y-2.5">
          <Button
            size="lg"
            variant="outline"
            className="w-full relative"
            onClick={() => onProviderSignIn('github')}
          >
            <FaGithub className="size-5 absolute left-2.5" />
            Continue with Github
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full relative"
            onClick={() => onProviderSignIn('google')}
          >
            <FcGoogle className="size-5 absolute left-2.5" />
            Continue with Google
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up">
            <span className="text-sky-700 hover:underline">Sign up</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
