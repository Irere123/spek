import React from "react";
import TabsProvider, { useTabsContext } from "@/contexts/TabsContext";

type TabTitleProps = {
  titles: string[];
};

type TabContentProps = {
  items: {
    content: React.ReactNode;
  }[];
};

type TabsComposition = {
  Titles: (props: TabTitleProps) => React.ReactNode;
  Contents: (props: TabContentProps) => React.ReactNode;
};

type TabsProps = {
  children: React.ReactNode;
};

type TabsWrapper = (props: TabsProps) => React.ReactNode;

const Tabs: TabsWrapper & TabsComposition = ({ children }) => {
  return <TabsProvider>{children}</TabsProvider>;
};

Tabs.Titles = ({ titles }) => {
  const { currentIndex, setCurrentIndex } = useTabsContext();

  return (
    <div className="flex gap-4 mt-3">
      {titles.map((title, index) => (
        <button
          key={`tab-title-${index}`}
          id={`tab-control-${index}`}
          role="tab"
          aria-controls={`tab-content-${index}`}
          aria-selected={currentIndex === index}
          onClick={() => {
            setCurrentIndex(index);
          }}
          className={`mb-3 bg-alabaster-700 px-3 ${
            currentIndex === index ? "bg-alabaster-950" : ""
          }`}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

Tabs.Contents = ({ items }) => {
  const { currentIndex } = useTabsContext();
  const { content } = items[currentIndex];

  return (
    <div
      key={`tab-content-${currentIndex}`}
      id={`tab-content-${currentIndex}`}
      role="tabpanel"
      aria-labelledby={`tab-control-${currentIndex}`}
    >
      {content}
    </div>
  );
};

export default Tabs;
