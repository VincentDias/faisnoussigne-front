export class GoogleMapGeocode {

  constructor(
    public result: Result[],
    public addressComponent: string,
    public Location: string

  ) { }
}

export class Result {

  constructor(
    public location: string,
    public viewport: string) { }
}
