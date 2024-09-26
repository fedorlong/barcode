const SiteIntro = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Barcode Genie, your best barcode generator</h1>
        <p className="text-xl mb-6">
          barcode genie is a free barcode generator that supports most of the barcode standards.
        </p>
        {/* <p className="text-lg">
          使用我们的条形码生成器，轻松创建专业质量的条形码和二维码。
          支持多种格式，确保与各种扫描设备兼容。立即开始，提升您的效率！
        </p> */}
      </div>
    </section>
  );
};

export default SiteIntro;