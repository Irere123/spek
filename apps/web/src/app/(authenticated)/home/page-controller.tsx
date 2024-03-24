"use client";

import React from "react";

import { useConn } from "@/hooks/useConn";
import { useTypeSafeQuery } from "@/hooks/useTypeSafeQuery";
import { useRouter } from "next/navigation";
import { InboxIcon, NotificationIcon, UserSharingIcon } from "@/icons";
import { Button } from "@/ui/button";

interface ControllerProps {}

export const HomeController: React.FC<ControllerProps> = () => {
  const { user } = useConn();
  const { push } = useRouter();
  const { data, isLoading } = useTypeSafeQuery("getTopCommunities");

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-md">
      <div className="flex gap-3 justify-between">
        <InboxIcon />
        <NotificationIcon />
        <UserSharingIcon />
        <div className="flex justify-end">
          <Button color="primary">Create</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-3">
        {data?.communities.map((c) => (
          <div
            key={c.id}
            className="flex flex-col bg-alabaster-950 border border-alabaster-600 px-5 py-4"
            onClick={() => push(`community/${c.id}`)}
          >
            <p>{c.name}</p>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
