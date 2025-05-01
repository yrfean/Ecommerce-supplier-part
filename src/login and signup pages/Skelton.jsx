import React from 'react'
import Login from './login';

const Skelton = ({Comp}) => {
  return (
    <div className="w-screen h-screen px-6 py-3 flex justify-center items-center bg-[#F6FBF8]">
      {/* logo */}
      <div className="w-[50%] flex justify-center items-center">
        <img
          src={"/5e9c7c8b3e0a45d341a85e580aa734f6be1127ec.png"}
          alt="call souq logo"
          className="w-[360px] ml-5"
        />
      </div>
      {/* credentials */}
      <div className="pt-14 px-14 w-[47%] rounded-4xl h-[98%] shadow bg-white">
        <Comp />
      </div>
    </div>
  );
}

export default Skelton