interface WeatherResponse {
  data: ForecastWeatherData[];
  city_name: string;
  lon: string;
  timezone: string;
  lat: string;
  country_code: string;
  state_code: string;
}

interface ForecastWeatherData {
  valid_date: Date;
  ts: number;
  datetime: Date;
  wind_gust_spd: number;
  wind_spd: number;
  wind_dir: number;
  wind_cdir: string;
  wind_cdir_full: string;
  temp: number;
  max_temp: number;
  min_temp: number;
  high_temp: number;
  low_temp: number;
  app_max_temp: number;
  app_min_temp: number;
  pop: number;
  precip: number;
  snow: number;
  snow_depth: number;
  slp: number;
  pres: number;
  dewpt: number;
  rh: number;
  weather: Weather;
  clouds_low: number;
  clouds_mid: number;
  clouds_hi: number;
  clouds: number;
  vis: number;
  max_dhi: number;
  uv: number;
  moon_phase: number;
  moon_phase_lunation: number;
  moonrise_ts: number;
  moonset_ts: number;
  sunrise_ts: number;
  sunset_ts: number;
}

interface CurrentWeatherResponse {
  data: CurrentWeatherData[];
  minutely: any[];
  count: number;
}

interface CurrentWeatherData {
  wind_cdir: string;
  rh: number;
  pod: string;
  lon: number;
  pres: number;
  timezone: string;
  ob_time: string;
  country_code: string;
  clouds: number;
  vis: number;
  wind_spd: number;
  gust: number;
  wind_cdir_full: string;
  app_temp: number;
  state_code: string;
  ts: number;
  h_angle: number;
  dewpt: number;
  weather: Weather;
  uv: number;
  aqi: number;
  station: string;
  sources: string[];
  wind_dir: number;
  elev_angle: number;
  datetime: string;
  precip: number;
  ghi: number;
  dni: number;
  dhi: number;
  solar_rad: number;
  city_name: string;
  sunrise: string;
  sunset: string;
  temp: number;
  lat: number;
  slp: number;
}

interface Weather {
  icon: string;
  code: string;
  description: string;
}

export type {
  WeatherResponse,
  ForecastWeatherData,
  Weather,
  CurrentWeatherData,
  CurrentWeatherResponse,
};
