import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppTheme } from '@codexporer.io/expo-app-theme';
import {
    TextInput,
    TextInputProps,
    TextInputVariant
} from '@codexporer.io/expo-text-input';

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

export const Searchbar: React.FC<SearchbarProps> = ({
    value = '',
    onChangeText,
    placeholder = 'Search',
    placeholderTextColor,
    iconColor,
    onClear,
    style,
    inputStyle,
    ...restProps
}) => {
    const theme = useAppTheme();

    const handleClear = () => {
        onChangeText?.('');
        onClear?.();
    };

    const resolvedPlaceholderColor = placeholderTextColor || theme.placeholder;
    const resolvedIconColor = iconColor || theme.placeholder;

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: theme.inputBackground || theme.surfaceSecondary,
                    borderColor: theme.border,
                },
                style
            ]}
        >
            <MaterialCommunityIcons
                name="magnify"
                size={22}
                color={resolvedIconColor}
                style={styles.searchIcon}
            />
            <TextInput
                variant={TextInputVariant.Flat}
                containerStyle={styles.inputWrapper}
                style={[
                    styles.input,
                    inputStyle
                ]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={resolvedPlaceholderColor}
                clearButtonMode="never"
                returnKeyType="search"
                {...restProps}
            />
            {!!value && (
                <TouchableOpacity
                    onPress={handleClear}
                    style={styles.clearButton}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                    <MaterialCommunityIcons
                        name="close-circle"
                        size={18}
                        color={resolvedIconColor}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 46,
        borderRadius: 12,
        paddingHorizontal: 12,
        marginHorizontal: 16,
        marginVertical: 8,
        borderWidth: StyleSheet.hairlineWidth,
    },
    searchIcon: {
        marginRight: 8,
    },
    inputWrapper: {
        flex: 1,
        width: 'auto',
    },
    input: {
        flex: 1,
        fontSize: 15,
        paddingVertical: 0,
        height: '100%',
    },
    clearButton: {
        padding: 4,
        marginLeft: 4,
    }
});

export default Searchbar;
