const CustomerPoint =({response})=>{

    return(
        <>
        {
            response.map((custpoint)=>{
                const {customerId, month, point} = custpoint;
                return(
                    <tr key={customerId}>
                        
                        <td>{customerId}</td>
                        <td>{month}</td>
                        <td>{point}</td>
                    </tr>
                )
            })
        }
        
        
        </>
    )

}


export default CustomerPoint;