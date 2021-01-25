export default function transformData(data){
    data = data.map(order => {
        return {
            ...order,
            products: order.products.map(p => {
                return{
                    ...p,
                    uniqueId: p.category.concat(p.product_id),
                    revenue: p.order_count * (p.vendor_price.value / 10 ** p.vendor_price.scale)
                }
            })
        }
    })
    return data;
}