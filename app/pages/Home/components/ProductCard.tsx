import React from 'react';
import { Image, View, Text, StyleSheet, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import SVGHeart from 'app/assets/icons/heart.svg';
import SVGPlus from 'app/assets/icons/plus.svg';
import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import Position from 'app/styles/position';

import { RootStackParamList } from 'app/navigators/StackNavigator';

type ProductCardProps = {
    name: string;
    price: number;
    image: string;
};

type ProductNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;

export default function ProductCard({ name, price, image }: ProductCardProps) {
    const navigation = useNavigation<ProductNavigationProp>();

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('Product')}>
            <View style={styles.heart}>
                <SVGHeart />
            </View>
            <Image style={styles.image} source={{ uri: image }} />
            <View>
                <View>
                    <Text style={styles.price}>${price}</Text>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.plus}>
                    <SVGPlus />
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.neutral.n7,
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
        width: '48%',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        objectFit: 'contain',
    },
    price: {
        ...Typography.body.body2_semibold_14,
        color: Colors.neutral.n1,
    },
    name: {
        ...Typography.label.label_regular_12,
        color: '#616A7D',
    },
    plus: {
        backgroundColor: Colors.primary.b1,
        borderRadius: 50,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
    },
    heart: {
        position: 'absolute',
        left: 5,
        top: 5,
        zIndex: Position.zIndex.overlayLevel1,
        padding: 10,
    },
});
