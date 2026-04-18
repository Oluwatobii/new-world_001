import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Loads `.env` from `cwd` into `process.env` (only keys not already set).
 * Used by the local dev API server; production (Netlify) injects env separately.
 */
export function loadDotEnv(cwd = process.cwd()) {
  const path = join(cwd, '.env')
  if (!existsSync(path)) return

  for (const line of readFileSync(path, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const eq = trimmed.indexOf('=')
    if (eq === -1) continue

    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    if (key && process.env[key] === undefined) process.env[key] = value
  }
}
