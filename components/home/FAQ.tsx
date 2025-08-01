import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How to generate a barcode?",
    answer: "To generate a barcode, select a barcode type from the options provided. A default barcode will be created automatically. You can then input your specific data, click the 'Generate Barcode' button, and your custom barcode will be generated. You can also download the barcode once it's ready."
  },
  {
    question: "What types of barcodes are supported?",
    answer: "Our barcode generator support a variety of common barcode types, including Code 128, QR Code, EAN-13, and more. You can view all available types in the select menu of the generator."
  },
  {
    question: "What is the quality of the barcode image generated?",
    answer: "The generated barcodes are of high quality, ensuring they meet industry standards and are suitable for professional use."
  },
  {
    question: "Can you guarantee or take responsibility for the barcodes generated by this service?",
    answer: "No, this service is provided 'as is' without any guarantees or warranties. We are not responsible for any issues, damages, or losses that may result from the use of the generated barcodes. Please test and verify the barcodes before use."
  },
  {
    question: "Is the service free?",
    answer: "Yes, this service is completely free to use. There are no hidden fees or charges."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-12">
      <div className="container mx-auto px-10 md:px-36">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently asked questions</h2>
        <Accordion type="multiple">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-bold">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;