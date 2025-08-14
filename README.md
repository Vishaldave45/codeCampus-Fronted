

## Project Overview
CodeCampus is a modern, interactive coding learning platform frontend built with **React**.  
The platform is designed to help students and developers practice coding, learn new concepts, and track progress through a gamified experience.  

> ⚠️ This repository currently contains **frontend only**. Backend integration will be added in the future.

---

## Work Done So Far

### Pages Implemented
- **Login Page:** Functional UI with basic form validation.  
- **Dashboard Page:** Placeholder for progress tracking, challenges, and AI Tutor section.  
- **Home Page:** Basic layout with welcome content and navigation.  
- **Header & Navbar:** Includes platform name, search bar, and profile section.  

### Components
- **Header.jsx** – Top navigation bar.  
- **Navbar.jsx** – Navigation links.  
- **Profile.jsx** – User info placeholder.  
- **Footer.jsx** – Placeholder for footer section (to be implemented).  

### Routing
- Configured **react-router-dom** for page navigation.  
- Protected routes using **JWT placeholder logic** for Dashboard page.  

### Styling
- Basic **CSS styling** applied.  
- Initial **UI redesign** started for modern look and layout improvements.  

---

## Pending / Future Work

### UI & UX Enhancements
- Complete **Register page** UI.  
- Fully **responsive design** for mobile and tablet.  
- Add **animations and hover effects** for interactivity.  
- Redesign Dashboard and Home page cards for challenges and AI Tutor.  

### Features to Implement
- **AI Tutor Chatbot UI** – Concept explanations and hints.  
- **Challenge Mode UI** – Dynamic coding problems with submission feedback.  
- **Leaderboard & Badges UI** – Track progress and achievements.  
- **Profile Page** – User statistics, solved challenges, badges.  
- **Persistent login/logout flow**.  

### Code Improvements
- Modularize components for maintainability.  
- Optimize state management (Context API or Redux).  
- Add error handling and loading states for smoother UX.  

---

## Project Structure (Frontend)
```

frontend/
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Profile.jsx
│  │  └─ Footer.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Login.jsx
│  │  ├─ Dashboard.jsx
│  │  └─ Register.jsx
│  ├─ App.jsx
│  ├─ index.js
│  └─ styles.css
├─ package.json
├─ README.md

````

---

## Installation & Setup

1. **Clone the repository**
```bash
git clone <repo_url>
cd frontend
````

2. **Install dependencies**

```bash
npm install
```

3. **Run frontend**

```bash
npm start
```

> Ensure you have Node.js and npm installed.

---

## Future Roadmap

1. Fully functional **AI Tutor UI** with code hints.
2. **Challenge Mode UI** with dynamic coding problems.
3. **Leaderboard & Profile pages** with achievements and badges.
4. Responsive **mobile and tablet layout**.
5. Backend integration for authentication, challenges, and progress tracking.
6. Improved UI with animations and modern components.
7. End-to-end testing for all major frontend features.

---

## Author

* **Vishal Dave**
* Frontend Developer | React Enthusiast


