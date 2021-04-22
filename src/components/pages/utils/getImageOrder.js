const getImageOrder = (initialWideImages, location) => {
  const matchedImg = initialWideImages.find(
    ({ title }) => title === location.img.title
  );

  const startingImage = [...initialWideImages].splice(
    initialWideImages.indexOf(matchedImg)
  );
  return [
    ...new Set([...startingImage, ...initialWideImages])
  ];

}

export default getImageOrder