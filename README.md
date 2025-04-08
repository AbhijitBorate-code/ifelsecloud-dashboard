

# 📊 IfElseCloud Dashboard Setup Guide

This guide walks you through setting up the required libraries for charts and icons in your Angular-based dashboard.

---

## 🔧 Installation Steps

### 1. Install Chart Libraries: `c3` and `d3`

These libraries are used for rendering the interactive charts in the dashboard.

```bash
npm install c3
npm install d3
```

> ✅ `c3` depends on `d3`, so both must be installed.

---

### 2. Install Font Awesome for Icons

Font Awesome provides a wide range of scalable icons used in the dashboard UI.

```bash
npm install @fortawesome/fontawesome-free
```

---

### 3. Add Global Styles in `angular.json`

To enable Font Awesome styles globally, update the `styles` array in your `angular.json` file:

```json
"styles": [
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
  "src/styles.scss"
]
```

> ⚠️ Make sure the above entry is placed **before** your own `styles.scss` file to avoid any override issues.

---

## ✅ Done!

You can now use:
- `c3` charts in your Angular components.
- Font Awesome icons like `<i class="fas fa-chart-line"></i>` directly in your templates.

---

## 📦 Example Usage

### Component Chart Example (`dashboard.component.ts`):

```ts
import * as c3 from 'c3';

ngAfterViewInit() {
  c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['Data', 30, 200, 100, 400, 150, 250]
      ],
      type: 'line'
    }
  });
}
```

### Font Awesome Example (`dashboard.component.html`):

```html
<i class="fas fa-chart-pie"></i> Chart Overview
```

---

Let me know if you'd like this tailored more for a specific section of your code or styled for internal Confluence, Notion, or other docs!