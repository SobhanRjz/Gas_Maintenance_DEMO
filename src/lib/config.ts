import { z } from "zod";
import raw from "../assets/compressor_pm_config.json";

const AssetSchema = z.object({
  id: z.string(),
  name: z.string(),
  component: z.string(),
  tags: z.array(z.string()).optional().default([]),
  failure_modes: z.array(z.string()).optional().default([]),
  downtime_impact: z.string(),
  risk_calc: z.object({
    health_score_formula: z.string().optional(),
  }).optional().default({}),
  action: z.string().optional(),
  days_to_action_logic: z.string().optional(),
});

const AppSchema = z.object({
  app: z.object({
    title: z.string().optional(),
    units: z.record(z.string(), z.string()).optional(),
  }).optional().default({}),
  matrix_assets: z.array(AssetSchema),
});

export type Asset = z.infer<typeof AssetSchema>;
export const config = AppSchema.parse(raw);
export const assets = config.matrix_assets;
