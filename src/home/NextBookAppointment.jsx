import Doctor from "/doctor/doctor11.png";
function NextBookAppointment() {
  return (
    <div className="flex items-center justify-between w-full p-8 my-8 bg-primaryColor rounded-2xl">
      <img src={Doctor} alt="doctor" className="w-[30rem] mx-[10rem]" />
      <div>
        <p className="text-6xl font-bold  my-[3rem]">
          Book Appointment With 100+ Trusted Doctor
          <br />
        </p>
        <a
          href="/signup"
          className="px-8 py-3 text-3xl rounded-full bg-fgcolor text-bgcolor"
        >
          Create Account
        </a>
      </div>
    </div>
  );
}

export default NextBookAppointment;
