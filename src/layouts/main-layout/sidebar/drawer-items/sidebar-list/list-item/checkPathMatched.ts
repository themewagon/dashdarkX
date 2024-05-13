export const checkPathMatched = (
  url1: string,
  url2: string,
  index1: number,
  index2: number,
): boolean => {
  const pathAra1 = url1.split('/').filter((path) => path !== '');
  const pathAra2 = url2.split('/').filter((path) => path !== '');
  index1 = index1 === -1 ? pathAra1.length - 1 : index1;
  index2 = index2 === -1 ? pathAra2.length - 1 : index2;
  return pathAra1[index1] === pathAra2[index2];
};
