import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import {Button, MainText, Wrap, SubText, ImageBox, BoxWrap, Form} from "../styles/Content";

function Content() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [isUploaded, setIsUploaded] = useState<boolean>(false);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);

            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setPreview(reader.result);
                }
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        console.log("upload")
        event.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File uploaded successfully', response.data);
            setIsUploaded(true);
        } catch (error) {
            console.error('Error uploading file', error);
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };


    return (
        <Wrap>
            <MainText>Create A New Crossbreed Pet Image Model</MainText>
            <SubText>- Using Two Pet Images -</SubText>
            <BoxWrap>
                <ImageBox>
                    <Form onSubmit={handleSubmit}>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                        />
                        {preview && <img src={preview} alt="Preview" style={{ maxWidth: '100%' }} />}
                        {!isUploaded && <Button onClick={handleButtonClick}>Upload Image</Button>}
                    </Form>
                </ImageBox>
                <ImageBox></ImageBox>
            </BoxWrap>
        </Wrap>
    );
}

export default Content;