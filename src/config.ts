// const date = new Date("2025-05-17T00:00:00.000Z");
const date = new Date("2025-05-17T13:00:00.000Z");
const timezoneOffset = date.getTimezoneOffset();
const adjustedTime = new Date(date.getTime() + timezoneOffset * 60000);

export const TARGET_TIME = adjustedTime;
