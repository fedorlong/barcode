import { Textarea } from "@/components/ui/textarea";

const Support = () => {
  return (
    <section id="support" className="pt-6 pb-5">
      <div className="relative p-10 pt-8 pb-12 m-8 md:mx-40 md:mt-8 md:mb-20 shadow-lg transition-all hover:shadow-xl rounded-[3rem] bg-slate-400/20">
        <h2 className="text-3xl font-bold mb-4 text-center">Support Us by Sharing!</h2>
        <p className="mb-2 font-semibold">Enjoy our barcode generator? Share the link and help us reach more users!</p>
        <Textarea
          className="text-sm px-2 py-1 bg-white"
          readOnly
          value={`<a href="https://www.freebarcodegen.com" title="Free Barcode Generator">Free Barcode Generator</a>`}
        />
      </div>
    </section>
  );
};

export default Support;