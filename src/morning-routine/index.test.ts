import MorningRoutine from './morning_routine';
import MyMorningRoutine from './my_morning_routine';
import { Clock } from './clock';
import { Display } from './display';

describe('Morning Routine', () => {

  const setup = () => {
    const mockedClock: jest.Mocked<Clock> = {
        now: jest.fn()
    }

    const mockedDisplay: jest.Mocked<Display> = {
        show: jest.fn()
    }

    const morningRoutine = new MyMorningRoutine(mockedClock, mockedDisplay);

    return { mockedClock, mockedDisplay, morningRoutine };
  }

  it('should exist the class MyMorningRoutine', () => {
    expect( MyMorningRoutine).toBeDefined();
  });

  it('should display Do Exercise between 06:00 and 06:59', () => {
    const { morningRoutine, mockedClock, mockedDisplay   } = setup();
    mockedClock.now.mockReturnValue(new Date('2024-06-01T06:30:00'));
    morningRoutine.whatShouldIDoNow()

    expect(mockedDisplay.show).toHaveBeenCalledWith('Do Exercise');
  });

  it('should display Read and study between 07:00 and 07:59', () => {
    const { morningRoutine, mockedClock, mockedDisplay   } = setup();
    mockedClock.now.mockReturnValue(new Date('2024-06-01T07:30:00'));
    morningRoutine.whatShouldIDoNow()

    expect(mockedDisplay.show).toHaveBeenCalledWith('Read and study');
  });

  it('should display Have breakfast between 08:00 and 08:59', () => {
    const { morningRoutine, mockedClock, mockedDisplay   } = setup();
    mockedClock.now.mockReturnValue(new Date('2024-06-01T08:30:00'));
    morningRoutine.whatShouldIDoNow()

    expect(mockedDisplay.show).toHaveBeenCalledWith('Have breakfast');
  });

    it('should display No activity for other times', () => {
        const { morningRoutine, mockedClock, mockedDisplay   } = setup();
        mockedClock.now.mockReturnValue(new Date('2024-06-01T09:30:00'));
        morningRoutine.whatShouldIDoNow()

        expect(mockedDisplay.show).toHaveBeenCalledWith('No activity');
    });

    it('should allow injecting a custom schedule', () => {
        const { morningRoutine, mockedClock, mockedDisplay   } = setup();
        const customSchedule = {
            '6': 'Custom Activity 1',
            '7': 'Custom Activity 2',
            '8': 'Custom Activity 3'
        };
        morningRoutine.injectSchedule(customSchedule);
        mockedClock.now.mockReturnValue(new Date('2024-06-01T06:30:00'));
        morningRoutine.whatShouldIDoNow()

        expect(mockedDisplay.show).toHaveBeenCalledWith('Custom Activity 1');
    }); 

    it('should display No activity for times not in the custom schedule', () => {
        const { morningRoutine, mockedClock, mockedDisplay   } = setup();
        const customSchedule = {
            '6': 'Custom Activity 1',
            '7': 'Custom Activity 2',
            '8': 'Custom Activity 3'
        };
        morningRoutine.injectSchedule(customSchedule);
        mockedClock.now.mockReturnValue(new Date('2024-06-01T09:30:00'));
        morningRoutine.whatShouldIDoNow()

        expect(mockedDisplay.show).toHaveBeenCalledWith('No activity');
    });

    it('should display activity for times in the custom schedule', () => {
        const { morningRoutine, mockedClock, mockedDisplay   } = setup();

        const customSchedule = {
            '06:00-06:44': 'Do exercise',
            '06:45-06:59': 'Take a shower',
            '07:00-07:29': 'Read',
            '07:30-07:59': 'Study',
            '08:00-09:00': 'Have breakfast'

        };
        morningRoutine.injectSchedule(customSchedule);
        mockedClock.now.mockReturnValue(new Date('2024-06-01T07:30:00'));
        morningRoutine.whatShouldIDoNow()

        expect(mockedDisplay.show).toHaveBeenCalledWith('Study');
    });
});