"use client";

import { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";
import useAuth from "../../hooks/useAuth";
import { AuthentificationContext } from "../context/AuthContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const { loading, data, error, setAuthState } = useContext(
    AuthentificationContext
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { signin } = useAuth();

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (isSignIn) {
      if (inputs.email && inputs.password) {
        return setDisabled(false);
      }
      setDisabled(true);
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.password &&
        inputs.city
      ) {
        return setDisabled(false);
      }
      setDisabled(true);
    }
  }, [inputs]);

  const handleClick = () => {
    if (isSignIn) {
      signin({ email: inputs.email, password: inputs.password });
    }
  };

  return (
    <div>
      <button
        className={
          isSignIn
            ? "bg-blue-400 text-white border p-1 px-4 rounded mr-3"
            : "border p-1 px-4 rounded"
        }
        onClick={handleOpen}
      >
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              {/* <p className="text-sm">
                {isSignIn ? "Sign In" : "Create Account"}
              </p> */}
              <div />
              <div className="=m-auto">
                <h2 className="text-lg font-light text-center">
                  {isSignIn ? "Log Into Your Account" : "Create your Account"}
                </h2>
                <AuthModalInputs
                  inputs={inputs}
                  handleChangeInputs={handleChangeInputs}
                  isSignIn={isSignIn}
                />
                <button
                  className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm"
                  onClick={handleClick}
                  disabled={disabled}
                >
                  {isSignIn ? "Sign In" : "Sign Up"}
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
