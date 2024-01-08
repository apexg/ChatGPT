// Server configuration
export const SERVER_PORT = 3000; // Server port
export const DEBUG = false; // Debug mode

// Prompt Moderation before sending to OpenAI
export const MODERATION = true; // Moderation mode

// Rate limit
export const PRIOD = 15 * 1000; // 15 seconds
export const RATE_LIMIT = 50; // 50 requests per 15 seconds

// Whitelisted IPs
export const WHITELISTED_IPS = [
    // "127.0.0.1"
];

// OpenAI API Keys
export let OPENAI_KEYS = [
    "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",
    "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",
    "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",
];
