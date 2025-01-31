Several solutions exist to address this problem.  The most straightforward involves using PurgeCSS's `safelist` option to explicitly tell PurgeCSS to keep specific classes:

```javascript
// purgecss.config.js
module.exports = {
  content: ['./src/**/*.js'],
  safelist: ['bg-red-500', 'p-4'] // Add classes to safelist
};
```

This ensures that `bg-red-500` and `p-4` are never purged, regardless of whether they appear in the initial HTML.  Alternatively, you could add these classes to a global CSS file that isn't processed by PurgeCSS.