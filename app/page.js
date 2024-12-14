"use client";

import React, { useState } from "react";
import Board from "../components/Board";

export default function Home() {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [player1, setPlayer1] = useState({ name: "", color: "#ff0000" });
  const [player2, setPlayer2] = useState({ name: "", color: "#0000ff" });
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const handleStartGame = () => {
    if (!player1.name || !player2.name) {
      alert("Both players must enter their names.");
      return;
    }
    if (player1.color === player2.color) {
      alert("Players must choose different colors.");
      return;
    }
    setCurrentPlayer(player1);
    setIsSetupComplete(true);
  };

  const switchPlayer = () => {
    setCurrentPlayer((prev) =>
      prev.name === player1.name ? player2 : player1
    );
  };

  console.log(player1, player2);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex flex-col items-center justify-center p-6 text-black">
      {!isSetupComplete ? (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6 ">
            Connect Four Setup
          </h1>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Player 1 Name</label>
            <input
              type="text"
              value={player1.name}
              onChange={(e) =>
                setPlayer1((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter Player 1's Name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Player 1 Disc Color
            </label>
            <input
              type="color"
              value={player1.color}
              onChange={(e) =>
                setPlayer1((prev) => ({ ...prev, color: e.target.value }))
              }
              className="w-full h-10 rounded-lg border"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Player 2 Name</label>
            <input
              type="text"
              value={player2.name}
              onChange={(e) =>
                setPlayer2((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter Player 2's Name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Player 2 Disc Color
            </label>
            <input
              type="color"
              value={player2.color}
              onChange={(e) =>
                setPlayer2((prev) => ({ ...prev, color: e.target.value }))
              }
              className="w-full h-10 rounded-lg border"
            />
          </div>
          <button
            onClick={handleStartGame}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Start Game
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Connect Four
          </h1>
          <div className="mb-4 text-lg font-semibold text-gray-700">
            Current Player:{" "}
            <span
              className="font-bold capitalize"
              style={{ color: currentPlayer.color }}
            >
              {currentPlayer.name}
            </span>
          </div>
          <Board
            player1={player1}
            player2={player2}
            currentPlayer={currentPlayer}
            switchPlayer={switchPlayer}
          />
        </div>
      )}
    </main>
  );
}
