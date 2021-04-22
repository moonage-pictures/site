const getImageOrder = (initialWideImages, img) => {
  const matchedImg = initialWideImages.find(
    ({ title }) => title === img.title
  );

  const startingImage = [...initialWideImages].splice(
    initialWideImages.indexOf(matchedImg)
  );
  return [
    ...new Set([...startingImage, ...initialWideImages])
  ];

}

export default getImageOrder