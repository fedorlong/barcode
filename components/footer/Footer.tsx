import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-slate-300/20 py-8">
      <div className="container mx-auto px-10">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/2 pr-10">
            <div className="flex items-center justify-center md:justify-start text-lg font-semibold mb-1">
              <Image src="/img/logo.png" alt="footer logo" width={30} height={30} />
              <span className="ml-3">FreeBarcodeGenerator</span>
            </div>
            <p className="text-sm mb-2">The ultimate barcode generator for fast, custom barcodes online.</p>
            <p className="text-xs">For suggestions or inquiries, please <a className='underline' href='mailto:support@freebarcodegen.com'>contact us</a></p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:w-1/2">
            <div>
              <h3 className="text-base font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/">Home</Link></li>
                <li><Link href="https://github.com/fedorlong/barcode" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">GitHub</Link></li>
                {/* <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blog">Blog</Link></li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms">Terms of Use</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; {new Date().getFullYear()} Free Barcode Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;