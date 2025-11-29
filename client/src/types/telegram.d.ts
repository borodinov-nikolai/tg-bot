interface WebAppInitData {
  query_id: string;
  user?: {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
  };
  chat?: {
    id: number;
    type: string;
  };
  auth_date: number;
  hash: string;
}

interface WebApp {
  initData: string;
  initDataUnsafe: WebAppInitData;
  version: string;
  isExpanded: boolean;
  colorScheme: 'light' | 'dark';
  expand(): void;
  close(): void;
  sendData(data: string): void;
  // и другие методы, которые нужны
}

interface Window {
  Telegram: {
    WebApp: WebApp;
  };
}
