import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddContact = () => {
  const Navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const got_To_Contacts = () => {
    Navigate("/contacts");
  };

  const go_T0_Login = () => {
    Navigate("/");
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

      <div className="absolute text-white w-[1151px] h-[304px] top-[278px] left-[204px]">
        <p className="text-4xl font-bold mb-[60px]">New Contact</p>

        <input
          type="text"
          placeholder="full name"
          className=" text-[#083F46] rounded-[50px] w-[477px] h-[55px] placeholder:text-[#083F46] pl-[41px] mr-[40px] text-[25px] font-medium"
        />

        <input
          type="e-mail"
          placeholder="e-mail"
          className="text-[#083F46] rounded-[50px] w-[477px] h-[55px] placeholder:text-[#083F46] pl-[41px] text-[25px] font-medium"
        />

        <input
          type="tel"
          placeholder="phone number"
          className="absolute right-[674px] bottom-[50px] text-[#083F46] rounded-[50px] w-[477px] h-[55px] placeholder:text-[#083F46] pl-[41px] text-[25px] font-medium"
        />

        <div className="radio-options flex gap-[60px] absolute left-[522px] top-[207px] text-[25px]">
          <p className="mr-[55px]">gender</p>
          <label>
            <input
              type="radio"
              value="male"
              checked={selectedOption === "male"}
              onChange={handleOptionChange}
            />
            male
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="female"
              checked={selectedOption === "female"}
              onChange={handleOptionChange}
            />
            female
          </label>
        </div>

        <button
          onClick={() => got_To_Contacts()}
          className="mt-[140px] rounded-full border focus:shadow-outline w-[323px] h-[48px] hover:bg-white hover:text-[#083F46]"
        >
          Add your first contact
        </button>
      </div>

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

export default AddContact;
