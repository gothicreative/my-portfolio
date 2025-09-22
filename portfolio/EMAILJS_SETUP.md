# EmailJS Setup Instructions

To make the contact form send messages to your real email, you need to set up EmailJS. Follow these steps:

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Customize your template with these placeholders:
   - `{{from_name}}` - Sender's name
   - `{{reply_to}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
   - `{{project_type}}` - Project type
   - `{{budget}}` - Budget range
   - `{{timeline}}` - Project timeline
4. Note down the **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to "Account" → "API Keys"
2. Copy your **Public Key** (not the private key)

## Step 5: Update Your Contact Form

1. Open `src/pages/Contact.tsx`
2. Find the `EMAILJS_CONFIG` object at the top of the file
3. Replace the placeholder values with your actual credentials:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',      // Your EmailJS Service ID
  TEMPLATE_ID: 'your_actual_template_id',    // Your EmailJS Template ID
  PUBLIC_KEY: 'your_actual_public_key'       // Your EmailJS Public Key
};
```

## Step 6: Test the Form

1. Save all changes
2. Run your portfolio locally: `npm run dev`
3. Navigate to the Contact page
4. Fill out and submit the form
5. Check your email for the received message

## Troubleshooting

If you encounter issues:

1. Make sure all three credentials (Service ID, Template ID, Public Key) are correct
2. Check browser console for error messages
3. Verify your email service is properly connected in EmailJS dashboard
4. Ensure your template has the correct placeholders
5. Check that you're using the public key, not the private key

## Security Note

The public key is safe to use in client-side code. However, for production applications, consider implementing additional security measures like domain restrictions in your EmailJS account settings.