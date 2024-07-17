import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
  leftPanel?: React.ReactNode;
  rightPanel?: React.ReactNode;
  topPanel?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  leftPanel = <div />,
  rightPanel = <div />,
}) => {
  return (
    <div
      className="grid w-full h-full justify-center min-h-screen overflow-y-auto"
      style={{
        gridTemplateColumns: "minmax(60px, 200px) 760px 300px",
        columnGap: 60,
      }}
    >
      <div className="flex justify-center sticky top-0 h-screen">
        {leftPanel}
      </div>
      {children}
      <div className="flex justify-center sticky top-0 h-screen">
        {rightPanel}
      </div>
    </div>
  );
};
