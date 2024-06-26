export interface User {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  email: string;
  bannerUrl: string;
  avatarUrl: string;
  githubUrl: string;
  online: boolean;
  lastOnline: string;
  gitlabUrl: string;

  inserted_at: string;
  updated_at: string;
}

export type UserPreview = {
  id: string;
  displayName: string;
  avatarUrl: string;
  bio: string;
  online: boolean;
  lastOnline: string;
};

export interface Community {
  id: string;
  name: string;
  slug: string;
  description: string;
  memberCount: number;
  ownerId: string;
  inserted_at: string;
  updated_at: string;
}

export interface Channel {
  id: string;
  name: string;
  slug: string;
  description: string;
  isDefault: boolean;
  isPrivate: boolean;
  isMember: boolean;
  isAdmin: boolean;
  community: CommunityWithPermissions;
  memberCount: number;
  inserted_at: string;
  updated_at: string;
}

export type CommunityPermissions = {
  isAdmin: boolean;
  isMember: boolean;
  isBlocked: boolean;
  isMod: boolean;
};

export type CommunityWithPermissions = Community & CommunityPermissions;

export type Thread = {
  id: string;
  name: string;
  creator: User;
  communityId: string;
  youSubscribed: boolean;
  channelId: string;
  peoplePreviewList: UserPreview[];
  inserted_at: string;
};

export type TopThread = {
  id: string;
  name: string;
  messageCount: string;
  creator: {
    id: string;
    displayName: string;
    avatarUrl: string;
  };
  peoplePreviewList: UserPreview[];
  community: { id: string; name: string };
  channel: { id: string; name: string; description: string; slug: string };
};

export type Message = {
  id: string;
  text: string;
  user: User;
  threadId: string;
  inserted_at: string;
  updated_at: string;
};

export type UserDm = {
  id: string;
  peoplePreviewList: UserPreview[];
  inserted_at: string;
  updated_at: string;
};

export type DmMessage = {
  id: string;
  text: string;
  user: User;
  dmId: string;
  inserted_at: string;
  updated_at: string;
};

export type SearchReponse = {
  users: User[];
  threads: Thread[];
  communities: Community[];
  items: User[] & Thread[] & Community[];
};
