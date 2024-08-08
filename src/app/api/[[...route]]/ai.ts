import { z } from 'zod';
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';

import { replicate } from '@/lib/replicate';

const app = new Hono().post(
  '/generate-image',
  zValidator(
    'json',
    z.object({
      prompt: z.string(),
    })
  ),
  async (c) => {
    const { prompt } = c.req.valid('json');

    const input = {
      prompt: prompt,
      num_outputs: 1,
      aspect_ratio: '1:1',
      output_format: 'webp',
      output_quality: 90,
    };

    const output: unknown = await replicate.run(
      'black-forest-labs/flux-schnell',
      {
        input,
      }
    );

    const res = output as string[];

    return c.json({ data: res[0] });
  }
);

export default app;
