---
name: expo-searchbar
description: Instructions and guidelines for using @codexporer.io/expo-searchbar (Expo Searchbar) in React Native and Expo applications.
---

# `@codexporer.io/expo-searchbar` Skill

## Overview
`@codexporer.io/expo-searchbar` provides a specialized search text field with an integrated magnifying glass icon (`magnify`), conditional clear button (`close-circle`), and adaptive theme tokens from `@codexporer.io/expo-app-theme`. It wraps `@codexporer.io/expo-text-input` and forwards standard `TextInputProps`.

---

## Peer Dependencies
```json
{
  "react": "*",
  "react-native": "*",
  "@expo/vector-icons": "*",
  "@codexporer.io/expo-app-theme": "*",
  "@codexporer.io/expo-text-input": "*"
}
```

---

## When to Use
- Filter bars in list views, pickers (`@codexporer.io/expo-picker`), and galleries.
- Search interfaces within headers or navigation toolbars (`@codexporer.io/expo-appbar`).

---

## Usage Examples

### 1. Basic Search Filter

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
        onClear={() => console.log('Cleared')}
      />
    </View>
  );
}
```

### 2. Forwarding Standard `TextInputProps`

```tsx
<Searchbar
  value={searchQuery}
  onChangeText={setSearchQuery}
  placeholder="Search tags..."
  autoFocus
  autoCapitalize="none"
  autoCorrect={false}
  returnKeyType="search"
  onSubmitEditing={() => performSearch(searchQuery)}
/>
```

---

## API Reference

### `<Searchbar />` Props

`SearchbarProps` extends `Omit<TextInputProps, 'style'>` from `@codexporer.io/expo-text-input`.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `''` | Controlled text value |
| `onChangeText` | `(text: string) => void` | — | Callback fired when text changes |
| `placeholder` | `string` | `'Search'` | Placeholder text |
| `placeholderTextColor` | `string` | `theme.placeholder` | Placeholder text font color override |
| `iconColor` | `string` | `theme.placeholder` | Color for search (`magnify`) and clear (`close-circle`) icons |
| `onClear` | `() => void` | — | Additional callback fired when the clear button is pressed |
| `style` | `StyleProp<ViewStyle>` | — | Outer pill container style override |
| `inputStyle` | `StyleProp<TextStyle>` | — | Inner `TextInput` style override |

---

## Critical Rules & Guidelines
1. **Automatic Clear Action**: Tapping the clear icon automatically calls `onChangeText?.('')` in addition to `onClear?.()`, resetting the input state.
2. **Conditional Clear Icon**: The clear icon is displayed only when `!!value` is truthy.
3. **TextInput Props Forwarding**: Standard input props (e.g. `autoFocus`, `autoCapitalize`, `autoCorrect`, `maxLength`, `onSubmitEditing`) pass directly through to the underlying input.
4. **Theme Integration**: Container background (`theme.inputBackground || theme.surfaceSecondary`), border (`theme.border`), and icons (`theme.placeholder`) adapt automatically. Never hardcode color literals.

