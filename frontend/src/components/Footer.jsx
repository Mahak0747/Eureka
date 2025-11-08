import React from "react";

export default function Footer() {
  return (
    <footer className="bg-secondary bg-gradient text-center text-light py-3 mt-auto">
      <small>
        © {new Date().getFullYear()} Fraud Detection | Built by Mahak Goswami
      </small>
    </footer>
  );
}
