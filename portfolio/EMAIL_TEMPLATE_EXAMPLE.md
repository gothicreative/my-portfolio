# EmailJS Template Example

When creating your EmailJS template, you can use this example as a reference:

## Subject Line
```
New Contact Form Message: {{subject}}
```

## Email Body
```
Hello Hafiz,

You've received a new message through your portfolio contact form.

From: {{from_name}} ({{reply_to}})
Subject: {{subject}}
Project Type: {{project_type}}
Budget Range: {{budget}}
Timeline: {{timeline}}

Message:
{{message}}

---
This message was sent through your portfolio contact form.
```

## How to Use This Template

1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Set the subject to: `New Contact Form Message: {{subject}}`
4. Set the body to the template above
5. Make sure all the placeholder variables match what's in your form:
   - `{{from_name}}`
   - `{{reply_to}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{project_type}}`
   - `{{budget}}`
   - `{{timeline}}`

This template will ensure that all the information filled in your contact form is properly sent to your email.