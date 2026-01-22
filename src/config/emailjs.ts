// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_z3abo3tuuuu', // Your EmailJS service ID ✅
  TEMPLATE_ID: 'template_p95l02o', // Your EmailJS template ID ✅
  PUBLIC_KEY: 'igplZZj0pcB8V73Bf', // Your EmailJS public key ✅
}

// 🚨 TO FIX THE "Template ID not found" ERROR:
// 1. Go to: https://dashboard.emailjs.com/admin/templates
// 2. Click "Create New Template"
// 3. Use this template content:
/*
Subject: New Speed Audit Request - {{trade}} from {{from_name}}

Hi,

New speed audit request received:

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
*/
// 4. Save the template and copy the Template ID
// 5. Replace 'YOUR_TEMPLATE_ID' above with the actual ID

// Template variables for EmailJS:
// {{from_name}} - Full name from form
// {{from_email}} - Email address from form  
// {{phone}} - Phone number from form
// {{trade}} - Selected trade from form
// {{problem}} - Specific problem description from form

// Recommended email template for EmailJS:
/*
Subject: New Speed Audit Request - {{trade}} from {{from_name}}

Hi,

New speed audit request received:

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
*/