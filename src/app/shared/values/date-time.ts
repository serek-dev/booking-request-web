export class DateTime {
  private readonly _date: string;

  /**
   * @param dateString - any valid datetime as string that can be parsed by moment.js
   */
  constructor(dateString: string) {

    this._date = dateString;

    if (this.hasIsoFormat() || this.hasIsoFormat()) {
      return;
    }

    throw Error(`Invalid date time format`);
  }

  get date(): string {
    if (this.hasDesiredFormat()) {
      return this._date;
    }

    const d = new Date(this._date);
    return d.toLocaleString()
    // todo: for the future
    // return (d.getFullYear() + '-' + ('0'+(d.getMonth()+1)).slice(-2) + '-' + '0' + d.getDate()).slice(-2) + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
  }

  private hasIsoFormat(): boolean {
    const regexIso = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/
    return regexIso.test(this._date);
  }

  private hasDesiredFormat(): boolean
  {
    // YYYY-MM-DD HH:mm
    const regexDateTime = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]/;
    return regexDateTime.test(this._date);
  }
}
