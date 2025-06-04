'use client';

// import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Header = () => {
  // const [language, setLanguage] = useState('en');

  // const handleLanguageChange = (value: string) => {
  //   setLanguage(value);
  //   // 这里需要实现语言切换逻辑
  // };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-10 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-9">
          <Link href="/" className="flex items-center">
            <Image src="/img/logo.png" alt="Site Logo" width={35} height={35} />
            <span className="ml-2 text-xl font-bold">FreeBarcodeGenerator</span>
          </Link>

          <nav className="hidden md:flex space-x-4">
            {/* <Link href="#types" className="font-medium text-gray-600 hover:text-gray-900">Changelog</Link>
            <Link href="#about" className="font-medium text-gray-600 hover:text-gray-900">Blog</Link> */}
            <Link href="#faq" className="font-medium text-gray-600 hover:text-gray-900">FAQ</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* <Select onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="lan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zh">中文</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">हिन्दी</SelectItem>
            </SelectContent>
          </Select> */}

          {/* <Button variant="outline" onClick={() => router.push('/login')}>登录</Button>
          <Button onClick={() => router.push('/signup')}>注册</Button> */}
          <Button asChild variant="outline" size="icon">
            <Link href="https://github.com/fedorlong/barcode" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;