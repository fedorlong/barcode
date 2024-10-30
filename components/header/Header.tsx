'use client';

// import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        </div>
      </div>
    </header>
  );
};

export default Header;