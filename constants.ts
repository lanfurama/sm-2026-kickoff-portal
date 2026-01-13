import { Group, BrainstormIdea, DashboardMetric } from './types';

// ==========================================
// CONFIGURATION AREA
// ==========================================

// 1. EVENT COUNTDOWN CONFIGURATION
// Format: YYYY-MM-DDTHH:mm:ss
export const EVENT_START_DATE = "2026-01-13T08:00:00";
export const EVENT_TITLE = "Sale & Marketing KICK-OFF 2026";
export const EVENT_SUBTITLE = "Furama - Ariyana Danang International Tourism Complex";

// 2. GROUP DATA (QR Codes will point to these URLs)
export const GROUPS: Group[] = [
  { id: 1, name: "Group 1", leader: "", memberCount: 7, slideUrl: "https://docs.google.com/presentation/d/16UEfEhmuwSTVrapQiAFF23VUUF26NA-aZKZ7k32889U/edit?usp=sharing", color: "#C48B8B" }, // Nâu hồng
  { id: 2, name: "Group 2", leader: "", memberCount: 8, slideUrl: "https://docs.google.com/presentation/d/1ucUIXGdtpNxhiUzUiVE_23KW36NXBXAmGF8f-eZLtHY/edit?usp=sharing", color: "#22C55E" }, // Xanh lá cây
  { id: 3, name: "Group 3", leader: "", memberCount: 7, slideUrl: "https://docs.google.com/presentation/d/1Qk41nFk0Fxwzxwunz4HhT3QtVJZFw4ba8gHLranYmpw/edit?usp=sharing", color: "#EAB308" }, // Vàng
  { id: 4, name: "Group 4", leader: "", memberCount: 7, slideUrl: "https://docs.google.com/presentation/d/1sbawEyNGy2RdE2CoBRyaJl1n0Tl9j-aitG2B5Fj3Nzs/edit?usp=sharing", color: "#166534" }, // Xanh lá cây đậm
  { id: 5, name: "Group 5", leader: "", memberCount: 7, slideUrl: "https://docs.google.com/presentation/d/1u44dpw7Siw--2U95G5ocMI35krdswlwATJO5Trv3OX8/edit?usp=sharing", color: "#8B5CF6" }, // Tím
  { id: 6, name: "Group 6", leader: "", memberCount: 7, slideUrl: "https://docs.google.com/presentation/d/1kztKo0B154OML5QErhahAPYGW6lbUDg7XQTzvgt32Go/edit?usp=sharing", color: "#38BDF8" }, // Xanh nước biển nhạt
  { id: 7, name: "Group 7", leader: "", memberCount: 7, slideUrl: "https://docs.google.com/presentation/d/1hshmMJrpDMHDL4F4_2WQ5E91xSEhrZC_0deb0t9q3Ug/edit?usp=sharing", color: "#0891B2" }, // Cyan
];

// 3. MOCK DATA FOR DASHBOARD VISUALIZATION
export const STRATEGIC_PILLARS = [
  { name: 'Market Expansion', value: 35, fill: '#00F0FF' },
  { name: 'Digital Trans.', value: 25, fill: '#3B82F6' },
  { name: 'Customer Exp.', value: 20, fill: '#8B5CF6' },
  { name: 'Sustainability', value: 20, fill: '#FBBF24' },
];

export const GROUP_PERFORMANCE: DashboardMetric[] = [
  { name: 'Alpha', value: 92, fullMark: 100 },
  { name: 'Beta', value: 85, fullMark: 100 },
  { name: 'Gamma', value: 98, fullMark: 100 },
  { name: 'Delta', value: 78, fullMark: 100 },
  { name: 'Epsilon', value: 88, fullMark: 100 },
  { name: 'Zeta', value: 95, fullMark: 100 },
];

export const TOP_IDEAS: BrainstormIdea[] = [
  { id: 1, groupName: "Gamma Growth", topic: "AI-Driven Concierge", votes: 45, status: 'Approved' },
  { id: 2, groupName: "Alpha Squad", topic: "Eco-Tourism Package 2026", votes: 38, status: 'Approved' },
  { id: 3, groupName: "Zeta Zenith", topic: "Virtual Wedding Tours", votes: 32, status: 'Review' },
  { id: 4, groupName: "Beta Innovators", topic: "Loyalty App Gamification", votes: 28, status: 'Pending' },
];
