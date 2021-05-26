export const age = (planet, seconds) => {
  const earth_sec = 31557600;
  if (planet == "pluton") {
    return "not a planet";
  } else {
    let chosen_planet = orbital_period[planet.toLowerCase()];
    let year_old = seconds / chosen_planet / earth_sec;
    return Number(year_old.toFixed(2));
  }
};

export const orbital_period = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};
