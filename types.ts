export interface Group {
  id: number;
  name: string;
  slideUrl: string;
  leader: string;
  memberCount: number;
}

export interface DashboardMetric {
  name: string;
  value: number;
  fullMark: number;
}

export interface BrainstormIdea {
  id: number;
  groupName: string;
  topic: string;
  votes: number;
  status: 'Approved' | 'Review' | 'Pending';
}

export enum ViewState {
  HOME = 'HOME',
  DASHBOARD = 'DASHBOARD'
}
