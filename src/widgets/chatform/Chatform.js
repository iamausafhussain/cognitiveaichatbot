import React, { useState } from "react";
import "./Chatform.css";
import Logo from "../../assets/logo.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import RecordVoiceOverTwoToneIcon from "@mui/icons-material/RecordVoiceOverTwoTone";

function Chatform() {
  const [speech, setSpeech] = useState("Your Voice Message here...");

  const VoiceRecognition = () => {
    // var recognition = new webkitSpeechRecognition();
    // recognition.lang = "en-GB";
    // recognition.onresult = function (event) {
    //   console.log(event);
    // };
    // recognition.start();
  };

  return (
    <div className="Chatform">
      <Card sx={{ minWidth: 500 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
            className="chatform-header"
          >
            <img src={Logo} alt="logo" />
          </Typography>
          <Typography variant="h5" component="div">
            hello user,
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Record your Voice and get Cognitive Services using Azure
          </Typography>
          <div className="chatform-action">
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              className="chatform-message-text-field"
              color="info"
              placeholder={speech}
            />
            <CardActions className="chatform-buttons">
              <Button
                className="chatform-button-send"
                size="small"
                color="inherit"
                onClick={VoiceRecognition()}
              >
                <RecordVoiceOverTwoToneIcon />
              </Button>
              <Button
                className="chatform-button-send"
                size="small"
                color="inherit"
              >
                <SendTwoToneIcon />
              </Button>
            </CardActions>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Chatform;
