

export function getEnv(key: string, fallback?: string): string {
  const fullKey = `REACT_APP_${key}`;
  const value = process.env[fullKey];

  if (typeof value === 'undefined' || value === null) {
    if (fallback !== undefined) {
      return fallback;
    }
    throw new Error(`Environment variable "${fullKey}" is not defined`);
  }

  return value;
};
