# Mood Tracker 🎭📅😊

## Overview 🎯📊✨
The **Mood Tracker** is a simple web application that allows users to log their daily moods using an interactive calendar. Users can click on different mood options, and the selected mood is stored in local storage, allowing them to track their mood patterns over time. 📌💡📅

## Features 🔥⚡🚀
- Displays the current **date and time** dynamically.
- **Interactive calendar** that updates based on the selected month.
- Users can **navigate between months** using "Back" and "Next" buttons.
- Allows users to **select a mood** for each day.
- Stores mood data in **local storage**, so selections persist even after a page refresh.
- **Highlights the current day** in the calendar. 🌟📆🎨

## Technologies Used 🛠️💻📜
- **HTML**: Structure of the application.
- **CSS**: Styling the UI.
- **JavaScript**: Core functionality, including date handling, event listeners, and local storage. 🏗️🎨🖥️

## Installation 📥⚙️🖱️
No installation is required. Simply download the project files and open the `index.html` file in your browser. 🚀🔧📂

## File Structure 📁📑🗂️
```
/mood-tracker
│── index.html      # Main HTML file
│── styles.css      # Styling for the mood tracker
│── script.js       # JavaScript logic
│── assets/         # Icons, images, and other assets (if any)
└── README.md       # Project documentation
```

## Usage 🖱️📅🎭
1. **Open the application** in a web browser.
2. The current **date and time** will be displayed at the top.
3. The **calendar** will show the current month with days arranged accordingly.
4. Click on **"Back"** and **"Next"** buttons to navigate between months.
5. Click on a **mood item** to assign it to the current day.
6. The selected mood will appear on the corresponding date in the calendar.
7. Hovering over a date will show a **tooltip** with additional details about the selected mood. ⏳🗓️🔍

## JavaScript Functions Breakdown 📜🔍📌
- **`updateTime()`**: Updates the displayed date and time every second.
- **`renderCalendar()`**: Generates the calendar for the current or selected month.
- **`findMoodItem(year, month, day)`**: Retrieves the stored mood from local storage for a given date.
- **Event Listeners**:
  - `backBtn.addEventListener('click', renderCalendar())` → Moves to the previous month.
  - `nextBtn.addEventListener('click', renderCalendar())` → Moves to the next month.
  - `allMoods.forEach((item) => item.addEventListener('click', ...))` → Stores the selected mood.

## Local Storage Usage 💾📂💡
The application stores moods using a key format:
```
YYYY-MM-DD : mood-id
```
For example:
```
2025-03-20 : happy
```
This ensures that moods persist across page reloads. 🔄📌📊

## Author ✍️👨‍💻📜
**Rajyavardhan Singh** 🎭📅🚀

## License 📜🔓✅
This project is open-source and available under the **MIT License**. 🏛️🔑📖

