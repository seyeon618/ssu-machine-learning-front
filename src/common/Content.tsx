import React, {useRef, useContext, ChangeEvent, useState} from 'react';
import axios from 'axios';
import {
    Button,
    Desc,
    DescWrap,
    MainText,
    Wrap,
    SubText,
    ImageBox,
    ContentWrap,
    BoxWrap,
    Form,
    Image,
    Input,
} from "../styles/Content";
import {AppContext} from "../Context";

function Content() {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('Content must be used within an AppProvider');
    }

    const {
        firstFile, setFirstFile,
        secondFile, setSecondFile,
        firstInputValue, setFirstInputValue,
        secondInputValue, setSecondInputValue,
    } = context;

    const [firstPreview, setFirstPreview] = useState<string | null>(null);
    const firstFileInputRef = useRef<HTMLInputElement | null>(null);
    const [secondPreview, setSecondPreview] = useState<string | null>(null);
    const secondFileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFirstFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFirstFile(selectedFile);

            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setFirstPreview(reader.result);
                }
            };
            reader.readAsDataURL(selectedFile);

            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await axios.post(`${process.env.REACT_APP_PATH}/firstImageUpload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('File uploaded successfully', response.data);
            } catch (error) {
                console.error('Error uploading file', error);
            }
        }
    };

    const handleSecondFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setSecondFile(selectedFile);

            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setSecondPreview(reader.result);
                }
            };
            reader.readAsDataURL(selectedFile);

            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await axios.post(`${process.env.REACT_APP_PATH}/secondImageUpload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('File uploaded successfully', response.data);
            } catch (error) {
                console.error('Error uploading file', error);
            }
        }
    };

    const handleFirstButtonClick = () => {
        if (firstFileInputRef.current) {
            firstFileInputRef.current.click();
        }
    };

    const handleSecondButtonClick = () => {
        if (secondFileInputRef.current) {
            secondFileInputRef.current.click();
        }
    };

    return (
        <Wrap>
            <MainText>Create A New Crossbreed Pet Image Model</MainText>
            <SubText>- Using Two Pet Images -</SubText>
            <ContentWrap>
                <BoxWrap>
                    <ImageBox>
                        <Form>
                            <input
                                type="file"
                                onChange={handleFirstFileChange}
                                ref={firstFileInputRef}
                                style={{ display: 'none' }}
                            />
                            {firstPreview && <Image src={firstPreview} alt="Preview" />}
                            <Button type="button" onClick={handleFirstButtonClick}>Upload Image</Button>
                        </Form>
                    </ImageBox>
                    <DescWrap>
                        <Desc>content percent</Desc>
                        <Input value={firstInputValue} onChange={(e) => setFirstInputValue(e.target.value)} />
                        <Desc>%</Desc>
                    </DescWrap>
                </BoxWrap>
                <BoxWrap>
                    <ImageBox>
                        <Form>
                            <input
                                type="file"
                                onChange={handleSecondFileChange}
                                ref={secondFileInputRef}
                                style={{ display: 'none' }}
                            />
                            {secondPreview && <Image src={secondPreview} alt="Preview" />}
                            <Button type="button" onClick={handleSecondButtonClick}>Upload Image</Button>
                        </Form>
                    </ImageBox>
                    <DescWrap>
                        <Desc>content percent</Desc>
                        <Input value={secondInputValue} onChange={(e) => setSecondInputValue(e.target.value)} />
                        <Desc>%</Desc>
                    </DescWrap>
                </BoxWrap>
            </ContentWrap>
        </Wrap>
    );
}

export default Content;
