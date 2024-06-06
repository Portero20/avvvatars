"use client";
import Avvvatars from "avvvatars-react";
import { useState } from "react";
export default function HomePage() {
  const [nickname, setNickname] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-5 items-center justify-center">
        <input
          className="text-black"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Enter your nickname"
        />
        <Avvvatars
          value={nickname}
          style="character"
          size={64}
          shadow
          radius={10}
          border
          borderSize={3}
          borderColor="#ffeaa7"
        />
      </div>
    </div>
  );
}
