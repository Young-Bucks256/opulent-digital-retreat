// JSON Project - JavaScript functionality
class JSONManager {
    constructor() {
        this.items = [];
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.bindEvents();
        this.render();
    }

    bindEvents() {
        const form = document.getElementById('itemForm');
        const exportBtn = document.getElementById('exportBtn');
        const clearBtn = document.getElementById('clearBtn');

        form.addEventListener('submit', (e) => this.handleSubmit(e));
        exportBtn.addEventListener('click', () => this.exportJSON());
        clearBtn.addEventListener('click', () => this.clearAll());
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const item = {
            id: Date.now(),
            name: formData.get('name'),
            category: formData.get('category'),
            price: parseFloat(formData.get('price')),
            dateAdded: new Date().toISOString()
        };

        this.addItem(item);
        e.target.reset();
    }

    addItem(item) {
        this.items.push(item);
        this.saveToStorage();
        this.render();
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.saveToStorage();
        this.render();
    }

    clearAll() {
        if (confirm('Are you sure you want to clear all items?')) {
            this.items = [];
            this.saveToStorage();
            this.render();
        }
    }

    render() {
        this.renderItems();
        this.renderJSON();
    }

    renderItems() {
        const container = document.getElementById('itemsList');
        
        if (this.items.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #718096; font-style: italic;">No items yet. Add some items above!</p>';
            return;
        }

        container.innerHTML = this.items.map(item => `
            <div class="item">
                <div class="item-info">
                    <h4>${this.escapeHtml(item.name)}</h4>
                    <p>Category: ${item.category} | Added: ${new Date(item.dateAdded).toLocaleDateString()}</p>
                </div>
                <div style="display: flex; align-items: center;">
                    <span class="item-price">$${item.price.toFixed(2)}</span>
                    <button class="delete-btn" onclick="jsonManager.removeItem(${item.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }

    renderJSON() {
        const jsonDisplay = document.getElementById('jsonDisplay');
        const formattedJSON = JSON.stringify(this.getExportData(), null, 2);
        jsonDisplay.textContent = formattedJSON;
    }

    getExportData() {
        const summary = {
            totalItems: this.items.length,
            totalValue: this.items.reduce((sum, item) => sum + item.price, 0),
            categories: this.getCategorySummary(),
            lastUpdated: new Date().toISOString()
        };

        return {
            summary,
            items: this.items
        };
    }

    getCategorySummary() {
        const categories = {};
        this.items.forEach(item => {
            if (!categories[item.category]) {
                categories[item.category] = { count: 0, totalValue: 0 };
            }
            categories[item.category].count++;
            categories[item.category].totalValue += item.price;
        });
        return categories;
    }

    exportJSON() {
        const data = this.getExportData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `items-export-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        // Show success message
        this.showNotification('JSON file exported successfully!', 'success');
    }

    saveToStorage() {
        localStorage.setItem('jsonProjectItems', JSON.stringify(this.items));
    }

    loadFromStorage() {
        const stored = localStorage.getItem('jsonProjectItems');
        if (stored) {
            try {
                this.items = JSON.parse(stored);
            } catch (e) {
                console.error('Error loading from storage:', e);
                this.items = [];
            }
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '5px',
            color: 'white',
            fontWeight: 'bold',
            zIndex: '1000',
            opacity: '0',
            transform: 'translateX(100%)',
            transition: 'all 0.3s ease'
        });

        // Set background color based on type
        const colors = {
            success: '#48bb78',
            error: '#f56565',
            info: '#667eea'
        };
        notification.style.background = colors[type] || colors.info;

        // Add to DOM and animate in
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 10);

        // Remove after delay
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize the JSON manager when the page loads
let jsonManager;

document.addEventListener('DOMContentLoaded', () => {
    jsonManager = new JSONManager();
    
    // Add some sample data if no items exist
    if (jsonManager.items.length === 0) {
        const sampleItems = [
            {
                id: 1,
                name: "Wireless Headphones",
                category: "electronics",
                price: 99.99,
                dateAdded: new Date().toISOString()
            },
            {
                id: 2,
                name: "JavaScript: The Good Parts",
                category: "books",
                price: 29.95,
                dateAdded: new Date().toISOString()
            },
            {
                id: 3,
                name: "Cotton T-Shirt",
                category: "clothing",
                price: 19.99,
                dateAdded: new Date().toISOString()
            }
        ];
        
        sampleItems.forEach(item => jsonManager.addItem(item));
        jsonManager.showNotification('Sample data loaded! Try adding your own items.', 'info');
    }
});

// Utility functions for JSON manipulation
const JSONUtils = {
    // Validate JSON string
    isValidJSON(str) {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    },

    // Deep clone object
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },

    // Flatten nested JSON
    flatten(obj, prefix = '') {
        const flattened = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const newKey = prefix ? `${prefix}.${key}` : key;
                if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                    Object.assign(flattened, this.flatten(obj[key], newKey));
                } else {
                    flattened[newKey] = obj[key];
                }
            }
        }
        return flattened;
    },

    // Filter JSON by criteria
    filterItems(items, criteria) {
        return items.filter(item => {
            return Object.keys(criteria).every(key => {
                if (typeof criteria[key] === 'string') {
                    return item[key]?.toString().toLowerCase().includes(criteria[key].toLowerCase());
                }
                return item[key] === criteria[key];
            });
        });
    }
};