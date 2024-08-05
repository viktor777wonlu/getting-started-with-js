const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const buildOutputPath = path.join(repositoryRootPath, 'out');
const results = await Promise.all(resultingPromises);