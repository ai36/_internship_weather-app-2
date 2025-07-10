export const getCityData = async query => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};
