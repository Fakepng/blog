declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      DATABASE_URL: string;
      secret: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
    }
  }
}

export {};
