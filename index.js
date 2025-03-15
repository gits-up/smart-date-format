class SmartDateFormat {
  constructor(locale = "en-US") {
    this.locale = locale;
  }

  format(date, formatType = "medium") {
    if (!(date instanceof Date)) {
      throw new Error("Invalid date object");
    }

    const options = {
      short: { year: "2-digit", month: "numeric", day: "numeric" },
      medium: { year: "numeric", month: "short", day: "numeric" },
      long: { year: "numeric", month: "long", day: "numeric", weekday: "long" },
    };

    return new Intl.DateTimeFormat(
      this.locale,
      options[formatType] || {}
    ).format(date);
  }

  relative(date) {
    if (!(date instanceof Date)) {
      throw new Error("Invalid date object");
    }

    const diffMs = date - new Date();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 60) return `${diffSeconds} seconds ago`;
    if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toDateString();
  }
}

module.exports = SmartDateFormat;
