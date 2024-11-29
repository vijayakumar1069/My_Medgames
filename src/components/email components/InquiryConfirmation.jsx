import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Text,
    Section,
    Row,
    Column,
    Heading,
    Link,
    Button
  } from '@react-email/components';
  
  export default function InquiryConfirmation({
    name,
    email,
    inquiryType,
    course,
    message,
    schedules
  }) {
    return (
      <Html>
        <Head />
        <Preview>Your MedGames Inquiry Confirmation - Elevate Your Medical Career!</Preview>
  
        <Body style={main}>
          <Container style={container}>
            <Section style={header}>
              <Heading style={heading}>MedGames Inquiry Received</Heading>
            </Section>
  
            <Section style={content}>
              <Row>
                <Column>
                  <Text style={paragraph}>
                    Dear {name},
                  </Text>
  
                  <Text style={paragraph}>
                    Congratulations on taking the first step towards transforming your medical career! 
                    We&asop;re thrilled that you&apos;ve reached out to MedGames, where we turn medical professionals 
                    aspirations into extraordinary achievements.
                  </Text>
  
                  <Text style={paragraph}>
                    Your {inquiryType} inquiry has been successfully received, and our dedicated team 
                    is already working on providing you with a personalized response.
                  </Text>
  
                  {inquiryType === 'contact' && (
                    <>
                      <Text style={paragraph}>
                        <strong>Course of Interest:</strong> {course || 'Exploring Opportunities'}
                      </Text>
  
                      <Text style={paragraph}>
                        <strong>Your Message:</strong> {message || 'No additional details provided'}
                      </Text>
                    </>
                  )}
  
                  {inquiryType === 'schedule' && schedules && schedules.length > 0 && (
                    <>
                      <Text style={paragraph}>
                        <strong>Proposed Schedule:</strong>
                      </Text>
  
                      {schedules.map((schedule, index) => (
                        <Text key={index} style={paragraph}>
                          Date: {new Date(schedule.date).toLocaleDateString()}
                          <br />
                          Time: {schedule.fromTime} - {schedule.toTime}
                        </Text>
                      ))}
                    </>
                  )}
  
                  <Section style={ctaSection}>
                    <Button 
                      href="https://medgames.com/courses" 
                      style={ctaButton}
                    >
                      Explore Our Courses
                    </Button>
                  </Section>
  
                  <Text style={paragraph}>
                    While you wait, why not check out our{' '}
                    <Link 
                      href="https://medgames.com/success-stories" 
                      style={linkStyle}
                    >
                      Success Stories
                    </Link>{' '}
                    and see how MedGames has helped professionals like you achieve their dreams?
                  </Text>
  
                  <Text style={paragraph}>
                    We will contact you at {email} within the next 24 business hours.
                  </Text>
  
                  <Text style={paragraphSmall}>
                    Pro Tip: Add support@medgames.com to your contacts to ensure 
                    our emails don&apos;t go to spam!
                  </Text>
                </Column>
              </Row>
            </Section>
  
            <Section style={footer}>
              <Text style={footerText}>
                © 2024 MedGames. Empowering Medical Professionals Worldwide.
                <br />
                <Link href="https://medgames.com/unsubscribe" style={linkStyle}>
                  Unsubscribe
                </Link>{' '}
                | {' '}
                <Link href="https://medgames.com/privacy" style={linkStyle}>
                  Privacy Policy
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }
  
  const main = {
    backgroundColor: '#e6f2ff', // Soft blue background
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
  
  const content = {
    padding: '0 20px'
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
  
  const paragraphSmall = {
    color: '#666666',
    fontSize: '14px',
    lineHeight: '1.4',
    fontStyle: 'italic'
  };
  
  const ctaSection = {
    textAlign: 'center',
    marginBottom: '20px'
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
  
  const linkStyle = {
    color: '#0066cc',
    textDecoration: 'underline'
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
  