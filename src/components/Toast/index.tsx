'use client';
import React from 'react';
import styles from './Toast.module.css';
import { useToast } from '@/hooks/useToast/index';

interface ToastProps {
  message: string;
  backgroundColor: string;
  duration?: number;
}

export default function Toast({ message, backgroundColor, duration = 5000 }: ToastProps) {
  const { isVisible, progress } = useToast(duration);

  if (!isVisible) return null;

  return (
    <div className={styles.toast} style={{ backgroundColor }}>
      <div className={styles['progress-bar-container']}>
        <div className={styles['progress-bar']} style={{ width: `${progress}%` }} />
      </div>
      <div>{message}</div>
    </div>
  );
};
