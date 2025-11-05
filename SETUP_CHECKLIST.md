# Setup Checklist

Follow these steps to get your Polaris Design Library up and running.

## ✅ Initial Setup

### 1. Install Dependencies
```bash
cd /Users/vivianwang/polaris-design-library
npm install
```

**What this does:**
- Installs React, TypeScript, Vite, Storybook
- Installs @shopify/polaris (web components)
- Sets up dev dependencies

**Expected result:**
- `node_modules/` folder created
- `package-lock.json` created
- No errors in terminal

---

### 2. Verify TypeScript Configuration
```bash
npm run type-check
```

**Expected result:**
- No TypeScript errors
- All types compile successfully

---

### 3. Start Storybook
```bash
npm run storybook
```

**Expected result:**
- Storybook starts on `http://localhost:6006`
- Browser opens automatically
- You see Introduction page
- Button component stories are visible

**What you should see:**
- Navigation menu with "Introduction", "Getting Started", and "Components/Button"
- 12+ Button stories with examples
- Interactive Playground for testing props

---

### 4. Test Button Component in Storybook

Navigate to **Components > Button** and verify:

- [ ] Basic Usage story renders
- [ ] Variants story shows all 4 variants
- [ ] Tones story shows critical, neutral, auto
- [ ] With Icon story shows button with plus icon
- [ ] Icon Only story shows icon-only button
- [ ] Loading State story shows spinner
- [ ] All interactive examples work

---

### 5. Build the Library
```bash
npm run build
```

**Expected result:**
- `dist/` folder created with:
  - `index.js` (ES module)
  - `index.cjs` (CommonJS)
  - `index.d.ts` (TypeScript types)
  - `*.map` (source maps)
- No build errors

---

## 🎨 Using in Your App

### 6. Create a Test React App (Optional)

```bash
# In a different directory
npm create vite@latest test-app -- --template react-ts
cd test-app
npm install
```

---

### 7. Link the Library

```bash
# In the library folder
cd /Users/vivianwang/polaris-design-library
npm link

# In your test app
cd ../test-app
npm link @your-org/polaris-design-library
npm install @shopify/polaris
```

---

### 8. Configure Your App

**Edit `test-app/src/main.tsx`:**

```tsx
import '@shopify/polaris/build/esm/components'; // Add this line
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

### 9. Use the Button Component

**Edit `test-app/src/App.tsx`:**

```tsx
import { Button } from '@your-org/polaris-design-library';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '40px' }}>
      <h1>Polaris Design Library Test</h1>

      <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
        <Button variant="primary" onClick={() => setCount(count + 1)}>
          Count: {count}
        </Button>

        <Button variant="secondary" icon="plus">
          Add Product
        </Button>

        <Button variant="primary" tone="critical">
          Delete
        </Button>

        <Button loading>Loading...</Button>
      </div>
    </div>
  );
}

export default App;
```

---

### 10. Run Your App

```bash
cd test-app
npm run dev
```

**Expected result:**
- App runs on `http://localhost:5173`
- Buttons render with Polaris styling
- Click handlers work
- Loading state animates

---

## 🧪 Testing Checklist

### Storybook Tests

- [ ] Introduction page loads
- [ ] Getting Started page loads
- [ ] All Button stories render without errors
- [ ] Playground story allows prop changes
- [ ] Documentation is readable
- [ ] Examples are interactive

### Component Tests

- [ ] Button renders with default props
- [ ] Button responds to clicks
- [ ] Button shows loading state
- [ ] Button variants render correctly
- [ ] Button tones render correctly
- [ ] Icon-only button works
- [ ] Link button navigates
- [ ] TypeScript autocomplete works

### Build Tests

- [ ] Library builds without errors
- [ ] Type definitions generate correctly
- [ ] ES module exports work
- [ ] CommonJS exports work
- [ ] Source maps are generated

---

## 🐛 Troubleshooting

### Storybook won't start

**Error:** `Cannot find module '@storybook/react-vite'`

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### TypeScript errors

**Error:** `Cannot find module '@/utils/createWebComponentWrapper'`

**Solution:**
- Verify `tsconfig.json` has path alias configured
- Run `npm run type-check` to see all errors

---

### Components not rendering

**Error:** Buttons appear but have no Polaris styling

**Solution:**
Ensure you imported Polaris web components in your app:
```tsx
import '@shopify/polaris/build/esm/components';
```

---

### Build errors

**Error:** `Could not resolve '@/utils/...'`

**Solution:**
- Check `vite.config.ts` has resolve alias
- Verify file paths are correct

---

## 📚 Next Steps

After completing setup:

1. ✅ Read [README.md](./README.md) for full documentation
2. ✅ Read [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md) to add components
3. ✅ Try [EXAMPLE_NEW_COMPONENT.md](./EXAMPLE_NEW_COMPONENT.md) to add Stack
4. ✅ Explore [Polaris Web Components](https://shopify.dev/docs/api/app-home/polaris-web-components)
5. ✅ Build your design library!

---

## 🎯 Success Criteria

You've successfully set up the library when:

- ✅ `npm install` completes without errors
- ✅ `npm run storybook` starts and shows Button examples
- ✅ `npm run build` creates dist/ folder
- ✅ `npm run type-check` passes with no errors
- ✅ Button component renders in your test app
- ✅ TypeScript autocomplete works for Button props
- ✅ All Button variants and tones display correctly

---

## 📞 Getting Help

If you encounter issues:

1. Check [QUICK_START.md](./QUICK_START.md) troubleshooting section
2. Review [Polaris Web Components docs](https://shopify.dev/docs/api/app-home/polaris-web-components)
3. Check [Storybook documentation](https://storybook.js.org/docs)
4. Open an issue on GitHub

---

## ✨ Optional Enhancements

Once basic setup is complete:

### Add More Components
Follow [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md) to add:
- TextField
- Select
- Checkbox
- Card
- Badge
- Spinner

### Deploy Storybook
```bash
npm run build-storybook
# Deploy storybook-static/ to Netlify, Vercel, GitHub Pages
```

### Publish to npm
```bash
# Update package.json name and version
npm login
npm publish
```

### Add Tests
```bash
npm install --save-dev vitest @testing-library/react
# Add test files
```

---

**Ready to start?** Run `npm install` now!
