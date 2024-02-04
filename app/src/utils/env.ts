import z from 'zod';

const envVariables = z.object({
    ENV_URL: z.string(),
    DEV_ENV_URL: z.string(),
});

export const ENV_VARIABLES = envVariables.parse(process.env);