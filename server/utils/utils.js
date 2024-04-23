const isEqual = (name, data) => {
  return !!data ? { [name]: { $eq: data } } : {};
};

const isGreatEqualDate = (name, data) => {
  return !!data ? { [name]: { $gte: new Date(data.toString()) } } : {};
};

const isLessEqualDate = (name, data) => {
  return !!data
    ? { [name]: { $lte: new Date(data.toString() + "T23:59:59") } }
    : {};
};

module.exports = {
  isEqual,
  isGreatEqualDate,
  isLessEqualDate,
};
