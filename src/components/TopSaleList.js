import React, { useState, useEffect}  from 'react'
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {getOrders} from '../redux/action/action'

const TopSaleList = () => {
    const [topSaleList, setTopSaleList] = useState([])

    const dispatch = useDispatch()
    const orders = useSelector((state) => state.orders);
    const loading = useSelector((state) => state.loading);

    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch]);
    
    useEffect(()=>{
        if(typeof(orders) === 'undefined'){
            return;
        }
        const countObj = {};
        orders.forEach((order) => {
            order.products.forEach((p) =>{
                const key = p.uniqueId;
                if(!countObj.hasOwnProperty(key)){
                    countObj[key] = {name: p.name, revenue: p.revenue}
                }
                else{
                    const totalRevenue = countObj[key].revenue + p.revenue
                    countObj[key]= {
                        ...countObj[key],
                        revenue: totalRevenue,
                        }
                    }
                })
        });
        console.log('count', countObj)
        const arrayValues = Object.values(countObj)
        console.log('array', arrayValues)
        setTopSaleList(arrayValues.sort((a,b) => b.revenue - a.revenue).slice(0,10))

    },[orders])

    return (
        <Container className="border border-primary" >
            <div className="text-left title">Top Sales Items</div>
            {loading ? <Spinner animation="border" />
                : topSaleList.map((t,index)=>(
                    <Row key={index}>
                        <Col md={2} className="d-flex justify-content-center">
                            <div className="rounded-circle text-center">
                                {index+1}
                            </div>
                        </Col>
                        <Col md={10} className="capitalize text-left">
                            <div className="box">  
                                <div>{t.name.toLowerCase()}</div> 
                                <div className="revenue">${t.revenue}</div>               
                            </div>
                        </Col>
                    </Row>
            ))}
        </Container>
    )
}

export default TopSaleList
