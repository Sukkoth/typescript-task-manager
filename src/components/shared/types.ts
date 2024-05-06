export type TaskStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "ON_HOLD"
  | "COMPLETED";

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  deadline?: Date;
  priority?: string;
  project_id: number;
  description: string;
  estimate_hours?: 12;
  created_at: Date;
  updated_at: Date;
  project?: {
    name?: string;
    id?: string;
    status?: TaskStatus;
  };
};

export enum ProjectsFilter {
  all,
  active,
  finished,
}

export type Project = {
  id: string;
  name: string;
  description?: string;
  emoji?: string;
  color?: string;
  deadline: Date;
  tasks?: Task[];
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
