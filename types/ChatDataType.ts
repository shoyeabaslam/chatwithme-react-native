export interface ChatDataType {
    id?:number,
    sender: 'bot' | 'user';
    message: string,
  }