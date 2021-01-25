import transformData from './transformData'
test('add revenue and unique id', () => {
    const data = [
        {products: [
            {
                name: 'WATER CHESTNUT  SLICED CANNED', 
                category: 'DAIRY', 
                product_id: 7,
                order_count: 2,
                vendor_price: {
                    value: 111, 
                    scale: 2
            }},
            { name: 'CUP  FOIL 4 OZ 1',
                category: 'DRY GOODS', 
                product_id: 7,
                order_count: 2,
                vendor_price: {
                    value: 102, 
                    scale: 0}
            }
        ]
        }
    ]
    
    expect(transformData(data)).toEqual([
        {products: [
            {
                name: 'WATER CHESTNUT  SLICED CANNED', 
                category: 'DAIRY', 
                product_id: 7,
                uniqueId: 'DAIRY7',
                revenue: 2 * 111/10**2,
                order_count: 2,
                vendor_price: {
                    value: 111, 
                    scale: 2
            }},
                {name: 'CUP  FOIL 4 OZ 1',
                category: 'DRY GOODS', 
                product_id: 7,
                uniqueId: 'DRY GOODS7',
                revenue: 2 * 102,
                order_count: 2,
                vendor_price: {
                    value: 102, 
                    scale: 0}
            }
        ]
        }
    ]);
});