// src/features/TextAnalyzer.jsx
import React, { useState } from "react";
import { analyzeText } from "../services/AnalyzeText";
import Shimmer from "../components/Shimmer";
import VoiceInput from "../components/VoiceInput";
function TextAnalyzer() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);
  const [buzzwords, setBuzzwords] = useState("");
  const [rewrite, setRewrite] = useState("");
  const [tips, setTips] = useState("");

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const result = await analyzeText(input);
    setOutput(result);
    const match = result.match(/clarity score[^0-9]*([0-9]{1,3})/i);
    const clarityScore = match ? Math.min(parseInt(match[1]), 100) : null;
    setScore(clarityScore);

    const buzzMatch = result.match(/Buzzwords or vague phrases:\s*(.*)/i);
    const rewriteMatch = result.match(/Clearer rewrite:\s*((.|\n)*?)Tips for better writing:/i);
    const tipsMatch = result.match(/Tips for better writing:\s*((.|\n)*)/i);
    console.log(result);
    setBuzzwords(buzzMatch ? buzzMatch[1].trim() : "");
    setRewrite(rewriteMatch ? rewriteMatch[1].trim() : "");
    setTips(tipsMatch ? tipsMatch[1].trim() : "");

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl space-y-6">
        <div className="space-y-4">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="5"
            placeholder="Paste your pitch here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          
          <div className="flex items-stretch gap-4">
            <VoiceInput onTextChange={setInput} />
            {loading ? (
              <Shimmer />
            ) : (
              <button
                onClick={handleAnalyze}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition cursor-pointer"
              >
                🧠 Analyze
              </button>
            )}
          </div>
          
          {/*
          {output && (
            <div className="mt-4 p-4 border rounded bg-gray-50 whitespace-pre-wrap">
              {output}
            </div>
          )}
          */}

          {buzzwords && (
            <div className="mt-4 p-4 border rounded bg-gray-50">
              <p className="font-semibold mb-2">🚫 Buzzwords or Vague Phrases:</p>
              <p className="whitespace-pre-wrap">{buzzwords}</p>
            </div>
          )}

          {rewrite && (
            <div className="mt-4 p-4 border rounded bg-gray-50">
              <p className="font-semibold mb-2">📝 Clearer Rewrite:</p>
              <p className="whitespace-pre-wrap">{rewrite}</p>
            </div>
          )}

          {tips && (
            <div className="mt-4 p-4 border rounded bg-gray-50">
              <p className="font-semibold mb-2">💡 Tips for Better Writing:</p>
              <p className="whitespace-pre-wrap">{tips}</p>
            </div>
          )}
        </div>
        {score !== null && (
          <div className="mt-6">
            <p className="mb-2 font-semibold">Clarity Score: {score}/100</p>
            <div className="w-full h-4 bg-gray-200 rounded">
              <div
                className={`h-full rounded ${
                  score > 75
                    ? "bg-green-500"
                    : score > 50
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${score}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TextAnalyzer;
