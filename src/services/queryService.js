function getPagination(page, limit) {
  return (page - 1) * limit;
}

module.exports = { getPagination };
