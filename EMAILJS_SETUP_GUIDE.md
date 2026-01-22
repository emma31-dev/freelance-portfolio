# EmailJS Setup Guide for TradieFlow Contact Form

## Current Status
✅ Service ID: `service_z3abo3tuuuu`  
✅ Public Key: `igplZZj0pcB8V73Bf`  
⚠️ Template ID: **NEEDS TO BE CREATED**

## Step-by-Step Setup

### Step 1: Access EmailJS Dashboard
1. Go to: https://dashboard.emailjs.com/admin/templates
2. Login with your EmailJS account

### Step 2: Create Email Template
1. Click **"Create New Template"** button
2. Give it a name: `TradieFlow Contact Form`
3. Set the **Subject**: `New Speed Audit Request - {{trade}} from {{from_name}}`

### Step 3: Template Content
Copy and paste this exact content into the template body:

```
Hi,

New speed audit request received from your TradieFlow website:

📋 CONTACT DETAILS:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Trade: {{trade}}

🔧 PROBLEM DESCRIPTION:
{{problem}}

⏰ NEXT STEPS:
- Analyze their current website speed
- Generate Lighthouse performance report  
- Calculate potential revenue impact
- Send detailed audit within 24 hours

Best regards,
TradieFlow Contact System
```

### Step 4: Configure Template Variables
Make sure these variables are recognized:
- `{{from_name}}`
- `{{from_email}}`
- `{{phone}}`
- `{{trade}}`
- `{{problem}}`

### Step 5: Save and Get Template ID
1. Click **"Save"**
2. Copy the **Template ID** (looks like: `template_xxxxxxx`)
3. Update `src/config/emailjs.ts` file

### Step 6: Update Configuration
Replace `YOUR_TEMPLATE_ID` in the config file with your actual Template ID:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_z3abo3tuuuu',
  TEMPLATE_ID: 'template_xxxxxxx', // Replace with your actual Template ID
  PUBLIC_KEY: 'igplZZj0pcB8V73Bf',
}
```

### Step 7: Test the Form
1. Fill out the contact form on your website
2. Submit it
3. Check your email for the message
4. Verify all variables are populated correctly

## Troubleshooting

**Error: "Template ID not found"**
- Make sure you copied the Template ID correctly
- Check that the template is saved and active

**Variables not showing up**
- Ensure variable names match exactly: `{{from_name}}` not `{{fromName}}`
- Check for typos in the template

**Emails not arriving**
- Check spam folder
- Verify your EmailJS service is connected to the right email provider
- Test with a simple template first

## Email Provider Setup
Make sure your EmailJS service is connected to:
- Gmail, Outlook, or your preferred email provider
- The email address where you want to receive contact form submissions

## Security Notes
- Public Key is safe to expose in frontend code
- Never expose your Private Key in frontend code
- Template ID is safe to expose

## Support
If you need help:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Test with EmailJS playground first
3. Verify all credentials are correct

---
**Once completed, your contact form will automatically send emails when visitors submit speed audit requests!**