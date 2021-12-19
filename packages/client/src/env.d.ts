interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_PROJECT_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
