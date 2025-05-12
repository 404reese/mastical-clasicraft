import React from 'react';

const PolicyPage = () => {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Our Policies
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Understanding our policies for returns, cancellations, and refunds.
          </p>
        </div>

        {/* Return Policy Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 mb-4">Return Policy</h2>
          <div className="text-stone-600 space-y-4">
            <p>We at 'IT'S ALL ABOUT HOME' take all quality measures to ensure that you get the flawless product. Our Quality inspection team carefully inspects each and every product before dispatching it to your desired shipping address.</p>
            <p>However, we request you to kindly check the product upon receiving delivery, and after checking if you find any damage or defect immediately call us at 022 23755675 during office hours or mail us  clasicraft@gmail.com</p>
            <p>If you are not satisfied with your purchase for any reason and you would like to change the same, you can return the unused product to our courier person in its original packing within 48 hours from the time of delivery.</p>
            <p>In case you receive any damaged, defective or improper product, you need to inform our customer care within 48 hours of delivery for replacement/repair. If you are unable to inform us within 48 hours, we will not be held liable for providing solution against any such complaint.</p>
            <p>The time frame starts from date/time of product delivered at your door steps as per the confirmation received from our logistic team or courier partners.</p>
            <p>Please send us pictures of the damaged product at clasicraft@gmail.com within the given time frame.</p>
            <p>You can cancel your order before shipping. Once the product is ready to ship or dispatched, no cancellation will be accepted.</p>
            <p>In a situation wherein you have received the product then in that case you have to follow the procedure mentioned above.</p>
            <p>We will arrange pick-up of the damaged/defective product through its own logistic partner. In case our logistics partner is unable to pick up the so called defective product, our customer care team will inform and request you to dispatch the so called defective product using an accredited courier service in your respective area within 72 Hours from receipt of our notice.</p>
            <p>The logistics charges incurred by you will be refunded in the form of voucher.</p>
            <p>Any returnable product should be returned in its original packaging along with the original price tags, labels, barcodes, user manual, invoices and all related documents.</p>
            <p>It is advised that the return packet should be adequately packed for dispatch purposes so that there is no further damage to the product during transit.</p>
            <p>All the complaints raised on defective and damaged product will be checked and verified by our Quality Team to determine the legitimacy of the defect. If the claim is not legitimate, you will be required to bear the return shipping cost of the product.</p>
            <p>If product has technical / manufacturing defects, we will replace the product.</p>

          </div>
        </div>

        {/* Cancellation Policy Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 mb-4">Cancellation Policy</h2>
          <div className="text-stone-600 space-y-4">
            <p>Cancellations are not permitted once the order is ready to ship or dispatched.</p>
          </div>
        </div>

        {/* Refund Policy Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 mb-4">Refund Policy</h2>
          <div className="text-stone-600 space-y-6">
            <p>Refund will be processed through the same mode of payment by which the payment was made for the purchase of the items.</p>
            <p>Refund will be subjected to following:-</p>
            <p>
              • Order paid online will be refunded within 7-21 working days through the online account or via cheque after verification of the product.
            </p>
            <p>• For cash on delivery payments, you will be provided with a refund through cheque or via NEFT.</p>
            <p>All refunds are processed and a transaction number is shared post which the said amount will be credited to your account within 7 business days.</p>
            <p>Please contact our customer care team on 022 23755675 (10 AM - 7 PM) for further queries or mail us at clasicraft@gmail.com</p>
          </div>
        </div>

        {/* Contact Section (Optional - if you want a direct link to contact from this page) */}
        {/*
        <div className="text-center bg-amber-700 text-white rounded-xl shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Questions About Our Policies?</h2>
            <p className="text-lg mb-6">Contact us for clarification.</p>
            <a
                href="#" // Replace with your contact page link
                className="inline-block px-8 py-3 bg-white text-amber-800 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
                Contact Us
            </a>
        </div>
        */}

      </div>
    </div>
  );
};

export default PolicyPage;

