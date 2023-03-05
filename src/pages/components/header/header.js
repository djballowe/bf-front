import React from "react";
import Baseball from "@mdi/react";
import { mdiBaseballDiamond } from "@mdi/js";

export default function Header() {
  return (
    <div className="header">
      <div className="header-right">
        <Baseball path={mdiBaseballDiamond} size={1.5} />
        <ul>
          <li>Sores</li>
          <li>Teams</li>
          <li>About</li>
        </ul>
      </div>
      <button>Login</button>
    </div>
  );
}
