import React from 'react';
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import useTheme from '@/hooks/useTheme';
import { Spacing } from '@/theme';

interface MasonryListProps {
  renderItem: (item: any) => React.ReactNode;
  numColumns?: number;
  data: Record<string, any>[];
  refreshing?: boolean;
  onRefresh?: () => void;
  ListEmptyComponent?: React.ReactNode;
}

const { width: WIDTH } = Dimensions.get('window');

const COLUMN_WIDTH = WIDTH / 2;

const MasonryList: React.FC<MasonryListProps> = ({
  renderItem,
  data,
  refreshing,
  onRefresh,
  ListEmptyComponent,
}) => {
  const { colors } = useTheme();

  const columnOneData = data.filter((_, i) => i % 2 === 0);
  const columnTwoData = data.filter((_, i) => i % 2 !== 0);

  const columnItemStyle = {
    width: COLUMN_WIDTH,
  };

  const content = (
    <>
      <View style={styles.column}>
        {columnOneData.map((item, index) => (
          <View key={`masonry-${index}`} style={columnItemStyle}>
            {renderItem(item)}
          </View>
        ))}
      </View>

      <View style={styles.column}>
        {columnTwoData.map((item, index) => (
          <View key={`masonry-${index}`} style={columnItemStyle}>
            {renderItem(item)}
          </View>
        ))}
      </View>
    </>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      refreshControl={
        <RefreshControl
          refreshing={refreshing || false}
          tintColor={colors.text}
          colors={[colors.black]}
          onRefresh={onRefresh}
        />
      }>
      {data.length > 0 ? content : ListEmptyComponent}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  column: {
    flex: 1,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    padding: Spacing.extraSmall,
  },
});

export default MasonryList;
