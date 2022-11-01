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
}
