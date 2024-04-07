const StadiumLocation = () => {
  return (
    <div>
      <h1 className="text-2xl text-primary font-bold mb-8">موقع الملعب</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237685.10574182984!2d40.011356168989145!3d21.43593476511423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2z2YXZg9ipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2sly!4v1711506137515!5m2!1sar!2sly"
        width="600"
        height="450"
        className="border-0 w-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default StadiumLocation;
