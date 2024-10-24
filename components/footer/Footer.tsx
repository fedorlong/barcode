import Link from 'next/link';
import { Textarea } from "@/components/ui/textarea";

const Footer = () => {
  return (
    <footer className="bg-slate-300/20 py-8">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-2/3 pr-10">
            <h3 className="text-lg font-semibold mb-1">Support Us by Sharing!</h3>
            <p className="text-sm mb-1">Enjoy our barcode tool? Share the link and help us reach more users!</p>
            <Textarea
              className="text-sm"
              readOnly
              value={`<a href="https://www.yourwebsite.com" title="Leading Barcode Generator" rel="nofollow">Leading Barcode Generator</a>`}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:w-1/3">
            <div>
              <h3 className="text-base font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blog">Blog</Link></li>
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
          <p>&copy; {new Date().getFullYear()} Barcode Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;