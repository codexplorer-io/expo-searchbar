# AGENTS.md — `@codexporer.io/expo-searchbar`

## Package Overview
Search bar input component with leading search icon, clear button ("✕"), and automatic theme styling.

## Key Exports
- `Searchbar`: Input component.
- `SearchbarProps`: Props interface.

## Critical Guidelines for AI Agents
- Bind `value: string`, `onChangeText: (text: string) => void`, and `onClear: () => void`.
- The clear icon automatically appears when `value` is non-empty.
- Background defaults to `theme.inputBackground`, text to `theme.inputText`, icons to `theme.placeholder`. Do not pass hardcoded hex colors.
