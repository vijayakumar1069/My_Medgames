import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const UserContactNotificationEmail = ({ mobileNumber }) => (
    <Html>
      <Head />
      <Preview>User Contact Attempt Notification</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/medgames-logo.png`}
            width="64"
            height="64"
            alt="MedGames"
            style={{ marginBottom: "16px" }}
          />
  
          <Text style={title}>New Contact Attempt</Text>
  
          <Section style={section}>
            <Text style={text}>
              Dear Admin,
            </Text>
            <Text style={text}>
              A user has attempted to contact you through the MedGames platform. Below are their details:
            </Text>
            <Text style={info}>
              <strong>Mobile Number:</strong> {mobileNumber}
            </Text>
            <Text style={text}>
              Please respond to this user as soon as possible to address their queries or concerns.
            </Text>
  
            <Button style={button}>View Contact Details</Button>
          </Section>
  
          <Text style={text}>
            If you believe this is an error, please contact our support team immediately.
          </Text>
  
          <Text style={footer}>
            MedGames Team ・ Your trusted partner in medical education
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default UserContactNotificationEmail;
  
  const main = {
    backgroundColor: "#f9f9f9",
    color: "#333",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  };
  
  const container = {
    maxWidth: "480px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };
  
  const title = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "16px",
    textAlign: "center",
    color: "#4F9F76",
  };
  
  const section = {
    padding: "16px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    textAlign: "left",
  };
  
  const text = {
    margin: "0 0 12px 0",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#333",
  };
  
  const info = {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#000",
    fontWeight: "bold",
    marginBottom: "12px",
  };
  
  const button = {
    fontSize: "14px",
    backgroundColor: "#4F9F76",
    color: "#ffffff",
    lineHeight: 1.5,
    borderRadius: "4px",
    padding: "10px 16px",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
    marginTop: "16px",
  };
  
  const footer = {
    fontSize: "12px",
    color: "#6a737d",
    textAlign: "center",
    marginTop: "20px",
  };
  