---
name: expo-searchbar
description: Instructions and guidelines for using @codexporer.io/expo-searchbar (Expo Searchbar) in React Native and Expo applications.
---

# `@codexporer.io/expo-searchbar` Skill

## Overview
`@codexporer.io/expo-searchbar` provides a specialized search text field with an integrated magnifying glass icon, automatic clear button, and adaptive theme tokens from `@codexporer.io/expo-app-theme`.

---

## When to Use
- Filter bars in list views, pickers, and galleries.
- Search interfaces within headers or navigation toolbars.

---

## Usage Example

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from '@codexporer.io/expo-searchbar';

export function SearchFilter() {
  const [query, setQuery] = useState('');

  return (
    <View style={{ padding: 16 }}>
      <Searchbar
        placeholder="Search projects..."
        value={query}
        onChangeText={setQuery}
        onClear={() => setQuery('')}
      />
    </View>
  );
}
```

---

## API Reference

### `<Searchbar />` Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | — | Controlled text value |
| `onChangeText` | `(text: string) => void` | — | Callback fired when text changes |
| `placeholder` | `string` | `'Search'` | Placeholder text |
| `onClear` | `() => void` | — | Callback fired when user taps the clear button |
| `showClearButton` | `boolean` | `true` | Shows clear icon when text is non-empty |
| `style` | `StyleProp<ViewStyle>` | — | Outer pill container style override |
| `inputStyle` | `StyleProp<TextStyle>` | — | Inner TextInput style override |
| `searchIconColor` | `string` | `theme.placeholder` | Search icon tint color override |
| `clearIconColor` | `string` | `theme.placeholder` | Clear button icon tint override |

---

## Critical Rules & Guidelines
1. **Always Supply `onClear`**: Users expect the clear icon to wipe the search input and notify parent state.
2. **Automatic Theme Adaptation**: Text and background automatically match dark/light modes without extra props.
