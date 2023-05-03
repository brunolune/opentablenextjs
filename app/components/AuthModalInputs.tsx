import React from "react";

interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

function AuthModalInputs({ inputs, handleChangeInputs, isSignIn }: Props) {
  return (
    <div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChangeInputs}
            name="firstName"
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleChangeInputs}
            name="lastName"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-full"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInputs}
          name="email"
        />
      </div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="Phone"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Phone"
            value={inputs.phone}
            onChange={handleChangeInputs}
            name="phone"
          />
          <input
            type="City"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="City"
            value={inputs.city}
            onChange={handleChangeInputs}
            name="city"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded p-2 py-3 w-full"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInputs}
          name="password"
        />
      </div>
    </div>
  );
}

export default AuthModalInputs;
