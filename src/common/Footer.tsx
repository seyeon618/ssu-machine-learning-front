import React, { useContext } from "react";
import { FooterWrap, GuideBox, IconWrap } from "../styles/Footer";
import IconButton from "@mui/material/IconButton";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { AppContext } from "../Context";
import {
  ToastContainer,
  toast,
  ToastOptions,
  TypeOptions,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const toastOption: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  type: "error" as TypeOptions,
};

function Footer() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Footer must be used within an AppProvider");
  }
  const { firstFile, secondFile, firstInputValue, secondInputValue } = context;

  const generateImage = async () => {
    if (!firstFile || !secondFile) {
      toast("Please upload the first puppy picture!", toastOption);
      return;
    }
    if (!firstInputValue || !secondInputValue) {
      toast(
        "Please enter the percentage of puppies you want to synthesize!",
        toastOption,
      );
      return;
    }

    const firstFormData = new FormData();
    firstFormData.append("file", firstFile);

    try {
      await axios.post(
        `${process.env.REACT_APP_PATH}/firstImageUpload`,
        firstFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
    } catch (error) {
      console.error("Error uploading file", error);
    }

    const secondFormData = new FormData();
    secondFormData.append("file", secondFile);

    try {
      await axios.post(
        `${process.env.REACT_APP_PATH}/secondImageUpload`,
        secondFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  return (
    <FooterWrap>
      <ToastContainer />
      <GuideBox>
        <IconWrap onClick={generateImage}>
          <IconButton size="large" sx={{ padding: 0 }}>
            <SettingsSuggestIcon
              sx={{ fontSize: 40, color: "#FF8C00", padding: 0 }}
            />
          </IconButton>
          Creative Image
        </IconWrap>
      </GuideBox>
    </FooterWrap>
  );
}

export default Footer;
