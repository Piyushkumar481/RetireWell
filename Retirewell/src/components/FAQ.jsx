import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  { 
    question: "How does this platform help me save money?", 
    answer: "Our platform tracks your spending, provides insights, and suggests ways to optimize your budget for better savings."
  },
  { 
    question: "Is my financial data secure?", 
    answer: "Yes, we use industry-standard encryption and security protocols to keep your data safe and private."
  },
  { 
    question: "Can I use this for free?", 
    answer: "Yes! We offer a free plan with essential features. You can upgrade to premium for advanced analytics and goal-setting tools."
  },
  { 
    question: "How do I set my savings goals?", 
    answer: "You can set and track your savings goals through our dashboard, which provides progress updates and tips."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <h2>Frequently Asked Questions<br></br>❓</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={styles.faqQuestion}>
              {faq.question}
              <span className={styles.icon}>{openIndex === index ? "▲" : "▼"}</span>
            </div>
            {openIndex === index && <div className={styles.faqAnswer}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
