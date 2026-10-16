# AGENTS.md — `@codexporer.io/expo-searchbar`

## Package Overview
Theme-integrated search bar component for React Native and Expo. Wraps `@codexporer.io/expo-text-input` with a leading `magnify` icon, a conditional trailing `close-circle` clear button, and semantic theming from `useAppTheme()`.

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

## TypeScript Contracts (`src/index.tsx`)

```typescript
export interface SearchbarProps extends Omit<TextInputProps, 'style'> {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  iconColor?: string;
  onClear?: () => void;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}
```

## Key Exports
- `Searchbar`: Input component.
- `SearchbarProps`: Props interface extending `Omit<TextInputProps, 'style'>`.

## Component Behavior & Defaults
- **Leading Icon**: `MaterialCommunityIcons` `magnify`, size `22`, colored with `iconColor || theme.placeholder`.
- **Clear Button**: Appears when `!!value` is truthy. Rendered as a `TouchableOpacity` (`hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}`) with `MaterialCommunityIcons` `close-circle` (size `18`).
- **Clear Action**: Pressing the clear button executes `onChangeText?.('')` followed by `onClear?.()`.
- **Underlying Input**: Uses `<TextInput variant={TextInputVariant.Flat} clearButtonMode="never" returnKeyType="search" {...restProps} />`.
- **Default Theming**:
  - Container background: `theme.inputBackground || theme.surfaceSecondary`
  - Border: `theme.border` (`borderWidth: StyleSheet.hairlineWidth`, `borderRadius: 12`, `height: 46`)
  - Icons and placeholder: `theme.placeholder`

## Critical Guidelines for AI Agents
- **Pass Standard Input Props**: Since `SearchbarProps` extends `TextInputProps`, you can pass props like `autoFocus`, `autoCapitalize="none"`, `autoCorrect={false}`, `maxLength`, and `onSubmitEditing`.
- **Controlled Value Binding**: Bind `value: string` and `onChangeText: (text: string) => void`. The clear button automatically resets the text via `onChangeText('')`.
- **Do Not Hardcode Colors**: Background, border, placeholder, and icons derive automatically from `useAppTheme()`.

