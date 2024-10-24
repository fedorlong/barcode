'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Header = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    // 这里需要实现语言切换逻辑
  };

  console.log(language)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/img/upca.png" alt="Site Logo" width={40} height={40} />
          <span className="ml-2 text-xl font-bold">BARCODE GENIE</span>
        </Link>

        <nav className="hidden md:flex space-x-4">
          {/* <Link href="#generator" className="text-gray-600 hover:text-gray-900">生成器</Link> */}
          <Link href="#types" className="text-gray-600 hover:text-gray-900">Changelog</Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-900">Blog</Link>
          <Link href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Select onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="lan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zh">中文</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">हिन्दी</SelectItem>
            </SelectContent>
          </Select>

          {/* <Button variant="outline" onClick={() => router.push('/login')}>登录</Button>
          <Button onClick={() => router.push('/signup')}>注册</Button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;