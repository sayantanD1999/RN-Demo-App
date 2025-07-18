import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function Users() {
  const { id, limit } = useLocalSearchParams();

  return (
    <View>
      <Text>User ID: {id}</Text>
      <Text>Limit:    {limit}</Text>
    </View>
  );
}