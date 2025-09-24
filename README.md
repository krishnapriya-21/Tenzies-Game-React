# Tenzies Game - React Edition

A fun and interactive web-based implementation of the Tenzies dice game, built with React and Vite. The objective is to roll the dice until all of them show the same number.


## How to Play

1.  Press the "Roll" button to start the game with ten random dice.
2.  The goal is to get all ten dice to show the same number.
3.  Click on any die to "freeze" it at its current value. Frozen dice will not be re-rolled.
4.  Continue rolling until all dice are frozen and display the same number.
5.  Once you win, a victory modal will appear with a confetti celebration!

## Features

-   **Interactive UI:** Clean and simple interface built with React.
-   **Dice Freezing:** Click to hold dice between rolls.
-   **Win Detection:** Automatically detects when the win condition is met.
-   **Celebration:** Features a confetti effect from `react-confetti` and a victory modal using Bootstrap upon winning.
-   **Responsive Design:** The layout adapts to different screen sizes.

## Technologies Used

-   **Frontend:** React (using Hooks like `useState`, `useEffect`, and `useRef`)
-   **Build Tool:** Vite
-   **Styling:** CSS & Bootstrap for the modal.
-   **Effects:** react-confetti for the win celebration.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/krishnapriya-21/tenzies-react-game.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```
