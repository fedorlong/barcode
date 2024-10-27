import { QuickGen } from "./QuickGen";

const SiteIntro = () => {
  return (
    <section id="about" className="pt-12 pb-1">
      <div className="container mx-auto px-8 text-center">
        <div className="flex items-center justify-center px-4 py-1 mx-auto mb-5 space-x-2 overflow-hidden transition-all duration-300 border border-opacity-25 rounded-full shadow-md border-slate-500 hover:shadow-xl max-w-fit">
          <p className="text-sm">
            Barcode Genie, a
            <span className="font-semibold"> free </span>
            barcode generator
          </p>
        </div>
        <h1 className="font-bold tracking-tighter text-3xl md:text-4xl lg:text-5xl mt-5 mb-3">A Barcode Generator so good<br className="hidden sm:inline" /> it feels like magic</h1>
        <p className="text-balance font-light text-foreground mt-4 text-sm sm:text-sm mb-1">
          Quickly create&nbsp;
          <QuickGen />&nbsp;
          and more. Barcode Genie supports 100+ formats for retail, inventory, and logistics.
        </p>
        {/* <p className="text-balance font-light text-foreground mt-4 max-w-[42rem] text-lg sm:text-xl">
          quick generate
          <QuickGen />
        </p> */}
      </div>
    </section>
  );
};

export default SiteIntro;