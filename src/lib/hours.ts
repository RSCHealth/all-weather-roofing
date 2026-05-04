import { BUSINESS, DAY_KEYS, type DayKey } from "./constants";

type ChicagoNow = {
  weekday: DayKey;
  weekdayIndex: number; // 0 = Sunday
  hour: number;
  minute: number;
};

function getChicagoNow(now: Date): ChicagoNow {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: BUSINESS.hours.timezone,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(now);
  const weekday = (parts.find((p) => p.type === "weekday")?.value ?? "")
    .toLowerCase() as DayKey;
  // Intl with hour12: false can return "24" at midnight; normalize to 0.
  const rawHour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
  const hour = rawHour === 24 ? 0 : rawHour;
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
  const weekdayIndex = DAY_KEYS.indexOf(weekday);
  return { weekday, weekdayIndex, hour, minute };
}

function parseHM(hm: string): { h: number; m: number } {
  const [h, m] = hm.split(":").map(Number);
  return { h, m };
}

export function formatTime12(hm: string): string {
  const { h, m } = parseHM(hm);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${h12} ${period}` : `${h12}:${m.toString().padStart(2, "0")} ${period}`;
}

function dayLabel(weekday: DayKey, capitalize = true): string {
  return capitalize ? weekday.charAt(0).toUpperCase() + weekday.slice(1) : weekday;
}

export function isOpenNow(now: Date = new Date()): boolean {
  const { weekday, hour, minute } = getChicagoNow(now);
  const hours = BUSINESS.hours.regular[weekday];
  if (!hours.open || !hours.close) return false;
  const current = hour * 60 + minute;
  const { h: oh, m: om } = parseHM(hours.open);
  const { h: ch, m: cm } = parseHM(hours.close);
  return current >= oh * 60 + om && current < ch * 60 + cm;
}

export function nextOpenLabel(now: Date = new Date()): string {
  const { weekdayIndex, hour, minute } = getChicagoNow(now);
  const current = hour * 60 + minute;

  for (let offset = 0; offset < 8; offset++) {
    const idx = (weekdayIndex + offset) % 7;
    const day = DAY_KEYS[idx];
    const hours = BUSINESS.hours.regular[day];
    if (!hours.open || !hours.close) continue;
    const { h: oh, m: om } = parseHM(hours.open);
    const openMinutes = oh * 60 + om;

    if (offset === 0) {
      if (current < openMinutes) {
        return `Opens today at ${formatTime12(hours.open)}`;
      }
      // already past open today; fall through to find next day
      continue;
    }
    if (offset === 1) return `Opens tomorrow at ${formatTime12(hours.open)}`;
    return `Opens ${dayLabel(day)} at ${formatTime12(hours.open)}`;
  }
  return "Hours unavailable";
}

export function todaysHoursLabel(now: Date = new Date()): string {
  const { weekday } = getChicagoNow(now);
  const hours = BUSINESS.hours.regular[weekday];
  if (!hours.open || !hours.close) return "Closed today";
  if (isOpenNow(now)) return `Open today until ${formatTime12(hours.close)}`;
  return `Today's hours: ${formatTime12(hours.open)} – ${formatTime12(hours.close)}`;
}

export function closingTimeLabel(now: Date = new Date()): string | null {
  const { weekday } = getChicagoNow(now);
  const hours = BUSINESS.hours.regular[weekday];
  if (!hours.close) return null;
  return formatTime12(hours.close);
}
