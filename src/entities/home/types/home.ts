import { Page } from "~shared/types";

export interface HomeData {
  trending: Page;
  season: Page;
  nextSeason: Page;
  popular: Page;
  top: Page;
}

export interface Season {}
export interface Top {}
export interface Trending {}
