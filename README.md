🧩 Project Overview

This is a single-page ReactJS web application that implements a responsive Contact Form based on the provided Adobe XD / Figma design.
The form integrates with the Vernan Backend Contact API and validates user input before submission.

<img width="1918" height="908" alt="image" src="https://github.com/user-attachments/assets/5439fbf4-c14e-4ab4-9a3e-75dc100c3ab3" />

🚀 Features

🧠 Frontend Validation
Prevents empty submissions
Validates email format
Validates 10-digit phone number

🌐 API Integration
Endpoint: https://vernanbackend.ezlab.in/api/contact-us/
Method: POST
Content-Type: application/json
Displays “✅ Form Submitted Successfully!” when a 200/201 response is received

💻 Responsive Design
Optimized for:
Mobile (480 px)
Tablet (720 p, iPad 2732×2048)
Laptop/Desktop (1080 p, MacBook 1440×823)
Implemented using Tailwind CSS

🎨 Modern UI/UX
Smooth gradients, rounded corners, and hover transitions
Real-time status messages for errors and success
Disabled “Submit” button during submission

🛠️ Tech Stack
ReactJS – Frontend framework
Axios – For API requests
Tailwind CSS – For styling and responsiveness

📁 Project Structure
src/
 ├── components/
 │   └── ContactForm.jsx
 ├── App.js
 ├── index.js
 ├── index.css
 └── tailwind.config.js

⚙️ Installation & Setup
Clone the repository
git clone <(https://github.com/Disha0413/EZ-Labs-React-Contact-Form)>
cd ezlabs-contactform
Install dependencies
npm install
Run the app
npm start
The app will open at http://localhost:3000

📬 API Request Example
POST https://vernanbackend.ezlab.in/api/contact-us/
{
  "name": "Amit",
  "email": "hsatyamrav@gmail.com",
  "phone": "908765498",
  "message": "kjhgcgj"
}

✅ Response Code: 200
💬 UI Output: “Form Submitted Successfully!”

🧾 Validation Cases
Case	Behavior
Empty fields	Displays “⚠️ Please fill out all fields.”
Invalid email	Displays “⚠️ Invalid email address.”
Invalid phone	Displays “⚠️ Please enter a valid 10-digit phone number.”
API success	Displays “✅ Form Submitted Successfully!

🧠 Developer Notes
Console logs are optional and not required in the final submission.
The design follows the Figma reference for both desktop and mobile layouts.
All API calls use proper headers for JSON communication.
