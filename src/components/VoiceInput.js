import React, { useState, useRef } from "react";

const VoiceInput = ({ onTextChange }) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const handleListen = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const speech = event.results[0][0].transcript;
        onTextChange(speech);
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }

    setIsListening(!isListening);
  };



  return (
    <div>
      <button
        className={`p-3 rounded-full focus:outline-none shadow transition border-2 ${
          isListening
            ? "bg-red-500 border-red-700 animate-pulse"
            : "bg-blue-500 border-blue-950"
        }`}
        onClick={handleListen}
        aria-label={isListening ? "Stop Listening" : "Start Voice Input"}
        type="button"
        style={{ minHeight: "48px", minWidth: "48px" }} // Ensures similar size as Analyze button
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-white"
          fill={isListening ? "white" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M12 15a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0m5 5v3m-4 0h8"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isListening ? "white" : "none"}
          />
        </svg>
      </button>
    </div>
  );


};

export default VoiceInput;
