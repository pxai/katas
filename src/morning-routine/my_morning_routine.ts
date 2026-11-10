import MorningRoutine from './morning_routine';
import { Clock } from './clock';
import { Display } from './display';

export default class MyMorningRoutine implements MorningRoutine {
    private schedule: Record<string, string> = {};

    public constructor(public clock: Clock, public display: Display) {
        this.schedule = {
            '06:00-06:59': 'Do Exercise',
            '07:00-07:59': 'Read and study',
            '08:00-08:59': 'Have breakfast'
        };
    }

    public injectSchedule(schedule: Record<string, string> | object): void {
        this.schedule = schedule as Record<string, string>;
    }

    public whatShouldIDoNow(): void {
        const now = this.clock.now();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        const activity = this.selectActivity(currentHour, currentMinute) || 'No activity';
        this.display.show(activity);
    }

    private selectActivity(hour: number, minute: number): string | undefined {
        for (const [timeRange, activity] of Object.entries(this.schedule)) {
            if (this.isTimeInRange(timeRange, hour, minute)) {
                return activity;
            }
        }
        return undefined;
    }

    private isTimeInRange(timeRange: string, hour: number, minute: number): boolean {
        const currentMinutes = hour * 60 + minute;

        if (!timeRange.includes('-')) {
            const [hStr] = timeRange.trim().split(':');
            const h = parseInt(hStr, 10);
            return hour === h;
        }

        const [startStr, endStr] = timeRange.split('-');
        const [startH, startM = '0'] = startStr.trim().split(':');
        const [endH, endM = '0'] = endStr.trim().split(':');

        const startMinutes = parseInt(startH, 10) * 60 + parseInt(startM, 10);
        const endMinutes = parseInt(endH, 10) * 60 + parseInt(endM, 10);

        return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
    }
}