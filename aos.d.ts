// types/aos.d.ts
declare module "aos" {
  const AOS: {
    init: (options?: {
      duration?: number;
      once?: boolean;
      [key: string]: any;
    }) => void;
    refresh?: () => void;
    refreshHard?: () => void;
  };
  export default AOS;
}

declare module "aos/dist/aos.css";