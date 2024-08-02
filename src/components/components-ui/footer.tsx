import React from "react";

export default function PageFooter() {
  return (
    <footer className="flex bg-gradient-to-r from-amber-300 via-rose-300 to-blue-300 h-9 w-full items-center justify-center bottom-0 ">
      <div className="flex w-full items-center justify-center">
        <p className="text-[10px] sm:text-xs text-center ">
          Copyright &copy; 2024 - All rights reserved
          <span className="block text-muted-foreground font-medium ">
            Powered by BAKEDAPGK
          </span>
        </p>
      </div>
    </footer>
  );
}
