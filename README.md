Project Title: Unbeatable Game of Tic Tac Toe

A classic Tic Tac Toe game built with React, featuring an unbeatable AI opponent. Play as the first mover and challenge the computer to a game that always results in a draw or a win for the AI.


Description
Unbeatable Game of Tic Tac Toe is a React-based implementation of the classic Tic Tac Toe game where you play against computer opponent that never loses. As the player, you always make the first move, and the algorithm intelligently responds to ensure a win or a draw for itself. This project showcases fundamental React concepts, state management, and the implementation of the Minimax algorithm for creating an unbeatable TicTactoe.

Demo : https://crossandknot.netlify.app

Screenshots
![alt text](<Screenshot 2024-09-21 at 6.57.32 PM.png>)
![alt text](<Screenshot 2024-09-21 at 6.57.43 PM-2.png>)
![alt text](<Screenshot 2024-09-21 at 6.58.00 PM-1.png>)

Main game interface displaying the Tic Tac Toe board.



Example of a winning scenario with a congratulatory message.


Features
	•	Unbeatable AI Opponent: Challenge an AI that never loses, ensuring either a win for the computer or a draw.
	•	First-Move Advantage: Player always makes the first move, adding a strategic layer to the game.
	•	Win Detection: Automatically detects and announces the winner or a draw.
	•	Reset Functionality: Easily reset the game to play again.
	•	Responsive Design: Seamlessly plays on various screen sizes, from desktops to mobile devices.
	•	Visual Feedback: Displays images for 'X' and 'O' using custom icons to enhance user experience.

Technologies Used
	•	Frontend: React, JavaScript (ES6)
	•	Styling: CSS
	•	Assets: Custom images for game icons
	•	Build Tool: Create React App

Installation
Prerequisites
	•	Node.js: Ensure you have Node.js installed. You can download it from here.
	•	npm or yarn: Node package manager comes with Node.js. Alternatively, you can use yarn.
Installation Steps
	1	Clone the RepositorybashCopy codegit clone https://github.com/yourusername/unbeatable-tic-tac-toe.git
	2	cd unbeatable-tic-tac-toe
	3	
	4	Install Dependencies - npm install
	5	
	8	Run the Application - npm start

Example
# Start the application
npm start
Navigate to http://localhost:3000 and enjoy playing against an unbeatable AI!

Project Structure
unbeatable-tic-tac-toe/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Assets/
│   │   ├── circle.png
│   │   └── cross.png
│   ├── components/
│   │   └── TicTacToe.js
│   ├── styles/
│   │   └── TicTacToe.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── LICENSE
	•	public/: Contains the index.html file and other static assets.
	•	src/: Source code of the application.
	◦	Assets/: Image assets for the game icons.
	◦	components/: React components.
	◦	styles/: CSS files for styling components.
	•	App.js: Main application component.
	•	index.js: Entry point of the React application.
	•	package.json: Project metadata and dependencies.
	•	README.md: Project documentation.
	•	LICENSE: Licensing information.
