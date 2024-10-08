export type SymDesc = {
  [key: string]: {
    sym: string;
    desc: string;
    text: string;
    opts: string;
  }
}

export type GenParams = {
  bcid: string | undefined;
  text: string;
  altText: string;
}