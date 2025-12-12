'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const THEME_ICONS = {
    light: Sun,
    dark: Moon,
    system: Monitor,
} as const;

const DOUBLE_CLICK_DELAY = 300;

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setMounted(true);
        return () => {
            if (clickTimeoutRef.current) {
                clearTimeout(clickTimeoutRef.current);
            }
        };
    }, []);

    const handleClick = () => {
        // Если есть активный таймаут - это двойной клик
        if (clickTimeoutRef.current) {
            clearTimeout(clickTimeoutRef.current);
            clickTimeoutRef.current = null;
            setTheme('system');
            return;
        }

        // Устанавливаем таймаут для обнаружения одиночного клика
        clickTimeoutRef.current = setTimeout(() => {
            clickTimeoutRef.current = null;
            // Переключение: light ↔ dark (system → light при первом клике)
            const currentTheme = theme || 'system';
            if (currentTheme === 'light') {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }, DOUBLE_CLICK_DELAY);
    };

    const currentTheme = (theme || 'system') as keyof typeof THEME_ICONS;
    const Icon = THEME_ICONS[currentTheme];

    // Показываем fallback до монтирования для предотвращения hydration mismatch
    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" disabled>
                <Monitor className="h-5 w-5 opacity-50" />
                <span className="sr-only">Переключить тему</span>
            </Button>
        );
    }

    return (
        <Button variant="ghost" size="icon" onClick={handleClick}>
            <Icon key={currentTheme} className="theme-icon-animate h-5 w-5" />
            <span className="sr-only">Переключить тему</span>
        </Button>
    );
}
