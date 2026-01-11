
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface NavLink {
  name: string;
  path: string;
  icon?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}
