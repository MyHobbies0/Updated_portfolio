import React, { useState } from "react";
import nlp from "compromise";
import { FaPaperPlane } from "react-icons/fa";
import './chatbot.css';

const predefinedResponses = [
  // Personal questions
  { intent: "what is your full name", response: "My full name is Moh. Irshad Alam." },
  {intent:'who are you ', response:'My name is Moh. Irshad Alam and i am from Jharkhand '},
  { intent: "what is your nickname", response: "You can call me Irshad." },
  { intent: "how old are you", response: "I was born in the 2000s, so do the math!" },
  { intent: "where were you born", response: "I was born in Godda, Jharkhand." },
  { intent: "where do you live now", response: "I currently live in Bangalore." },
  { intent: "do you have siblings", response: "Yes, I have siblings, and we are a close-knit family." },
  { intent: "are you married", response: "No, I am not married yet." },
  { intent: "what languages do you speak", response: "I speak Hindi, English, and a bit of my regional dialect." },
  { intent: "what do you do on weekends", response: "I usually play football, code, or spend time relaxing." },
  { intent: "what sports do you like", response: "I love football and enjoy playing it whenever I get the chance." },
  { intent: "what is your favorite food", response: "I enjoy spicy and traditional Indian food." },
  { intent: "do you like movies", response: "Yes, I enjoy watching movies, especially thrillers and action films." },

  // Professional questions
  { intent: "what is your profession", response: "I am a software engineer." },
  { intent: "which company do you work for", response: "I work for Matrecomm Technology." },
  { intent: "what is your role in your company", response: "I work as a software engineer, focusing on building and maintaining applications." },
  { intent: "what technologies do you use", response: "I primarily work with full-stack web development technologies." },
  { intent: "what is your previous company", response: "My previous company was Vatech Solution." },
  { intent: "what projects have you worked on", response: "I've worked on several web development projects and backend systems." },
  { intent: "what is your dream job", response: "My dream job is to lead a tech team that develops impactful solutions for global challenges." },
  { intent: "do you enjoy your job", response: "Yes, I love solving problems and creating meaningful solutions." },
  { intent: "what is your salary", response: "That's confidential, but it's fair for my role." },
  { intent: "what motivates you", response: "Building something that impacts people positively motivates me." },

  // Educational background
  { intent: "what did you study", response: "I studied Physics at SKMU University, Dumka." },
  { intent: "where did you graduate", response: "I graduated from SKMU University, Dumka, in 2022." },
  { intent: "what is your training background", response: "I trained in full-stack web development at Masai School." },
  { intent: "what skills do you have", response: "I have skills in web development, coding, problem-solving, and managing projects." },
  { intent: "what are you certified in", response: "I am certified in full-stack web development by Masai School." },
  { intent: "do you have any other degrees", response: "No, I have a degree in Physics and professional training in software development." },

  // Miscellaneous questions
  { intent: "what are your hobbies", response: "My hobbies include playing football and coding." },
  { intent: "do you own any business", response: "Yes, I own a private school." },
  { intent: "what is your business", response: "I run a private school, focusing on providing quality education." },
  { intent: "what are your achievements", response: "Graduating in Physics, training at Masai School, and starting my private school are my key achievements." },
  { intent: "what are your strengths", response: "My strengths include problem-solving, dedication, and quick learning." },
  { intent: "what are your weaknesses", response: "I tend to focus too much on details sometimes." },
  { intent: "what is your future plan", response: "My plan is to advance my career and grow my private school further." },
  { intent: "what do you like about your current company", response: "I like the challenging projects and the opportunity to grow." },
  { intent: "do you have any side projects", response: "Yes, apart from my full-time job, I manage my private school." },

  // General interest
  { intent: "do you play video games", response: "Not much, but I occasionally play FIFA with friends." },
  { intent: "what kind of music do you like", response: "I enjoy listening to Bollywood and soft instrumental music." },
  { intent: "do you read books", response: "Yes, I enjoy reading about technology and self-improvement." },
  { intent: "what is your favorite book", response: "My favorite book is 'Atomic Habits' by James Clear." },

  // Contact information
  { intent: "linkedin", response: "Feel free to connect with me on LinkedIn: https://www.linkedin.com/in/md-irshad-alam-761b491b9/" },
  { intent: "contact number", response: "You can reach me at +91-7079355936" },
  { intent: "email address", response: "You can email me at hayan0743@gmail.com" },
  { intent:'what is your github account', response:'Feel free to connect with me on GitHub: https://github.com/Md-Irshad-Alam'}
];


function ChatBotForm() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const processInput = (input) => {
    const doc = nlp(input.toLowerCase());

    for (let intentObj of predefinedResponses) {
      const { intent, response } = intentObj;
      if (doc.has(intent)) {
        return response;
      }
    }

    return "Sorry, I don't understand that. Can you please rephrase?";
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);

    if (input.trim()) {
      // Filter predefinedResponses based on user input
      const filteredSuggestions = predefinedResponses.filter((item) =>
        item.intent.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }function ChatBotForm() {
      const [messages, setMessages] = useState([]);
      const [userInput, setUserInput] = useState("");
    
      const processInput = (input) => {
        const doc = nlp(input.toLowerCase());
    
        for (let intentObj of predefinedResponses) {
          const { intent, response } = intentObj;
          if (doc.has(intent)) {
            return response;
          }
        }
    
        return "Sorry, I don't understand that. Can you please rephrase?";
      };
    
      const handleSendMessage = () => {
        if (userInput.trim() === "") return;
    
        const userMessage = { text: userInput, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
    
        setTimeout(() => {
          const botResponse = processInput(userInput);
          const botMessage = { text: botResponse, sender: "bot" };
          setMessages((prev) => [...prev, botMessage]);
        }, 300);
    
        setUserInput("");
      };
      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleSendMessage();
        }
      };
    
      return (
        <div className="chat-bot">
          
          <div className="chat-container">
            
            <div className="chat-box">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.sender}`}
                >
                  {msg.sender === "user" && (
                    <span className="double-tick">✔✔</span>
                  )}
                  {msg.text}
                </div>
              ))}
            </div>
           
             <div className="input-container">
            <input
              type="text"
              placeholder="Type a message..."
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} 
              
            />
            <button onClick={handleSendMessage}   className="send-button">
              <FaPaperPlane />
            </button>
          </div>
          {/* Suggestions dropdown */}
          {suggestions.length > 0 && (
            <div className="suggestions-container">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.intent}
                </div>
              ))}
            </div>
          )}
          </div>
        </div>
      );
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setUserInput(suggestion.intent);
    setSuggestions([]);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    const userMessage = { text: userInput, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = processInput(userInput);
      const botMessage = { text: botResponse, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 300);

    setUserInput("");
    setSuggestions([]);
  };

  return (
    <div className="chat-bot">
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender}`}
            >
              {msg.sender === "user" && (
                <span className="double-tick">✔✔</span>
              )}
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Type a message..."
            value={userInput}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage} className="send-button">
            <FaPaperPlane />
          </button>
        </div>

        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <div className="suggestions-container">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.intent}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


export default ChatBotForm;