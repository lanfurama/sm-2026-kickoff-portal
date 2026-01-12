export interface Group {
  id: number;
  name: string;
  slideUrl: string;
  leader: string;
  memberCount: number;
  color?: string; // Hex color for QR code and header
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
