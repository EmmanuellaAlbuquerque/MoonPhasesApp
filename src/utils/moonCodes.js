/**
* Moon Phases Icons Code (OBJECT)
* Created by Emmanuella Albuquerque on 2023/01/20.
*/

// importing images
import newMoon from '../assets/new-moon.png';
import waxingCrescent from '../assets/waxing-crescent-moon-northern.png';
import waxingGibbous from '../assets/waxing-gibbous-moon-northern.png';
import firstQuarter from '../assets/first-quarter.png';
import fullMoon from '../assets/full-moon.png';

export const moonCodes = {
  // 800	New-moon
  "800": newMoon,

  // 801	Waxing crescent
  "801": waxingCrescent,

  // 802	First quarter
  "802": firstQuarter,

  // 803	Waxing gibbous
  "803": waxingGibbous,

  // 804	Full-moon
  "804": fullMoon,

  // 805	Waning gibbous
  "805": waxingCrescent,

  // 806	Last quarter
  "806": firstQuarter,

  // 807	Waning crescent
  "807": waxingCrescent,
};
