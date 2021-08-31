import { testFunction } from ".";

test('test fake timer', () => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date());

    testFunction();
    
    let allSuccess = true;
    expect(allSuccess).toBeTruthy();
});