import React from "react";

const Layout: React.FC = ({ children }: { children?: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div className="w-full h-full bg-black">{children}</div>
      </body>
    </html>
  );
};

export default Layout;
