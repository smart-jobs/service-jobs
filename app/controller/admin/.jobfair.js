module.exports = {
  "create": {
    "requestBody": ["type", "subject", "content", "city", "address", "time", "date", "unit"]
  },
  "update": {
    "query": ["!id"],
    "requestBody": ["type", "subject", "content", "city", "address", "time", "date", "unit"]
  },
  "query": {
    "parameters": {
      "query": ["status"],
    },
    "options": {
      "query": ["skip", "limit"],
      "sort": ["meta.createAt"],
      "desc": true,
      "count": true,
      "projection": {
        "content": 0
      }
    }
  },
  "fetch": {
    "query": ["!id"]
  }
};
