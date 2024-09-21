import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <p>我们致力于提供最佳的条形码生成解决方案，帮助企业和个人提高效率。</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link href="/">首页</Link></li>
              <li><Link href="/pricing">价格</Link></li>
              <li><Link href="/contact">联系我们</Link></li>
              <li><Link href="/blog">博客</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">法律信息</h3>
            <ul className="space-y-2">
              <li><Link href="/terms">使用条款</Link></li>
              <li><Link href="/privacy">隐私政策</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} 条形码生成器. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;