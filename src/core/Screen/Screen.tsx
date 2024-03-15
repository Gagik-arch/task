import React, { ReactElement } from 'react';
import {
  KeyboardAvoidingView, Platform,
  ScrollView,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style.ts';
import { ScreenProps } from './types.ts';

const Screen = ({
                  children,
                  style = {},
                  contentContainerStyle = {},
                  edges = ['top', 'left', 'right'],
                  header = <></>,
                  footer = <></>,
                  scrollDisable = false,
                  backgroundColor = 'white',
                }: ScreenProps): ReactElement => {
  return (
    <KeyboardAvoidingView
      style={styles.root}
      enabled={false}
    >
      {header}
      <SafeAreaView
        edges={edges}
        style={{
          flex: 1,
          backgroundColor,
          ...style,
        }}>
        <View style={[styles.container]}>
          {scrollDisable ? (
            <View
              style={{ flex: 1 }}>
              {children}
            </View>
          ) : (
            <ScrollView
              contentContainerStyle={[contentContainerStyle, { flexGrow: 1 }]}>
              {children}
            </ScrollView>
          )}
        </View>
        {footer}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};


export default Screen;
