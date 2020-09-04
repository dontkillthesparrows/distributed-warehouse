import { getHours, addHours, addDays, setHours, setMinutes } from 'date-fns';

const openingTime = 10;
const earliestExpeditionTime = openingTime + 2;
const lastExpTimeWeekday = 17;
const lastExpTimeSaturday = 15;

function getExpiryIfHoliday(timestamp) {
  const expireTime = compensateTimezone(
    setMinutes(
      setHours(addDays(new Date(timestamp), 1), earliestExpeditionTime),
      0
    )
  );
  return expireTime.toJSON();
}

function getExpiryIfDayBeforeHoliday(timestamp) {
  const hourOfDay = getHours(new Date(timestamp));

  let expireTime;

  if (hourOfDay < openingTime) {
    expireTime = compensateTimezone(
      setMinutes(setHours(new Date(timestamp), earliestExpeditionTime), 0)
    );
  } else if (hourOfDay >= lastExpTimeSaturday) {
    expireTime = compensateTimezone(
      setMinutes(
        setHours(addDays(new Date(timestamp), 2), earliestExpeditionTime),
        0
      )
    );
  } else {
    expireTime = addHours(new Date(timestamp), 2);
  }

  return expireTime.toJSON();
}

function getExpiryIfWeekday(timestamp) {
  const hourOfDay = getHours(new Date(timestamp));

  let expireTime;

  if (hourOfDay < openingTime) {
    expireTime = compensateTimezone(
      setMinutes(setHours(new Date(timestamp), earliestExpeditionTime), 0)
    );
  } else if (hourOfDay >= lastExpTimeWeekday) {
    expireTime = compensateTimezone(
      setMinutes(
        setHours(addDays(new Date(timestamp), 1), earliestExpeditionTime),
        0
      )
    );
  } else {
    expireTime = addHours(new Date(timestamp), 2);
  }

  return expireTime.toJSON();
}

function compensateTimezone(date) {
  // getTimezoneOffset returns server offset from UTC
  // measured in minutes. Negative if ahead of UTC.
  const offset_milliseconds = date.getTimezoneOffset() * 60 * 1000;

  return new Date(date.getTime() - offset_milliseconds);
}

// timestamp format ("2020-01-17T00:50:01.001Z")
export function getExpiryFromOrderDate(timestamp) {
  let expireTime;

  switch (new Date(timestamp).getDay()) {
    case 0:
      expireTime = getExpiryIfHoliday(timestamp);
      break;
    case 6:
      expireTime = getExpiryIfDayBeforeHoliday(timestamp);
      break;
    default:
      expireTime = getExpiryIfWeekday(timestamp);
      break;
  }
  return expireTime;
}
