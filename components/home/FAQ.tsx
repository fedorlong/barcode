import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "如何使用条形码生成器？",
    answer: "选择条形码类型，输入您想编码的数据，然后点击'生成条形码'按钮。生成的条形码图像将显示在页面上，您可以下载或直接使用。"
  },
  {
    question: "支持哪些类型的条形码？",
    answer: "我们支持多种常用的条形码类型，包括Code 128、QR Code、EAN-13等。您可以在生成器的下拉菜单中查看所有可用类型。"
  },
  {
    question: "生成的条形码图像质量如何？",
    answer: "我们生成的条形码图像都是高质量的，可以用于打印和数字显示。图像格式为PNG，确保清晰度和兼容性。"
  },
  {
    question: "使用这个工具需要付费吗？",
    answer: "基本的条形码生成功能是免费的。对于高级功能或批量生成，我们提供付费计划。详情请查看我们的价格页面。"
  },
  // 添加更多FAQ项目
];

const FAQ = () => {
  return (
    <section id="faq" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">常见问题</h2>
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;