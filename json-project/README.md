# JSON Project

A simple web application demonstrating JSON data manipulation using HTML, CSS, and JavaScript.

## Features

- **Add Items**: Create new items with name, category, and price
- **Display Items**: View all items in a clean, organized list
- **JSON Visualization**: See the JSON representation of your data in real-time
- **Export Data**: Download your data as a JSON file
- **Local Storage**: Data persists between browser sessions
- **Responsive Design**: Works on desktop and mobile devices

## Files Structure

```
json-project/
├── package.json     # Project configuration and metadata
├── index.html       # Main HTML file
├── styles.css       # CSS styling
├── script.js        # JavaScript functionality
└── README.md        # This file
```

## Getting Started

### Option 1: Simple File Opening
1. Open `index.html` in your web browser
2. Start adding items using the form

### Option 2: Using HTTP Server
1. Navigate to the project directory
2. Run: `npm start` or `python3 -m http.server 8000`
3. Open `http://localhost:8000` in your browser

## Usage

1. **Adding Items**: Fill out the form with item name, category, and price, then click "Add Item"
2. **Viewing Data**: Items appear in the list, and the JSON representation updates automatically
3. **Exporting**: Click "Export JSON" to download your data
4. **Clearing Data**: Click "Clear All" to remove all items

## JSON Structure

The application manages data in the following JSON format:

```json
{
  "summary": {
    "totalItems": 3,
    "totalValue": 149.93,
    "categories": {
      "electronics": { "count": 1, "totalValue": 99.99 },
      "books": { "count": 1, "totalValue": 29.95 },
      "clothing": { "count": 1, "totalValue": 19.99 }
    },
    "lastUpdated": "2024-01-15T10:30:00.000Z"
  },
  "items": [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "category": "electronics", 
      "price": 99.99,
      "dateAdded": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

## Technologies Used

- **HTML5**: Semantic markup and form handling
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript ES6+**: Classes, arrow functions, modules, and local storage
- **JSON**: Data format for storage and export

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT License