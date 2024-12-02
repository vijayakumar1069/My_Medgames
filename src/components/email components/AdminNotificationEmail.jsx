import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Row,
    Column,
    Link,
    Hr,
    Button
  } from "@react-email/components";
  
  export const AdminNotificationEmail = ( {name="Sarah Johnson",
        email="sarah.johnson@example.com",
        inquiryType="schedule",
        course="USMLE Step 1 Preparation",
        message="I would like to discuss potential study schedules",
        schedules=[
          {
            date: "2024-07-15",
            fromTime: "10:00 AM",
            toTime: "12:00 PM"
          },
          {
            date: "2024-07-22", 
            fromTime: "2:00 PM",
            toTime: "4:00 PM"
          }
        ]
    }
  ) => {
    const main = {
      backgroundColor: '#e6f2ff', 
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
      padding: '20px'
    };
  
    const container = {
      backgroundColor: '#ffffff',
      margin: '0 auto',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      maxWidth: '600px'
    };
  
    const header = {
      backgroundColor: '#0066cc',
      color: 'white',
      padding: '15px',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      marginBottom: '20px'
    };
  
    const heading = {
      color: 'white',
      fontSize: '24px',
      fontWeight: '600',
      textAlign: 'center',
      margin: '0'
    };
  
    const paragraph = {
      color: '#333333',
      fontSize: '16px',
      lineHeight: '1.6',
      marginBottom: '20px'
    };
  
    const infoSection = {
      backgroundColor: '#f0f6ff',
      padding: '15px',
      borderRadius: '5px',
      marginBottom: '15px'
    };
  
    const labelStyle = {
      fontWeight: 'bold',
      color: '#0066cc',
      marginRight: '10px'
    };
  
    const ctaButton = {
      backgroundColor: '#0066cc',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '5px',
      textDecoration: 'none',
      display: 'inline-block',
      fontWeight: 'bold'
    };
  
    const footer = {
      marginTop: '20px',
      borderTop: '1px solid #e0e0e0',
      paddingTop: '15px',
      textAlign: 'center'
    };
  
    const footerText = {
      color: '#666666',
      fontSize: '12px'
    };
  
    return (
      <Html>
        <Head />
        <Preview>New Admin Notification: {inquiryType} Inquiry</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={header}>
              <Heading style={heading}>Admin Notification</Heading>
            </Section>
  
            <Section>
              <Section style={infoSection}>
                <Row>
                  <Column>
                    <Text style={paragraph}>
                      <span style={labelStyle}>Name:</span> {name}
                    </Text>
                    <Text style={paragraph}>
                      <span style={labelStyle}>Email:</span> {email}
                    </Text>
                  </Column>
                </Row>
              </Section>
  
              <Text style={paragraph}>
                <strong>Inquiry Type:</strong> {inquiryType}
              </Text>
  
              <Text style={paragraph}>
                <strong>Course of Interest:</strong> {course}
              </Text>
  
              {inquiryType === 'schedule' && schedules && schedules.length > 0 && (
                <Section>
                  <Text style={paragraph}>
                    <strong>Proposed Schedules:</strong>
                  </Text>
                  {schedules.map((schedule, index) => (
                    <Text key={index} style={paragraph}>
                      Date: {new Date(schedule.date).toLocaleDateString()}
                      <br />
                      Time: {schedule.fromTime} - {schedule.toTime}
                    </Text>
                  ))}
                </Section>
              )}
  
              <Text style={paragraph}>
                <strong>Message:</strong> {message}
              </Text>
  
              {/* <Section style={{textAlign: 'center', marginTop: '20px'}}>
                <Button 
                  href="https://admin.medgames.com/inquiries" 
                  style={ctaButton}
                >
                  Review Inquiry
                </Button>
              </Section> */}
  
              <Text style={{...paragraph, marginTop: '20px', fontSize: '14px', fontStyle: 'italic'}}>
                Please respond to this inquiry within the next 24 business hours.
              </Text>
            </Section>
  
            <Section style={footer}>
              <Text style={footerText}>
                © 2024 MedGames Admin Notification System
                <br />
                This is an automated email - Do not reply directly
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  export default AdminNotificationEmail;
  