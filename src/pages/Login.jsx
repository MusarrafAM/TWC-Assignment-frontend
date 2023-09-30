import { useNavigate } from "react-router-dom";


const Login = () => {
  const Navigate = useNavigate()

  const go_to_register = () =>{
    Navigate("/register")
  }

  return (
    <div>
      <div className="z-10 absolute bg-[#083F46] w-[1502px] h-[1502px] rounded-full left-[-716px] top-[-367px]"></div>
      <section className="z-20 relative w-[477px] h-[487px] top-[140px] left-[122px] ">
        <p className="text-white text-5xl font-bold pb-4">Hi there,</p>
        <p className="text-white text-3xl mb-6">
          Welcome to our <br />
          contacts portal
        </p>
        <form action="">
          <input
            type="email"
            placeholder="e-mail"
            className="rounded-[50px] w-[477px] h-[55px] placeholder:text-[#083F46] pl-[41px] text-[25px] font-medium my-7  "
          />

          <input
            type="password"
            placeholder="password"
            className="rounded-[50px] w-[477px] h-[55px] placeholder:text-[#083F46] pl-[41px] text-[25px] font-medium"
          />

          <div className="flex text-[25px] text-white mt-12">
            <button className="rounded-full border focus:shadow-outline w-[131px] h-[48px] hover:bg-white hover:text-[#083F46]">
              Login
            </button>
            <p className="pl-4 px-4">or</p>
            <a className="underline cursor-pointer" onClick={()=>go_to_register()}>
              Click here to Register
            </a>
          </div>
        </form>
      </section>

      <section className="absolute opacity-90 top-0 left-[677px] w-[989px] h-[768px] bg-[url('/src/assets/images/background-img.png')]">
        <div className="absolute top-[255px] right-[550px]">
          <img src="./src/assets/images/twc-black.svg" alt="" />
          <p className="text-[#083F46] text-6xl font-medium">
            <span className="font-bold">Contacts </span> <br /> portal
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
