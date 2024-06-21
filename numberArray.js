const shuffledArray = array.sort(() => Math.random() - 0.5); 
const intermediateAppPath = path.join(buildOutputPath, 'app');
const fullName = name || 'buddy';