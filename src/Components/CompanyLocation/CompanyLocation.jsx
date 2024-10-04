import React from 'react';

const CompanyLocation = () => {
    return (
        <div className=" bg-customFormShadowBg">
        <div className="container mx-auto pb-10">
          <div className="w-full mt-8">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.3841402251873!2d90.359181!3d23.762598699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c17cc73cedd3%3A0xa64a90f7a9e6475b!2sMediusware%20Ltd.!5e0!3m2!1sen!2sbd!4v1696413159225!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="fast"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    );
};

export default CompanyLocation;