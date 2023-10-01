import { useNavigate } from "react-router-dom";

import { data } from "../constants";


const Contacts = () => {
  const Navigate = useNavigate();

  const go_T0_Login = () => {
    Navigate("/");
  };

  const got_To_Add_Contacts = () => {
    Navigate("/add_contact");
  };

  return (
    <div className="w-full h-full bg-[url('/src/assets/images/background-img.png')]">
      <div className=" absolute left-[-122px] top-[-189px] bg-[#083F46] w-[1763px] h-[1107px] rounded-[50%] rotate-[25deg]"></div>
      <div className="relative text-white top-[102px] left-[205px] w-[138px] h-[91px]">
        <img
          className="w-[72px] h-[24px]"
          src="./src/assets/images/twc-white.svg"
          alt="TWC logo"
        />
        <p className="text-3xl font-medium">
          <span className="font-bold">Contacts </span> <br /> portal
        </p>
      </div>

      <div className="absolute text-white w-[994px] h-[73px] top-[230px] left-[204px]">
        <p className=" inline-flex text-4xl font-bold mb-[60px] pt-2">
          Contacts
        </p>

        <button
          onClick={() => got_To_Add_Contacts()}
          className=" ml-[520px] rounded-full border focus:shadow-outline w-[255px] h-[48px] hover:bg-white hover:text-[#083F46]"
        >
          Add new contact
        </button>
      </div>

      <section className="contact-details overflow-y-auto absolute w-[955px] h-[316px] bg-white mt-[220px] ml-[200px] rounded-[30px]">
        <div className="table-heading flex space-x-[100px] pl-[144px] pt-4 text-[18px] text-[#083F46] font-bold">
          <p>full name</p>
          <p>gender</p>
          <p>email</p>
          <p className="pl-[80px]">phone number</p>
        </div>

        {data.map((item, index) => (
          <div className="each-contact-row flex gap-[30px] items-center my-3" key={index}>
            <img
              className="pl-8 pr-5"
              src="./src/assets/images/male.png"
              alt="user Image"
            />
            <p className="max-w-[173px] pr-12">{item.name}</p>
            <p className="pr-[90px]">{item.gender}</p>
            <p className="pr-[75px]">{item.mail}</p>
            <p className="pr-[30px]">{item.phone}</p>
            <img className="cursor-pointer" src="./src/assets/images/pencil.svg" alt="" />
            <img className="cursor-pointer" src="./src/assets/images/delete.svg" alt="" />
          </div>
        ))}

        
        
      </section>

      <a
        onClick={() => go_T0_Login()}
        className="absolute underline text-white left-[1180px] top-[640px] flex gap-3 cursor-pointer"
      >
        <img src="./src/assets/images/logout.svg" alt="" />
        <p className="pt-[8px]">logout</p>
      </a>

      {/* <LogoutButton /> */}
    </div>
  );
};

export default Contacts;
