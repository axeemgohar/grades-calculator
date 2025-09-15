import ContactUsForm from './components/ContactForm';

export const metadata = {
  title: 'Contact Us - Gradian',
  description:
    'Connect with us! If you have questions, suggestions, or have a business query, our contact page is your gateway to reaching out. We value your feedback and are here to assist you.',
  alternates: {
    canonical: 'https://calculatecgpa.com/contact-us',
  },
};
const ContactUsPage = () => {
  return (
    <section className="max-w-2xl mx-auto shadow-xs border border-indigo-300 rounded-lg p-8 max-sm:px-4 bg-indigo-300/10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg max-sm:text-base">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>
      <ContactUsForm />
    </section>
  );
};

export default ContactUsPage;
