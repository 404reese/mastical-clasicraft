import React from 'react';

const ContactPage = () => {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 mb-6">Send Us a Message</h2>
            <form action="#" method="POST">
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-stone-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700">
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-stone-300 rounded-md"
                      defaultValue={''}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#7a2353] hover:bg-[#631c42] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 mb-6">Our Contact Details</h2>
            <div className="space-y-4 text-stone-600">
              <p>
                <strong>Address:</strong><br />
                20/21, Aba Mane Compund, 51K, <br />
                Dockyard Road, Mazgaon <br />
                 Mumbai 400010
              </p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+917208809410" className="text-[#7a2353] hover:underline">+91 7208809410</a> / 
                <a href="tel:+912223755675" className="text-[#7a2353] hover:underline">+91 22 23755675</a>
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:clasicraft@gmail.com" className="text-[#7a2353] hover:underline">clasicraft@gmail.com</a>
              </p>
              <p>
                <strong>GST NUMBER:</strong> GST 27AACFC1288Q1ZZ
              </p>
              <p>
                <strong>Workshop:</strong><br />
                Heart of Mumbai
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
