/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly SECRET: string;
	readonly PUBLIC_SECRET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
