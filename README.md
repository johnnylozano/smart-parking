# Decepticars | A better parking solution

---

### Current Status of AWS and Google API Integration
As of July 2023, we have disabled the AWS and Google API integration due to ongoing costs. This means certain features, such as real-time data and user authentication, are currently inactive. The website, however, is still accessible for demonstration purposes, showcasing its interface and design elements.

**Live Demo:** [https://decepticars.netlify.app/](https://decepticars.netlify.app/)

**Report:** [Final Report PDF](./docs/FinalReport.pdf)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Contributors](#contributors)
- [License](#license)

## Overview

This project is a smart parking garage system created as a senior capstone project. The system consists of nodes placed at the entrances and exits of the parking garage, which communicate with AWS to provide real-time parking availability. Predictive parking information is also provided based on a CNN neural network model. The web application was built using React, HTML, CSS, and JavaScript.

## Features

- Home screen
- Search page with Google Maps integration
- Login/Signup with AWS authentication through Cognito
- Parking screen page displaying current and predicted parking
- Admin dashboard
  - User list with name, ID, car information, and pass type
  - Entry/exit log with relevant information

## Installation and Setup

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Navigate to the project folder:

```bash
cd <project_folder>
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory of the project and add the required environment variables:

```
REACT_APP_AWS_ACCESS_KEY_ID=<your_aws_access_key_id>
REACT_APP_AWS_SECRET_ACCESS_KEY=<your_aws_secret_access_key>
REACT_APP_AWS_REGION=<aws_region>
REACT_APP_GOOGLE_MAPS_API_KEY=<your_google_maps_api_key>
```

5. Start the development server:

```bash
npm start
```

## Usage

- Access the web application on `http://localhost:3000/`
- Use the various features as described in the [Features](#features) section

## Tech Stack

- React
- HTML
- CSS
- JavaScript
- AWS (Cognito, Lambda, S3, etc.)
- Google Maps API

## Contributors

- Johnny Lozano https://github.com/johnnylozano
- Ben Elle
- Michael Lozen
- Monae Edmead

## License

This project is released under the MIT License. See the LICENSE file for more details.
