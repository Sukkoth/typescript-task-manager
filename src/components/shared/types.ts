export type Task = {
  id: string;
  checked: boolean;
  projectTitle?: string;
  title: string;
};

export enum ProjectsFilter {
  all,
  active,
  finished,
}

export type Project = {
  id: string;
  title: string;
  description?: string;
  emoji?: string;
  color?: string;
  deadline: Date;
  tasks: Task[];
};

export enum ProjectDetailFilter {
  tasks,
  description,
  deadlines,
}

export enum TaskPriority {
  low = "LOW",
  medium = "MEDIUM",
  high = "HIGH",
}

export type User = {
  name: string;
  email: string;
};

export type UserRegisteration = {
  name: string;
  email: string;
  password: string;
};

export type UserLogin = {
  email: string;
  password: string;
};
