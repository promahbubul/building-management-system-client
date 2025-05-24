

const Contact = () => {
  return (
    <div className="text-center mx-5 md:mx-0 my-10">
      <h2 className="text-4xl underline   font-extrabold text-[#0ba] font-roboto">
        ABOUT THE BUILDING
      </h2>
      <div className="text-[#606e7c] mx-auto mb-5 text-base font-normal mt-4 font-roboto">
        <table className="text-left mx-auto inline">
          <tr>
            <th>Email </th>
            <td>:</td>
            <td>villax@gmail.com</td>
          </tr>
          <tr>
            <th>website </th>
            <td>:</td>
            <td>www.villax.com</td>
          </tr>
          <tr>
            <th>phone </th>
            <td>:</td>
            <td>8805251251</td>
          </tr>
        </table>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d680.231838884434!2d90.41510503291974!3d24.723659868462697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1701186505474!5m2!1sen!2sbd"
        className="w-full h-80 rounded-md"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
