
---

# 📊 IfElseCloud Dashboard Setup Guide

A quick and complete guide to set up chart libraries and icon support for your Angular dashboard.

---

## 🔧 Installation Steps

### 1. Install Chart Libraries: `c3` and `d3`

These libraries are essential for rendering interactive charts.

```bash
npm install c3
npm install d3
```

> ✅ Note: `c3` requires `d3`, so both must be installed.

---

### 2. Install Font Awesome for Icons

Font Awesome provides scalable vector icons used throughout the UI.

```bash
npm install @fortawesome/fontawesome-free
```

---

### 3. Configure Global Styles in `angular.json`

Add Font Awesome styles to the `styles` array in `angular.json`:

```json
"styles": [
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
  "src/styles.scss"
]
```

> ⚠️ Place the Font Awesome entry **before** your `styles.scss` to prevent style override issues.

---

## ✅ Setup Complete

You can now use:
- `c3` charts in Angular components.
- Font Awesome icons directly in templates, e.g.:

```html
<i class="fas fa-chart-line"></i>
```

---

## 📦 Example Usage

### Chart Example (`dashboard.component.ts`)

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

---

### Icon Example (`dashboard.component.html`)

```html
<i class="fas fa-chart-pie"></i> Chart Overview
```

---

## 📸 Output Photos URL

```
dashboard/public/libs-outputs
```

---

## 🧪 Node & Serve

- Use **Node.js v19**
- Start the project with:

```bash
ng serve
```

---

