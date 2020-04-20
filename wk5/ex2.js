// Restaurants Japanese cuisine
db.getCollection('Restaurants').find({ 'cuisine': 'Japanese' })
// Add projection field
db.getCollection('Restaurants').find({ 'cuisine': { $eq: 'Japanese' } }, { 'cuisine': 1, 'name': 1 })
// Ascending sort 
db.getCollection('Restaurants').find({ 'cuisine': { $eq: 'Japanese' } }, { 'cuisine': 1, 'name': 1 }).sort({ KEY: 1 })
// Query
db.getCollection('Restaurants').find({ 'cuisine': { $eq: 'Japanese' } }, { '_id': 1, 'cuisine': 1, 'name': 1, 'city': 1, 'restaurant_id': 1 }).sort({ 'restaurant_id': 1 });