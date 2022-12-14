export interface Task {
  id: number;
  title: string;
  comment: string;
  prior: string;
  category: string;
}
export interface TimeRecord {
  durationInHour: string;
  durationInMinutes: string;
  workDate: string;
  workDescription: string;
  // TODO: remove title
  tasksTitle?: string;
}

export interface Day {
  index: number;
  dayName: string;
  dayDate: string;
}
