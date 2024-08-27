import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "How do I register to vote online?",
    answer:
      "To register to vote online, you need to complete the online voter registration form with your personal details, proof of identity, and address. After submission, you will receive a confirmation email, and your registration will be processed.",
  },
  {
    id: "item-2",
    question: "How do I update my voting information?",
    answer:
      "You can update your voting information by logging into your account on the voting platform and selecting the option to update your details. Make sure to provide the updated information and submit the changes for verification.",
  },
  {
    id: "item-3",
    question: "What should I do if I encounter issues while voting?",
    answer:
      "If you experience any issues while voting, contact our support team through the helpdesk or use the live chat feature. We are here to assist you with any voting-related problems or questions you may have.",
  },
  {
    id: "item-4",
    question: "How can I check the status of my vote?",
    answer:
      "To check the status of your vote, log into your account and navigate to the 'Vote Status' section. You will be able to see if your vote has been successfully cast and counted.",
  },
  {
    id: "item-5",
    question: "How do I reset my account password?",
    answer:
      "If you need to reset your account password, go to the login page and click on 'Forgot Password.' Follow the instructions sent to your registered email to create a new password and regain access to your account.",
  },
  {
    id: "item-6",
    question: "How is my vote kept confidential?",
    answer:
      "Our platform uses advanced encryption and security protocols to ensure that your vote remains confidential and secure. Your vote is anonymized and stored in a secure database, and only authorized personnel have access to the results.",
  },
];

const Faq = () => {
  return (
    <section className="faq-section my-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-teal-900">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
