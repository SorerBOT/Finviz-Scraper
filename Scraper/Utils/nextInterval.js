const WEEK_IN_MS = 604800000;
const ONE_HOUR_IN_MS = 3600000;
const FOUR_DAYS_IN_MS = 4 * WEEK_IN_MS / 7;

function nextInterval() {
    return WEEK_IN_MS - ((Date.now() + FOUR_DAYS_IN_MS) % WEEK_IN_MS) - ONE_HOUR_IN_MS;
}

export default nextInterval; 