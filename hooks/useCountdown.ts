'use client';
import { useState, useEffect } from 'react';

interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

/**
 * Countdown hook. Menyimpan target waktu di localStorage agar tidak reset saat refresh.
 * @param durationDays - durasi countdown dalam hari (default 7)
 * @param storageKey   - key unik untuk localStorage
 */
export function useCountdown(durationDays = 7, storageKey = 'countdown_target'): CountdownResult {
  const getTarget = (): number => {
    if (typeof window === 'undefined') return Date.now() + durationDays * 86400 * 1000;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed > Date.now()) return parsed;
    }
    const target = Date.now() + durationDays * 86400 * 1000;
    localStorage.setItem(storageKey, String(target));
    return target;
  };

  const calc = (target: number): CountdownResult => {
    const diff = Math.max(0, target - Date.now());
    if (diff === 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds, expired: false };
  };

  const [target] = useState<number>(() => {
    // SSR-safe: default value, actual value set after mount
    return Date.now() + durationDays * 86400 * 1000;
  });
  const [result, setResult] = useState<CountdownResult>(() => calc(target));

  useEffect(() => {
    // Re-read from localStorage on mount (client side)
    const actualTarget = getTarget();
    setResult(calc(actualTarget));

    const interval = setInterval(() => {
      setResult(calc(actualTarget));
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return result;
}
