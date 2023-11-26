"use client";
import { ReactNode } from "react";
import { PrimeReactProvider } from 'primereact/api';

export default function RootStyleRegistry({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: {} }}>{children}</PrimeReactProvider>
  );
}