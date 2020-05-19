import React from 'react';
import { Typography, Form, Input, Button } from 'antd';

const { Paragraph, Title } = Typography;

function Contact(props) {
    return (
        <div>
            <Title level={3}>Get in touch</Title>
            <Paragraph>
                I looking forward to hear from you! Just fill the format above
                or contact me using my social networks.
            </Paragraph>
            <div>
                <Form>
                    <Form.Item label="Name">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Subject">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Message">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">Send Message</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Contact;
