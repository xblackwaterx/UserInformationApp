
# User Information App

## Overview

The **User Information App** is a React Native application designed to display user details fetched from a public API. This app demonstrates the ability to handle API data, present it in a user-friendly interface, and manage navigation between user profiles. Each screen displays the information of one user, with navigation buttons to move between users.

## Features

- **User Information Display:** Shows user details including ID, UID, password, first name, last name, username, email, and avatar.
- **Navigation Buttons:** "Previous" and "Next" buttons to navigate through the list of 80 users.
- **API Integration:** Fetches user data from the Random Data API.

## Instructions

### Prerequisites

- Node.js installed on your machine
- Expo CLI installed globally (`npm install -g expo-cli`)
- React Native environment set up (follow the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide if needed)

### Running the Application Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/user-information-app.git
   cd user-information-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npx expo start
   ```

   This will open a new tab in your browser with the Expo Developer Tools.

4. **View the Application**

   - **On a Physical Device:** Scan the QR code displayed in the Expo Developer Tools using the Expo Go app (available on the App Store and Google Play).
   - **On an Emulator/Simulator:** Press `i` for iOS or `a` for Android in the Expo Developer Tools to open the app in the corresponding emulator/simulator.

Viewing your React Native app on Snack is a great way to quickly test and share your project without needing to set up a local development environment. Snack is a web-based tool provided by Expo that allows you to run and debug your React Native code in real time. Here's a step-by-step guide to see your project on Snack:

Steps to View Your App on Snack
1. Prepare Your Project
Ensure your project is working correctly locally before uploading it to Snack. Resolve any issues with your local setup.

2. Visit Snack
Open your web browser and go to Snack.
3. Create a New Snack
Click on "Try Snack" or "New Snack" to start a new project.
You'll be taken to a new editor where you can write and test your code.
4. Copy Your Code
Open your App.js file in your local project directory.

Copy the entire content of App.js and paste it into the App.js file in the Snack editor.


5. Add Dependencies
If your project uses additional dependencies, you need to add them to Snack:

In the Snack editor, click on the "Dependencies" tab (usually on the left sidebar).

Add the dependencies by typing their names in the search box and clicking the "Add" button.

For example:

react-native-vector-icons
react-native-svg
Snack will automatically install these packages for you.

6. Configure Snack
If you have any configuration or custom settings (like custom fonts or assets), ensure you add these to the Snack configuration:

Click on the "Assets" tab to upload any images or files used in your project.
Ensure any necessary configuration settings are updated in Snack’s configuration settings.
7. Preview Your App
Snack provides a live preview of your app on the right side of the editor. You can see how your app looks and interacts in real-time.
Use the "Open in Expo Go" button on the preview screen to open the app in Expo Go on your physical device. Alternatively, you can use the QR code provided by Snack to scan with Expo Go.
8. Share Your Snack
Once you’re satisfied with how your app looks and works, you can share it with others.
Click on the "Share" button in the top-right corner of the Snack editor.
Copy the URL provided and share it with others, or use the "Save" button to save your Snack for later access.

### Additional Notes

- The application fetches data for 80 users from [Random Data API](https://random-data-api.com/api/users/random_user?size=80). Ensure you have a stable internet connection.
- The application displays sensitive information like passwords for demonstration purposes. For production use, ensure such information is handled securely or anonymized.
- The design of the user interface can be customized based on your preference or as per the assignment requirements.

## Considerations

- **Code Quality:** Ensure your code is clean, organized, and well-commented.
- **React Native Usage:** Utilize React Native components efficiently and handle navigation properly.
- **Data Handling:** Successfully fetch, process, and display API data.
- **UI Design:** Focus on creating an aesthetically pleasing and responsive user interface.
- **Error Handling:** Implement error handling for network requests and other edge cases.

### Explanation

- **Data Fetching**: The `fetchUsers` function retrieves 80 user profiles from the Random Data API and sets them into the `users` state.
- **Navigation**: The `handleNext` and `handlePrevious` functions update the `currentIndex` to navigate through the list of users.
- **UI**: The `styles` object contains styling for various components to ensure a clean and user-friendly interface.

## Contact

For any questions or suggestions, please contact anshanu564@gmail.com
