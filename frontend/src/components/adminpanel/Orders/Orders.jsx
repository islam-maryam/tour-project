

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../config/config';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchInfo() {
            try {
                const bookingUrl = `http://${baseUrl}/api/bookings`;
                const { data: { bookings } } = await axios.get(bookingUrl);
                setOrders(bookings);
                console.log(JSON.stringify(bookings, null, 2));
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        }
        fetchInfo();
    }, []);

    return (
        <div>
            <table className="w-full table-auto shadow rounded-md overflow-hidden divide-y divide-gray-200">
                <thead>
                    <tr className="bg-gray-500 text-white text-left">
                        <th className="p-3">Order ID</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">User Email</th>
                        <th className="p-3">Location</th>
                        <th className="p-3">Total Seat Booking</th>
                        <th className="p-3">Booking Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <tr key={order._id} className="hover:bg-gray-200/50">
                                <td className="p-3">{order._id || 'N/A'}</td>
                                <td className="p-3">{order.price || 'N/A'}</td>
                                <td className="p-3">{order.userId?.email || 'N/A'}</td>
                                <td className="p-3">{order.tourId?.location || 'N/A'}</td>
                                <td className="p-3">{order.noOfSeatBooking || 'N/A'}</td>
                                <td className="p-3">
                                    {order.bookingDate ? new Date(order.bookingDate).toLocaleString() : 'N/A'}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center p-3">No orders available</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6" className="font-bold p-3 text-center">
                            {orders.length > 0 ? `${orders.length} orders found` : 'No orders available'}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Orders;
