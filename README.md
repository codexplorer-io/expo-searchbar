# `@codexporer.io/expo-searchbar`

A modern, theme-integrated search bar component for Expo and React Native applications. Includes search icon (`magnify`), a clear text button (`close-circle`) when input is populated, and dynamic colors via `@codexporer.io/expo-app-theme`.

## Installation & Peer Dependencies

```bash
yarn add @codexporer.io/expo-searchbar
```

Ensure peer dependencies are installed:
```bash
yarn add react react-native @expo/vector-icons @codexporer.io/expo-app-theme @codexporer.io/expo-text-input
```

## Quick Start

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from '@codexporer.io/expo-searchbar';

export function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Searchbar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search audio tracks..."
        onClear={() => console.log('Search cleared')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
```

## Props Reference

`SearchbarProps` extends `Omit<TextInputProps, 'style'>` from `@codexporer.io/expo-text-input`, allowing standard input props (such as `autoFocus`, `autoCapitalize`, `autoCorrect`, `returnKeyType`, `onSubmitEditing`) to be forwarded directly.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `''` | Current input query value |
| `onChangeText` | `(text: string) => void` | — | Text change handler |
| `placeholder` | `string` | `'Search'` | Placeholder text |
| `placeholderTextColor` | `string` | `theme.placeholder` | Placeholder font color override |
| `iconColor` | `string` | `theme.placeholder` | Color for search (`magnify`) and clear (`close-circle`) icons |
| `onClear` | `() => void` | — | Additional callback fired when the clear button is pressed (automatically calls `onChangeText('')`) |
| `style` | `StyleProp<ViewStyle>` | — | Outer container style override |
| `inputStyle` | `StyleProp<TextStyle>` | — | Inner `TextInput` style override |

## License

MIT