### Approach 1:

```javascript
function reverse(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}
```

#### Analysis:

| Time Complexity | O(n) |
| Space Complexity | 0(n) |
| Pros | - |
| Cons | - |
