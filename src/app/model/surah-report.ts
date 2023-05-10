import { Ayah } from "./Ayah";
import { Report } from "./report";
import { Surah } from "./surah";

export interface SurahReport extends Report {
    surah:Surah; 
    ayah: Ayah;
}
