import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const ChatGPTDemo = () => {
  const { register, handleSubmit, reset } = useForm();

  const [systemMessage, setSystemMessage] = useState({
    content:
      "Explain things like you're talking to a software professional with 2 years of experience.",
  });

  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello I am ChatGPT!",
      sender: "chatGPT",
    },
  ]);

  const onChange = async (data) => {
    setSystemMessage({
      content: data.system,
    });
  };

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];
    // update our messages state
    setMessages(newMessages);

    // set a typing indicator (chatGPT is typing)
    setTyping(true);
    // process message to chatGPT(send it over and see the response)
    await processMessageToChatGPT(newMessages);
  };

  const processMessageToChatGPT = async (chatMessages) => {
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act.
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            systemMessage.content.length > 0
              ? systemMessage.content
              : "Explain things like you're talking to a software professional with 2 years of experience.",
        }, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_OPENAI_API,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setTyping(false);
      });
  };
  return (
    <Container className="mt-2">
      <Row>
        <Col sm={6}>
          <section className="showcase">
            <Form onChange={handleSubmit(onChange)}>
              <Form.Group className="mb-3">
                <Form.Label>SYSTEM</Form.Label>
                <Form.Control
                  type="text"
                  {...register("system", { required: true })}
                  placeholder="Enter context ...."
                />
              </Form.Group>
              <Form.Text className="text-muted">
                Default: Explain things like you're talking to a software
                professional with 2 years of experience.
              </Form.Text>
            </Form>
          </section>
        </Col>
        <Col sm={6}>
          <div style={{ position: "relative", height: "500px" }}>
            <MainContainer>
              <ChatContainer>
                <MessageList
                  typingIndicator={
                    typing ? (
                      <TypingIndicator content="ChatGPT is processing" />
                    ) : null
                  }
                >
                  {messages.map((message, i) => {
                    return <Message key={i} model={message} />;
                  })}
                </MessageList>
                <MessageInput
                  placeholder="Type message here"
                  onSend={handleSend}
                />
              </ChatContainer>
            </MainContainer>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatGPTDemo;
