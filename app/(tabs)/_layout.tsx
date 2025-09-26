import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/src/config/constants/theme';
import { HapticTab } from '@/src/presentation/components/haptic-tab';
import { IconSymbol } from '@/src/presentation/components/ui/icon-symbol';
import { useColorScheme } from '@/src/presentation/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Personajes',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.3.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Episodios',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="list.bullet.rectangle.fill" color={color} />,

        }}
      />
    </Tabs>
  );
}
