import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/shell';
export const metadata: Metadata = {title:'Business Atlas — Understand Indian businesses',description:'An independent, frontend-only business encyclopedia prototype.'};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" suppressHydrationWarning><body><Header/>{children}<Footer/></body></html> }
