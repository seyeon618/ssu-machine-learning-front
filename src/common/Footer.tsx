import React, { useContext, useState } from "react";
import { FooterWrap, GuideBox, IconWrap, ResultContainer, ResultMessage } from "../styles/Footer"
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
import CircularProgress from '@mui/material/CircularProgress';

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
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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

    setLoading(true);

    const formData = new FormData();
    formData.append('firstImage', firstFile);
    formData.append('secondImage', secondFile);
    formData.append('firstNumber', firstInputValue);
    formData.append('secondNumber', secondInputValue);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PATH}/uploadAndGenerateImage`,
        formData,
        {
          responseType: 'blob', // Important for downloading images
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setImageUrl(url);

      // Automatically download the image
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'generated_puppy.png'); // Specify the file name
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error generating image', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FooterWrap>
      <ToastContainer />
      {imageUrl ? (
        <ResultContainer>
          <ResultMessage>Image generation completed!</ResultMessage>
          <img src={imageUrl} alt="Generated Puppy" style={{ maxWidth: "300px" }} />
        </ResultContainer>
      ) : (
        <GuideBox>
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <IconWrap onClick={generateImage}>
              <IconButton size="large" sx={{ padding: 0 }}>
                <SettingsSuggestIcon
                  sx={{ fontSize: 40, color: "#FF8C00", padding: 0 }}
                />
              </IconButton>
              Creative Image
            </IconWrap>
          )}
        </GuideBox>
      )}
    </FooterWrap>
  );
}

export default Footer;
