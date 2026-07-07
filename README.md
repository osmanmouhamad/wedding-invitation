# Luxury Arabic Wedding Invitation

A modern and elegant Arabic wedding invitation website built with **React** and **Vite**.

This project was designed and developed based on the client’s preferences and requirements, including the visual style, Arabic right-to-left layout, wedding details, colors, animations, and contact options.

## Live Demo

[View the live website](https://wedding-invitation-ruby-chi.vercel.app/)

## Features

* Arabic right-to-left (RTL) design
* Elegant intro screen before opening the invitation
* Smooth animated user interface
* Bride and groom names
* Wedding date, time, and venue information
* Google Maps venue link
* Live countdown to the wedding date
* Invitation sharing functionality
* WhatsApp contact option for apologies or attendance-related messages
* Fully responsive design for mobile, tablet, and desktop
* Centralized invitation content for easy customization

## Technologies Used

* React
* Vite
* Tailwind CSS
* Framer Motion
* JavaScript
* CSS
* ESLint

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed on your computer.

### Installation

Clone the repository:

```bash
git clone https://github.com/osmanmouhamad/wedding-invitation.git
```

Move into the project folder:

```bash
cd wedding-invitation
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

### Run the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

### Check the code with ESLint

```bash
npm run lint
```

## Customizing the Invitation

Most invitation content is stored in:

```text
src/data/invitationData.js
```

You can easily edit the following information:

* Bride and groom names
* Wedding title
* Date and time
* Time zone
* Venue name and address
* Google Maps link
* Welcome messages
* Wedding details text
* Countdown text
* Sharing messages
* WhatsApp contact number and message

Example:

```js
export const invitationData = {
  couple: {
    groom: "Groom Name",
    bride: "Bride Name",
  },

  event: {
    title: "Wedding Celebration",
    startsAt: "2026-12-31T19:00:00+03:00",
    timeZone: "Asia/Beirut",
  },

  venue: {
    name: "Venue Name",
    address: "City, Country",
    mapUrl: "Your Google Maps Link",
  },
};
```

> Before deploying the project for another client, make sure to replace all personal details, phone numbers, venue information, and wedding content.

## Project Structure

```text
wedding-invitation/
├── public/                    # Public files
├── scripts/                   # Project scripts
├── src/
│   ├── assets/                # Images and visual assets
│   ├── components/            # Reusable UI components
│   ├── data/
│   │   └── invitationData.js  # Wedding content and configuration
│   ├── sections/              # Main invitation sections
│   ├── styles/                # Global styles
│   ├── utils/                 # Helper functions
│   ├── App.jsx                # Main application component
│   └── main.jsx               # Application entry point
├── package.json
└── vite.config.js
```

## Main Sections

The website includes:

* Intro screen
* Hero section
* Wedding details section
* Countdown section
* Contact section
* Footer section

## Deployment

Build the project before deploying it:

```bash
npm run build
```

This creates a `dist` folder that can be deployed to hosting platforms such as Vercel, Netlify, or GitHub Pages.

## Author

Created by [Osman Mouhamad](https://github.com/osmanmouhamad)

## License

This project was created for portfolio and client-work purposes.

Client-specific content, including names, contact details, event information, and visual assets, should not be reused without permission.
