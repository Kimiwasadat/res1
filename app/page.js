"use client"
import {Typography, Box, Container, Stack} from "@mui/material"
import React, { useState, useEffect } from "react";
import backgroundimage from "../images/background.gif"

import Image from "next/image";

export default function Home(){
  const [text, setText] = useState('');
  const [fullText, setFullText] = useState('Aspiring Software Engineer');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }
  }, [index]);
  return(
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      backgroundSize: 'cover',
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundimage.src})`,
      backgroundBlendMode: 'darken',
      backgroundPosition: 'bottom',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Stack>
          <Box>
            <Image
              src="/ks.jpg" 
              alt="Avatar"
              width={250}
              height={250}
              style={{ borderRadius: "50%", backgroundSize: 'cover' }} 
            />
          </Box>
          <Typography variant="h4" sx={{ mt: 2, color: 'white' }}>
            Kimiwa Sadat
          </Typography>
          <Typography variant="h5" sx={{ color: 'white' }}>
            {text}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );

}